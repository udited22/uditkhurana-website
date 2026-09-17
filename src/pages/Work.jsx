import Layout from "../components/Layout.jsx";
import { C, SOCIAL, linkedInEmbedSrc, JOURNEY, PHOTO, LENSES } from "../constants.js";
import { PER_DIEM_ISSUES } from "../content/per-diem.js";
import Reveal from "../components/Reveal.jsx";

const HIGHLIGHTED = PER_DIEM_ISSUES.slice(0, 3);

export default function WorkPage() {
  const navigate = (href) => {
    if (href.startsWith("http")) { window.open(href, "_blank"); return; }
    window.history.pushState({}, "", href);
    window.dispatchEvent(new PopStateEvent("popstate"));
  };

  return (
    <Layout activePath="/work">
      <style>{`
        .li-embed-wrap{background:${C.bgCard};border:1px solid ${C.borderSoft};border-radius:6px;overflow:hidden;}
        .li-highlight-grid{display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px;}
        .work-hero{display:grid;grid-template-columns:240px 1fr;gap:56px;align-items:center;}
        .sp{padding:80px 80px;}
        .lens-row{display:flex;flex-wrap:wrap;gap:0;}
        .chapter{display:grid;grid-template-columns:140px 1fr;gap:0;}
        @media(max-width:900px){.li-highlight-grid{grid-template-columns:1fr 1fr!important;}.work-hero{grid-template-columns:1fr!important;}}
        @media(max-width:768px){.li-highlight-grid{grid-template-columns:1fr!important;}.sp{padding:64px 24px!important;}.chapter{grid-template-columns:1fr!important;}}
      `}</style>

      {/* Hero */}
      <div style={{ background: C.bgSection, padding: "80px 80px 64px", borderBottom: `1px solid ${C.borderSoft}` }} className="sp">
        <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
          <div className="work-hero">
            <div style={{ width: "100%", aspectRatio: "1/1", borderRadius: "8px", overflow: "hidden", border: `1px solid ${C.border}`, backgroundImage: `url(${PHOTO.product})`, backgroundSize: "cover", backgroundPosition: "center top", flexShrink: 0 }} />
            <div>
              <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", color: C.accent, marginBottom: "14px" }}>Work</p>
              <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(28px,4vw,48px)", fontWeight: 400, color: C.textHigh, lineHeight: 1.1, marginBottom: "16px" }}>
                What I build, and <em style={{ fontStyle: "italic", color: C.accent }}>what's underneath it.</em>
              </h1>
              <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "14px", fontWeight: 300, color: C.textMid, lineHeight: 1.8, maxWidth: "540px" }}>
                Ten-plus years across financial services, capital markets, investing, lending, wealth, and crypto — Principal Product Manager at CoinDCX today. The category keeps changing; the fascination with the systems underneath it hasn't.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Multi-lens framing */}
      <div className="sp" style={{ padding: "56px 80px", background: C.bg, borderBottom: `1px solid ${C.borderSoft}` }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <Reveal>
            <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "20px", fontStyle: "italic", color: C.textHigh, lineHeight: 1.6, marginBottom: "22px" }}>
              Sometimes the interesting product problem isn't on the screen at all. It's three layers underneath it.
            </p>
            <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "13px", fontWeight: 300, color: C.textMid, lineHeight: 1.8, marginBottom: "20px" }}>
              I tend to look at a problem through several lenses before deciding which one actually explains it:
            </p>
            <div className="lens-row">
              {LENSES.map((l, i) => (
                <span key={l} style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "11px", fontWeight: 500, color: C.textMid, paddingRight: "14px", marginRight: "14px", borderRight: i < LENSES.length - 1 ? `1px solid ${C.borderSoft}` : "none", marginBottom: "8px" }}>{l}</span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>

      {/* Journey */}
      <div className="sp" style={{ padding: "64px 80px", background: C.bg }}>
        <div style={{ maxWidth: "780px", margin: "0 auto" }}>
          <Reveal>
            <h2 style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", color: C.accent, marginBottom: "32px" }}>The Journey</h2>
          </Reveal>
          {JOURNEY.map((j, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <div style={{ paddingBottom: "40px", marginBottom: "40px", borderBottom: i < JOURNEY.length - 1 ? `1px solid ${C.borderSoft}` : "none" }}>
                <div className="chapter">
                  <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "10.5px", fontWeight: 600, color: j.active ? C.accent : C.textLow, marginBottom: "6px" }}>{j.years}</p>
                  <div>
                    <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "20px", fontWeight: 500, color: C.textHigh, marginBottom: "10px" }}>
                      {j.role} <span style={{ color: j.active ? C.accent : C.textLow }}>· {j.company}</span>
                    </h3>

                    {j.mandate ? (
                      <>
                        <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: C.textLow, marginBottom: "6px" }}>Mandate</p>
                        <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "13px", fontWeight: 300, color: C.textMid, lineHeight: 1.75, marginBottom: "16px", maxWidth: "58ch" }}>{j.mandate}</p>
                        <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: C.textLow, marginBottom: "6px" }}>Scope</p>
                        <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "13px", fontWeight: 300, color: C.textMid, lineHeight: 1.75, marginBottom: "16px", maxWidth: "58ch" }}>{j.scope}</p>
                        <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: C.textLow, marginBottom: "8px" }}>Selected Work</p>
                        <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "8px" }}>
                          {j.selectedWork.map((s, k) => (
                            <li key={k} style={{ display: "flex", gap: "10px", fontFamily: "'DM Sans',sans-serif", fontSize: "13px", fontWeight: 300, color: C.textMid, lineHeight: 1.7, maxWidth: "58ch" }}>
                              <span style={{ color: C.accent, flexShrink: 0 }}>—</span>{s}
                            </li>
                          ))}
                        </ul>
                      </>
                    ) : (
                      <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "12.5px", fontWeight: 300, color: C.textMid, lineHeight: 1.75, maxWidth: "56ch" }}>{j.scope}</p>
                    )}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Featured on Per Diem */}
      <div className="sp" style={{ padding: "56px 80px", background: C.bgSection, borderTop: `1px solid ${C.borderSoft}` }}>
        <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
          <Reveal>
            <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", flexWrap: "wrap", gap: "10px", marginBottom: "24px" }}>
              <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", color: C.accent }}>Recent Writing, via Per Diem</p>
              <a href="/per-diem" onClick={e => { e.preventDefault(); navigate("/per-diem"); }} style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "10px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: C.textMid }}>Full archive →</a>
            </div>
          </Reveal>
          <div className="li-highlight-grid">
            {HIGHLIGHTED.map((w, i) => {
              const src = linkedInEmbedSrc(w.url);
              return (
                <Reveal key={w.id} delay={i * 0.06}>
                  <div className="li-embed-wrap">
                    {src ? (
                      <iframe src={src} title={w.title} height="480" width="100%" frameBorder="0" allowFullScreen loading="lazy" style={{ display: "block" }} />
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

      {/* Selected Work teaser */}
      <div className="sp" style={{ padding: "48px 80px", background: C.bg, textAlign: "center" }}>
        <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
          <Reveal>
            <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "17px", fontStyle: "italic", color: C.textMid }}>
              Curious what I build outside the day job?{" "}
              <a href="/projects" onClick={e => { e.preventDefault(); navigate("/projects"); }} style={{ color: C.accent, fontStyle: "normal", fontWeight: 500 }}>
                See Selected Work →
              </a>
            </p>
          </Reveal>
        </div>
      </div>

      {/* CTA to Advisory */}
      <div className="sp" style={{ padding: "72px 80px", background: C.bgSection, borderTop: `1px solid ${C.borderSoft}`, textAlign: "center" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <Reveal>
            <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", color: C.accent, marginBottom: "16px" }}>Advisory</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(20px,2.6vw,30px)", fontWeight: 400, color: C.textHigh, lineHeight: 1.25, marginBottom: "24px" }}>
              Building something in fintech, crypto, or product? Let's talk.
            </h2>
            <button onClick={() => navigate("/advisory")}
              style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "13px 30px", background: "transparent", color: C.accent, fontFamily: "'DM Sans',sans-serif", fontSize: "11px", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", cursor: "pointer", border: `1.5px solid ${C.border}`, borderRadius: "4px" }}>
              See How I Can Help →
            </button>
          </Reveal>
        </div>
      </div>
    </Layout>
  );
}
