import Layout from "../components/Layout.jsx";
import { C, ADVISORY_AREAS, CONTACT_EMAIL } from "../constants.js";
import { ICONS } from "../components/Icons.jsx";
import { CASE_STUDIES } from "../case-studies.js";
import CaseStudyCard from "../components/CaseStudy.jsx";
import Reveal from "../components/Reveal.jsx";

export default function AdvisoryPage() {
  return (
    <Layout activePath="/advisory">
      <style>{`
        .adv-grid{display:grid;grid-template-columns:1fr 1fr;gap:80px;align-items:start;}
        .area-grid{display:grid;grid-template-columns:1fr 1fr;gap:8px;}
        .sp{padding:80px 80px;}
        @media(max-width:768px){.adv-grid{grid-template-columns:1fr!important;gap:40px!important;}.sp{padding:64px 24px!important;}.area-grid{grid-template-columns:1fr!important;}}
      `}</style>

      <div style={{ background: C.bgSection, padding: "80px 80px 64px", borderBottom: `1px solid ${C.borderSoft}` }} className="sp">
        <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
          <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", color: C.cyan, marginBottom: "14px" }}>Advisory</p>
          <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(28px,4vw,52px)", fontWeight: 400, color: C.textHigh, lineHeight: 1.1, marginBottom: "16px" }}>
            Select advisory for fintech,<br /><em style={{ fontStyle: "italic", color: C.cyan }}>product, and leadership.</em>
          </h1>
          <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "14px", fontWeight: 300, color: C.textMid, lineHeight: 1.8, maxWidth: "520px" }}>
            High-context conversations where experience can be genuinely useful — not volume, but depth.
          </p>
        </div>
      </div>

      <div className="sp" style={{ padding: "80px 80px", background: C.bg }}>
        <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
          <Reveal>
          <div className="adv-grid">
            <div>
              <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(18px,2.5vw,26px)", fontWeight: 400, color: C.textHigh, lineHeight: 1.4, marginBottom: "20px" }}>
                I take on a small number of high-context conversations where my experience can be genuinely useful.
              </p>
              <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "13.5px", lineHeight: 1.85, color: C.textMid, fontWeight: 300, marginBottom: "16px" }}>
                Relevant for fintech founders, early-stage startups, product leaders, and teams building investing, crypto, wealth, or AI-enabled products — or professionals looking for product and career clarity.
              </p>
              <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "13.5px", lineHeight: 1.85, color: C.textMid, fontWeight: 300, marginBottom: "40px" }}>
                This is not a consulting business. It is a small number of relationships where experience, honesty, and context can genuinely move the needle. The areas on the right are a general map of what I can help with — for anything current, the fastest way to reach me is email.
              </p>
              <div style={{ padding: "20px 24px", background: C.bgCard, border: `1px solid ${C.borderSoft}`, borderRadius: "5px", marginBottom: "32px" }}>
                <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: C.cyan, marginBottom: "8px" }}>For current requests</p>
                <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "16px", fontStyle: "italic", color: C.textMid, lineHeight: 1.7 }}>
                  Reach out directly — I read and reply to every email myself.
                </p>
              </div>
              <a href={`mailto:${CONTACT_EMAIL}`}
                style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "13px 30px", background: C.cyan, color: "#071424", fontFamily: "'DM Sans',sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", cursor: "pointer", border: "none", borderRadius: "4px", textDecoration: "none" }}>
                Write to {CONTACT_EMAIL} →
              </a>
            </div>

            <div>
              <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "0.28em", textTransform: "uppercase", color: C.cyan, marginBottom: "20px" }}>General Areas I Can Help With</p>
              <div className="area-grid">
                {ADVISORY_AREAS.map((a, i) => {
                  const Icon = ICONS[a.icon];
                  return (
                    <div key={i} style={{ background: C.bgCard, border: `1px solid ${C.borderSoft}`, borderRadius: "5px", padding: "16px" }}>
                      <div style={{ color: C.cyan, opacity: 0.75, marginBottom: "10px" }}><Icon size={17} /></div>
                      <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "11px", fontWeight: 600, color: C.textMid, marginBottom: "5px", lineHeight: 1.35 }}>{a.title}</p>
                      <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "11px", fontWeight: 300, color: C.textLow, lineHeight: 1.62 }}>{a.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          </Reveal>

          <div style={{ marginTop: "64px" }}>
            <Reveal>
              <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "0.28em", textTransform: "uppercase", color: C.cyan, marginBottom: "10px" }}>Case Studies</p>
              <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "13px", fontWeight: 300, color: C.textMid, lineHeight: 1.7, maxWidth: "60ch", marginBottom: "24px" }}>
                Two anonymized engagements, in full — how the thinking actually unfolded, not just the outcome.
              </p>
            </Reveal>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              {CASE_STUDIES.map((study, i) => (
                <Reveal key={i} delay={i * 0.06}><CaseStudyCard study={study} /></Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
