import Layout from "../components/Layout.jsx";
import { C, PROJECTS } from "../constants.js";

export default function ProjectsPage() {
  return (
    <Layout activePath="/projects">
      <style>{`
        .proj-card{background:${C.bgCard};border:1px solid ${C.borderSoft};border-radius:6px;padding:24px;transition:all .25s;}
        .proj-card:hover{border-color:${C.border};background:${C.bgLight};}
        .pgrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;}
        .sp{padding:80px 80px;}
        @media(max-width:900px){.pgrid{grid-template-columns:1fr 1fr!important;}}
        @media(max-width:768px){.sp{padding:64px 24px!important;}.pgrid{grid-template-columns:1fr!important;}}
      `}</style>

      <div style={{ background: C.bgSection, padding: "80px 80px 64px", borderBottom: `1px solid ${C.borderSoft}` }} className="sp">
        <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
          <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", color: C.cyan, marginBottom: "14px" }}>Projects & Tools</p>
          <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(28px,4vw,52px)", fontWeight: 400, color: C.textHigh, lineHeight: 1.1, marginBottom: "16px" }}>
            Systems built<br /><em style={{ fontStyle: "italic", color: C.cyan }}>to help you work better.</em>
          </h1>
          <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "14px", fontWeight: 300, color: C.textMid, lineHeight: 1.8, maxWidth: "520px" }}>
            Tools, templates, and operating systems for ambitious professionals who want to work, train, think, and live better.
          </p>
        </div>
      </div>

      <div className="sp" style={{ padding: "80px 80px", background: C.bg }}>
        <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
          <div className="pgrid">
            {PROJECTS.map((p, i) => (
              <div key={i} className="proj-card">
                <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "8.5px", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: C.cyan, background: "rgba(0,180,198,0.1)", padding: "3px 10px", borderRadius: "3px", display: "inline-block", marginBottom: "14px" }}>{p.tag}</span>
                <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "18px", fontWeight: 500, color: C.textHigh, marginBottom: "10px", lineHeight: 1.3 }}>{p.title}</h3>
                <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "12.5px", lineHeight: 1.72, color: C.textMid, fontWeight: 300, marginBottom: "14px" }}>{p.desc}</p>
                <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: C.cyan, opacity: 0.7, marginBottom: "6px" }}>{p.benefit}</p>
                <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "9px", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: C.textLow }}>Coming Soon</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
