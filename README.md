# uditkhurana.com

Personal site and portfolio — a three-pillar personal brand (Product/Advisory, Adventure, Fitness) told through a photo-led editorial design, not a generic template resume.

## The problem

A LinkedIn profile and a PDF resume compress a career into bullet points and can't hold the parts of an identity that don't fit a job title — the Ironman finish, the diving trips, the actual advisory work and how it was reasoned through. This site exists to be the fuller, more honest version: real work (product/fintech career and independent advisory), real case studies with the actual reasoning shown, and the adventure/fitness identity that isn't separate from how the work gets done, just not usually visible in a professional context.

## What it does

- **Home** — a command-center landing page tying the three pillars (Product, Adventure, Fitness) together through one visual system.
- **Work / About** — career narrative and professional history.
- **Advisory** — independent advisory case studies, written out step by step (context → approach → tradeoffs → recommendation), not just outcome bullet points.
- **Adventure / Fitness** — the non-professional identity pillars, photo-led.
- **Essay** — a standalone long-form essay page.
- **Per Diem** — a dedicated page for a specific project/offering.

## How it was built

**Architecture**: A React SPA (Vite) with client-side routing, a single shared design-token system (`src/constants.js`) driving color/typography across every page, and a small reusable component library (`Layout`, `Reveal` for scroll-triggered animation, `CaseStudy` for structured case-study rendering, `Icons`).

**Key decisions**:
- **A custom block schema for case studies (`src/case-studies.js`) instead of hardcoded JSX per case study.** Advisory work is written as a sequence of typed blocks (`h3`/`h4` headings, paragraphs, bullet lists, pull-quotes, stage-by-stage flows, pros/cons, recommendations) rendered generically by `CaseStudy.jsx`. Adding a new case study is now a content change, not a layout change — and it keeps every case study visually consistent without copy-pasting markup.
- **One shared palette/accent system instead of three independently-styled sections.** The three pillars (Product, Adventure, Fitness) need to feel distinct without the site feeling like three different sites stitched together — solved with a single warm neutral base plus a `PILLAR_ACCENTS` map, so each pillar gets its own accent color pulled from its own photography while everything else (spacing, type, motion) stays shared.
- **Scroll-triggered reveal as a shared primitive, not per-page animation code.** `Reveal.jsx` wraps content and handles intersection-based fade/slide-in once, so every page gets consistent motion without re-implementing it.
- **Static SPA over a framework with server rendering.** For a personal site with no dynamic backend data, a Vite-built static SPA deployed to Vercel is simpler to build, host, and iterate on than adding SSR machinery the site doesn't need.

**Notable challenges**:
- Advisory case studies genuinely came from real client engagements — the anonymization pattern (describing engagements by stage/sector/problem, e.g. "a Series A EdTech company," "a startup building a US stocks platform with an AI wealth layer," never by name) had to be baked into the content itself, not bolted on after, so the writing reads naturally rather than like a redacted document.
- Getting three visually distinct identity pillars to read as one coherent site (not a portfolio-plus-blog-plus-Instagram mashup) took a few iterations on the shared token system before the accent-per-pillar approach landed.

## Tech stack

React, Vite, plain CSS-in-JS (no framework), deployed on Vercel.

## Impact / results

Went through several full iterations (multi-page architecture rework, homepage restructuring into a "command center," native essay page, custom icon system, motion/consistency pass, and a full personal-brand redesign around the three-pillar information architecture) rather than shipping a first draft — each pass driven by wanting the site to read as more honest and less templated than a standard personal portfolio.

## Setup & run

```bash
git clone <repo-url>
cd uditkhurana-website
npm install
npm run dev       # local dev server
npm run build     # production build to dist/
```

Deployed via Vercel using `vercel.json` (Vite framework preset, SPA rewrite to `index.html`). No environment variables are required — the site has no backend.

## License

MIT — see LICENSE file.
