---
name: integration-tech-plan
description: Produce a full-stack engineering plan for uditkhurana.in's LinkedIn/Instagram links and Per Diem's LinkedIn-native publishing + best-effort content-sync pipeline (scripts/perdiem-sync.mjs). Use when the user asks about integrating socials, hardening the Per Diem sync, or a technical plan for uditkhurana.in's integrations.
---

# Integration Technical Plan

Runs a technical-architecture review of this repo's site (uditkhurana-website — React 18 + Vite, static SPA, hosted on Vercel) focused on LinkedIn, Instagram, and newsletter (Per Diem) integration, and produces a written implementation plan. Research/planning only by default: don't write or edit code, run installs, or make commits unless the user has explicitly asked for implementation in this invocation.

## How to run it

Launch a background `general-purpose` Agent with a self-contained prompt built from the template below. Always have the agent re-read the actual current state of `package.json`, `vercel.json`, `src/components/Layout.jsx`, `src/pages/PerDiem.jsx`, `scripts/perdiem-sync.mjs`, `.github/workflows/perdiem-sync.yml`, and `src/constants.js` rather than reuse facts from a prior run — the site's engineering surface is exactly the kind of thing that changes between runs of this skill and must not be assumed stale-correct. In particular: **LinkedIn newsletter integration and a real Per Diem content-sync pipeline already exist** (as of the V4 pass) — don't have the agent re-litigate "should we integrate with LinkedIn" or propose a third-party ESP as if Per Diem's distribution model were still an open question. It isn't: LinkedIn is the canonical publishing surface, the site's LinkedIn subscribe button uses LinkedIn's own native follow action, and freshness is a best-effort scheduled sync (not an email-capture funnel to a separate list). A follow-up integration-tech pass should assess whether *that* architecture needs hardening (reliability, discovery coverage, IA), not whether to replace it with an ESP.

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
site, not an enterprise build. LinkedIn and Instagram are already integrated
as real destination links (hero identity row, Advisory, footer) — no
Graph API embeds exist or are currently planned. Per Diem's distribution
model is already decided and built: LinkedIn Newsletter is the canonical
publishing surface (not a separate ESP/mailing list), the site's "Subscribe"
button is LinkedIn's own native follow action, and freshness is handled by
`scripts/perdiem-sync.mjs` — a best-effort, 6-hour-cadence scheduled sync
(GitHub Action) that discovers new issues from LinkedIn's public newsletter
page and appends them to `src/content/per-diem.json`, with `npm run
perdiem:add` as the manual fallback for anything needing editorial framing
the sync can't infer. Read README.md's "Per Diem content, publishing &
freshness" section before assuming any of this is still open.

Save the full report to a markdown file in the repo's scratchpad/working
directory (or wherever the calling session indicates) and structure it as:

1. Current state audit — exactly what's real vs. placeholder today for
   LinkedIn, Instagram, and Per Diem's sync pipeline, based on what you
   actually read in the code (don't guess, and don't assume the newsletter
   integration is still unbuilt — verify against `scripts/perdiem-sync.mjs`
   and the workflow file directly).
2. LinkedIn integration assessment — is the current approach (destination
   links + public-metadata scraping for sync, no OAuth/API) still the right
   call, or has something changed that argues for revisiting it? Be honest
   about API constraints (there is no public API for pulling a personal
   profile's activity for third-party display).
3. Instagram integration options — current Graph API/Business-account
   requirements (flag anything you're not fully certain is current) vs. the
   current simple destination-link approach; recommend only if there's a
   concrete reason to change, not novelty.
4. Per Diem sync hardening — assess the existing pipeline's reliability
   (discovery coverage, the "recent issues only" limitation, rate-limit risk
   from Actions runner IPs, the build-gate-before-commit safeguard) and
   propose concrete improvements, rather than proposing a replacement
   architecture (a third-party ESP, a different distribution model) unless
   the current one has a real, demonstrated failure mode.
5. Any other genuinely new integration surface Udit has asked about this run.
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
