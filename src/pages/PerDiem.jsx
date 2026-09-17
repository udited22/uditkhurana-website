import Layout from "../components/Layout.jsx";
import { C, PER_DIEM_LINKEDIN_URL } from "../constants.js";
import { PerDiemWordmark } from "../components/Layout.jsx";
import { PER_DIEM_ISSUES } from "../content/per-diem.js";
import Reveal from "../components/Reveal.jsx";

function fmtDate(iso) {
  return new Date(iso + "T00:00:00").toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}

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
        background: C.accent, color: C.onAccent,
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
  const [latest, ...rest] = PER_DIEM_ISSUES;

  return (
    <Layout activePath="/per-diem">
      <style>{`
        .sp{padding:80px 80px;}
        .archive-row{display:grid;grid-template-columns:140px 1fr;gap:32px;align-items:baseline;}
        @media(max-width:768px){.sp{padding:64px 24px!important;}.archive-row{grid-template-columns:1fr!important;gap:4px!important;}}
      `}</style>

      {/* Header */}
      <div style={{ background: C.bgSection, padding: "80px 80px 64px", borderBottom: `1px solid ${C.borderSoft}` }} className="sp">
        <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
          <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", color: C.accent, marginBottom: "20px" }}>Per Diem · Published on LinkedIn</p>
          <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(28px,4vw,52px)", fontWeight: 400, color: C.textHigh, lineHeight: 1.1, marginBottom: "16px" }}>
            An ongoing writing<br /><em style={{ fontStyle: "italic", color: C.accent }}>experiment.</em>
          </h1>
          <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "14px", fontWeight: 300, color: C.textMid, lineHeight: 1.8, maxWidth: "560px" }}>
            An ongoing writing experiment on markets, technology, products, and the systems connecting them. Mostly an excuse to follow interesting rabbit holes and occasionally connect dots that probably weren't meant to be connected.
          </p>
        </div>
      </div>

      {/* Latest issue — large editorial treatment */}
      <div className="sp" style={{ padding: "72px 80px", background: C.bg, borderBottom: `1px solid ${C.borderSoft}` }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <Reveal>
            <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "0.28em", textTransform: "uppercase", color: C.accent, marginBottom: "18px" }}>Latest Issue</p>
            <a href={latest.url} target="_blank" rel="noreferrer" style={{ display: "block" }}>
              {latest.coverImage && (
                <div style={{ width: "100%", aspectRatio: "16/9", borderRadius: "6px", overflow: "hidden", marginBottom: "22px", backgroundImage: `url(${latest.coverImage})`, backgroundSize: "cover", backgroundPosition: "center" }} />
              )}
              <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "11px", color: C.textLow, marginBottom: "10px" }}>{fmtDate(latest.publishedAt)}{latest.min ? ` · ${latest.min}` : ""}</p>
              <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(24px,3.4vw,36px)", fontWeight: 500, color: C.textHigh, lineHeight: 1.25, marginBottom: "16px" }}>{latest.title}</h2>
              <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "14.5px", fontWeight: 300, color: C.textMid, lineHeight: 1.8, marginBottom: "20px" }}>{latest.excerpt}</p>
              <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "10px", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: C.accent }}>Read on LinkedIn →</p>
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
                      <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "18px", fontWeight: 500, color: C.textHigh, lineHeight: 1.35, marginBottom: "4px" }}>{issue.title}</p>
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
