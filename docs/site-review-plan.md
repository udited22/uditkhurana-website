# uditkhurana.in — V4 Architecture Record

*Superseding the Jul 2026 `site-review-plan.md`. That document reviewed a
much earlier version of the site (a `WRITINGS` array, `IDENTITY_CARDS`,
a `CRED` strip, a client-side-only newsletter form, an ESP-integration
decision list) — none of that data model or those decisions exist in the
current codebase. Rather than annotate three redesigns' worth of stale
recommendations line by line, this file replaces it with a short record of
what the site actually is now. If you need the historical review for
reference, it's in git history at this path.*

## What the site is

A React SPA (Vite), client-side routed, one design-token system
(`src/constants.js`), deployed static to Vercel. No backend, no env vars.

## Primary navigation

`Work · Per Diem · Advisory · Udit Uncovered` — four items. There is no
"About" in primary nav; `/about` 301-redirects to `/` (`vercel.json`). The
operating-philosophy narrative that used to live on a standalone About page
is now a compact module near the bottom of the homepage.

## Homepage section order

Hero → Intersections → Do Hard Things → Work/Systems → Per Diem →
Udit Uncovered → Operating System → Advisory CTA → Footer.

This order is deliberate and was arrived at by measuring the previous
version's actual rendered section heights (not by aesthetic guess) — Do
Hard Things sits early because burying real personal-identity content near
the bottom was one of the specific problems the V4 pass corrected.

## Typography & layout tokens

- **IBM Plex Sans** (400/500/600/700, real italics) is the single type
  family site-wide, loaded via a `<link>` in `index.html` (not a CSS
  `@import`). **IBM Plex Mono** is reserved for tabular/proof-number
  display only (Advisory's stat grid, Per Diem archive dates) — it is not
  a second body face.
- `LAYOUT` in `constants.js` (`contentMax: 1240px`, `proseMax: 680px`,
  padding tokens) replaces page-by-page ad-hoc widths (the previous
  version had `maxWidth` scattered across 700/760/900/1000/1080px with no
  shared source). Long-form reading surfaces (Per Diem's archive, essay
  body copy) intentionally stay narrower than `contentMax` — the rule is
  "narrow measure for text, not for whole sections," not "1240px
  everywhere."

## Per Diem

Real logo (`public/branding/per-diem-logo.png`), a JSON content model
(`src/content/per-diem.json` + `.js`), and two publishing paths: manual
(`npm run perdiem:add`, sets editorial `connectionA`/`connectionB`/`thesis`
fields) and automatic (`scripts/perdiem-sync.mjs` via a scheduled GitHub
Action, objective facts only, best-effort on a 6-hour cadence — see the
README's "Per Diem content, publishing & freshness" section for the full
detail, including the stated limitations).

## Advisory

Rebuilt around four concrete problem areas (not a service menu), a 2×2
grid, a proof-point grid reusing only already-verified numbers, three named
engagement models, and two real case-study previews (Problem/What
changed/Outcome, each expandable to the full original write-up already in
`src/case-studies.js`). No pricing. Not framed as a consulting agency.

## Where to look for more

- `README.md` — the fuller version of everything above, including the
  full Per Diem publishing/sync detail and the "how it was built" section.
- `.claude/skills/design-brand-review/`, `content-strategy-review/`,
  `integration-tech-plan/` — re-run these for a fresh, current-state audit
  rather than trusting any prior review's specific recommendations, which
  go stale the moment the site changes again.
- Git history around the "V4 quality pass" and "V4 final pass" commits —
  the actual before/after measurements that justified each structural
  change (hero height, Operating Loop's disproportionate size, Advisory's
  width-vs-length diagnosis, etc.) live in those commit messages rather
  than being duplicated here.
