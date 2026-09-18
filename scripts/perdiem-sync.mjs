#!/usr/bin/env node
// Idempotent sync: discovers new Per Diem issues from LinkedIn's public
// newsletter page and appends them to src/content/per-diem.json without
// any manual step. Intended to run on a schedule (see
// .github/workflows/perdiem-sync.yml) with `npm run perdiem:add` kept as
// the manual fallback for anything this can't do unattended.
//
// What this can and can't do, stated plainly:
// - LinkedIn's newsletter landing page (linkedin.com/newsletters/<slug>)
//   and individual /pulse/ article pages both return public,
//   unauthenticated HTML containing usable metadata (og:title,
//   og:description, JSON-LD datePublished) — verified directly before
//   writing this script, not assumed.
// - There is no public "list every issue" endpoint — the newsletter page
//   only surfaces a handful of recent articles. This script can only
//   discover issues that are still in that recent set, which is fine for
//   ongoing freshness but is not a full-archive backfill tool.
// - LinkedIn may rate-limit or block requests from cloud/datacenter IPs
//   (which is what a GitHub Actions runner is) more aggressively than a
//   residential IP. Every failure mode below is handled by doing nothing
//   and exiting 0 — a blocked run is a no-op, never a broken build or a
//   broken site. This is deliberately "best-effort, near-real-time," not
//   a guarantee of a live feed.
// - New entries get objective facts only (title, date, url, excerpt,
//   cover image). The editorial `connectionA`/`connectionB`/`thesis`
//   fields that drive the homepage's "connected thinking" framing are
//   left unset — that's a judgment call this script has no basis to
//   make up, and per-diem.js already falls back gracefully when they're
//   absent. Add them by hand afterward, or via `npm run perdiem:add`.
import { readFile, writeFile, appendFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const CONTENT_PATH = path.join(__dirname, "..", "src", "content", "per-diem.json");
const NEWSLETTER_URL = "https://www.linkedin.com/newsletters/per-diem-7502097177293492225/";
const UA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36";

function slugify(str) {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "").slice(0, 60);
}

function normalizeUrl(url) {
  return url.trim().replace(/\/+$/, "").replace(/[?#].*$/, "").toLowerCase();
}

// LinkedIn's server-rendered meta content is HTML-escaped (og:image URLs in
// particular come through as "...&amp;v=beta..." rather than "...&v=beta...").
// Decoding here matters more than it looks — an un-decoded "&amp;" ends up as
// a literal, wrong substring once React sets it as a DOM attribute directly
// (no HTML parser in between to decode it for us), silently breaking the image.
function decodeEntities(str) {
  return str
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

function extractMeta(html, prop) {
  const re = new RegExp(`<meta[^>]+property=["']${prop}["'][^>]+content=["']([^"']*)["']`, "i");
  const match = html.match(re) || html.match(new RegExp(`<meta[^>]+content=["']([^"']*)["'][^>]+property=["']${prop}["']`, "i"));
  return match ? decodeEntities(match[1]) : null;
}

function extractDatePublished(html) {
  const match = html.match(/"datePublished":"([^"]+)"/);
  if (!match) return null;
  return match[1].slice(0, 10); // ISO datetime -> YYYY-MM-DD
}

async function safeFetch(url) {
  try {
    const res = await fetch(url, { headers: { "User-Agent": UA } });
    if (!res.ok) {
      console.warn(`[perdiem-sync] ${url} returned HTTP ${res.status} — skipping this run.`);
      return null;
    }
    return await res.text();
  } catch (err) {
    console.warn(`[perdiem-sync] fetch failed for ${url}: ${err.message} — skipping this run.`);
    return null;
  }
}

async function main() {
  const listingHtml = await safeFetch(NEWSLETTER_URL);
  if (!listingHtml) {
    console.log("[perdiem-sync] No-op: could not read the newsletter listing page this run.");
    return;
  }

  const slugs = [...new Set(
    [...listingHtml.matchAll(/linkedin\.com\/pulse\/([a-zA-Z0-9-]+)/g)].map((m) => m[1])
  )];
  if (slugs.length === 0) {
    console.log("[perdiem-sync] No-op: no article links found on the listing page (unexpected page shape — may indicate a block).");
    return;
  }

  const raw = await readFile(CONTENT_PATH, "utf-8");
  const issues = JSON.parse(raw);
  const existingUrls = new Set(issues.map((i) => normalizeUrl(i.url)));

  const candidateUrls = slugs
    .map((slug) => `https://www.linkedin.com/pulse/${slug}`)
    .filter((url) => !existingUrls.has(normalizeUrl(url)));

  if (candidateUrls.length === 0) {
    console.log("[perdiem-sync] No-op: nothing new — all discovered issues are already in per-diem.json.");
    return;
  }

  const added = [];
  for (const url of candidateUrls) {
    const html = await safeFetch(url);
    if (!html) continue; // graceful skip, try again next scheduled run

    const title = extractMeta(html, "og:title");
    const excerpt = extractMeta(html, "og:description");
    const coverImage = extractMeta(html, "og:image");
    const publishedAt = extractDatePublished(html);

    if (!title || !publishedAt) {
      console.warn(`[perdiem-sync] ${url} didn't yield usable title/date metadata — skipping (possible login wall).`);
      continue;
    }

    const id = slugify(title);
    if (issues.some((i) => i.id === id) || added.some((i) => i.id === id)) {
      console.warn(`[perdiem-sync] Slug collision for id "${id}" — skipping to avoid overwriting an existing issue.`);
      continue;
    }

    const entry = { id, title, publishedAt, url, excerpt: excerpt || "", tags: [] };
    if (coverImage) entry.coverImage = coverImage;
    added.push(entry);
    console.log(`[perdiem-sync] Discovered new issue: "${title}" (${publishedAt}).`);
  }

  if (added.length === 0) {
    console.log("[perdiem-sync] No-op: candidates existed but none yielded usable metadata this run.");
    return;
  }

  const updated = [...added, ...issues];
  await writeFile(CONTENT_PATH, JSON.stringify(updated, null, 2) + "\n");
  console.log(`[perdiem-sync] Wrote ${added.length} new issue(s) to per-diem.json.`);

  if (process.env.GITHUB_OUTPUT) {
    await appendFile(process.env.GITHUB_OUTPUT, "changed=true\n");
  }
}

main();
