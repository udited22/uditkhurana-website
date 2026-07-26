import { useState, useMemo } from "react";
import Layout from "../components/Layout.jsx";
import { C, WRITINGS, SOCIAL, linkedInEmbedSrc, JOURNEY, PHOTO, PILLAR_ACCENTS } from "../constants.js";
import Reveal from "../components/Reveal.jsx";

const A = PILLAR_ACCENTS.product;
const PLATFORM_COLORS = { LinkedIn: "#0A66C2", Essay: "#007A8A", "Per Diem": "#C9A24B" };

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

export default function WorkPage() {
  const [tag, setTag] = useState("All");
  const filtered = useMemo(() => tag === "All" ? MORE : MORE.filter(w => w.tag === tag), [tag]);

  const navigate = (href) => {
    if (href.startsWith("http")) { window.open(href, "_blank"); return; }
    window.history.pushState({}, "", href);
    window.dispatchEvent(new PopStateEvent("popstate"));
  };

  return (
    <Layout activePath="/work">
      <style>{`
        .writing-card{background:${C.bgCard};border:1px solid ${C.borderSoft};border-radius:6px;padding:26px;transition:all .25s;cursor:pointer;display:flex;flex-direction:column;height:100%;}
        .writing-card:hover{border-color:${A.border};background:${C.bgLight};}
        .li-embed-wrap{background:${C.bgCard};border:1px solid ${C.borderSoft};border-radius:6px;overflow:hidden;}
        .li-highlight-grid{display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px;}
        .wgrid{display:grid;grid-template-columns:1fr 1fr;gap:12px;}
        .work-hero{display:grid;grid-template-columns:260px 1fr;gap:56px;align-items:center;}
        .sp{padding:80px 80px;}
        .tag-pill{font-family:'DM Sans',sans-serif;font-size:10px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;padding:7px 15px;border-radius:20px;cursor:pointer;border:1px solid ${C.borderSoft};background:transparent;color:${C.textLow};transition:all .2s;}
        .tag-pill:hover{color:${C.textHigh};border-color:${A.border};}
        .tag-pill.active{background:${A.accent};color:#0d1420;border-color:${A.accent};}
        .timeline-row{display:grid;grid-template-columns:120px 32px 1fr;gap:0;}
        @media(max-width:900px){.li-highlight-grid{grid-template-columns:1fr 1fr!important;}.work-hero{grid-template-columns:1fr!important;}}
        @media(max-width:768px){.wgrid{grid-template-columns:1fr!important;}.li-highlight-grid{grid-template-columns:1fr!important;}.sp{padding:64px 24px!important;}.timeline-row{grid-template-columns:24px 1fr!important;}.timeline-years{display:none!important;}.timeline-years-mobile{display:block!important;}}
      `}</style>

      {/* Hero */}
      <div style={{ background: C.bgSection, padding: "80px 80px 64px", borderBottom: `1px solid ${C.borderSoft}` }} className="sp">
        <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
          <div className="work-hero">
            <div style={{ width: "100%", aspectRatio: "1/1", borderRadius: "8px", overflow: "hidden", border: `1px solid ${A.border}`, backgroundImage: `url(${PHOTO.product})`, backgroundSize: "cover", backgroundPosition: "center top", flexShrink: 0 }} />
            <div>
              <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", color: A.accent, marginBottom: "14px" }}>Product & Fintech</p>
              <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(28px,4vw,50px)", fontWeight: 400, color: C.textHigh, lineHeight: 1.1, marginBottom: "16px" }}>
                Product leadership across<br /><em style={{ fontStyle: "italic", color: A.accent }}>every era of how India invests.</em>
              </h1>
              <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "14px", fontWeight: 300, color: C.textMid, lineHeight: 1.8, maxWidth: "540px" }}>
                Principal Product Manager at CoinDCX. TradFi → Fintech → Crypto — 10+ years building the infrastructure Indians use to grow their money.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Journey — full timeline */}
      <div className="sp" style={{ padding: "64px 80px", background: C.bg }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <Reveal>
            <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", color: A.accent, marginBottom: "14px" }}>The Journey</p>
            <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "14px", fontWeight: 300, color: C.textMid, lineHeight: 1.85, marginBottom: "36px" }}>
              Senior fintech product leader with 10+ years of building regulated investment infrastructure and leading high-impact teams, including direct P&amp;L ownership; most recently managing 3 concurrent product charters at CoinDCX — GCC International Expansion, Exchange Infrastructure, and Growth — and previously leading a team of PMs at smallcase &amp; Tickertape. Track record of 0→1 platform builds across MF, equities, and crypto; 3× adoption improvements; and scaling regulated trading and investment products.
            </p>
          </Reveal>
          {JOURNEY.map((j, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <div className="timeline-row">
                <p className="timeline-years" style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "10.5px", fontWeight: 600, color: j.active ? A.accent : C.textLow, paddingTop: "2px", whiteSpace: "nowrap" }}>{j.years}</p>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: j.active ? A.accent : C.textLow, flexShrink: 0, marginTop: "4px" }} />
                  {i < JOURNEY.length - 1 && <span style={{ width: "1px", flex: 1, minHeight: "36px", background: C.borderSoft }} />}
                </div>
                <div style={{ paddingBottom: "28px" }}>
                  <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "18px", fontWeight: 500, color: j.active ? C.textHigh : C.textMid, marginBottom: "2px" }}>
                    {j.role} <span style={{ color: j.active ? A.accent : C.textLow }}>· {j.company}</span>
                  </p>
                  <p className="timeline-years-mobile" style={{ display: "none", fontFamily: "'DM Sans',sans-serif", fontSize: "9px", fontWeight: 600, color: C.textLow, marginBottom: "6px" }}>{j.years}</p>
                  <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "12.5px", fontWeight: 300, color: C.textMid, lineHeight: 1.7, maxWidth: "56ch" }}>{j.sub}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Featured on LinkedIn */}
      <div className="sp" style={{ padding: "40px 80px", background: C.bgSection }}>
        <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
          <Reveal>
            <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", flexWrap: "wrap", gap: "10px", marginBottom: "24px" }}>
              <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", color: A.accent }}>Recent &amp; Highlighted, Straight From LinkedIn</p>
              <a href={SOCIAL.linkedin} target="_blank" rel="noreferrer" style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "10px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: C.textMid }}>View full profile →</a>
            </div>
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

      {/* More writing */}
      <div className="sp" style={{ padding: "64px 80px", background: C.bgSection }}>
        <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", flexWrap: "wrap", gap: "10px", marginBottom: "20px" }}>
            <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", color: A.accent }}>More Writing</p>
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
                        <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "8px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: A.accent, background: A.soft, padding: "3px 9px", borderRadius: "3px" }}>{w.tag}</span>
                      </div>
                      <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "11px", color: C.textLow }}>{w.min} read</span>
                    </div>
                    <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "19px", fontWeight: 500, color: C.textHigh, lineHeight: 1.28, marginBottom: "10px", flex: 1 }}>{w.title}</h3>
                    <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "12.5px", fontWeight: 300, lineHeight: 1.72, color: C.textMid, marginBottom: "18px" }}>{w.summary}</p>
                    <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: PLATFORM_COLORS[w.platform] || A.accent }}>
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

      {/* CTA to Advisory */}
      <div className="sp" style={{ padding: "72px 80px", background: C.bg, borderTop: `1px solid ${C.borderSoft}`, textAlign: "center" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <Reveal>
            <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", color: A.accent, marginBottom: "16px" }}>Advisory</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(20px,2.6vw,30px)", fontWeight: 400, color: C.textHigh, lineHeight: 1.25, marginBottom: "24px" }}>
              Building something in fintech, crypto, or product? Let's talk.
            </h2>
            <button onClick={() => navigate("/advisory")}
              style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "13px 30px", background: "transparent", color: A.accent, fontFamily: "'DM Sans',sans-serif", fontSize: "11px", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", cursor: "pointer", border: `1.5px solid ${A.border}`, borderRadius: "4px" }}>
              See How I Can Help →
            </button>
          </Reveal>
        </div>
      </div>
    </Layout>
  );
}
