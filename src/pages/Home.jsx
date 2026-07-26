import Layout from "../components/Layout.jsx";
import { C, PILLARS, CRED, SOCIAL, PHOTO } from "../constants.js";
import Reveal from "../components/Reveal.jsx";

const LI = () => <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>;

export default function HomePage() {
  const navigate = (href) => {
    if (href.startsWith("http")) { window.open(href, "_blank"); return; }
    window.history.pushState({}, "", href);
    window.dispatchEvent(new PopStateEvent("popstate"));
  };

  return (
    <Layout activePath="/">
      <style>{`
        @keyframes fadeUp{from{opacity:0;transform:translateY(20px);}to{opacity:1;transform:none;}}
        .cred-row{display:flex;justify-content:space-between;flex-wrap:wrap;}
        .pillar-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;}
        .pillar-card{position:relative;border-radius:8px;overflow:hidden;aspect-ratio:3/4;display:flex;flex-direction:column;justify-content:flex-end;cursor:pointer;background-size:cover;background-position:center;transition:transform .35s ease;}
        .pillar-card:hover{transform:translateY(-4px);}
        .close-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px;}
        @media(max-width:900px){.pillar-grid{grid-template-columns:1fr!important;}.pillar-card{aspect-ratio:16/10!important;}}
        @media(max-width:768px){
          .hero-ctas{flex-direction:column!important;align-items:flex-start!important;}
          .close-grid{grid-template-columns:1fr!important;}
          .hero-inner{padding:32px 28px 48px!important;}
          .section-pad{padding:64px 28px!important;}
        }
      `}</style>

      {/* ── SECTION 1: BANNER + IDENTITY (LinkedIn-cover-style) ─── */}
      <div style={{ width: "100%", height: "clamp(150px, 22vw, 300px)", backgroundImage: `url(${PHOTO.heroLandscape})`, backgroundSize: "cover", backgroundPosition: "center" }} />
      <div style={{ background: C.bgSection, borderBottom: `1px solid ${C.borderSoft}` }}>
        <div className="hero-inner" style={{ padding: "40px 80px 56px", maxWidth: "1080px", margin: "0 auto" }}>
          <div style={{ maxWidth: "860px" }}>
            <div style={{ animation: "fadeUp .6s ease .05s both" }}>
              <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "10px", fontWeight: 700, letterSpacing: "0.28em", textTransform: "uppercase", color: C.gold, marginBottom: "10px" }}>Udit Khurana · Living The Eclectic Life</p>
              <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "16px", fontWeight: 600, color: C.textHigh, marginBottom: "22px", letterSpacing: "0.01em" }}>
                Principal Product Manager · CoinDCX · India's Leading Crypto Exchange
              </p>
            </div>

            <div style={{ animation: "fadeUp .6s ease .12s both" }}>
              <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(28px,4vw,46px)", fontWeight: 400, lineHeight: 1.14, color: C.textHigh, letterSpacing: "-0.01em", marginBottom: "16px" }}>
                Product leadership, adventure,<br />and the discipline that <em style={{ fontStyle: "italic", color: C.gold }}>connects them.</em>
              </h1>
            </div>

            <div style={{ animation: "fadeUp .6s ease .2s both" }}>
              <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "13.5px", fontWeight: 300, lineHeight: 1.8, color: C.textMid, maxWidth: "540px", marginBottom: "30px" }}>
                10+ years building the infrastructure Indians use to grow their money. A PADI Advanced Open Water Diver and Ironman 70.3 finisher. Three sides of one operating system.
              </p>
            </div>

            <div className="hero-ctas" style={{ display: "flex", gap: "12px", animation: "fadeUp .6s ease .28s both" }}>
              <a href={SOCIAL.linkedin} target="_blank" rel="noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "12px 26px", background: C.gold, color: "#171008", fontFamily: "'DM Sans',sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", cursor: "pointer", border: "none", borderRadius: "4px", textDecoration: "none" }}>
                <LI /> Connect on LinkedIn
              </a>
              <button onClick={() => navigate("/about")}
                style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "12px 26px", background: "transparent", color: C.textHigh, fontFamily: "'DM Sans',sans-serif", fontSize: "11px", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", cursor: "pointer", border: `1.5px solid ${C.borderSoft}`, borderRadius: "4px" }}>
                The Full Story
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── SECTION 2: CRED STRIP ───────────────────────────────── */}
      <div style={{ background: C.bgCard, borderBottom: `1px solid ${C.borderSoft}` }}>
        <div className="cred-row" style={{ maxWidth: "1080px", margin: "0 auto", padding: "0 80px" }}>
          {CRED.map((c, i) => (
            <div key={i} style={{ padding: "16px 20px", borderRight: i < CRED.length - 1 ? `1px solid ${C.borderSoft}` : "none", flex: "1 1 auto" }}>
              <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "15px", fontWeight: 500, color: C.gold }}>{c.val}</p>
              <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "9px", color: C.textLow, letterSpacing: "0.08em", marginTop: "2px" }}>{c.sub}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── SECTION 3: THE THREE PILLARS ────────────────────────── */}
      <section className="section-pad" style={{ padding: "80px 80px", background: C.bg }}>
        <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
          <Reveal>
            <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", color: C.gold, marginBottom: "10px" }}>Three Sides, One System</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(22px,3vw,34px)", fontWeight: 400, color: C.textHigh, marginBottom: "40px" }}>
              Choose your door.
            </h2>
          </Reveal>

          <div className="pillar-grid">
            {PILLARS.map((p, i) => (
              <Reveal key={p.key} delay={i * 0.08}>
                <div className="pillar-card" onClick={() => navigate(p.href)} style={{ backgroundImage: `url(${p.photo})`, border: `1px solid ${p.border}` }}>
                  <div style={{ position: "absolute", inset: 0, background: `linear-gradient(180deg, rgba(11,11,12,0) 35%, rgba(11,11,12,0.92) 100%)` }} />
                  <div style={{ position: "relative", zIndex: 1, padding: "22px 20px" }}>
                    <span style={{ display: "inline-block", fontFamily: "'DM Sans',sans-serif", fontSize: "8.5px", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: p.accent, background: p.soft, border: `1px solid ${p.border}`, padding: "4px 10px", borderRadius: "20px", marginBottom: "12px" }}>{p.credLine}</span>
                    <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "24px", fontWeight: 500, color: "#fff", lineHeight: 1.15, marginBottom: "8px" }}>{p.title}</h3>
                    <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "12px", fontWeight: 300, lineHeight: 1.6, color: "rgba(255,255,255,0.75)", marginBottom: "14px" }}>{p.tagline}</p>
                    <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: p.accent }}>Explore →</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 4: CLOSING — ABOUT / ADVISORY ───────────────── */}
      <section className="section-pad" style={{ padding: "0 80px 80px", background: C.bg }}>
        <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
          <div className="close-grid">
            <Reveal>
              <div onClick={() => navigate("/about")} style={{ cursor: "pointer", background: C.bgCard, border: `1px solid ${C.borderSoft}`, borderRadius: "8px", padding: "30px 28px", height: "100%" }}>
                <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "8.5px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: C.gold, marginBottom: "12px" }}>About</p>
                <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "20px", fontWeight: 500, color: C.textHigh, marginBottom: "10px" }}>Many things. Deeply integrated.</h3>
                <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "12.5px", fontWeight: 300, color: C.textMid, lineHeight: 1.7, marginBottom: "16px" }}>The full journey — credentials, companies, and the philosophy that ties product, adventure, and fitness together.</p>
                <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: C.gold }}>Read the Story →</p>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div onClick={() => navigate("/advisory")} style={{ cursor: "pointer", background: C.bgCard, border: `1px solid ${C.borderSoft}`, borderRadius: "8px", padding: "30px 28px", height: "100%" }}>
                <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "8.5px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: C.gold, marginBottom: "12px" }}>Advisory</p>
                <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "20px", fontWeight: 500, color: C.textHigh, marginBottom: "10px" }}>Work with me.</h3>
                <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "12.5px", fontWeight: 300, color: C.textMid, lineHeight: 1.7, marginBottom: "16px" }}>A small number of high-context conversations for fintech founders and product leaders — plus two full case studies.</p>
                <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: C.gold }}>See How I Can Help →</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </Layout>
  );
}
