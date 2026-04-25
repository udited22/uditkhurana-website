import { useRef, useState, useEffect } from "react";
import Layout from "../components/Layout.jsx";
import { C, IDENTITY_CARDS, FEATURED } from "../constants.js";

function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVis(true); obs.disconnect(); }
    }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, vis];
}

function Reveal({ children, delay = 0 }) {
  const [ref, vis] = useInView();
  return (
    <div ref={ref} style={{
      opacity: vis ? 1 : 0,
      transform: vis ? "none" : "translateY(14px)",
      transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
    }}>{children}</div>
  );
}

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
        @media(max-width:768px){
          .hero-ctas{flex-direction:column!important;align-items:flex-start!important;}
          .id-grid{grid-template-columns:1fr 1fr!important;}
          .feat-grid{grid-template-columns:1fr!important;}
          .hero-inner{padding:80px 28px 60px!important;}
          .section-pad{padding:64px 28px!important;}
        }
        @media(max-width:480px){
          .id-grid{grid-template-columns:1fr!important;}
        }
      `}</style>

      {/* ── SECTION 1: HERO ─────────────────────────────────────── */}
      <section style={{ minHeight: "90vh", position: "relative", overflow: "hidden", display: "flex", alignItems: "center" }}>
        <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse 80% 70% at 25% 50%, rgba(0,30,55,0.85) 0%, ${C.bg} 70%)` }} />
        <div style={{ position: "absolute", right: "5%", top: "50%", transform: "translateY(-50%)", fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(80px,13vw,200px)", fontWeight: 300, lineHeight: 1, color: "transparent", WebkitTextStroke: "1px rgba(0,180,198,0.05)", userSelect: "none", pointerEvents: "none" }}>Udit</div>
        <div style={{ position: "absolute", left: "52px", top: "20%", height: "60%", width: "1px", background: "linear-gradient(to bottom, transparent, rgba(0,180,198,0.14), transparent)" }} />

        <div className="hero-inner" style={{ padding: "0 80px 0 80px", position: "relative", zIndex: 1, maxWidth: "780px" }}>
          <div style={{ animation: "fadeUp .7s ease .1s both" }}>
            <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "10px", fontWeight: 700, letterSpacing: "0.28em", textTransform: "uppercase", color: C.cyan, marginBottom: "4px" }}>Udit Khurana</p>
            <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "12px", fontWeight: 300, color: C.textLow, marginBottom: "36px" }}>Principal Product Manager · CoinDCX · Bengaluru</p>
          </div>

          <div style={{ animation: "fadeUp .7s ease .2s both" }}>
            <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(13px,1.5vw,16px)", fontWeight: 300, fontStyle: "italic", color: C.textLow, marginBottom: "18px" }}>Building The Eclectic Life</p>
            <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(38px,5.5vw,70px)", fontWeight: 400, lineHeight: 1.05, color: C.textHigh, letterSpacing: "-0.015em", marginBottom: "20px" }}>
              Product. Wealth.<br />Systems. Discipline.<br />
              <em style={{ fontStyle: "italic", color: C.cyan }}>Taste.</em>
            </h1>
            <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(15px,1.8vw,20px)", fontWeight: 300, fontStyle: "italic", color: C.textMid, marginBottom: "16px" }}>
              A personal operating system for building a life beyond one dimension.
            </p>
          </div>

          <div style={{ animation: "fadeUp .7s ease .32s both" }}>
            <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "13.5px", fontWeight: 300, lineHeight: 1.8, color: C.textMid, maxWidth: "520px", marginBottom: "40px" }}>
              Operator notes on fintech, wealth, systems, fitness, and the examined life — for ambitious professionals who refuse to be one-dimensional.
            </p>
          </div>

          <div className="hero-ctas" style={{ display: "flex", gap: "12px", animation: "fadeUp .7s ease .42s both" }}>
            <button onClick={() => navigate("/writing")}
              style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "12px 26px", background: C.cyan, color: "#071424", fontFamily: "'DM Sans',sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", cursor: "pointer", border: "none", borderRadius: "4px" }}>
              Read the Latest →
            </button>
            <button onClick={() => navigate("/advisory")}
              style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "12px 26px", background: "transparent", color: C.textHigh, fontFamily: "'DM Sans',sans-serif", fontSize: "11px", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", cursor: "pointer", border: `1.5px solid ${C.borderSoft}`, borderRadius: "4px" }}>
              Work With Me
            </button>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: CHOOSE YOUR DOOR ─────────────────────────── */}
      <section className="section-pad" style={{ padding: "80px 80px", background: C.bgSection }}>
        <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
          <Reveal>
            <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", color: C.cyan, marginBottom: "10px" }}>This is my world</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(22px,3vw,34px)", fontWeight: 400, color: C.textHigh, marginBottom: "40px" }}>
              Choose your door.
            </h2>
          </Reveal>

          <div className="id-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px" }}>
            {IDENTITY_CARDS.map((card, i) => (
              <Reveal key={card.title} delay={i * 0.06}>
                <div className="id-card" onClick={() => navigate(card.href)}>
                  <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "20px", color: C.cyan, opacity: 0.55, marginBottom: "14px" }}>{card.icon}</p>
                  <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "18px", fontWeight: 500, color: C.textHigh, lineHeight: 1.2, marginBottom: "8px" }}>{card.title}</h3>
                  <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "12px", fontWeight: 300, lineHeight: 1.7, color: C.textMid, flex: 1, marginBottom: "16px" }}>{card.desc}</p>
                  <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: C.cyan, opacity: 0.7 }}>Explore →</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 3: FEATURED STRIP ───────────────────────────── */}
      <section className="section-pad" style={{ padding: "80px 80px", background: C.bg }}>
        <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
          <Reveal>
            <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", color: C.cyan, marginBottom: "36px" }}>Featured</p>
          </Reveal>
          <div className="feat-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px" }}>
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

      {/* ── SECTION 4: COMPACT ADVISORY CTA ────────────────────── */}
      <section className="section-pad" style={{ padding: "80px 80px", background: C.bgSection, borderTop: `1px solid ${C.borderSoft}` }}>
        <div style={{ maxWidth: "680px", margin: "0 auto", textAlign: "center" }}>
          <Reveal>
            <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", color: C.cyan, marginBottom: "16px" }}>Advisory</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(20px,2.8vw,32px)", fontWeight: 400, color: C.textHigh, lineHeight: 1.25, marginBottom: "16px" }}>
              Selective advisory for fintech, product, growth, AI systems, and leadership.
            </h2>
            <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "13.5px", fontWeight: 300, color: C.textMid, lineHeight: 1.8, marginBottom: "32px" }}>
              High-context conversations where experience can be genuinely useful — not volume, but depth.
            </p>
            <button onClick={() => navigate("/advisory")}
              style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "13px 30px", background: "transparent", color: C.cyan, fontFamily: "'DM Sans',sans-serif", fontSize: "11px", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", cursor: "pointer", border: `1.5px solid rgba(0,180,198,0.35)`, borderRadius: "4px" }}>
              Start a Conversation →
            </button>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
