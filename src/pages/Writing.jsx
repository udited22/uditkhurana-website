import { useState, useMemo } from "react";
import Layout from "../components/Layout.jsx";
import { C, WRITINGS, SOCIAL, linkedInEmbedSrc } from "../constants.js";
import Reveal from "../components/Reveal.jsx";

const PLATFORM_COLORS = { LinkedIn: "#0A66C2", Essay: "#007A8A", "Per Diem": "#1C8FA6" };

function PlatformBadge({ platform }) {
  const col = PLATFORM_COLORS[platform] || "#007A8A";
  return (
    <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "8px", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: col, background: `${col}18`, padding: "3px 10px", borderRadius: "3px", border: `1px solid ${col}28` }}>
      {platform}
    </span>
  );
}

const HIGHLIGHTED = WRITINGS.slice(0, 3);
const MORE = WRITINGS.slice(3);
const TAGS = ["All", ...new Set(MORE.map(w => w.tag))];

export default function WritingPage() {
  const [tag, setTag] = useState("All");
  const filtered = useMemo(() => tag === "All" ? MORE : MORE.filter(w => w.tag === tag), [tag]);

  const navigate = (href) => {
    if (href.startsWith("http")) { window.open(href, "_blank"); return; }
    window.history.pushState({}, "", href);
    window.dispatchEvent(new PopStateEvent("popstate"));
  };

  return (
    <Layout activePath="/writing">
      <style>{`
        .writing-card{background:${C.bgCard};border:1px solid ${C.borderSoft};border-radius:6px;padding:26px;transition:all .25s;cursor:pointer;display:flex;flex-direction:column;height:100%;}
        .writing-card:hover{border-color:${C.border};background:${C.bgLight};}
        .li-embed-wrap{background:${C.bgCard};border:1px solid ${C.borderSoft};border-radius:6px;overflow:hidden;}
        .li-highlight-grid{display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px;}
        .wgrid{display:grid;grid-template-columns:1fr 1fr;gap:12px;}
        .sp{padding:80px 80px;}
        .tag-pill{font-family:'DM Sans',sans-serif;font-size:10px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;padding:7px 15px;border-radius:20px;cursor:pointer;border:1px solid ${C.borderSoft};background:transparent;color:${C.textLow};transition:all .2s;}
        .tag-pill:hover{color:${C.textHigh};border-color:${C.border};}
        .tag-pill.active{background:${C.cyan};color:#071424;border-color:${C.cyan};}
        @media(max-width:900px){.li-highlight-grid{grid-template-columns:1fr 1fr!important;}}
        @media(max-width:768px){.wgrid{grid-template-columns:1fr!important;}.li-highlight-grid{grid-template-columns:1fr!important;}.sp{padding:64px 24px!important;}}
      `}</style>

      <div style={{ background: C.bgSection, padding: "80px 80px 64px", borderBottom: `1px solid ${C.borderSoft}` }} className="sp">
        <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
          <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", color: C.cyan, marginBottom: "14px" }}>Writing & Notes</p>
          <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(28px,4vw,52px)", fontWeight: 400, color: C.textHigh, lineHeight: 1.1, marginBottom: "16px" }}>
            Recent &amp; highlighted,<br /><em style={{ fontStyle: "italic", color: C.cyan }}>straight from LinkedIn.</em>
          </h1>
          <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "14px", fontWeight: 300, color: C.textMid, lineHeight: 1.8, maxWidth: "560px" }}>
            Field notes on fintech, product, wealth, and systems. LinkedIn doesn't offer a way to auto-sync a personal feed, so these are hand-picked and embedded live — updated as new pieces publish.
          </p>
        </div>
      </div>

      <div className="sp" style={{ padding: "72px 80px 40px", background: C.bg }}>
        <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
          <Reveal>
            <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", color: C.cyan, marginBottom: "24px" }}>Highlighted</p>
          </Reveal>
          <div className="li-highlight-grid">
            {HIGHLIGHTED.map((w, i) => {
              const src = linkedInEmbedSrc(w.url);
              return (
                <Reveal key={w.url} delay={i * 0.06}>
                  <div className="li-embed-wrap">
                    {src ? (
                      <iframe src={src} title={w.title} height="520" width="100%" frameBorder="0" allowFullScreen loading="lazy" style={{ display: "block" }} />
                    ) : (
                      <a href={w.url} target="_blank" rel="noreferrer" style={{ display: "block", padding: "24px" }}>
                        <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "16px", color: C.textHigh }}>{w.title}</p>
                      </a>
                    )}
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>

      <div className="sp" style={{ padding: "40px 80px 80px", background: C.bg }}>
        <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", flexWrap: "wrap", gap: "10px", marginBottom: "20px" }}>
            <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", color: C.cyan }}>More Writing</p>
            <a href={SOCIAL.linkedin} target="_blank" rel="noreferrer" style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "10px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: C.textMid }}>Full archive on LinkedIn →</a>
          </div>

          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "26px" }}>
            {TAGS.map(t => (
              <button key={t} className={`tag-pill${tag === t ? " active" : ""}`} onClick={() => setTag(t)}>{t}</button>
            ))}
          </div>

          <div className="wgrid">
            {filtered.map((w, i) => {
              const internal = !w.url.startsWith("http");
              return (
                <a key={i} href={w.url} target={internal ? undefined : "_blank"} rel={internal ? undefined : "noreferrer"}
                  onClick={internal ? (e => { e.preventDefault(); navigate(w.url); }) : undefined}
                  style={{ display: "block", height: "100%" }}>
                  <div className="writing-card">
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px" }}>
                      <div style={{ display: "flex", gap: "8px" }}>
                        <PlatformBadge platform={w.platform} />
                        <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "8px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: C.cyan, background: "rgba(28,143,166,0.1)", padding: "3px 9px", borderRadius: "3px" }}>{w.tag}</span>
                      </div>
                      <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "11px", color: C.textLow }}>{w.min} read</span>
                    </div>
                    <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "19px", fontWeight: 500, color: C.textHigh, lineHeight: 1.28, marginBottom: "10px", flex: 1 }}>{w.title}</h3>
                    <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "12.5px", fontWeight: 300, lineHeight: 1.72, color: C.textMid, marginBottom: "18px" }}>{w.summary}</p>
                    <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: PLATFORM_COLORS[w.platform] || C.cyan }}>
                      {internal ? "Read Essay →" : "Read on LinkedIn →"}
                    </p>
                  </div>
                </a>
              );
            })}
            {filtered.length === 0 && (
              <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "13px", color: C.textLow }}>Nothing tagged "{tag}" yet.</p>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
