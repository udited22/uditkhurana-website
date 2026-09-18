import Layout from "../components/Layout.jsx";
import { C, PROOF_STRIP, ESSAYS } from "../constants.js";
import OperatingLoop from "../components/OperatingLoop.jsx";
import Reveal from "../components/Reveal.jsx";

function navigate(href) {
  window.history.pushState({}, "", href);
  window.dispatchEvent(new PopStateEvent("popstate"));
}

export default function AboutPage() {
  return (
    <Layout activePath="/about">
      <style>{`
        .sp{padding:80px 80px;}
        @media(max-width:768px){.sp{padding:56px 24px!important;}}
      `}</style>

      {/* Header */}
      <div style={{ padding: "64px 80px 20px", background: C.bg }} className="sp">
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h1 style={{ fontFamily: "'Instrument Serif',serif", fontSize: "clamp(32px,6vw,64px)", fontWeight: 400, color: C.textHigh, lineHeight: 1.08 }}>
            Many things.<br /><em style={{ fontStyle: "italic", color: C.accent }}>One operating system.</em>
          </h1>
        </div>
      </div>

      {/* Operating Loop */}
      <div style={{ padding: "0 80px", background: C.bg }} className="sp">
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <OperatingLoop />
        </div>
      </div>

      {/* Proof strip */}
      <div className="sp" style={{ padding: "56px 80px", background: C.bgSection, borderTop: `1px solid ${C.borderSoft}` }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
          <Reveal>
            <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "13px", color: C.textMid, lineHeight: 2.4 }}>
              {PROOF_STRIP.join("   ·   ")}
            </p>
            <p style={{ fontFamily: "'Instrument Serif',serif", fontSize: "18px", fontStyle: "italic", color: C.textHigh, marginTop: "22px" }}>
              Still learning. Frequently unlearning. Usually building.
            </p>
            {ESSAYS.map((e) => (
              <a key={e.url} href={e.url} onClick={ev => { ev.preventDefault(); navigate(e.url); }}
                style={{ display: "inline-block", marginTop: "24px", fontFamily: "'DM Sans',sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: C.accent }}>
                Read "{e.title}" →
              </a>
            ))}
          </Reveal>
        </div>
      </div>
    </Layout>
  );
}
