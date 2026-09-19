---
name: design-brand-review
description: Review uditkhurana.in as a premium personal-brand designer would — visual hierarchy, typography, brand cohesion, and a phased launch plan. Use when the user asks for a design review, branding audit, or "how does the site look/read" for uditkhurana.in.
---

# Design & Brand Review

Runs a design/branding audit of this repo's site (uditkhurana-website — React 18 + Vite, static, deployed on Vercel) from the perspective of a premium personal-brand studio (the design rigor applied to VC, founder, and executive personal sites), and produces a written report. This is research/critique only — never edit site code or content as part of this skill; that's a separate, explicit request.

## How to run it

Launch a background `general-purpose` Agent with a self-contained prompt built from the template below. Do not reuse facts from a previous run of this skill — the site changes over time, so the agent must read the current source itself.

**Before launching, orient yourself with a quick `Read`/`grep` pass** (or let the agent do it) over `src/pages/*.jsx`, `src/components/Layout.jsx`, and `src/constants.js` so the prompt you hand the agent reflects what's actually in the repo today, not a stale memory of a past review.

### Agent prompt template

```
You are reviewing uditkhurana.in — Udit Khurana's personal site — as a premium
personal-brand studio would review a founder/operator site. Research/review
only: do not edit any code or content. Read the actual current source
yourself — at minimum src/components/Layout.jsx, src/constants.js, Home.jsx,
and any other pages relevant to the question — don't rely on any prior
summary of the site's contents, since it may be stale. Note: there is no
About.jsx — the site has no standalone About page as of the V4 pass; /about
redirects to / and the operating-philosophy narrative it used to hold is now
a compact homepage module. Don't recommend reintroducing a dedicated About
page without a specific, new reason — that was a deliberate removal, not an
oversight.

Site owner context: Udit Khurana, Principal PM at CoinDCX (India's leading
crypto exchange), 9+ years in product across TradFi → fintech (smallcase,
Tickertape) → crypto. Also an Ironman 70.3 triathlete, photographer, and
writer. He wants the site to read like a serious product leader's industry
profile and reflect his eclectic personality (fitness, photography, writing)
without diluting professional credibility. LinkedIn, Instagram, and email are
already surfaced prominently (hero identity row, Advisory, footer) as of the
V4 pass — review whether that's still working, don't treat "surface social
links" as an open gap unless you find it's regressed.

Save the full report to a markdown file in the repo's scratchpad/working
directory (or wherever the calling session indicates) and structure it as:

1. First-impression audit — what a visitor sees in the first 5 seconds, and
   whether it reads "serious product leader" vs. hobbyist/unfocused. Cite
   real personal-brand-site best practices (role+company+domain above the
   fold, credibility signals, single clear primary CTA).
2. Visual & UX critique — typography, color, hierarchy, hero, nav/footer,
   mobile, page-to-page consistency. What's working, what undercuts "premium."
3. Personal brand cohesion — does the site balance "product leader"
   credibility with "eclectic personality" without one undermining the
   other? Give a concrete point of view (homepage real-estate split,
   sequencing, tone).
4. Social/professional profile integration — concrete recommendations for
   surfacing LinkedIn and Instagram beyond footer links (embeds, featured
   posts, credibility signals).
5. Phased launch plan — Phase 1 (must-ship: profile/details clarity, social
   connection, professional narrative), Phase 2, Phase 3+, each with a short
   punch list of specific, actionable items.
6. Top 5 highest-leverage fixes, ranked.

Be concrete and opinionated, citing actual file/component/line references.
This should be actionable, not generic advice.
```

## After it returns

Summarize the agent's key findings back to the user in a few sentences before handing them the full report. If the user has also run `content-strategy-review` and/or `integration-tech-plan` in the same session, offer to synthesize all outputs into one consolidated artifact (see how a prior session did this: an HTML page with an executive summary, cross-cutting fixes, a unified phased roadmap grouped by track, and the full reports collapsed at the bottom via `<details>`).
