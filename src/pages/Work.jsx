import { useState } from "react";
import Layout from "../components/Layout.jsx";
import { C, LAYOUT, TIMELINE, JOURNEY, PHOTO } from "../constants.js";
import CareerMatrix from "../components/CareerMatrix.jsx";
import Reveal from "../components/Reveal.jsx";

function navigate(href) {
  window.history.pushState({}, "", href);
  window.dispatchEvent(new PopStateEvent("popstate"));
}

function Chapter({ j, defaultOpen }) {
  const [open, setOpen] = useState(defaultOpen);
  const list = j.scope || j.proof;

  return (
    <div style={{ paddingBottom: "32px", marginBottom: "32px", borderBottom: `1px solid ${C.borderSoft}` }}>
      <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "16px", flexWrap: "wrap", marginBottom: "10px" }}>
        <p style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: "10px", fontWeight: 600, color: j.active ? C.accent : C.textLow, letterSpacing: "0.04em" }}>
          {j.years} · {j.role} · {j.company}
        </p>
      </div>
      <h3 style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: "clamp(20px,2.8vw,28px)", fontStyle: "italic", color: C.textHigh, lineHeight: 1.3, marginBottom: list ? "16px" : 0, maxWidth: "22ch" }}>
        {j.headline}
      </h3>

      {list && (
        <>
          <button type="button" onClick={() => setOpen(!open)} aria-expanded={open} style={{ background: "none", border: "none", cursor: "pointer", padding: 0, fontFamily: "'IBM Plex Sans',sans-serif", fontSize: "10px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: C.accent, marginBottom: open ? "14px" : 0 }}>
            {open ? "Hide detail −" : (j.proof ? "Show proof points +" : "Show scope +")}
          </button>
          {open && (
            <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "8px" }}>
              {list.map((s, k) => (
                <li key={k} style={{ display: "flex", gap: "10px", fontFamily: "'IBM Plex Sans',sans-serif", fontSize: "13px", fontWeight: 300, color: C.textMid, lineHeight: 1.7, maxWidth: "56ch" }}>
                  <span style={{ color: C.accent, flexShrink: 0 }}>—</span>{s}
                </li>
              ))}
            </ul>
          )}
          {open && j.earlier && (
            <div style={{ marginTop: "20px", paddingTop: "18px", borderTop: `1px solid ${C.borderSoft}` }}>
              <p style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: C.textLow, marginBottom: "12px" }}>Earlier at {j.company}</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {j.earlier.map((e, k) => (
                  <p key={k} style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: "12.5px", color: C.textMid, lineHeight: 1.6 }}>
                    <span style={{ color: C.textHigh, fontWeight: 600 }}>{e.label}</span> — {e.detail}
                  </p>
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default function WorkPage() {
  return (
    <Layout activePath="/work">
      <style>{`
        .sp{padding:72px 56px;}
        .tl-row{display:flex;align-items:center;gap:0;flex-wrap:wrap;}
        @media(max-width:768px){.sp{padding:56px 24px!important;}}
      `}</style>

      {/* Header */}
      <div style={{ padding: "72px 56px 40px", background: C.bg }} className="sp">
        <div style={{ maxWidth: LAYOUT.contentMax, margin: "0 auto" }}>
          <h1 style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: "clamp(30px,5vw,56px)", fontWeight: 400, color: C.textHigh, lineHeight: 1.12, marginBottom: "16px" }}>
            From enterprise banking to <span style={{ color: C.accent }}>global investing.</span>
          </h1>
        </div>
      </div>

      {/* Problem-space timeline */}
      <div className="sp" style={{ padding: "24px 56px 56px", background: C.bg }}>
        <div style={{ maxWidth: LAYOUT.contentMax, margin: "0 auto", overflowX: "auto" }}>
          <Reveal>
            <div className="tl-row" style={{ minWidth: "760px" }}>
              {TIMELINE.map((t, i) => (
                <div key={t.year} style={{ display: "flex", alignItems: "center" }}>
                  <div style={{ textAlign: "center", padding: "0 16px" }}>
                    <p style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: "10px", fontWeight: 700, color: C.accent, marginBottom: "8px" }}>{t.year}</p>
                    <p style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: "11.5px", color: C.textMid, maxWidth: "13ch", lineHeight: 1.4 }}>{t.label}</p>
                  </div>
                  {i < TIMELINE.length - 1 && <span style={{ color: C.textLow, fontSize: "14px" }}>→</span>}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>

      {/* Career Systems Matrix */}
      <div className="sp" style={{ padding: "48px 56px 72px", background: C.bgSection, borderTop: `1px solid ${C.borderSoft}`, borderBottom: `1px solid ${C.borderSoft}` }}>
        <div style={{ maxWidth: LAYOUT.contentMax, margin: "0 auto" }}>
          <Reveal>
            <p style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "0.28em", textTransform: "uppercase", color: C.accent, marginBottom: "18px" }}>The Systems Matrix</p>
            <CareerMatrix />
            <p style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: "17px", fontStyle: "italic", color: C.textMid, marginTop: "22px" }}>
              The surface kept changing. The underlying systems accumulated.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Chapters */}
      <div className="sp" style={{ padding: "64px 56px", background: C.bg }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div style={{ width: "140px", aspectRatio: "1/1", borderRadius: "8px", overflow: "hidden", border: `1px solid ${C.border}`, backgroundImage: `url(${PHOTO.product})`, backgroundSize: "cover", backgroundPosition: "center top", marginBottom: "40px" }} />
          {JOURNEY.map((j, i) => j.headline ? (
            <Reveal key={i} delay={i * 0.04}><Chapter j={j} defaultOpen={false} /></Reveal>
          ) : (
            <Reveal key={i} delay={i * 0.04}>
              <div style={{ display: "flex", alignItems: "baseline", gap: "16px", flexWrap: "wrap", padding: "10px 0", borderBottom: `1px solid ${C.borderSoft}` }}>
                <p style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: "10px", fontWeight: 600, color: C.textLow, minWidth: "90px" }}>{j.years}</p>
                <p style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: "15px", color: C.textHigh }}>{j.role} · {j.company}</p>
                <p style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: "12px", color: C.textMid }}>{j.sentence}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="sp" style={{ padding: "0 56px 72px", background: C.bg, textAlign: "center" }}>
        <p style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: "16px", color: C.textMid }}>
          Curious what gets built outside the day job?{" "}
          <a href="/projects" onClick={e => { e.preventDefault(); navigate("/projects"); }} style={{ color: C.accent, fontWeight: 500 }}>Selected Work →</a>
        </p>
      </div>
    </Layout>
  );
}
