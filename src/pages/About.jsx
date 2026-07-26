import Layout from "../components/Layout.jsx";
import { C, CRED, COMPANIES, PILLARS } from "../constants.js";
import { ICONS } from "../components/Icons.jsx";
import Reveal from "../components/Reveal.jsx";

export default function AboutPage() {
  const navigate = (href) => {
    window.history.pushState({}, "", href);
    window.dispatchEvent(new PopStateEvent("popstate"));
  };

  return (
    <Layout activePath="/about">
      <style>{`
        .about-grid{display:grid;grid-template-columns:280px 1fr;gap:80px;align-items:start;}
        .pillar-recap{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;}
        .pillar-recap-photo{aspect-ratio:1/1;border-radius:8px;overflow:hidden;background-size:cover;background-position:center;position:relative;cursor:pointer;}
        @media(max-width:768px){.about-grid{grid-template-columns:1fr!important;gap:40px!important;}.pillar-recap{grid-template-columns:1fr!important;}}
        .sp{padding:80px 80px;}
        @media(max-width:768px){.sp{padding:64px 24px!important;}}
      `}</style>

      {/* Header */}
      <div style={{ background: C.bgSection, padding: "80px 80px 64px", borderBottom: `1px solid ${C.borderSoft}` }} className="sp">
        <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
          <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", color: C.gold, marginBottom: "14px" }}>About</p>
          <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(28px,4vw,52px)", fontWeight: 400, color: C.textHigh, lineHeight: 1.1, marginBottom: "16px" }}>
            Many things.<br /><em style={{ fontStyle: "italic", color: C.gold }}>Deeply integrated.</em>
          </h1>
          <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "14px", fontWeight: 300, color: C.textMid, lineHeight: 1.8, maxWidth: "560px" }}>
            Principal Product Manager · CoinDCX · Bengaluru
          </p>
        </div>
      </div>

      {/* Pillar recap */}
      <div className="sp" style={{ padding: "56px 80px", background: C.bg }}>
        <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
          <Reveal>
            <div className="pillar-recap">
              {PILLARS.map((p, i) => (
                <div key={p.key} className="pillar-recap-photo" style={{ backgroundImage: `url(${p.photo})`, border: `1px solid ${p.border}` }} onClick={() => navigate(p.href)}>
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(11,11,12,0) 45%, rgba(11,11,12,0.9) 100%)" }} />
                  <div style={{ position: "absolute", left: "16px", right: "16px", bottom: "14px" }}>
                    <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "8px", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: p.accent, marginBottom: "4px" }}>{p.credLine}</p>
                    <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "17px", color: "#fff" }}>{p.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>

      {/* Cred strip */}
      <div style={{ background: C.bgCard, borderBottom: `1px solid ${C.borderSoft}` }}>
        <div style={{ maxWidth: "1080px", margin: "0 auto", padding: "0 80px", display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
          {CRED.map((c, i) => (
            <div key={i} style={{ padding: "16px 20px", borderRight: i < CRED.length - 1 ? `1px solid ${C.borderSoft}` : "none", flex: "1 1 auto" }}>
              <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "15px", fontWeight: 500, color: C.gold }}>{c.val}</p>
              <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "9px", color: C.textLow, letterSpacing: "0.08em", marginTop: "2px" }}>{c.sub}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="sp" style={{ padding: "80px 80px" }}>
        <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
          <Reveal>
          <div className="about-grid">
            {/* Left: credential cards */}
            <div>
              <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "0.28em", textTransform: "uppercase", color: C.gold, marginBottom: "20px" }}>Credentials</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "24px" }}>
                {[
                  ["briefcase", "Principal Product Manager", "CoinDCX · Current"],
                  ["medal",     "Ironman 70.3 Finisher",     "Goa 2024"],
                  ["compass",   "PADI Advanced Open Water Diver", "Wrecks, reefs, and open water"],
                  ["arrows",    "TradFi → Fintech → Crypto", "Finacle · smallcase & Tickertape · CoinDCX"],
                  ["pen",       "Systems Builder & Writer",   "AI tools · Frameworks · Essays"],
                ].map(([iconKey, label, sub], i) => {
                  const Icon = ICONS[iconKey];
                  return (
                    <div key={i} style={{ display: "flex", gap: "12px", padding: "12px 14px", background: C.bgCard, borderRadius: "5px", border: `1px solid ${C.borderSoft}` }}>
                      <span style={{ color: C.gold, minWidth: "16px", marginTop: "1px" }}><Icon size={16} /></span>
                      <div>
                        <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "12.5px", fontWeight: 500, color: C.textHigh }}>{label}</p>
                        <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "11px", color: C.textMid, marginTop: "2px" }}>{sub}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "0.24em", textTransform: "uppercase", color: C.textLow, marginBottom: "12px" }}>Companies</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                {COMPANIES.map((co, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", padding: "8px 2px", borderBottom: i < COMPANIES.length - 1 ? `1px solid ${C.borderSoft}` : "none" }}>
                    <span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "15px", color: C.textHigh }}>{co.name}</span>
                    <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "9px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: C.textLow }}>{co.era}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: bio + journey */}
            <div>
              <blockquote style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "19px", fontStyle: "italic", color: C.textMid, lineHeight: 1.72, marginBottom: "24px", borderLeft: `3px solid rgba(201,162,75,0.2)`, paddingLeft: "22px" }}>
                10+ years shaping how India invests — from enterprise banking infrastructure to regulated investing platforms at smallcase and Tickertape, to product at CoinDCX, India's leading crypto exchange.
              </blockquote>
              <p style={{ fontSize: "14px", lineHeight: 1.87, color: C.textMid, fontWeight: 300, marginBottom: "16px" }}>
                A fintech product leader whose path has run through enterprise financial systems, an independent stint managing markets directly, banking infrastructure consulting, and building enterprise lending products — before four years at smallcase and Tickertape building regulated retail investing, and now crypto at CoinDCX, India's leading crypto exchange.
              </p>
              <p style={{ fontSize: "14px", lineHeight: 1.87, color: C.textMid, fontWeight: 300, marginBottom: "36px" }}>
                Outside of product: an Ironman 70.3 finisher training across swim, bike, and run. Writing, experimenting with AI systems, and building in public — one dimension at a time.
              </p>
              <p style={{ fontSize: "14px", lineHeight: 1.87, color: C.textMid, fontWeight: 300, marginBottom: "48px" }}>
                The philosophy is simple: refuse to collapse into one category. Build career leverage, physical strength, financial intelligence, creative taste, and inner stillness — simultaneously, intentionally, and without apology.
              </p>

              <div onClick={() => navigate("/work")} style={{ cursor: "pointer", padding: "18px 20px", background: C.bgCard, border: `1px solid ${C.borderSoft}`, borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px", flexWrap: "wrap" }}>
                <div>
                  <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "0.28em", textTransform: "uppercase", color: C.gold, marginBottom: "6px" }}>The Journey</p>
                  <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "12.5px", fontWeight: 300, color: C.textMid, lineHeight: 1.6 }}>Six stops, one decade-plus arc — crypto now, back through banking infrastructure, independent markets practice, to enterprise finance.</p>
                </div>
                <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "10px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: C.gold, whiteSpace: "nowrap" }}>See Full Timeline →</p>
              </div>
            </div>
          </div>
          </Reveal>
        </div>
      </div>

      {/* Principles */}
      <div className="sp" style={{ padding: "0 80px 80px", background: C.bg }}>
        <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
          <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "0.28em", textTransform: "uppercase", color: C.gold, marginBottom: "32px" }}>Operating Principles</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px" }}>
            {[
              ["Premium over noisy",     "Quality of output matters more than quantity of presence."],
              ["Consistency over intensity", "Showing up daily compounds more than sprinting occasionally."],
              ["Depth over virality",    "Build for the long game. Every asset should compound."],
              ["Systems create freedom", "Design the process. Then trust the process."],
              ["Long games always win",  "Two-year thinking beats two-week thinking every time."],
              ["Refuse one dimension",   "Career, body, mind, money, taste — build all of them."],
            ].map(([title, desc], i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div style={{ background: C.bgCard, border: `1px solid ${C.borderSoft}`, borderRadius: "5px", padding: "20px 18px" }}>
                  <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "17px", fontWeight: 500, color: C.textHigh, marginBottom: "8px", lineHeight: 1.25 }}>{title}</p>
                  <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "12px", fontWeight: 300, color: C.textMid, lineHeight: 1.68 }}>{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
