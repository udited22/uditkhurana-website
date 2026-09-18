#!/usr/bin/env node
// Adds one new Per Diem issue to src/content/per-diem.json from a LinkedIn
// article/post URL. Tries to read public OpenGraph metadata first; falls
// back to a few manual prompts when LinkedIn's login wall (which is the
// common case) blocks that. No headless browser, no scraping library,
// no LinkedIn API — see the "Per Diem publishing workflow" section of
// the README for the intended day-to-day usage.
//
// Usage:
//   npm run perdiem:add <linkedin-article-url>
//   npm run perdiem:add <linkedin-article-url> -- --date 2026-09-10   (backfill an older issue)
import { readFile, writeFile } from "node:fs/promises";
import readline from "node:readline";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const CONTENT_PATH = path.join(__dirname, "..", "src", "content", "per-diem.json");
const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;

function slugify(str) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
    .slice(0, 60);
}

// The publishing cadence and audience are India-based, so "today" for a new
// issue defaults to the current *local Kolkata calendar date* rather than
// UTC or the machine's own timezone — near midnight UTC those disagree with
// IST by a full day. Explicit --date always wins over this default.
function todayInKolkata() {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Kolkata",
    year: "numeric", month: "2-digit", day: "2-digit",
  }).format(new Date()); // en-CA formats as YYYY-MM-DD
}

function normalizeUrl(url) {
  return url.trim().replace(/\/+$/, "").replace(/[?#].*$/, "").toLowerCase();
}

function extractMeta(html, prop) {
  const re = new RegExp(
    `<meta[^>]+property=["']${prop}["'][^>]+content=["']([^"']*)["']`,
    "i"
  );
  const match = html.match(re) || html.match(
    new RegExp(`<meta[^>]+content=["']([^"']*)["'][^>]+property=["']${prop}["']`, "i")
  );
  return match ? match[1] : null;
}

async function tryFetchMetadata(url) {
  try {
    const res = await fetch(url, {
      headers: { "User-Agent": "Mozilla/5.0 (compatible; PerDiemBot/1.0)" },
    });
    if (!res.ok) return null;
    const html = await res.text();
    const title = extractMeta(html, "og:title");
    const description = extractMeta(html, "og:description");
    const image = extractMeta(html, "og:image");
    if (!title && !description) return null; // login wall / no usable metadata
    return { title, description, image };
  } catch {
    return null; // fail gracefully — never crash the workflow over a fetch error
  }
}

// Asks `questions` (an array of [key, label, fallback]) one at a time and
// resolves with an object of answers. Deliberately chains plain rl.question
// callbacks rather than wrapping each in its own awaited Promise — chaining
// awaited question() calls is unreliable with piped/non-TTY stdin on current
// Node, while nested callbacks are not.
function askAll(rl, questions) {
  return new Promise((resolve) => {
    const answers = {};
    const next = (i) => {
      if (i >= questions.length) { resolve(answers); return; }
      const [key, label, fallback] = questions[i];
      rl.question(fallback ? `${label} [${fallback}] ` : `${label} `, (answer) => {
        answers[key] = answer.trim() || fallback;
        next(i + 1);
      });
    };
    next(0);
  });
}

function parseArgs(argv) {
  const args = { url: null, date: null };
  for (let i = 0; i < argv.length; i++) {
    if (argv[i] === "--date") { args.date = argv[++i]; }
    else if (!args.url) { args.url = argv[i]; }
  }
  return args;
}

async function main() {
  const { url, date: explicitDate } = parseArgs(process.argv.slice(2));
  if (!url) {
    console.error("Usage: npm run perdiem:add <linkedin-article-url> [-- --date YYYY-MM-DD]");
    process.exit(1);
  }
  if (explicitDate && !DATE_RE.test(explicitDate)) {
    console.error(`--date must be in YYYY-MM-DD form, got "${explicitDate}".`);
    process.exit(1);
  }

  const raw = await readFile(CONTENT_PATH, "utf-8");
  const issues = JSON.parse(raw);
  const normalizedNewUrl = normalizeUrl(url);
  const existingByUrl = issues.find((i) => normalizeUrl(i.url) === normalizedNewUrl);
  if (existingByUrl) {
    console.error(`Already have an issue for this URL: "${existingByUrl.title}" (${existingByUrl.publishedAt}). Not adding a duplicate.`);
    console.error("Edit src/content/per-diem.json by hand if you actually need to change that entry.");
    process.exit(1);
  }

  console.log(`Fetching public metadata for ${url} ...`);
  const meta = await tryFetchMetadata(url);
  if (meta) {
    console.log("Found public OpenGraph metadata — confirm or edit below.");
  } else {
    console.log("Couldn't read public metadata (LinkedIn's login wall usually blocks this) — enter it manually.");
  }

  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  const { title, excerpt, coverImage, tagsRaw, min, publishedAt, connectionA, connectionB, thesis } = await askAll(rl, [
    ["title", "Title:", meta?.title ?? ""],
    ["excerpt", "Excerpt (one or two sentences):", meta?.description ?? ""],
    ["coverImage", "Cover image URL (optional):", meta?.image ?? ""],
    ["tagsRaw", "Tags (comma-separated, optional):", ""],
    ["min", "Read time (optional, e.g. \"5 min\"):", ""],
    ["publishedAt", "Publish date (YYYY-MM-DD, Asia/Kolkata):", explicitDate ?? todayInKolkata()],
    ["connectionA", "Connection A (optional, e.g. \"Markets\"):", ""],
    ["connectionB", "Connection B (optional, e.g. \"Psychology\"):", ""],
    ["thesis", "One-line thesis for the homepage/Connections view (optional):", ""],
  ]);
  rl.close();

  if (!title) {
    console.error("A title is required. Nothing was added.");
    process.exit(1);
  }
  if (!DATE_RE.test(publishedAt)) {
    console.error(`Publish date must be in YYYY-MM-DD form, got "${publishedAt}". Nothing was added.`);
    process.exit(1);
  }

  const id = slugify(title);
  const existingById = issues.find((i) => i.id === id);
  if (existingById) {
    console.error(`An issue with id "${id}" already exists ("${existingById.title}"). Not adding a duplicate — use a different title or edit the file by hand.`);
    process.exit(1);
  }

  const entry = { id, title, publishedAt, url, excerpt, tags: tagsRaw ? tagsRaw.split(",").map((t) => t.trim()).filter(Boolean) : [] };
  if (coverImage) entry.coverImage = coverImage;
  if (min) entry.min = min;
  if (connectionA) entry.connectionA = connectionA;
  if (connectionB) entry.connectionB = connectionB;
  if (thesis) entry.thesis = thesis;

  issues.unshift(entry);
  await writeFile(CONTENT_PATH, JSON.stringify(issues, null, 2) + "\n");

  console.log(`\nAdded "${title}" (${publishedAt}) to src/content/per-diem.json.`);
  console.log("Commit the change and deploy — the homepage and /per-diem archive pick it up automatically.");
}

main();
