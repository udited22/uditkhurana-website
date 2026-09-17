import { useState } from "react";
import Layout from "../components/Layout.jsx";
import { C, PER_DIEM_LINKEDIN_URL } from "../constants.js";
import { PerDiemWordmark } from "../components/Layout.jsx";
import { PER_DIEM_ISSUES } from "../content/per-diem.js";
import Reveal from "../components/Reveal.jsx";

function fmtDate(iso) {
  return new Date(iso + "T00:00:00").toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}

// LinkedIn's own subscribe action — href/entityUrn exactly as provided by
// LinkedIn (via PER_DIEM_LINKEDIN_URL in constants.js), must not be altered.
function LinkedInSubscribeButton({ full }) {
  return (
    <a href={PER_DIEM_LINKEDIN_URL} target="_blank" rel="noreferrer"
      style={{
        display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px",
        width: full ? "100%" : "auto", padding: "13px 24px",
        background: C.accent, color: C.onAccent,
        fontFamily: "'DM Sans',sans-serif", fontSize: "11px", fontWeight: 700,
        letterSpacing: "0.14em", textTransform: "uppercase",
        cursor: "pointer", border: "none", borderRadius: "4px", textDecoration: "none",
      }}>
      Subscribe on LinkedIn →
    </a>
  );
}

export default function PerDiemPage() {
  const [view, setView] = useState("latest");
  const [latest, ...rest] = PER_DIEM_ISSUES;

  return (
    <Layout activePath="/per-diem">
      <style>{`
        .sp{padding:80px 80px;}
        .archive-row{display:grid;grid-template-columns:140px 1fr;gap:32px;align-items:baseline;}
        @media(max-width:768px){.sp{padding:64px 24px!important;}.archive-row{grid-template-columns:1fr!important;gap:4px!important;}}
      `}</style>

      {/* Header */}
      <div style={{ background: C.bgSection, padding: "80px 80px 48px", borderBottom: `1px solid ${C.borderSoft}` }} className="sp">
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", color: C.accent, marginBottom: "20px" }}>Per Diem · Published on LinkedIn</p>
          <h1 style={{ fontFamily: "'Instrument Serif',serif", fontSize: "clamp(28px,4.5vw,50px)", fontWeight: 400, color: C.textHigh, lineHeight: 1.15, marginBottom: "20px" }}>
            A daily exercise in connected thinking.
          </h1>

          <div style={{ display: "flex", gap: "24px" }}>
            {["latest", "connections"].map((v) => (
              <button key={v} onClick={() => setView(v)}
                style={{
                  background: "none", border: "none", cursor: "pointer", padding: "0 0 8px",
                  fontFamily: "'DM Sans',sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase",
                  color: view === v ? C.textHigh : C.textLow,
                  borderBottom: view === v ? `2px solid ${C.accent}` : "2px solid transparent",
                }}>
                {v === "latest" ? "Latest" : "Connections"}
              </button>
            ))}
          </div>
        </div>
      </div>

      {view === "latest" ? (
        <>
          {/* Latest issue — thesis-first */}
          <div className="sp" style={{ padding: "72px 80px", background: C.bg, borderBottom: `1px solid ${C.borderSoft}` }}>
            <div style={{ maxWidth: "760px", margin: "0 auto" }}>
              <Reveal>
                <a href={latest.url} target="_blank" rel="noreferrer" style={{ display: "block" }}>
                  {latest.coverImage && (
                    <div style={{ width: "100%", aspectRatio: "16/9", borderRadius: "6px", overflow: "hidden", marginBottom: "26px", backgroundImage: `url(${latest.coverImage})`, backgroundSize: "cover", backgroundPosition: "center" }} />
                  )}
                  {latest.connectionA && (
                    <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "10px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: C.accent, marginBottom: "16px" }}>
                      {latest.connectionA} <span style={{ opacity: 0.5 }}>↔</span> {latest.connectionB}
                    </p>
                  )}
                  <h2 style={{ fontFamily: "'Instrument Serif',serif", fontSize: "clamp(24px,3.6vw,38px)", fontStyle: "italic", color: C.textHigh, lineHeight: 1.28, marginBottom: "18px" }}>
                    {latest.thesis || latest.title}
                  </h2>
                  <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "11px", color: C.textLow, marginBottom: "22px" }}>{fmtDate(latest.publishedAt)}{latest.min ? ` · ${latest.min}` : ""}</p>
                  <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "10px", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: C.accent }}>Read the argument →</p>
                </a>
              </Reveal>
            </div>
          </div>

          {/* Archive — reverse chronological */}
          <div className="sp" style={{ padding: "64px 80px", background: C.bg }}>
            <div style={{ maxWidth: "760px", margin: "0 auto" }}>
              <Reveal>
                <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "0.28em", textTransform: "uppercase", color: C.accent, marginBottom: "24px" }}>Archive</p>
              </Reveal>
              <div style={{ display: "flex", flexDirection: "column" }}>
                {rest.map((issue, i) => (
                  <Reveal key={issue.id} delay={i * 0.04}>
                    <a href={issue.url} target="_blank" rel="noreferrer" style={{ display: "block", padding: "22px 0", borderBottom: i < rest.length - 1 ? `1px solid ${C.borderSoft}` : "none" }}>
                      <div className="archive-row">
                        <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "10.5px", color: C.textLow, letterSpacing: "0.04em" }}>{fmtDate(issue.publishedAt)}</p>
                        <div>
                          <p style={{ fontFamily: "'Instrument Serif',serif", fontSize: "18px", color: C.textHigh, lineHeight: 1.35, marginBottom: "4px" }}>{issue.title}</p>
                          {issue.tags?.length > 0 && (
                            <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "9.5px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: C.textLow }}>{issue.tags.join(" · ")}</p>
                          )}
                        </div>
                      </div>
                    </a>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </>
      ) : (
        /* Connections — the archive read as pairs, not dates */
        <div className="sp" style={{ padding: "64px 80px", background: C.bg }}>
          <div style={{ maxWidth: "760px", margin: "0 auto" }}>
            <Reveal>
              <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "13px", fontWeight: 300, color: C.textMid, lineHeight: 1.8, marginBottom: "36px", maxWidth: "56ch" }}>
                Every issue maps two ideas that don't normally share a sentence.
              </p>
            </Reveal>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {PER_DIEM_ISSUES.filter(i => i.connectionA).map((issue, i, arr) => (
                <Reveal key={issue.id} delay={(i % 6) * 0.04}>
                  <a href={issue.url} target="_blank" rel="noreferrer" style={{ display: "block", padding: "20px 0", borderBottom: i < arr.length - 1 ? `1px solid ${C.borderSoft}` : "none" }}>
                    <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "10px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: C.accent, marginBottom: "6px" }}>
                      {issue.connectionA} <span style={{ opacity: 0.5 }}>↔</span> {issue.connectionB}
                    </p>
                    <p style={{ fontFamily: "'Instrument Serif',serif", fontSize: "18px", fontStyle: "italic", color: C.textHigh, lineHeight: 1.35 }}>{issue.thesis || issue.title}</p>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Subscribe card */}
      <div className="sp" style={{ padding: "72px 80px", background: C.bgSection, borderTop: `1px solid ${C.borderSoft}` }}>
        <div style={{ maxWidth: "560px", margin: "0 auto" }}>
          <Reveal>
            <div style={{ background: C.bgCard, border: `1px solid ${C.border}`, borderRadius: "8px", padding: "36px 32px" }}>
              <div style={{ marginBottom: "18px" }}>
                <PerDiemWordmark size="lg" />
              </div>
              <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "12px", fontWeight: 300, color: C.textMid, lineHeight: 1.72, marginBottom: "24px" }}>
                Published on LinkedIn Newsletter. Subscribe there to get each issue directly.
              </p>
              <LinkedInSubscribeButton full />
            </div>
          </Reveal>
        </div>
      </div>
    </Layout>
  );
}
