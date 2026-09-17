#!/usr/bin/env node
// Adds one new Per Diem issue to src/content/per-diem.json from a LinkedIn
// article/post URL. Tries to read public OpenGraph metadata first; falls
// back to a few manual prompts when LinkedIn's login wall (which is the
// common case) blocks that. No headless browser, no scraping library,
// no LinkedIn API — see the "Per Diem publishing workflow" section of
// the README for the intended day-to-day usage.
import { readFile, writeFile } from "node:fs/promises";
import readline from "node:readline";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const CONTENT_PATH = path.join(__dirname, "..", "src", "content", "per-diem.json");

function slugify(str) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
    .slice(0, 60);
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

async function main() {
  const url = process.argv[2];
  if (!url) {
    console.error("Usage: npm run perdiem:add <linkedin-article-url>");
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
  const { title, excerpt, coverImage, tagsRaw, min } = await askAll(rl, [
    ["title", "Title:", meta?.title ?? ""],
    ["excerpt", "Excerpt (one or two sentences):", meta?.description ?? ""],
    ["coverImage", "Cover image URL (optional):", meta?.image ?? ""],
    ["tagsRaw", "Tags (comma-separated, optional):", ""],
    ["min", "Read time (optional, e.g. \"5 min\"):", ""],
  ]);
  rl.close();

  if (!title) {
    console.error("A title is required. Nothing was added.");
    process.exit(1);
  }

  const entry = {
    id: slugify(title),
    title,
    publishedAt: new Date().toISOString().slice(0, 10),
    url,
    excerpt,
    tags: tagsRaw ? tagsRaw.split(",").map((t) => t.trim()).filter(Boolean) : [],
  };
  if (coverImage) entry.coverImage = coverImage;
  if (min) entry.min = min;

  const raw = await readFile(CONTENT_PATH, "utf-8");
  const issues = JSON.parse(raw);
  issues.unshift(entry);
  await writeFile(CONTENT_PATH, JSON.stringify(issues, null, 2) + "\n");

  console.log(`\nAdded "${title}" to src/content/per-diem.json.`);
  console.log("Commit the change and deploy — the homepage and /per-diem archive pick it up automatically.");
}

main();
