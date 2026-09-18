import { useState } from "react";
import Layout from "../components/Layout.jsx";
import { C, ADVISORY_PROBLEMS, CONTACT_EMAIL } from "../constants.js";
import { CASE_STUDIES } from "../case-studies.js";
import CaseStudyCard from "../components/CaseStudy.jsx";
import Reveal from "../components/Reveal.jsx";

function ProblemRow({ p, isOpen, onToggle }) {
  return (
    <div style={{ borderBottom: `1px solid ${C.borderSoft}` }}>
      <button type="button" onClick={onToggle} aria-expanded={isOpen} style={{ width: "100%", textAlign: "left", background: "none", border: "none", cursor: "pointer", padding: "22px 0", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "16px" }}>
        <span style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: "clamp(18px,2.4vw,22px)", color: C.textHigh }}>{p.title}</span>
        <span style={{ color: C.textLow, fontSize: "16px", transform: isOpen ? "rotate(45deg)" : "none", transition: "transform .2s", flexShrink: 0 }}>+</span>
      </button>
      {isOpen && (
        <p style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: "13.5px", fontWeight: 300, color: C.textMid, lineHeight: 1.8, paddingBottom: "24px", maxWidth: "56ch" }}>{p.detail}</p>
      )}
    </div>
  );
}

export default function AdvisoryPage() {
  const [open, setOpen] = useState(0);
  const [showCases, setShowCases] = useState(false);

  return (
    <Layout activePath="/advisory">
      <style>{`
        .sp{padding:100px 80px;}
        @media(max-width:768px){.sp{padding:64px 24px!important;}}
      `}</style>

      <div className="sp" style={{ background: C.bg }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <Reveal>
            <h1 style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: "clamp(28px,4.5vw,44px)", fontWeight: 400, color: C.textHigh, lineHeight: 1.25, marginBottom: "22px" }}>
              Some problems benefit from another experienced pair of eyes.
            </h1>
            <p style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: "14px", fontWeight: 300, color: C.textMid, lineHeight: 1.8, marginBottom: "48px" }}>
              I occasionally work with founders and product leaders when the hard part sits at the intersection of financial product, regulation, infrastructure, and operating model.
            </p>
          </Reveal>

          <Reveal delay={0.06}>
            <div>
              {ADVISORY_PROBLEMS.map((p, i) => (
                <ProblemRow key={p.title} p={p} isOpen={open === i} onToggle={() => setOpen(open === i ? -1 : i)} />
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <a href={`mailto:${CONTACT_EMAIL}`}
              style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginTop: "40px", padding: "14px 30px", background: C.accent, color: C.onAccent, fontFamily: "'IBM Plex Sans',sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", cursor: "pointer", border: "none", borderRadius: "4px", textDecoration: "none" }}>
              Start a Conversation →
            </a>
          </Reveal>

          <Reveal delay={0.14}>
            <div style={{ marginTop: "72px", paddingTop: "32px", borderTop: `1px solid ${C.borderSoft}` }}>
              {!showCases ? (
                <button type="button" onClick={() => setShowCases(true)} aria-expanded={false} style={{ background: "none", border: "none", cursor: "pointer", padding: 0, fontFamily: "'IBM Plex Sans',sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: C.textLow }}>
                  See two anonymized case studies →
                </button>
              ) : (
                <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                  {CASE_STUDIES.map((study, i) => (
                    <CaseStudyCard key={i} study={study} />
                  ))}
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </Layout>
  );
}
