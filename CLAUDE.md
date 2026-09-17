# uditkhurana.in

Personal site for Udit Khurana — React 18 + Vite static SPA, hand-rolled client-side routing (no router library), deployed on Vercel. No backend today (no `/api`, no env vars) — see `.claude/skills/integration-tech-plan/` before assuming that's still true.

- Pages: `src/pages/*.jsx`
- Nav, footer, social links: `src/components/Layout.jsx`
- Most site copy/content data (design tokens, nav, advisory areas, projects, cred stats, career journey): `src/constants.js`
- Per Diem issues specifically: `src/content/per-diem.json` (data) + `src/content/per-diem.js` (sorted views) — add new issues with `npm run perdiem:add <url>`, not by hand-editing pages.

## Rule: use the project skills for site review/strategy work

For any request to review, audit, or plan this site's **design/branding**, **content/positioning strategy**, or **LinkedIn/Instagram/newsletter integration**, always use the matching skill in `.claude/skills/` rather than improvising a one-off review:

- `design-brand-review` — premium personal-brand design & UX audit
- `content-strategy-review` — positioning, narrative, and copy strategy
- `integration-tech-plan` — LinkedIn/Instagram/newsletter technical integration plan

Each skill re-reads the live source itself rather than relying on stale facts, so they stay correct as the site evolves. When more than one runs in the same session, synthesize the outputs into one consolidated artifact (executive summary, cross-cutting fixes, a unified phased roadmap grouped by track, top leverage items, decisions needed, full reports collapsed at the bottom) rather than leaving three separate reports for the user to reconcile themselves.

The consolidated plan at `docs/site-review-plan.md` (Jul 2026) is superseded by
the V2 brand/IA/experience elevation (`feat/personal-site-v2`, PR pending as of
this note) — re-run the skills above for anything current rather than treating
that file as live.
