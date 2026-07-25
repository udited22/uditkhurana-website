---
name: integration-tech-plan
description: Produce a full-stack engineering plan for connecting uditkhurana.in to LinkedIn, Instagram, and a newsletter (subscription capture + delivery). Use when the user asks about integrating socials, wiring up the newsletter/Per Diem signup, or a technical plan for uditkhurana.in's integrations.
---

# Integration Technical Plan

Runs a technical-architecture review of this repo's site (uditkhurana-website — React 18 + Vite, static SPA, hosted on Vercel) focused on LinkedIn, Instagram, and newsletter (Per Diem) integration, and produces a written implementation plan. Research/planning only by default: don't write or edit code, run installs, or make commits unless the user has explicitly asked for implementation in this invocation.

## How to run it

Launch a background `general-purpose` Agent with a self-contained prompt built from the template below. Always have the agent re-read the actual current state of `package.json`, `vercel.json`, `src/components/Layout.jsx`, `src/pages/PerDiem.jsx`, and `src/constants.js` rather than reuse facts from a prior run — the site's engineering surface (whether a signup form actually works, whether an `/api` directory exists, etc.) is exactly the kind of thing that changes between runs of this skill and must not be assumed stale-correct.

### Agent prompt template

```
You are a full-stack engineer producing a technical integration plan for
uditkhurana.in, Udit Khurana's personal site. Research/planning only by
default — do not write or edit code, run npm install, or make commits unless
explicitly told this run should implement, not just plan. Read the actual
current repo state yourself: package.json, vercel.json, src/components/
Layout.jsx, src/pages/PerDiem.jsx, and src/constants.js at minimum — don't
assume anything from a prior review still holds, since the codebase changes.

Context: Udit is not a professional engineer day-to-day (he's a Principal
PM), so recommendations need to be realistic for a low-maintenance personal
site, not an enterprise build. He wants real integrations (not just static
links) with LinkedIn, Instagram, and — going forward — a newsletter platform
for Per Diem covering integration, subscription capture, and delivery.

Save the full report to a markdown file in the repo's scratchpad/working
directory (or wherever the calling session indicates) and structure it as:

1. Current state audit — exactly what's real vs. placeholder today for
   LinkedIn, Instagram, and the newsletter, based on what you actually read
   in the code (don't guess).
2. LinkedIn integration options — be honest about API constraints (there is
   no public API for pulling a personal profile's activity for third-party
   display); give a clear ranked recommendation, not a vague list.
3. Instagram integration options — current Graph API/Business-account
   requirements (flag anything you're not fully certain is current), vs.
   simpler alternatives; a clear recommendation.
4. Newsletter subscription capture — compare realistic ESP options (e.g.
   Buttondown, beehiiv, Kit, Substack, a custom build) on ease of embedding
   in this React/Vite site, cost at solo scale, delivery control vs.
   lock-in, and whether a serverless function is needed. One clear primary
   recommendation plus a runner-up, with reasoning.
5. Newsletter delivery architecture — how content flows from written to
   delivered for the recommended ESP, and whether PerDiem.jsx should become
   a live archive (and how).
6. Concrete implementation phases — for each phase, what code/config
   changes are needed AND what Udit himself must do outside of code
   (create accounts, generate API keys, verify DNS) since an agent can't do
   these without live credentials.
7. Decisions needed from Udit — an explicit short list of choices only he
   can make, so a follow-up engineering pass can move immediately once
   answered.

Be technically honest — flag anything uncertain (e.g. exact current API
deprecation states) rather than asserting it confidently.
```

## After it returns

Summarize the agent's key findings back to the user in a few sentences before handing them the full report, and surface the "decisions needed from Udit" list prominently since it blocks follow-up implementation work. If the user has also run `design-brand-review` and/or `content-strategy-review` in the same session, offer to synthesize all outputs into one consolidated artifact (see how a prior session did this: an HTML page with an executive summary, cross-cutting fixes, a unified phased roadmap grouped by track, and the full reports collapsed at the bottom via `<details>`).
