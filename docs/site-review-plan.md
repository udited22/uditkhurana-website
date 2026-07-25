# uditkhurana.in — Site Review & Roadmap

*Prepared for Udit Khurana · Reviewed Jul 25, 2026 · Three independent reviews (design & branding, content strategy, technical integration), each grounded in a direct read of the live source, synthesized into one plan. Full interactive version: see the published artifact from the review session; this file is the durable, in-repo record.*

---

## Executive summary

All three reviews converged on the same core diagnosis from different angles: **the raw material for a serious product-leader profile already exists in the codebase — it's just switched off or buried.** The credibility strip, the TradFi → fintech → crypto career timeline, and real LinkedIn post links are already built and already in the data. They render on secondary pages, or not at all, while the homepage leads with an abstract five-word poem ("Product. Wealth. Systems. Discipline. Taste.") that a recruiter, founder, or journalist can't act on in the first five seconds.

The second pattern: **a few things are actively broken, not just under-designed.** The newsletter signup button does not send an email anywhere — it flips a local UI flag. A footer tagline contradicts the hero. One essay link on the Writing page goes nowhere. These read as pre-launch bugs, not strategy debate, and should be fixed regardless of which design direction is picked.

The fix, per all three reports, is not a rebuild. It's **resequencing what's already there** — surface the credibility strip and career arc on the homepage, make LinkedIn a first-class action instead of a footer icon, give the newsletter form something real to submit to — before spending effort on anything net-new.

| | |
|---|---|
| Reviews run | 3 — design, content strategy, engineering |
| Cross-cutting issues | 7, several flagged independently by 2+ reviewers |
| Phase 1 action items | 28 — mostly copy & layout, near-zero new engineering |
| Decisions blocking integration work | 6 |

---

## Cross-cutting fixes

Issues flagged by more than one reviewer, or that undercut the site regardless of positioning debate. Fix these in any phasing.

1. **Tagline contradicts itself.** Hero reads `Building The Eclectic Life` (`Home.jsx:71`); nav and footer both read `Living The Eclectic Life` (`Layout.jsx:57, 115`). Pick one — recommend "Living," it matches the Instagram handle. *(Design, Strategy)*
2. **Newsletter signup captures nothing.** The "Subscribe Free" form's submit handler is `() => email && setDone(true)` — local state only. No email has ever actually been sent anywhere. The most business-critical bug on the site. *(Strategy, Engineering)*
3. **Credibility strip never reaches the homepage.** `CRED` (9+ years, Ironman, CoinDCX Principal PM) is imported and rendered only on `About.jsx`. A visitor who doesn't click through never sees it — despite it already existing in `constants.js`. *(Design)*
4. **Dead link on a live page.** The sixth `WRITINGS` entry, "Building a Life Beyond One Dimension," points to `href: "#"`. Either ship the essay or pull the card. *(Design, Strategy)*
5. **Unattributed self-quote.** About page opens with a pull-quote with no source — reads as marketing copy dressed as testimonial. Attribute it or replace it with a first-person claim. *(Strategy)*
6. **Projects page is 100% vaporware.** All five `PROJECTS` cards are tagged "Coming Soon," identically templated ("For [X] who want [Y]"). Ship one or fold it into a teaser section until then. *(Design, Strategy)*
7. **Stale footer + four competing CTAs.** Footer hardcodes `© 2025`. The homepage runs four simultaneous primary-style CTAs (Subscribe, Read Latest, Work With Me, Start a Conversation) — none of them "Connect on LinkedIn," despite that being the stated Phase 1 priority. *(Design)*

---

## Proposed positioning

> **"Product leadership across every era of how India invests."**
> TradFi → smallcase & Tickertape → CoinDCX. 9+ years building the infrastructure Indians use to grow their money — now writing Per Diem, advising fintech and crypto product teams, and training for the next Ironman.

This replaces "Product. Wealth. Systems. Discipline. Taste." as the lead claim. Keep "Living The Eclectic Life" as the secondary, brand-flavor tagline in nav/footer — it should never again be the biggest, boldest text on the homepage.

---

## Unified phased roadmap

### Phase 1 — details, description, social connection, professional profile
*Ship first — mostly text and placement, no new systems.*

**Design**
- Rebalance hero: role/company/domain becomes the dominant element, not a 12px subline
- Add a real photo of Udit to hero or About
- Surface `CRED` strip on the homepage
- Pull `JOURNEY` timeline onto the homepage, condensed
- Promote LinkedIn to a first-class action near the hero
- Add a "Featured on LinkedIn" strip using real post URLs already in `WRITINGS`
- Collapse to one primary CTA; demote "Subscribe Free" from permanent nav weight

**Strategy**
- Fix tagline inconsistency
- Rewrite hero to lead with the TradFi→fintech→crypto line
- Add scope/seniority to each `JOURNEY` entry — highest-leverage single content fix
- Attribute or replace the unsourced About pull-quote
- Rewrite `ADVISORY_AREAS` descriptions with specificity
- De-duplicate Advisory CTA copy between Home and Advisory page
- Pull or fix the broken placeholder essay link
- Reweight `IDENTITY_CARDS` — professional pillars first and largest

**Engineering**
- Wire the Per Diem form to a real ESP endpoint (client-side POST, no backend needed yet)
- Move `WRITINGS`/`FEATURED` out of source into a Google Sheet or JSON
- *You:* create the ESP account and get the embed/form endpoint
- *You:* decide sending domain and complete DNS verification

### Phase 2 — reinforce credibility, add proof
*Light-to-moderate engineering.*

**Design**
- Company-logo strip: CoinDCX / smallcase / Tickertape
- Curated Instagram grid (4–6 images) on Photography or About
- Replace repeated glyph icons with real iconography or photography
- Rebalance homepage sequencing: professional → range → advisory
- Audit repeated "operator/operating system" phrasing across pages
- Ship one real project, or de-emphasize the AI & Systems tile

**Strategy**
- Commit to a realistic Per Diem cadence (e.g. 4 days/week, not "daily" as a hard promise)
- Formalize the 5-pillar content rotation already implied by `WRITINGS` tags
- Ship one native, site-exclusive long-form essay
- Add one anonymized proof point / mini case study to Advisory
- Establish a monthly manual refresh cadence for Featured/Writing

**Engineering**
- Add `api/subscribe.js` serverless function for custom success/error states
- Add env var handling for any ESP API key (first backend the repo will have)
- Link `PerDiem.jsx` to the ESP's own hosted archive page
- Add 1–2 official LinkedIn "embed this post" iframes to Featured slots
- *You:* generate ESP API key, add to Vercel env vars

### Phase 3+ — depth, automation, bets that pay off once there's traction

**Design**
- "In the Press" / speaking module once that content exists
- Light social proof (follower counts) only once genuinely strong
- Extend motion/reveal pattern consistently across all subpages

**Strategy**
- Launch "The Eclectic Dispatch" only once Per Diem's cadence is proven for months
- Filterable tag UI on Writing page using existing pillar taxonomy
- Real testimonials/case studies on Advisory as engagements accumulate

**Engineering**
- Native on-site archive pulling past issues from the ESP's API, with caching
- Instagram Graph API grid — only if Instagram becomes a real priority (token-refresh maintenance tax)
- Migrate WRITINGS from a Sheet to a proper headless CMS if volume demands it

---

## Top 5 highest-leverage fixes

Ranked by the design review — the five changes that move the "serious product leader" read the fastest.

1. **Rebalance the hero** — role · company · domain becomes the dominant visual element, not a 12px subline under a five-word poem. A copy/CSS-weight change, not a rebuild.
2. **Add a real photo of Udit** — zero images of the person exist anywhere in the codebase today. The single largest trust gap on the site.
3. **Surface CRED and JOURNEY on the homepage** — both are already built and already in `constants.js`, currently trapped on the About page. Highest leverage for lowest effort.
4. **Elevate LinkedIn to a first-class action**, plus a "Featured on LinkedIn" strip using post URLs already sitting unused in `WRITINGS`.
5. **Collapse to one primary CTA** — demote "Subscribe Free" from its current permanent, highest-visual-weight nav placement.

---

## Decisions needed from you

Answering these unblocks Phase 1 engineering immediately — an agent can't make these calls or create these accounts on your behalf.

1. **ESP choice** — Buttondown (recommended: simplest API, markdown-first, built for solo writers) vs. beehiiv (runner-up: richer editor, better fit if a second publication is coming). Substack and ConvertKit were considered and ruled out.
2. **Sending domain** — send from a `uditkhurana.in` subdomain, or accept the ESP's default? Determines whether DNS verification is needed before launch.
3. **LinkedIn content workflow** — Google Sheet (fast, no new tools) vs. a real CMS interface (more setup, better long-term UX)?
4. **Instagram ambition** — static link-out + `Photography.jsx` as the real gallery (recommended) vs. a live-syncing grid, which means taking on Meta API token-refresh maintenance or a paid embed widget.
5. **Serverless functions** — comfortable adding a `/api` backend on Vercel eventually, or stay 100% static, in which case Phase 1's client-side-only form becomes the permanent approach?
6. **Newsletter archive depth** — link out to the ESP's own hosted archive (zero build cost) vs. rendering past issues natively inside the site's own design (more Phase 3 engineering)?

---

*This is a planning document — nothing described above has been changed in the live codebase. Full unabridged reports from each review are available by re-running the corresponding skill in `.claude/skills/` (`design-brand-review`, `content-strategy-review`, `integration-tech-plan`).*
