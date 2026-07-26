import Layout from "../components/Layout.jsx";
import { C, IDENTITY_CARDS, FEATURED, CRED, JOURNEY, WRITINGS, SOCIAL, linkedInEmbedSrc } from "../constants.js";
import { ICONS } from "../components/Icons.jsx";
import Reveal from "../components/Reveal.jsx";

const LI = () => <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>;

const FEATURED_LINKEDIN = WRITINGS.slice(0, 2);

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
        .id-card{background:${C.bgCard};border:1px solid ${C.borderSoft};border-radius:6px;padding:26px 22px;transition:all .25s;cursor:pointer;height:100%;display:flex;flex-direction:column;}
        .id-card:hover{border-color:${C.border};background:${C.bgLight};transform:translateY(-2px);}
        .feat-card{background:${C.bgCard};border:1px solid ${C.borderSoft};border-radius:6px;padding:26px;transition:all .25s;cursor:pointer;display:flex;flex-direction:column;height:100%;}
        .feat-card:hover{border-color:${C.border};background:${C.bgLight};}
        .li-embed-wrap{background:${C.bgCard};border:1px solid ${C.borderSoft};border-radius:6px;overflow:hidden;}
        .cred-row{display:flex;justify-content:space-between;flex-wrap:wrap;}
        .journey-row{display:grid;grid-template-columns:1fr 1fr 1fr;gap:1px;background:${C.borderSoft};border-radius:5px;overflow:hidden;}
        .li-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px;}
        @media(max-width:768px){
          .hero-ctas{flex-direction:column!important;align-items:flex-start!important;}
          .id-grid{grid-template-columns:1fr 1fr!important;}
          .id-grid-2{grid-template-columns:1fr!important;}
          .feat-grid{grid-template-columns:1fr!important;}
          .li-grid{grid-template-columns:1fr!important;}
          .journey-row{grid-template-columns:1fr!important;}
          .hero-inner{padding:80px 28px 60px!important;}
          .section-pad{padding:64px 28px!important;}
        }
        @media(max-width:480px){
          .id-grid{grid-template-columns:1fr!important;}
        }
      `}</style>

      {/* ── SECTION 1: HERO ─────────────────────────────────────── */}
      <section style={{ minHeight: "88vh", position: "relative", overflow: "hidden", display: "flex", alignItems: "center" }}>
        <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse 80% 70% at 25% 50%, rgba(10,40,55,0.85) 0%, ${C.bg} 70%)` }} />
        <div style={{ position: "absolute", right: "5%", top: "50%", transform: "translateY(-50%)", fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(80px,13vw,200px)", fontWeight: 300, lineHeight: 1, color: "transparent", WebkitTextStroke: "1px rgba(28,143,166,0.05)", userSelect: "none", pointerEvents: "none" }}>Udit</div>
        <div style={{ position: "absolute", left: "52px", top: "20%", height: "60%", width: "1px", background: "linear-gradient(to bottom, transparent, rgba(28,143,166,0.14), transparent)" }} />

        <div className="hero-inner" style={{ padding: "0 80px 0 80px", position: "relative", zIndex: 1, maxWidth: "820px" }}>
          <div style={{ animation: "fadeUp .7s ease .1s both" }}>
            <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "10px", fontWeight: 700, letterSpacing: "0.28em", textTransform: "uppercase", color: C.cyan, marginBottom: "10px" }}>Udit Khurana · Living The Eclectic Life</p>
            <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "16px", fontWeight: 600, color: C.textHigh, marginBottom: "28px", letterSpacing: "0.01em" }}>
              Principal Product Manager · CoinDCX · India's Leading Crypto Exchange
            </p>
          </div>

          <div style={{ animation: "fadeUp .7s ease .2s both" }}>
            <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(34px,4.6vw,56px)", fontWeight: 400, lineHeight: 1.12, color: C.textHigh, letterSpacing: "-0.01em", marginBottom: "18px" }}>
              Product leadership across<br />every era of how <em style={{ fontStyle: "italic", color: C.cyan }}>India invests.</em>
            </h1>
            <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "clamp(13px,1.4vw,15px)", fontWeight: 500, letterSpacing: "0.03em", color: C.textMid, marginBottom: "20px" }}>
              TradFi → smallcase &amp; Tickertape → CoinDCX
            </p>
          </div>

          <div style={{ animation: "fadeUp .7s ease .32s both" }}>
            <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "13.5px", fontWeight: 300, lineHeight: 1.8, color: C.textMid, maxWidth: "540px", marginBottom: "40px" }}>
              9+ years building the infrastructure Indians use to grow their money — now writing Per Diem, advising fintech and crypto product teams, and training for the next Ironman.
            </p>
          </div>

          <div className="hero-ctas" style={{ display: "flex", gap: "12px", animation: "fadeUp .7s ease .42s both" }}>
            <a href={SOCIAL.linkedin} target="_blank" rel="noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "12px 26px", background: C.cyan, color: "#071424", fontFamily: "'DM Sans',sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", cursor: "pointer", border: "none", borderRadius: "4px", textDecoration: "none" }}>
              <LI /> Connect on LinkedIn
            </a>
            <button onClick={() => navigate("/writing")}
              style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "12px 26px", background: "transparent", color: C.textHigh, fontFamily: "'DM Sans',sans-serif", fontSize: "11px", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", cursor: "pointer", border: `1.5px solid ${C.borderSoft}`, borderRadius: "4px" }}>
              Read the Writing
            </button>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: CRED STRIP ───────────────────────────────── */}
      <div style={{ background: C.bgCard, borderTop: `1px solid ${C.borderSoft}`, borderBottom: `1px solid ${C.borderSoft}` }}>
        <div className="cred-row" style={{ maxWidth: "1080px", margin: "0 auto", padding: "0 80px" }}>
          {CRED.map((c, i) => (
            <div key={i} style={{ padding: "16px 20px", borderRight: i < CRED.length - 1 ? `1px solid ${C.borderSoft}` : "none", flex: "1 1 auto" }}>
              <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "15px", fontWeight: 500, color: C.cyan }}>{c.val}</p>
              <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "9px", color: C.textLow, letterSpacing: "0.08em", marginTop: "2px" }}>{c.sub}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── SECTION 3: JOURNEY (condensed) ──────────────────────── */}
      <section className="section-pad" style={{ padding: "64px 80px", background: C.bg }}>
        <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
          <Reveal>
            <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", color: C.cyan, marginBottom: "20px" }}>The Journey</p>
            <div className="journey-row">
              {JOURNEY.map((j, i) => (
                <div key={i} style={{ padding: "20px", background: j.active ? "rgba(28,143,166,0.06)" : C.bgCard, borderLeft: j.active ? `3px solid ${C.cyan}` : "3px solid transparent" }}>
                  <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "8.5px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: j.active ? C.cyan : C.textLow, marginBottom: "6px" }}>{j.era}</p>
                  <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "13px", fontWeight: 500, color: j.active ? C.textHigh : C.textMid, marginBottom: "5px" }}>{j.label}</p>
                  <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "11.5px", fontWeight: 300, color: C.textMid, lineHeight: 1.6 }}>{j.sub}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── SECTION 4: CHOOSE YOUR DOOR (professional-first, tiered) ── */}
      <section className="section-pad" style={{ padding: "72px 80px", background: C.bgSection }}>
        <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
          <Reveal>
            <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", color: C.cyan, marginBottom: "10px" }}>This is my world</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(22px,3vw,34px)", fontWeight: 400, color: C.textHigh, marginBottom: "36px" }}>
              Choose your door.
            </h2>
          </Reveal>

          <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "0.24em", textTransform: "uppercase", color: C.textLow, marginBottom: "14px" }}>The Work</p>
          <div className="id-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px", marginBottom: "36px" }}>
            {IDENTITY_CARDS.filter(c => c.tier === "professional").map((card, i) => {
              const Icon = ICONS[card.icon];
              return (
                <Reveal key={card.title} delay={i * 0.06}>
                  <div className="id-card" onClick={() => navigate(card.href)}>
                    <div style={{ color: C.cyan, opacity: 0.8, marginBottom: "14px" }}><Icon size={22} /></div>
                    <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "18px", fontWeight: 500, color: C.textHigh, lineHeight: 1.2, marginBottom: "8px" }}>{card.title}</h3>
                    <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "12px", fontWeight: 300, lineHeight: 1.7, color: C.textMid, flex: 1, marginBottom: "16px" }}>{card.desc}</p>
                    <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: C.cyan, opacity: 0.7 }}>Explore →</p>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "0.24em", textTransform: "uppercase", color: C.textLow, marginBottom: "14px" }}>The Rest of It</p>
          <div className="id-grid-2" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "10px" }}>
            {IDENTITY_CARDS.filter(c => c.tier === "eclectic").map((card, i) => {
              const Icon = ICONS[card.icon];
              return (
                <Reveal key={card.title} delay={i * 0.06}>
                  <div className="id-card" onClick={() => navigate(card.href)} style={{ padding: "20px 22px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                      <span style={{ color: C.textMid, opacity: 0.85, flexShrink: 0 }}><Icon size={19} /></span>
                      <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "16px", fontWeight: 500, color: C.textHigh, lineHeight: 1.2 }}>{card.title}</h3>
                    </div>
                    <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "11.5px", fontWeight: 300, lineHeight: 1.65, color: C.textMid, marginTop: "10px" }}>{card.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SECTION 5: FEATURED ON LINKEDIN (live embeds) ───────── */}
      <section className="section-pad" style={{ padding: "80px 80px", background: C.bg }}>
        <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
          <Reveal>
            <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", flexWrap: "wrap", gap: "10px", marginBottom: "28px" }}>
              <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", color: C.cyan }}>Featured on LinkedIn</p>
              <a href={SOCIAL.linkedin} target="_blank" rel="noreferrer" style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "10px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: C.textMid }}>View full profile →</a>
            </div>
          </Reveal>
          <div className="li-grid">
            {FEATURED_LINKEDIN.map((w, i) => {
              const src = linkedInEmbedSrc(w.url);
              return (
                <Reveal key={w.url} delay={i * 0.08}>
                  <div className="li-embed-wrap">
                    {src ? (
                      <iframe src={src} title={w.title} height="570" width="100%" frameBorder="0" allowFullScreen loading="lazy" style={{ display: "block" }} />
                    ) : (
                      <a href={w.url} target="_blank" rel="noreferrer" style={{ display: "block", padding: "26px" }}>
                        <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "18px", color: C.textHigh }}>{w.title}</p>
                        <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "11px", color: C.cyan, marginTop: "10px" }}>Read on LinkedIn →</p>
                      </a>
                    )}
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SECTION 6: EXPLORE ──────────────────────────────────── */}
      <section className="section-pad" style={{ padding: "0 80px 80px", background: C.bg }}>
        <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
          <div className="feat-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "10px" }}>
            {FEATURED.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.08}>
                <div className="feat-card" onClick={() => navigate(f.href)}>
                  <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "8.5px", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: C.cyan, marginBottom: "12px" }}>{f.type}</p>
                  <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "18px", fontWeight: 500, color: C.textHigh, lineHeight: 1.25, marginBottom: "10px", flex: 1 }}>{f.title}</h3>
                  <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "12px", fontWeight: 300, color: C.textMid, lineHeight: 1.68, marginBottom: "18px" }}>{f.desc}</p>
                  <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: C.cyan }}>{f.cta} →</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 7: COMPACT ADVISORY CTA ────────────────────── */}
      <section className="section-pad" style={{ padding: "80px 80px", background: C.bgSection, borderTop: `1px solid ${C.borderSoft}` }}>
        <div style={{ maxWidth: "680px", margin: "0 auto", textAlign: "center" }}>
          <Reveal>
            <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", color: C.cyan, marginBottom: "16px" }}>Advisory</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(20px,2.8vw,32px)", fontWeight: 400, color: C.textHigh, lineHeight: 1.25, marginBottom: "16px" }}>
              Selective advisory for fintech, product, growth, and leadership.
            </h2>
            <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "13.5px", fontWeight: 300, color: C.textMid, lineHeight: 1.8, marginBottom: "32px" }}>
              A short list of what I can generally help with — and how to reach me for anything current.
            </p>
            <button onClick={() => navigate("/advisory")}
              style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "13px 30px", background: "transparent", color: C.cyan, fontFamily: "'DM Sans',sans-serif", fontSize: "11px", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", cursor: "pointer", border: `1.5px solid rgba(28,143,166,0.35)`, borderRadius: "4px" }}>
              See How I Can Help →
            </button>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
