import { useState } from "react";
import Layout from "../components/Layout.jsx";
import { C } from "../constants.js";
import { PerDiemWordmark } from "../components/Layout.jsx";

export default function PerDiemPage() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <Layout activePath="/per-diem">
      <style>{`
        .email-inp{flex:1;background:rgba(255,255,255,0.05);border:1.5px solid rgba(0,180,198,0.2);border-right:none;padding:13px 18px;color:${C.textHigh};font-family:'DM Sans',sans-serif;font-size:14px;outline:none;border-radius:4px 0 0 4px;transition:border-color .2s;}
        .email-inp::placeholder{color:${C.textLow};}
        .email-inp:focus{border-color:${C.cyan};}
        .nl-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px;}
        .sp{padding:80px 80px;}
        @media(max-width:768px){.nl-grid{grid-template-columns:1fr!important;}.sp{padding:64px 24px!important;}}
      `}</style>

      {/* Header */}
      <div style={{ background: C.bgSection, padding: "80px 80px 64px", borderBottom: `1px solid ${C.borderSoft}` }} className="sp">
        <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
          <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", color: C.cyan, marginBottom: "20px" }}>Newsletters</p>
          <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(28px,4vw,52px)", fontWeight: 400, color: C.textHigh, lineHeight: 1.1, marginBottom: "16px" }}>
            Two publications.<br /><em style={{ fontStyle: "italic", color: C.cyan }}>One operating system.</em>
          </h1>
          <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "14px", fontWeight: 300, color: C.textMid, lineHeight: 1.8, maxWidth: "520px" }}>
            Distinct rhythms. Different depths. Both built to compound over time.
          </p>
        </div>
      </div>

      {/* Why subscribe */}
      <div className="sp" style={{ padding: "64px 80px", background: C.bg, borderBottom: `1px solid ${C.borderSoft}` }}>
        <div style={{ maxWidth: "680px", margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "0.28em", textTransform: "uppercase", color: C.cyan, marginBottom: "16px" }}>Why Subscribe</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px", textAlign: "left", maxWidth: "440px", margin: "0 auto" }}>
            {[
              "Think clearer about work, money, and systems",
              "Build better operating habits",
              "Career leverage without the hustle",
              "Real operator notes — not generic advice",
              "Stay disciplined without burning out",
            ].map((r, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                <span style={{ color: C.cyan, fontSize: "11px", marginTop: "2px", flexShrink: 0 }}>→</span>
                <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "13px", fontWeight: 300, color: C.textMid, lineHeight: 1.5 }}>{r}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Two newsletter cards */}
      <div className="sp" style={{ padding: "80px 80px", background: C.bgSection }}>
        <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
          <div className="nl-grid">
            {/* Per Diem */}
            <div style={{ background: C.bgCard, border: `1px solid ${C.border}`, borderRadius: "8px", padding: "36px 32px", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: 0, right: 0, width: "180px", height: "180px", background: "radial-gradient(circle, rgba(0,180,198,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "22px", position: "relative", zIndex: 1 }}>
                <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "8.5px", fontWeight: 700, letterSpacing: "0.24em", textTransform: "uppercase", color: C.cyan }}>Live Now · Daily</span>
              </div>
              <div style={{ marginBottom: "18px", position: "relative", zIndex: 1 }}>
                <PerDiemWordmark size="lg" />
              </div>
              <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "17px", fontStyle: "italic", color: C.textMid, lineHeight: 1.6, marginBottom: "10px", position: "relative", zIndex: 1 }}>
                Your daily dose of learning.
              </p>
              <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "12px", fontWeight: 300, color: C.textLow, lineHeight: 1.72, marginBottom: "10px", position: "relative", zIndex: 1 }}>
                Sharp notes on product, fintech, strategy, finance, and decision-making for builders.
              </p>
              <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "11px", fontWeight: 500, color: C.textLow, letterSpacing: "0.08em", marginBottom: "28px", position: "relative", zIndex: 1 }}>
                5-minute reads. High signal. Zero fluff.
              </p>
              {!done ? (
                <div style={{ position: "relative", zIndex: 1 }}>
                  <div style={{ display: "flex" }}>
                    <input type="email" className="email-inp" placeholder="your@email.com" value={email} onChange={e => setEmail(e.target.value)} onKeyDown={e => e.key === "Enter" && email && setDone(true)} />
                    <button style={{ padding: "13px 18px", background: C.cyan, color: "#071424", fontFamily: "'DM Sans',sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", cursor: "pointer", border: "none", borderRadius: "0 4px 4px 0", whiteSpace: "nowrap" }} onClick={() => email && setDone(true)}>
                      Subscribe Free →
                    </button>
                  </div>
                  <p style={{ marginTop: "10px", fontFamily: "'DM Sans',sans-serif", fontSize: "10px", color: C.textLow }}>Free. No spam. Unsubscribe anytime.</p>
                </div>
              ) : (
                <div style={{ padding: "14px 18px", background: "rgba(0,180,198,0.08)", borderRadius: "4px", border: `1px solid ${C.border}`, position: "relative", zIndex: 1 }}>
                  <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "16px", fontStyle: "italic", color: C.cyan }}>You're in. First issue tomorrow.</p>
                </div>
              )}
            </div>

            {/* Eclectic Dispatch */}
            <div style={{ background: C.bgCard, border: `1px solid ${C.borderSoft}`, borderRadius: "8px", padding: "36px 32px" }}>
              <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "8.5px", fontWeight: 700, letterSpacing: "0.24em", textTransform: "uppercase", color: C.textLow, display: "block", marginBottom: "22px" }}>Coming Soon · Periodic</span>
              <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "24px", fontWeight: 500, color: C.textHigh, letterSpacing: "0.02em", lineHeight: 1, marginBottom: "4px" }}>The Eclectic Dispatch</p>
              <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "9px", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: C.textLow, marginBottom: "18px" }}>by Udit Khurana</p>
              <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "16px", fontStyle: "italic", color: C.textMid, lineHeight: 1.6, marginBottom: "10px" }}>
                Longer-form notes on building a multi-dimensional life while doing serious work.
              </p>
              <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "12px", fontWeight: 300, color: C.textLow, lineHeight: 1.72, marginBottom: "28px" }}>
                Wealth · Fitness · Systems · Taste · Stillness — sent when there is something genuinely worth reading.
              </p>
              <div style={{ padding: "16px 18px", background: "rgba(235,240,245,0.03)", border: `1px solid ${C.borderSoft}`, borderRadius: "4px" }}>
                <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "14px", fontStyle: "italic", color: C.textLow, lineHeight: 1.6 }}>
                  Being crafted with intention. First issue when it's ready — not before. No schedule. No noise. Just signal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
