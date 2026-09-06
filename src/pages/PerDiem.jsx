import Layout from "../components/Layout.jsx";
import { C, PER_DIEM_LINKEDIN_URL } from "../constants.js";
import { PerDiemWordmark } from "../components/Layout.jsx";
import Reveal from "../components/Reveal.jsx";

// LinkedIn's own subscribe action for the Per Diem Newsletter — the href/entityUrn are
// exactly as provided by LinkedIn (via PER_DIEM_LINKEDIN_URL in constants.js) and must not
// be altered; only the visual styling below is adapted to the site's design system in place
// of LinkedIn's default blue-button embed markup.
function LinkedInSubscribeButton({ full }) {
  return (
    <a
      href={PER_DIEM_LINKEDIN_URL}
      target="_blank"
      rel="noreferrer"
      style={{
        display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px",
        width: full ? "100%" : "auto",
        padding: "13px 24px",
        background: C.gold, color: "#071424",
        fontFamily: "'DM Sans',sans-serif", fontSize: "11px", fontWeight: 700,
        letterSpacing: "0.14em", textTransform: "uppercase",
        cursor: "pointer", border: "none", borderRadius: "4px", textDecoration: "none",
      }}
    >
      Subscribe on LinkedIn →
    </a>
  );
}

export default function PerDiemPage() {
  return (
    <Layout activePath="/per-diem">
      <style>{`
        .sp{padding:80px 80px;}
        @media(max-width:768px){.sp{padding:64px 24px!important;}}
      `}</style>

      {/* Header */}
      <div style={{ background: C.bgSection, padding: "80px 80px 64px", borderBottom: `1px solid ${C.borderSoft}` }} className="sp">
        <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
          <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", color: C.gold, marginBottom: "20px" }}>Newsletter · Live on LinkedIn</p>
          <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(28px,4vw,52px)", fontWeight: 400, color: C.textHigh, lineHeight: 1.1, marginBottom: "16px" }}>
            Per Diem.<br /><em style={{ fontStyle: "italic", color: C.gold }}>Your daily dose of learning.</em>
          </h1>
          <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "14px", fontWeight: 300, color: C.textMid, lineHeight: 1.8, maxWidth: "520px" }}>
            A short newsletter built around connected thinking — markets, product, technology, and behaviour, tied together the way an operator actually has to think about them. Published on LinkedIn.
          </p>
        </div>
      </div>

      {/* Why subscribe */}
      <div className="sp" style={{ padding: "64px 80px", background: C.bg, borderBottom: `1px solid ${C.borderSoft}` }}>
        <div style={{ maxWidth: "680px", margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "0.28em", textTransform: "uppercase", color: C.gold, marginBottom: "16px" }}>What To Expect</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px", textAlign: "left", maxWidth: "440px", margin: "0 auto" }}>
            {[
              "One idea from one field, used to explain another",
              "Sharp takes on markets, product, and technology",
              "Real operator experience, not generic advice",
              "Grounded in what's actually happening this week",
              "A few minutes, not a scroll — built to be finished",
            ].map((r, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                <span style={{ color: C.gold, fontSize: "11px", marginTop: "2px", flexShrink: 0 }}>→</span>
                <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "13px", fontWeight: 300, color: C.textMid, lineHeight: 1.5 }}>{r}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter card */}
      <div className="sp" style={{ padding: "80px 80px", background: C.bgSection }}>
        <div style={{ maxWidth: "560px", margin: "0 auto" }}>
          <Reveal>
            <div style={{ background: C.bgCard, border: `1px solid ${C.border}`, borderRadius: "8px", padding: "36px 32px", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: 0, right: 0, width: "180px", height: "180px", background: "radial-gradient(circle, rgba(201,162,75,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "22px", position: "relative", zIndex: 1 }}>
                <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "8.5px", fontWeight: 700, letterSpacing: "0.24em", textTransform: "uppercase", color: C.gold }}>● Live</span>
              </div>
              <div style={{ marginBottom: "18px", position: "relative", zIndex: 1 }}>
                <PerDiemWordmark size="lg" />
              </div>
              <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "17px", fontStyle: "italic", color: C.textMid, lineHeight: 1.6, marginBottom: "10px", position: "relative", zIndex: 1 }}>
                Your daily dose of learning.
              </p>
              <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "12px", fontWeight: 300, color: C.textLow, lineHeight: 1.72, marginBottom: "10px", position: "relative", zIndex: 1 }}>
                Connected thinking across markets, product, technology, and behaviour — one field explaining another, grounded in what Udit is actually building and deciding.
              </p>
              <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "11px", fontWeight: 500, color: C.textLow, letterSpacing: "0.08em", marginBottom: "28px", position: "relative", zIndex: 1 }}>
                A few minutes. High signal. Zero fluff.
              </p>
              <div style={{ padding: "16px 18px", background: "rgba(201,162,75,0.06)", border: `1px solid ${C.border}`, borderRadius: "4px", position: "relative", zIndex: 1 }}>
                <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "12px", color: C.textMid, lineHeight: 1.6, marginBottom: "12px" }}>
                  Published on LinkedIn Newsletter. Subscribe there to get each issue directly.
                </p>
                <LinkedInSubscribeButton full />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </Layout>
  );
}
