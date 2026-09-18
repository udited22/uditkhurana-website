import Layout from "../components/Layout.jsx";
import { C, LAYOUT, ADVISORY_PROBLEMS, CONTACT_EMAIL, SOCIAL } from "../constants.js";
import { CASE_STUDIES } from "../case-studies.js";
import CaseStudyCard from "../components/CaseStudy.jsx";
import Reveal from "../components/Reveal.jsx";

// Short, original summaries of the two full case studies in case-studies.js
// — used for the compact preview; CaseStudyCard below still renders the
// complete original write-up behind "View full case →" so nothing is lost,
// just not dumped on the page at full length by default.
const CASE_PREVIEWS = [
  {
    problem: "An EdTech platform with a trusted user base wanted to pivot into financial wellness — four investment products planned at once, no clear sequencing.",
    change: "Reframed the pivot as a financial-maturity journey rather than a marketplace launch: literacy → savings → investments → wealth, with mutual funds positioned as the core recurring engine.",
    outcome: "Don't build an investment marketplace — build a financial progress platform where investing is the next natural step.",
  },
  {
    problem: "A startup building a US-stocks platform for Indian users wanted an AI differentiator, but was on track to ship another broker interface.",
    change: "Repositioned around decision-making instead of execution: an AI layer that explains portfolio decisions rather than replacing them, and an advice-led onboarding journey instead of KYC → fund → buy.",
    outcome: "Don't build another US stocks app — build a wealth operating system where investing is one capability inside broader financial guidance.",
  },
];

const ENGAGEMENTS = [
  { title: "Product / architecture teardown", detail: "A focused working session around one difficult decision, followed by clear observations and next steps." },
  { title: "Decision sprint", detail: "A short engagement to map the problem, operating model, dependencies, options and recommendation." },
  { title: "Selective ongoing advisory", detail: "Periodic involvement for founding/product teams navigating a difficult regulated-finance build." },
];

const PROOF = [
  "10+ years in financial systems",
  "4–5 major broker integrations",
  "40+ AMCs",
  "₹250Cr+ mutual-fund transactions",
  "high-volume equity transaction infrastructure",
  "regulated global-investing / GIFT City build experience",
];

function ProblemModule({ p }) {
  return (
    <div style={{ padding: "22px 24px", border: `1px solid ${C.borderSoft}`, borderRadius: "8px" }}>
      <p style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: "16px", fontWeight: 600, color: C.textHigh, marginBottom: "10px" }}>{p.title}</p>
      <p style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: "13.5px", fontWeight: 400, color: C.textMid, lineHeight: 1.6 }}>{p.detail}</p>
    </div>
  );
}

function CasePreview({ preview, study }) {
  return (
    <div style={{ padding: "24px 26px", background: C.bgCard, border: `1px solid ${C.borderSoft}`, borderRadius: "8px" }}>
      <p style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: "9.5px", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: C.accent, marginBottom: "10px" }}>{study.tag}</p>
      <p style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: "17px", fontWeight: 600, color: C.textHigh, lineHeight: 1.3, marginBottom: "16px" }}>{study.title}</p>

      <p style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "9.5px", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", color: C.textLow, marginBottom: "5px" }}>Problem</p>
      <p style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: "13px", color: C.textMid, lineHeight: 1.6, marginBottom: "14px" }}>{preview.problem}</p>

      <p style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "9.5px", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", color: C.textLow, marginBottom: "5px" }}>What changed</p>
      <p style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: "13px", color: C.textMid, lineHeight: 1.6, marginBottom: "14px" }}>{preview.change}</p>

      <p style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "9.5px", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", color: C.textLow, marginBottom: "5px" }}>Outcome</p>
      <p style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: "14px", fontStyle: "italic", color: C.textHigh, lineHeight: 1.5, marginBottom: "18px" }}>{preview.outcome}</p>

      <details>
        <summary style={{ cursor: "pointer", fontFamily: "'IBM Plex Sans',sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: C.accent, listStyle: "none" }}>View full case →</summary>
        <div style={{ marginTop: "18px" }}>
          <CaseStudyCard study={study} />
        </div>
      </details>
    </div>
  );
}

export default function AdvisoryPage() {
  return (
    <Layout activePath="/advisory">
      <style>{`
        .sp{padding:${LAYOUT.padDesktop} 56px;}
        @media(max-width:768px){.sp{padding:${LAYOUT.padMobile} 24px!important;}}
        .adv-problem-grid{display:grid;grid-template-columns:1fr 1fr;gap:14px;}
        @media(max-width:700px){.adv-problem-grid{grid-template-columns:1fr!important;}}
        .adv-case-grid{display:grid;grid-template-columns:1fr 1fr;gap:20px;}
        @media(max-width:820px){.adv-case-grid{grid-template-columns:1fr!important;}}
        summary::-webkit-details-marker{display:none;}
      `}</style>

      {/* Hero */}
      <div className="sp" style={{ background: C.bg }}>
        <div style={{ maxWidth: LAYOUT.contentMax, margin: "0 auto" }}>
          <Reveal>
            <p style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "0.28em", textTransform: "uppercase", color: C.accent, marginBottom: "16px" }}>Advisory</p>
            <h1 style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: "clamp(30px,4.2vw,46px)", fontWeight: 600, color: C.textHigh, lineHeight: 1.2, marginBottom: "20px", maxWidth: "20ch" }}>
              When the hard part isn't the screen, but the system underneath it.
            </h1>
            <p style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: "15px", fontWeight: 400, color: C.textMid, lineHeight: 1.65, maxWidth: LAYOUT.proseMax, marginBottom: "12px" }}>
              I work selectively with founders and product leaders building financial products where product strategy, regulation, market structure, infrastructure and operating model are tightly coupled.
            </p>
            <p style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: "15px", fontWeight: 400, color: C.textMid, lineHeight: 1.65, maxWidth: LAYOUT.proseMax, marginBottom: "28px" }}>
              I'm most useful before a difficult architecture, partner or sequencing decision becomes an expensive one.
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "24px", flexWrap: "wrap", marginBottom: "18px" }}>
              <a href={`mailto:${CONTACT_EMAIL}`}
                style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "13px 28px", background: C.accent, color: C.onAccent, fontFamily: "'IBM Plex Sans',sans-serif", fontSize: "12px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", borderRadius: "4px" }}>
                Email me →
              </a>
              <a href={SOCIAL.linkedin} target="_blank" rel="noreferrer" style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: "12px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: C.textMid }}>
                Connect on LinkedIn →
              </a>
            </div>
            <p style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "13px", color: C.textLow }}>{CONTACT_EMAIL}</p>
          </Reveal>
        </div>
      </div>

      {/* Where I'm most useful */}
      <div className="sp" style={{ background: C.bgSection, borderTop: `1px solid ${C.borderSoft}` }}>
        <div style={{ maxWidth: LAYOUT.contentMax, margin: "0 auto" }}>
          <Reveal>
            <p style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "0.24em", textTransform: "uppercase", color: C.accent, marginBottom: "22px" }}>Where I'm Most Useful</p>
            <div className="adv-problem-grid">
              {ADVISORY_PROBLEMS.map((p) => <ProblemModule key={p.title} p={p} />)}
            </div>
          </Reveal>
        </div>
      </div>

      {/* What I bring */}
      <div className="sp" style={{ background: C.bg }}>
        <div style={{ maxWidth: LAYOUT.contentMax, margin: "0 auto" }}>
          <Reveal>
            <p style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "0.24em", textTransform: "uppercase", color: C.accent, marginBottom: "20px" }}>What I Bring To The Table</p>
            <p style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: "16px", fontWeight: 400, color: C.textMid, lineHeight: 1.65, maxWidth: LAYOUT.proseMax, marginBottom: "14px" }}>
              I have spent 10+ years moving across the layers that usually become separate teams: enterprise banking, lending, Indian capital markets, mutual funds, global investing and crypto.
            </p>
            <p style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: "16px", fontWeight: 400, color: C.textMid, lineHeight: 1.65, maxWidth: LAYOUT.proseMax, marginBottom: "28px" }}>
              The useful part is not any one credential. It is being able to connect product, regulation, infrastructure and operations before they become four different problems.
            </p>
            <p style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "12.5px", color: C.textLow, lineHeight: 2 }}>
              {PROOF.join("  ·  ")}
            </p>
          </Reveal>
        </div>
      </div>

      {/* How we can work together */}
      <div className="sp" style={{ background: C.bgSection, borderTop: `1px solid ${C.borderSoft}` }}>
        <div style={{ maxWidth: LAYOUT.contentMax, margin: "0 auto" }}>
          <Reveal>
            <p style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "0.24em", textTransform: "uppercase", color: C.accent, marginBottom: "22px" }}>How We Can Work Together</p>
            <div className="adv-problem-grid" style={{ gridTemplateColumns: "repeat(3,1fr)" }}>
              {ENGAGEMENTS.map((e) => (
                <div key={e.title}>
                  <p style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: "15px", fontWeight: 600, color: C.textHigh, marginBottom: "8px" }}>{e.title}</p>
                  <p style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: "13px", color: C.textMid, lineHeight: 1.6 }}>{e.detail}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>

      {/* Case studies */}
      <div className="sp" style={{ background: C.bg }}>
        <div style={{ maxWidth: LAYOUT.contentMax, margin: "0 auto" }}>
          <Reveal>
            <p style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "0.24em", textTransform: "uppercase", color: C.accent, marginBottom: "22px" }}>Case Studies</p>
            <div className="adv-case-grid">
              {CASE_PREVIEWS.map((preview, i) => (
                <CasePreview key={i} preview={preview} study={CASE_STUDIES[i]} />
              ))}
            </div>
          </Reveal>
        </div>
      </div>

      {/* Final CTA */}
      <div className="sp" style={{ background: C.bgSection, borderTop: `1px solid ${C.borderSoft}`, textAlign: "center" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <Reveal>
            <h2 style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: "clamp(22px,3vw,30px)", fontWeight: 600, color: C.textHigh, lineHeight: 1.3, marginBottom: "14px" }}>
              Building something where the product cannot be separated from the rails underneath it?
            </h2>
            <p style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: "14.5px", color: C.textMid, marginBottom: "26px" }}>
              Send me the context. If I can be useful, I'll tell you where I'd start.
            </p>
            <p style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "13px", color: C.textLow, marginBottom: "22px" }}>{CONTACT_EMAIL}</p>
            <div style={{ display: "flex", gap: "24px", justifyContent: "center", flexWrap: "wrap" }}>
              <a href={`mailto:${CONTACT_EMAIL}`}
                style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "13px 28px", background: C.accent, color: C.onAccent, fontFamily: "'IBM Plex Sans',sans-serif", fontSize: "12px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", borderRadius: "4px" }}>
                Write to me →
              </a>
              <a href={SOCIAL.linkedin} target="_blank" rel="noreferrer" style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: "12px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: C.textMid, alignSelf: "center" }}>
                LinkedIn →
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </Layout>
  );
}
