import Layout from "../components/Layout.jsx";
import { C, CRED, COMPANIES, ESSAYS } from "../constants.js";
import { ICONS } from "../components/Icons.jsx";
import Reveal from "../components/Reveal.jsx";

const SECTIONS = [
  {
    h: "Building at intersections",
    p: [
      "I like building at intersections. Markets × technology. Product × infrastructure. Regulation × user experience. Business models × behaviour. And increasingly, traditional finance × the new financial rails being built around the world. Over the last decade, my work has moved across financial services, capital markets, investing, lending, wealth, crypto, and global assets — but the common thread has been less about the category and more about the systems underneath it.",
    ],
  },
  {
    h: "Seeing the systems underneath",
    p: [
      "I'm a systems thinker by instinct. I enjoy taking a messy, interconnected problem and looking at it through multiple lenses at once: the customer journey, market structure, economics, regulation, technology, operations, risk, and distribution. A lot of my work has lived in the less glamorous but consequential parts of financial products — transaction systems, APIs, order flows, money movement, market infrastructure, compliance architecture, and the machinery required to make regulated products scale.",
    ],
  },
  {
    h: "Moving between machinery and behaviour",
    p: [
      "I'm equally interested in what sits above that machinery: how products earn trust, how behaviour changes, where distribution advantages emerge, and why seemingly unrelated industries often end up solving remarkably similar problems.",
    ],
  },
  {
    h: "Doing difficult things",
    p: [
      "Outside work, I'm an Ironman 70.3 finisher and hybrid athlete. I have an unreasonable affection for long games, difficult things, and the idea of compounding — whether applied to fitness, investing, learning, or life.",
    ],
  },
  {
    h: "Following curiosity",
    p: [
      "Avid reader. Exploratory traveller. Experimental writer. Perpetually curious. Some of that curiosity ends up written down — including, occasionally, in places with nothing to do with markets or product at all.",
    ],
  },
  {
    h: "Documenting the connections",
    p: [
      "That curiosity also spills into Per Diem, my ongoing writing experiment on markets, technology, products, and the systems connecting them — mostly an excuse to follow interesting rabbit holes and occasionally connect dots that probably weren't meant to be connected. Everything outside of work — the travel, the training, the food, the experiments — gets documented separately, through Udit Uncovered.",
    ],
  },
];

export default function AboutPage() {
  const navigate = (href) => {
    window.history.pushState({}, "", href);
    window.dispatchEvent(new PopStateEvent("popstate"));
  };

  return (
    <Layout activePath="/about">
      <style>{`
        .sp{padding:80px 80px;}
        .cred-strip{display:flex;justify-content:space-between;flex-wrap:wrap;}
        .facts-grid{display:grid;grid-template-columns:1fr 1fr;gap:56px;align-items:start;}
        @media(max-width:768px){.sp{padding:64px 24px!important;}.facts-grid{grid-template-columns:1fr!important;gap:32px!important;}.cred-strip{padding:0 24px!important;}}
      `}</style>

      {/* Header */}
      <div style={{ background: C.bgSection, padding: "80px 80px 56px", borderBottom: `1px solid ${C.borderSoft}` }} className="sp">
        <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
          <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", color: C.accent, marginBottom: "14px" }}>About</p>
          <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(28px,4vw,50px)", fontWeight: 400, color: C.textHigh, lineHeight: 1.1, marginBottom: "16px" }}>
            Many things.<br /><em style={{ fontStyle: "italic", color: C.accent }}>One operating philosophy.</em>
          </h1>
          <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "14px", fontWeight: 300, color: C.textMid, lineHeight: 1.8, maxWidth: "560px" }}>
            Still learning. Frequently unlearning. Usually building.
          </p>
        </div>
      </div>

      {/* Cred strip */}
      <div style={{ background: C.bgCard, borderBottom: `1px solid ${C.borderSoft}` }}>
        <div className="cred-strip" style={{ maxWidth: "1080px", margin: "0 auto", padding: "0 80px" }}>
          {CRED.map((c, i) => (
            <div key={i} style={{ padding: "16px 20px", borderRight: i < CRED.length - 1 ? `1px solid ${C.borderSoft}` : "none", flex: "1 1 auto" }}>
              <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "15px", fontWeight: 500, color: C.accent }}>{c.val}</p>
              <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "9px", color: C.textLow, letterSpacing: "0.08em", marginTop: "2px" }}>{c.sub}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Narrative */}
      <div className="sp" style={{ padding: "80px 80px 64px", background: C.bg }}>
        <div style={{ maxWidth: "680px", margin: "0 auto" }}>
          {SECTIONS.map((s, i) => (
            <Reveal key={s.h} delay={i * 0.04}>
              <div style={{ marginBottom: i < SECTIONS.length - 1 ? "48px" : 0 }}>
                <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "22px", fontWeight: 500, color: C.textHigh, marginBottom: "14px" }}>{s.h}</h2>
                {s.p.map((para, k) => (
                  <p key={k} style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "14.5px", fontWeight: 300, color: C.textMid, lineHeight: 1.85, marginBottom: k < s.p.length - 1 ? "14px" : 0 }}>{para}</p>
                ))}
                {s.h === "Following curiosity" && ESSAYS.map(e => (
                  <a key={e.url} href={e.url} onClick={ev => { ev.preventDefault(); navigate(e.url); }}
                    style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginTop: "14px", fontFamily: "'DM Sans',sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: C.accent }}>
                    Read "{e.title}" →
                  </a>
                ))}
                {s.h === "Documenting the connections" && (
                  <div style={{ display: "flex", gap: "24px", marginTop: "16px", flexWrap: "wrap" }}>
                    <a href="/per-diem" onClick={ev => { ev.preventDefault(); navigate("/per-diem"); }} style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: C.accent }}>Read Per Diem →</a>
                    <a href="/uncovered" onClick={ev => { ev.preventDefault(); navigate("/uncovered"); }} style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: C.rust }}>Udit Uncovered →</a>
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Credentials + companies — the factual anchor, after the narrative */}
      <div className="sp" style={{ padding: "0 80px 88px", background: C.bg }}>
        <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
          <Reveal>
            <div className="facts-grid">
              <div>
                <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "0.28em", textTransform: "uppercase", color: C.accent, marginBottom: "20px" }}>Credentials</p>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  {[
                    ["briefcase", "Principal Product Manager", "CoinDCX · Current"],
                    ["medal",     "Ironman 70.3 Finisher",     "Goa 2024"],
                    ["compass",   "PADI Advanced Open Water Diver", "Wrecks, reefs, and open water"],
                    ["arrows",    "Financial Services → Fintech → Crypto", "Enterprise banking · smallcase & Tickertape · CoinDCX"],
                    ["pen",       "Systems Builder & Writer",   "Per Diem · AI tools · Frameworks"],
                  ].map(([iconKey, label, sub], i) => {
                    const Icon = ICONS[iconKey];
                    return (
                      <div key={i} style={{ display: "flex", gap: "12px", padding: "12px 14px", background: C.bgCard, borderRadius: "5px", border: `1px solid ${C.borderSoft}` }}>
                        <span style={{ color: C.accent, minWidth: "16px", marginTop: "1px" }}><Icon size={16} /></span>
                        <div>
                          <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "12.5px", fontWeight: 500, color: C.textHigh }}>{label}</p>
                          <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "11px", color: C.textMid, marginTop: "2px" }}>{sub}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div>
                <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "0.28em", textTransform: "uppercase", color: C.accent, marginBottom: "20px" }}>Companies</p>
                <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginBottom: "28px" }}>
                  {COMPANIES.map((co, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", padding: "8px 2px", borderBottom: i < COMPANIES.length - 1 ? `1px solid ${C.borderSoft}` : "none" }}>
                      <span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "15px", color: C.textHigh }}>{co.name}</span>
                      <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "9px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: C.textLow }}>{co.era}</span>
                    </div>
                  ))}
                </div>
                <div onClick={() => navigate("/work")} style={{ cursor: "pointer", padding: "16px 18px", background: C.bgCard, border: `1px solid ${C.borderSoft}`, borderRadius: "6px" }}>
                  <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "12px", fontWeight: 300, color: C.textMid, lineHeight: 1.6, marginBottom: "6px" }}>Six stops, one decade-plus arc — the full mandate, scope, and selected work for each.</p>
                  <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "10px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: C.accent }}>See the Full Journey →</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </Layout>
  );
}
