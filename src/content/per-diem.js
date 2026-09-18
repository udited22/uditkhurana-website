// ─── PER DIEM CONTENT MODEL ───────────────────────────────────────
// Single source of truth for every Per Diem issue shown on the homepage
// module and the /per-diem archive — neither hardcodes its own cards.
// Add a new issue with `npm run perdiem:add <linkedin-article-url>`
// (see scripts/perdiem-add.mjs and the README) rather than editing
// per-diem.json by hand where avoidable.
//
// The seed issues are the real Per Diem newsletter run, verified against
// LinkedIn's own server-rendered og:title/og:description/datePublished for
// each article — not the old WRITINGS array of generic personal LinkedIn
// posts, which has been fully removed.
//
// V3: each issue can optionally carry `connectionA` / `connectionB` /
// `thesis` — the two-domain pairing and punchy hook that drives the
// homepage's thesis-first Per Diem module and the /per-diem "Connections"
// view. Issues without these fall back to the plain title/excerpt
// treatment (see PerDiem.jsx / Home.jsx) rather than breaking.
import RAW_ISSUES from "./per-diem.json";

export const PER_DIEM_ISSUES = [...RAW_ISSUES].sort(
  (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)
);

export const PER_DIEM_LATEST = PER_DIEM_ISSUES[0];
export const PER_DIEM_RECENT = PER_DIEM_ISSUES.slice(1, 4);
export const PER_DIEM_CONNECTIONS = PER_DIEM_ISSUES.filter((i) => i.connectionA && i.connectionB);
