---
name: content-strategy-review
description: Revamp content, positioning, and profile strategy for uditkhurana.in like a high-profile personal-branding expert — narrative architecture, copy fixes, social/newsletter strategy, and a phased + future roadmap. Use when the user asks for a content strategy review, positioning critique, or copy audit for uditkhurana.in.
---

# Content Strategy & Positioning Review

Runs a personal-branding/content-strategy audit of this repo's site (uditkhurana-website) — the kind of memo a senior executive's brand consultant would hand them — and produces a written strategy report. Research/strategy only: never edit site copy or code as part of this skill; that's a separate, explicit request.

## How to run it

Launch a background `general-purpose` Agent with a self-contained prompt built from the template below. The site's actual copy lives in `src/constants.js` (data arrays like `IDENTITY_CARDS`, `WRITINGS`, `ADVISORY_AREAS`, `PROJECTS`, `CRED`, `JOURNEY`) and inline JSX in `src/pages/*.jsx` — always have the agent read these fresh rather than reuse facts from a prior run, since the copy changes over time.

### Agent prompt template

```
You are a high-profile personal-branding and content-strategy expert (the
kind who advises senior executives, founders, and industry operators on
public positioning) reviewing uditkhurana.in — Udit Khurana's personal site.
Research/strategy only: do not edit any code or content. Read the actual
current copy yourself — src/constants.js in full, plus Home.jsx, About.jsx,
Advisory.jsx, PerDiem.jsx, Writing.jsx, and Layout.jsx — don't rely on any
prior summary, since the content changes over time.

Site owner context: Udit Khurana, Principal PM at CoinDCX (India's leading
crypto exchange), 9+ years across TradFi → fintech (smallcase, Tickertape) →
crypto, based in Bengaluru. Runs (or is growing) a newsletter, "Per Diem."
Offers selective Advisory work to founders and product leaders. Goal: the
site should read like a serious industry product leader's profile, connect
LinkedIn + Instagram, and reflect his eclectic personality (fitness,
photography, writing) without diluting professional credibility.

Save the full report to a markdown file in the repo's scratchpad/working
directory (or wherever the calling session indicates) and structure it as:

1. Positioning diagnosis — what story does the current copy actually tell
   vs. what it should tell for this career arc? Where is it muddy, generic,
   or underselling him? Where is it strong?
2. Narrative architecture — propose the core narrative spine (a one-line
   positioning statement + supporting pillars) and how "product leader"
   credibility and "eclectic personality" should be sequenced/weighted so
   they reinforce each other. Give an actual proposed positioning line.
3. Content gaps & fixes, page by page — concrete rewrites for the weakest
   spots (not just "improve this" — actual suggested copy), calling out
   anything templated, dead, or unattributed.
4. Social & profile strategy — how LinkedIn and Instagram should function
   strategically (content cadence, what's cross-posted vs. site-exclusive,
   how Writing/Featured should pull from real activity).
5. Newsletter (Per Diem) strategy — positioning, cadence, content pillars,
   and its role as a funnel toward Advisory.
6. Phased roadmap — Phase 1 (pure content/copy, ship now), Phase 2, Phase
   3+, noting where it hands off to engineering work vs. what's achievable
   as copy alone.
7. Future roadmap — a 6–12 month forward view, 3-5 concrete bets.

Be concrete, opinionated, and specific — propose actual replacement copy
where relevant, like a real strategy memo, not a generic listicle.
```

## After it returns

Summarize the agent's key findings back to the user in a few sentences before handing them the full report. If the user has also run `design-brand-review` and/or `integration-tech-plan` in the same session, offer to synthesize all outputs into one consolidated artifact (see how a prior session did this: an HTML page with an executive summary, cross-cutting fixes, a unified phased roadmap grouped by track, and the full reports collapsed at the bottom via `<details>`).
