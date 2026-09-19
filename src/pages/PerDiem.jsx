import { useState } from "react";
import Layout from "../components/Layout.jsx";
import { C, LAYOUT, PER_DIEM_LINKEDIN_URL } from "../constants.js";
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
        fontFamily: "'IBM Plex Sans',sans-serif", fontSize: "11px", fontWeight: 700,
        letterSpacing: "0.14em", textTransform: "uppercase",
        cursor: "pointer", border: "none", borderRadius: "4px", textDecoration: "none",
      }}>
      Subscribe on LinkedIn →
    </a>
  );
}

function ArchiveRow({ issue, isLast }) {
  return (
    <a href={issue.url} target="_blank" rel="noreferrer" style={{ display: "block", padding: "18px 0", borderBottom: isLast ? "none" : `1px solid ${C.borderSoft}` }}>
      <div className="archive-row">
        <div style={{
          width: "100%", aspectRatio: "16/9", borderRadius: "5px", overflow: "hidden", flexShrink: 0,
          background: issue.coverImage ? `url(${issue.coverImage}) center/cover` : C.accentFaint,
        }} />
        <p style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "10.5px", color: C.textLow }}>{fmtDate(issue.publishedAt)}</p>
        <div>
          <p style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: "16px", fontWeight: 600, color: C.textHigh, lineHeight: 1.35, marginBottom: "4px" }}>{issue.title}</p>
          {issue.tags?.length > 0 && (
            <p style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: "9.5px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: C.textLow }}>{issue.tags.join(" · ")}</p>
          )}
        </div>
      </div>
    </a>
  );
}

export default function PerDiemPage() {
  const [view, setView] = useState("latest");
  const [latest, ...rest] = PER_DIEM_ISSUES;

  return (
    <Layout activePath="/per-diem">
      <style>{`
        .sp{padding:${LAYOUT.padDesktop} 56px;}
        .archive-row{display:grid;grid-template-columns:96px 120px 1fr;gap:20px;align-items:center;}
        @media(max-width:768px){.sp{padding:${LAYOUT.padMobile} 24px!important;}.archive-row{grid-template-columns:64px 1fr!important;gap:14px!important;}.archive-row>p{display:none;}}
      `}</style>

      {/* Header */}
      <div style={{ background: C.bgSection, padding: "64px 56px 40px", borderBottom: `1px solid ${C.borderSoft}` }} className="sp">
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div style={{ marginBottom: "22px" }}><PerDiemWordmark size="lg" /></div>
          <h1 style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: "clamp(26px,4vw,42px)", fontWeight: 600, color: C.textHigh, lineHeight: 1.2, marginBottom: "20px" }}>
            A daily exercise in connected thinking.
          </h1>

          <div style={{ display: "flex", gap: "24px" }}>
            {["latest", "connections"].map((v) => (
              <button key={v} onClick={() => setView(v)}
                style={{
                  background: "none", border: "none", cursor: "pointer", padding: "0 0 8px",
                  fontFamily: "'IBM Plex Sans',sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase",
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
          {/* Latest issue — thesis-first, featured visual treatment */}
          <div className="sp" style={{ padding: "56px 56px", background: C.bg, borderBottom: `1px solid ${C.borderSoft}` }}>
            <div style={{ maxWidth: "900px", margin: "0 auto" }}>
              <Reveal>
                <a href={latest.url} target="_blank" rel="noreferrer" style={{ display: "block" }}>
                  {latest.coverImage && (
                    <div style={{ width: "100%", aspectRatio: "21/9", borderRadius: "8px", overflow: "hidden", marginBottom: "26px", backgroundImage: `url(${latest.coverImage})`, backgroundSize: "cover", backgroundPosition: "center" }} />
                  )}
                  {latest.connectionA && (
                    <p style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: "10px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: C.accent, marginBottom: "16px" }}>
                      {latest.connectionA} <span style={{ opacity: 0.5 }}>↔</span> {latest.connectionB}
                    </p>
                  )}
                  <h2 style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: "clamp(24px,3.6vw,36px)", fontWeight: 600, color: C.textHigh, lineHeight: 1.28, marginBottom: "18px", maxWidth: "22ch" }}>
                    {latest.thesis || latest.title}
                  </h2>
                  <p style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: "11px", color: C.textLow, marginBottom: "22px" }}>{fmtDate(latest.publishedAt)}{latest.min ? ` · ${latest.min}` : ""}</p>
                  <p style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: "10px", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: C.accent }}>Read the argument →</p>
                </a>
              </Reveal>
            </div>
          </div>

          {/* Archive — dense, reverse chronological, thumbnail-led */}
          <div className="sp" style={{ padding: "48px 56px", background: C.bg }}>
            <div style={{ maxWidth: "900px", margin: "0 auto" }}>
              <Reveal>
                <p style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "0.28em", textTransform: "uppercase", color: C.accent, marginBottom: "18px" }}>Archive</p>
              </Reveal>
              <div style={{ display: "flex", flexDirection: "column" }}>
                {rest.map((issue, i) => (
                  <Reveal key={issue.id} delay={Math.min(i * 0.03, 0.3)}>
                    <ArchiveRow issue={issue} isLast={i === rest.length - 1} />
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </>
      ) : (
        /* Connections — the archive read as pairs, not dates */
        <div className="sp" style={{ padding: "48px 56px", background: C.bg }}>
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            <Reveal>
              <p style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: "14px", fontWeight: 400, color: C.textMid, lineHeight: 1.7, marginBottom: "32px", maxWidth: "60ch" }}>
                Every issue maps two ideas that don't normally share a sentence.
              </p>
            </Reveal>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {PER_DIEM_ISSUES.filter(i => i.connectionA).map((issue, i, arr) => (
                <Reveal key={issue.id} delay={Math.min((i % 6) * 0.03, 0.2)}>
                  <a href={issue.url} target="_blank" rel="noreferrer" style={{ display: "block", padding: "18px 0", borderBottom: i < arr.length - 1 ? `1px solid ${C.borderSoft}` : "none" }}>
                    <p style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: "10px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: C.accent, marginBottom: "6px" }}>
                      {issue.connectionA} <span style={{ opacity: 0.5 }}>↔</span> {issue.connectionB}
                    </p>
                    <p style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: "17px", fontWeight: 600, color: C.textHigh, lineHeight: 1.35 }}>{issue.thesis || issue.title}</p>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Subscribe card */}
      <div className="sp" style={{ padding: "56px 56px", background: C.bgSection, borderTop: `1px solid ${C.borderSoft}` }}>
        <div style={{ maxWidth: "560px", margin: "0 auto" }}>
          <Reveal>
            <div style={{ background: C.bgCard, border: `1px solid ${C.border}`, borderRadius: "8px", padding: "32px 30px" }}>
              <div style={{ marginBottom: "16px" }}>
                <PerDiemWordmark size="lg" />
              </div>
              <p style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: "13px", fontWeight: 400, color: C.textMid, lineHeight: 1.65, marginBottom: "22px" }}>
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
