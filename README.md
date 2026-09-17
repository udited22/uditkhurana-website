# uditkhurana.in

Personal site — the public operating system for one person, told through four
principal identity layers (Work, Per Diem, Advisory, Udit Uncovered) that
resolve into a single operating philosophy, not a portfolio of unrelated
interests.

## The problem

A LinkedIn profile and a PDF resume compress a career into bullet points and
can't hold the parts of an identity that don't fit a job title — the Ironman
finish, the diving trips, the actual advisory work and how it was reasoned
through. This site exists to be the fuller, more honest version, structured so
a visitor infers the underlying pattern (curiosity → systems thinking →
experimentation → difficult execution → reflection → documentation) rather
than being told about it.

## Brand architecture

- **Work** — what he builds. Career narrative framed by mandate/scope/selected
  work per chapter, not a chronological résumé.
- **Per Diem** — how he thinks. A first-class writing property, not buried
  under a generic "Writing" or "Blog" label.
- **Advisory** — where accumulated judgement can selectively be applied.
  Deliberately not a consulting funnel.
- **Udit Uncovered** — how he lives. The consolidated identity for travel,
  endurance, adventure, food, and experimentation — Instagram: `@udituncovered`.
- **About** — the bridge explaining why the first four are one person, not
  four separate personas.

"Adventure" and "Fitness" are not top-level identities anymore; both live
inside Udit Uncovered. `/adventure` and `/fitness` 301-redirect to `/uncovered`
(see `vercel.json`) to preserve any indexed links.

## What it does

- **Home** — hero, Work, Per Diem, Selected Work, Advisory, Udit Uncovered,
  About bridge, in that sequence.
- **Work** (`/work`) — the journey, framed by mandate/scope/selected work for
  the two most recent chapters; recent Per Diem highlights; link to Selected
  Work (`/projects`).
- **Per Diem** (`/per-diem`) — the latest issue in an editorial treatment,
  then the full reverse-chronological archive. See "Per Diem content &
  publishing" below.
- **Advisory** (`/advisory`) — positioning plus two full, anonymized case
  studies written step-by-step (context → approach → tradeoffs →
  recommendation).
- **Udit Uncovered** (`/uncovered`) — the curated photo doorway into
  `@udituncovered`, not a live embed.
- **About** (`/about`) — the narrative that ties the other four together.
- **Projects** (`/projects`) — "Selected Work" in full: independent
  GitHub builds, reachable from Work and Home but not in primary nav.

## Per Diem content & publishing

Per Diem is the site's only property with a real content model:
`src/content/per-diem.json` (raw data) plus `src/content/per-diem.js` (sorts
by `publishedAt`, exports `PER_DIEM_ISSUES` / `PER_DIEM_LATEST` /
`PER_DIEM_RECENT`). The homepage module, the Work page's highlight strip, and
the full `/per-diem` archive all read from this one source — nothing is
hardcoded per page.

**LinkedIn remains the canonical publishing surface.** The site is a
discovery/index layer, not a mirror of full article content.

To publish a new issue after posting it on LinkedIn:

```bash
npm run perdiem:add <linkedin-article-url>
```

The script tries to read the URL's public OpenGraph metadata (title,
description, image) first. LinkedIn's post/article pages sit behind a login
wall for most requests, so in practice it usually falls back to a few manual
prompts (title, excerpt, cover image, tags, read time, publish date) —
deliberately no headless browser, scraping library, or LinkedIn API. It
appends the new issue to `per-diem.json`; commit and deploy, and the homepage
+ archive update automatically.

To backfill an older issue rather than one published today, pass an explicit
date:

```bash
npm run perdiem:add <linkedin-article-url> -- --date 2026-09-10
```

The publish-date prompt defaults to **today's date in Asia/Kolkata**, not UTC
or the machine's local timezone — the newsletter and its audience are
India-based, and near midnight UTC those disagree by a full calendar day. The
script also refuses to add an issue whose URL or generated id already exists
in `per-diem.json`, so re-running the command by mistake can't silently
duplicate an entry.

The seed dataset is the real, current Per Diem run — verified issue-by-issue
against the article pages' own server-rendered `og:title` / `og:description`
/ `datePublished` (LinkedIn's login wall blocks a plain fetch of the visible
article body, but these tags are present without one), not carried over from
the old site's generic personal-LinkedIn-posts array. Earlier editions
referenced anecdotally elsewhere weren't linked from the newsletter's own
index page and couldn't be independently verified, so they were left out
rather than guessed at.

## How it was built

**Architecture**: A React SPA (Vite) with client-side routing, a single
shared design-token system (`src/constants.js`) driving color/typography
across every page, a lightweight content model for Per Diem
(`src/content/`), and a small reusable component library (`Layout`, `Reveal`
for scroll-triggered animation, `CaseStudy` for structured case-study
rendering, `Icons`).

**Key decisions**:
- **A custom block schema for case studies (`src/case-studies.js`) instead of
  hardcoded JSX per case study.** Advisory work is written as a sequence of
  typed blocks (`h3`/`h4` headings, paragraphs, bullet lists, pull-quotes,
  stage-by-stage flows, pros/cons, recommendations) rendered generically by
  `CaseStudy.jsx`. Adding a new case study is a content change, not a layout
  change.
- **One shared warm-editorial palette, one primary accent** (`C` in
  `constants.js`) used across Work/Per Diem/Advisory/nav, with a single
  reserved secondary accent (`C.rust`) for Udit Uncovered only — distinct but
  coherent, not a rainbow of per-section colors.
- **A real (if minimal) content model for Per Diem**, so publishing doesn't
  require touching page components.
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
npm run dev             # local dev server
npm run build            # production build to dist/
npm run perdiem:add <url> # publish a new Per Diem issue
```

Deployed via Vercel using `vercel.json` (Vite framework preset, SPA rewrite to
`index.html`, plus 301 redirects for the retired `/adventure` and `/fitness`
routes). No environment variables are required — the site has no backend.

## License

MIT — see LICENSE file.
