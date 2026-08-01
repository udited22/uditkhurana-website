import Layout from "../components/Layout.jsx";
import { C, PILLAR_ACCENTS, PROJECTS, RESEARCH_PORTFOLIO_URL, SOCIAL } from "../constants.js";
import Reveal from "../components/Reveal.jsx";

const A = PILLAR_ACCENTS.product;

export default function ProjectsPage() {
  const navigate = (href) => {
    if (href.startsWith("http")) { window.open(href, "_blank"); return; }
    window.history.pushState({}, "", href);
    window.dispatchEvent(new PopStateEvent("popstate"));
  };

  return (
    <Layout activePath="/projects">
      <style>{`
        .project-card{background:${C.bgCard};border:1px solid ${C.borderSoft};border-radius:6px;padding:26px;transition:all .25s;cursor:pointer;display:flex;flex-direction:column;height:100%;}
        .project-card:hover{border-color:${A.border};background:${C.bgLight};}
        .pgrid{display:grid;grid-template-columns:1fr 1fr;gap:12px;}
        .research-banner{display:flex;align-items:center;justify-content:space-between;gap:24px;}
        .sp{padding:80px 80px;}
        @media(max-width:768px){.pgrid{grid-template-columns:1fr!important;}.sp{padding:64px 24px!important;}.research-banner{flex-direction:column!important;align-items:flex-start!important;}}
      `}</style>

      {/* Hero */}
      <div className="sp" style={{ padding: "80px 80px 64px", background: C.bgSection, borderBottom: `1px solid ${C.borderSoft}` }}>
        <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
          <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", color: A.accent, marginBottom: "14px" }}>Projects</p>
          <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(28px,4vw,50px)", fontWeight: 400, color: C.textHigh, lineHeight: 1.1, marginBottom: "16px" }}>
            What gets built <em style={{ fontStyle: "italic", color: A.accent }}>outside the day job.</em>
          </h1>
          <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "14px", fontWeight: 300, color: C.textMid, lineHeight: 1.8, maxWidth: "560px" }}>
            Mostly crypto-exchange infrastructure and AI agents, prototyped and shipped with the same systems-first approach as the day job — plus a deeper, less code-shaped research archive for the ideas that don't fit neatly in a repo.
          </p>
        </div>
      </div>

      {/* GitHub project cards */}
      <div className="sp" style={{ padding: "64px 80px", background: C.bg }}>
        <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
          <Reveal>
            <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", flexWrap: "wrap", gap: "10px", marginBottom: "26px" }}>
              <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", color: A.accent }}>On GitHub</p>
              <a href={SOCIAL.github} target="_blank" rel="noreferrer" style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "10px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: C.textMid }}>View all repositories →</a>
            </div>
          </Reveal>

          <div className="pgrid">
            {PROJECTS.map((p, i) => {
              const early = p.stack === "Early Build";
              return (
                <Reveal key={p.name} delay={i * 0.05}>
                  <a href={p.url} target="_blank" rel="noreferrer" style={{ display: "block", height: "100%" }}>
                    <div className="project-card">
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px" }}>
                        <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "8px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: A.accent, background: A.soft, padding: "3px 9px", borderRadius: "3px" }}>{p.tag}</span>
                        <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "10px", color: C.textLow, fontStyle: early ? "italic" : "normal" }}>{p.stack}</span>
                      </div>
                      <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "19px", fontWeight: 500, color: C.textHigh, lineHeight: 1.28, marginBottom: "10px", flex: 1 }}>{p.name}</h3>
                      <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "12.5px", fontWeight: 300, lineHeight: 1.72, color: C.textMid, marginBottom: "18px" }}>{p.summary}</p>
                      <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: A.accent }}>View on GitHub →</p>
                    </div>
                  </a>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>

      {/* Research portfolio — deliberately pulled out of the grid above and
          given its own heading + treatment, so it reads as "a different kind
          of thing" (writing/research) rather than an 8th code repo. */}
      <div className="sp" style={{ padding: "0 80px 80px", background: C.bg }}>
        <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
          <Reveal>
            <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", color: C.gold, marginBottom: "16px" }}>Deeper Research</p>
            <a href={RESEARCH_PORTFOLIO_URL} target="_blank" rel="noreferrer" style={{ display: "block" }}>
              <div className="research-banner" style={{
                background: `linear-gradient(135deg, ${C.goldFaint}, ${C.bgCard})`,
                border: `1px solid ${C.border}`,
                borderRadius: "8px",
                padding: "32px 36px",
                transition: "border-color .25s, background .25s",
              }}>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
                    <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "8px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: C.gold, background: "rgba(201,162,75,0.13)", padding: "3px 9px", borderRadius: "3px" }}>Notion · Not Code</span>
                  </div>
                  <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "24px", fontWeight: 500, color: C.textHigh, lineHeight: 1.25, marginBottom: "10px" }}>Research &amp; Side Projects Portfolio</h3>
                  <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "13px", fontWeight: 300, lineHeight: 1.75, color: C.textMid, maxWidth: "60ch" }}>
                    Market research, product one-pagers, and in-progress ideas — the writing and thinking that sits upstream of the repos above, not another codebase.
                  </p>
                </div>
                <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "10px", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: C.gold, whiteSpace: "nowrap" }}>View the Portfolio →</p>
              </div>
            </a>
          </Reveal>
        </div>
      </div>

      {/* CTA to Advisory */}
      <div className="sp" style={{ padding: "72px 80px", background: C.bgSection, borderTop: `1px solid ${C.borderSoft}`, textAlign: "center" }}>
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
