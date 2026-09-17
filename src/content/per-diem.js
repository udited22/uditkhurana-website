// ─── PER DIEM CONTENT MODEL ───────────────────────────────────────
// Single source of truth for every Per Diem issue shown on the homepage
// module and the /per-diem archive — neither hardcodes its own cards.
// Add a new issue with `npm run perdiem:add <linkedin-article-url>`
// (see scripts/perdiem-add.mjs and the README) rather than editing
// per-diem.json by hand where avoidable.
//
// The 8 seed issues are the real Per Diem newsletter run, verified against
// LinkedIn's own server-rendered og:title/og:description/datePublished for
// each article (https://www.linkedin.com/newsletters/per-diem-7502097177293492225/
// lists 8 live editions as of this pass) — not the old WRITINGS array of
// generic personal LinkedIn posts, which has been fully removed. Earlier
// editions referenced anecdotally elsewhere aren't linked from that page and
// weren't independently verifiable, so they're omitted rather than guessed.
import RAW_ISSUES from "./per-diem.json";

export const PER_DIEM_ISSUES = [...RAW_ISSUES].sort(
  (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)
);

export const PER_DIEM_LATEST = PER_DIEM_ISSUES[0];
export const PER_DIEM_RECENT = PER_DIEM_ISSUES.slice(1, 4);
