import Layout from "../components/Layout.jsx";
import { C, WRITINGS } from "../constants.js";

const PLATFORM_COLORS = { LinkedIn: "#0A66C2", Essay: "#007A8A", "Per Diem": "#00B4C6" };

function PlatformBadge({ platform }) {
  const col = PLATFORM_COLORS[platform] || "#007A8A";
  return (
    <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "8px", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: col, background: `${col}18`, padding: "3px 10px", borderRadius: "3px", border: `1px solid ${col}28` }}>
      {platform}
    </span>
  );
}

export default function WritingPage() {
  return (
    <Layout activePath="/writing">
      <style>{`
        .writing-card{background:${C.bgCard};border:1px solid ${C.borderSoft};border-radius:6px;padding:26px;transition:all .25s;cursor:pointer;display:flex;flex-direction:column;height:100%;}
        .writing-card:hover{border-color:${C.border};background:${C.bgLight};}
        .wgrid{display:grid;grid-template-columns:1fr 1fr;gap:12px;}
        .sp{padding:80px 80px;}
        @media(max-width:768px){.wgrid{grid-template-columns:1fr!important;}.sp{padding:64px 24px!important;}}
      `}</style>

      <div style={{ background: C.bgSection, padding: "80px 80px 64px", borderBottom: `1px solid ${C.borderSoft}` }} className="sp">
        <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
          <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", color: C.cyan, marginBottom: "14px" }}>Writing & Notes</p>
          <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(28px,4vw,52px)", fontWeight: 400, color: C.textHigh, lineHeight: 1.1, marginBottom: "16px" }}>
            Essays, articles,<br /><em style={{ fontStyle: "italic", color: C.cyan }}>and field notes.</em>
          </h1>
          <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "14px", fontWeight: 300, color: C.textMid, lineHeight: 1.8, maxWidth: "520px" }}>
            Operator notes on fintech, product, wealth, systems, and the examined life. Published on LinkedIn and here.
          </p>
        </div>
      </div>

      <div className="sp" style={{ padding: "80px 80px", background: C.bg }}>
        <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
          <div className="wgrid">
            {WRITINGS.map((w, i) => (
              <a key={i} href={w.url} target={w.url.startsWith("http") ? "_blank" : undefined} rel="noreferrer" style={{ display: "block", height: "100%" }}>
                <div className="writing-card">
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px" }}>
                    <div style={{ display: "flex", gap: "8px" }}>
                      <PlatformBadge platform={w.platform} />
                      <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "8px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: C.cyan, background: "rgba(0,180,198,0.1)", padding: "3px 9px", borderRadius: "3px" }}>{w.tag}</span>
                    </div>
                    <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "11px", color: C.textLow }}>{w.min} read</span>
                  </div>
                  <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "19px", fontWeight: 500, color: C.textHigh, lineHeight: 1.28, marginBottom: "10px", flex: 1 }}>{w.title}</h3>
                  <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "12.5px", fontWeight: 300, lineHeight: 1.72, color: C.textMid, marginBottom: "18px" }}>{w.summary}</p>
                  <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: PLATFORM_COLORS[w.platform] || C.cyan }}>
                    {w.platform === "LinkedIn" ? "Read on LinkedIn →" : w.platform === "Per Diem" ? "Read in Per Diem →" : "Read Essay →"}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
