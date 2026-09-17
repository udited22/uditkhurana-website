// ─── PER DIEM CONTENT MODEL ───────────────────────────────────────
// Single source of truth for every Per Diem issue shown on the homepage
// module and the /per-diem archive — neither hardcodes its own cards.
// Add a new issue with `npm run perdiem:add <linkedin-article-url>`
// (see scripts/perdiem-add.mjs and the README) rather than editing
// per-diem.json by hand where avoidable.
//
// KNOWN LIMITATION: the five issues migrated from the pre-V2 `WRITINGS`
// array did not carry a publish date in the old content model. LinkedIn's
// post pages sit behind a login wall and don't expose reliable public
// `publishedAt` metadata (confirmed while building this), so the dates
// below are placeholders spaced across the original array's "recent and
// highlighted first" ordering — not verified original publish dates.
// New issues added via the script will have real, accurate dates from
// day one; these five are worth a one-time correction whenever the real
// dates are handy.
import RAW_ISSUES from "./per-diem.json";

export const PER_DIEM_ISSUES = [...RAW_ISSUES].sort(
  (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)
);

export const PER_DIEM_LATEST = PER_DIEM_ISSUES[0];
export const PER_DIEM_RECENT = PER_DIEM_ISSUES.slice(1, 4);
