# uditkhurana.in

Personal site — the public operating system for one person, told through
three principal identity layers (Work, Per Diem, Advisory) plus the
photographic personal record (Udit Uncovered), that read as one coherent
person rather than a portfolio of unrelated interests.

## The problem

A LinkedIn profile and a PDF resume compress a career into bullet points and
can't hold the parts of an identity that don't fit a job title — the Ironman
finish, the diving trips, the actual advisory work and how it was reasoned
through. This site exists to be the fuller, more honest version, structured
so a visitor infers the underlying pattern (curiosity → systems thinking →
experimentation → difficult execution → reflection → documentation) directly
from the homepage, rather than needing a separate "About" page to explain it.

## Brand architecture

- **Work** — what he builds. Career narrative framed by mandate/scope/selected
  work per chapter, not a chronological résumé.
- **Per Diem** — how he thinks. A first-class writing property with a real
  logo and content model, not buried under a generic "Writing" or "Blog"
  label.
- **Advisory** — where accumulated judgement can selectively be applied.
  Deliberately not a consulting-agency website: no pricing, four concrete
  problem areas instead of a service menu, real case-study previews instead
  of a vague link.
- **Udit Uncovered** — how he lives. The consolidated identity for travel,
  endurance, adventure, and experimentation — Instagram: `@udituncovered`.

There is no standalone "About" page. The operating-philosophy narrative that
used to live at `/about` (six full-height stages explaining Curiosity →
Systems → Experiment → Do → Reflect → Document) was, on measurement, the
single most disproportionate block on the entire site — over three full
1920×1080 screens for six one-line stages. As of the V4 pass, that concept
is a compact homepage module instead: `/about` **301-redirects to `/`**
(see `vercel.json`), the same way `/adventure` and `/fitness` redirect to
`/uncovered` to preserve any indexed links.

## Homepage architecture (V4)

Section order, top to bottom: **Hero** (identity/social row, proposition,
full-body portrait) → **Intersections** (a 3×3 grid of where product,
markets, and personal interests connect — see `IntersectionEngine.jsx`) →
**Do Hard Things** (real photography: Ironman, scuba, adventure — deliberately
placed early, not buried at the bottom) → **Work/Systems** (the three-layer
product-systems visual — see `SystemsUnderneath.jsx`) → **Per Diem** (logo,
featured issue, recent issues) → **Udit Uncovered** (full-bleed photo) →
**Operating System** (the compact version of the old About page's concept) →
**Advisory CTA** → **Footer**.

This order and the typography/layout system it uses (IBM Plex Sans
throughout, a shared `LAYOUT.contentMax` of 1240px instead of per-page ad-hoc
widths) came out of a full audit of the previous version — see git history
around the "V4 quality pass" commits for the specific measurements that drove
each change, rather than duplicating that analysis here where it will go
stale.

## What each page does

- **Home** (`/`) — see homepage architecture above.
- **Work** (`/work`) — the journey, framed by mandate/scope/selected work for
  the two most recent chapters (both default closed); the problem-space
  timeline; the Career Systems Matrix; link to Selected Work (`/projects`).
- **Per Diem** (`/per-diem`) — the real logo, the latest issue in a featured
  visual treatment, then the full reverse-chronological archive with cover
  thumbnails. See "Per Diem content & publishing" below.
- **Advisory** (`/advisory`) — hero with explicit email/LinkedIn CTAs, a 2×2
  "Where I'm Most Useful" grid, a proof-point grid, three engagement models,
  two real case-study previews (each expandable to the full original
  write-up), and a final CTA.
- **Udit Uncovered** (`/uncovered`) — the curated photo doorway into
  `@udituncovered`, not a live embed.
- **Projects** (`/projects`) — "Selected Work" in full: independent GitHub
  builds, reachable from Work and Home but not in primary nav.

## Per Diem content, publishing & freshness

Per Diem is the site's only property with a real content model:
`src/content/per-diem.json` (raw data) plus `src/content/per-diem.js` (sorts
by `publishedAt`, exports `PER_DIEM_ISSUES` / `PER_DIEM_LATEST` /
`PER_DIEM_RECENT`). The homepage module and the full `/per-diem` archive both
read from this one source — nothing is hardcoded per page. The logo lives at
`public/branding/per-diem-logo.png` (a real supplied asset — see the "known
limitations" note at the bottom of this section).

**LinkedIn remains the canonical publishing surface.** The site is a
discovery/index layer, not a mirror of full article content.

**Two ways new issues get in:**

1. **Automatic (best-effort, not real-time).** A scheduled GitHub Action
   (`.github/workflows/perdiem-sync.yml`) runs `scripts/perdiem-sync.mjs`
   every 6 hours plus on manual dispatch. It reads LinkedIn's public
   newsletter listing page (verified directly to return usable,
   unauthenticated metadata — not assumed), discovers any article slugs not
   already in `per-diem.json`, and for each new one fetches its own public
   `og:title`/`og:description`/JSON-LD `datePublished`. New entries get
   **objective facts only** — the editorial `connectionA`/`connectionB`/
   `thesis` fields that drive the "connected thinking" framing are left
   unset, since a script has no basis to invent that judgment call. Before
   committing anything, the workflow runs `npm ci && npm run build` and only
   pushes if that succeeds. A run that finds nothing new is a clean no-op —
   it never touches the file, never opens a PR, never fails the build.
   **Known limitations, stated plainly:** LinkedIn's newsletter page only
   surfaces a handful of recent articles (there is no public "list every
   issue" endpoint), so this can discover ongoing freshness but is not a
   full-archive backfill tool; and LinkedIn may rate-limit or block requests
   from GitHub Actions' cloud IP ranges more aggressively than it did during
   local verification from a residential IP — every failure mode is handled
   as a silent no-op, so this is deliberately "best-effort, 6-hour cadence,"
   never described as live.
2. **Manual (the fallback, and still the only way to add editorial framing).**

   ```bash
   npm run perdiem:add <linkedin-article-url>
   ```

   Tries public OpenGraph metadata first, falls back to interactive prompts
   (title, excerpt, cover image, tags, read time, publish date, and the
   `connectionA`/`connectionB`/`thesis` fields the automatic path can't set).
   Refuses to add a duplicate URL or id. To backfill an older issue:

   ```bash
   npm run perdiem:add <linkedin-article-url> -- --date 2026-09-10
   ```

   The publish-date prompt defaults to **today's date in Asia/Kolkata**, not
   UTC or the machine's local timezone.

   You can also run the automatic sync locally without waiting for the
   schedule: `npm run perdiem:sync`.

**Known limitation — Per Diem logo asset:** the current file
(`public/branding/per-diem-logo.png`) is 230×157px with a flat white
background baked in. It's usable at the sizes currently in use, but a
higher-resolution and/or transparent-background export would hold up better
if the logo is ever used larger or against a non-white surface.

## How it was built

**Architecture**: A React SPA (Vite) with client-side routing, a single
shared design-token system (`src/constants.js`) driving color, typography,
and layout (`LAYOUT.contentMax`/`proseMax`/padding tokens) across every
page, a lightweight content model for Per Diem (`src/content/`), and a small
reusable component library (`Layout`, `Reveal` for scroll-triggered
animation, `CaseStudy` for structured case-study rendering, `Icons`).

**Typography**: IBM Plex Sans (weights 400/500/600/700, real italics) as the
single family site-wide, plus IBM Plex Mono reserved for tabular/proof-number
display (Advisory's stat grid, Per Diem archive dates). Both load via a real
`<link>` in `index.html` rather than a CSS `@import`, so the font request
starts the moment the HTML is parsed instead of waiting on the app's own
stylesheet to load first.

**Key decisions**:
- **A custom block schema for case studies (`src/case-studies.js`) instead of
  hardcoded JSX per case study.** Advisory work is written as a sequence of
  typed blocks (`h3`/`h4` headings, paragraphs, bullet lists, pull-quotes,
  stage-by-stage flows, pros/cons, recommendations) rendered generically by
  `CaseStudy.jsx`. Adding a new case study is a content change, not a layout
  change.
- **One shared warm-editorial palette, one primary accent** (`C` in
  `constants.js`) used across every page, with a single reserved secondary
  accent (`C.rust`) for Udit Uncovered only.
- **A real content model for Per Diem**, with both a manual publishing path
  and a best-effort automatic freshness path, so publishing doesn't require
  touching page components and doesn't always require a manual step either.
- **Scroll-triggered reveal as a shared primitive.** `Reveal.jsx` respects
  `prefers-reduced-motion` and wraps content once rather than re-implementing
  motion per page.
- **Static SPA over a framework with server rendering.** No dynamic backend
  data exists yet, so a Vite-built static SPA deployed to Vercel stays the
  simplest option.

## Tech stack

React, Vite, plain CSS-in-JS (no framework), deployed on Vercel.

## Setup & run

```bash
git clone <repo-url>
cd uditkhurana-website
npm install
npm run dev              # local dev server
npm run build             # production build to dist/
npm run perdiem:add <url>  # manually publish a new Per Diem issue
npm run perdiem:sync       # run the automatic freshness sync locally
```

Deployed via Vercel using `vercel.json` (Vite framework preset, SPA rewrite to
`index.html`, plus 301 redirects for `/about`, `/adventure`, and `/fitness`).
No environment variables are required — the site has no backend.

## License

MIT — see LICENSE file.
