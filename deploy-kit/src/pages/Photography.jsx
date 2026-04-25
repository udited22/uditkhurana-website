import Layout from "../components/Layout.jsx";
import { C } from "../constants.js";
import { PHOTOS } from "../photos.js";

export default function PhotographyPage() {
  return (
    <Layout activePath="/photography">
      <style>{`
        .photo-card{border-radius:6px;overflow:hidden;background:${C.bgCard};border:1px solid ${C.borderSoft};transition:all .28s;cursor:pointer;display:flex;flex-direction:column;}
        .photo-card:hover{border-color:${C.border};transform:translateY(-2px);}
        .pgrid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;}
        .sp{padding:80px 80px;}
        @media(max-width:900px){.pgrid{grid-template-columns:1fr 1fr!important;}}
        @media(max-width:768px){.sp{padding:64px 24px!important;}.pgrid{grid-template-columns:1fr 1fr!important;}}
        @media(max-width:480px){.pgrid{grid-template-columns:1fr!important;}}
      `}</style>

      <div style={{ background: C.bgSection, padding: "80px 80px 64px", borderBottom: `1px solid ${C.borderSoft}` }} className="sp">
        <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
          <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", color: C.cyan, marginBottom: "14px" }}>Through My Lens</p>
          <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(28px,4vw,52px)", fontWeight: 400, color: C.textHigh, lineHeight: 1.1, marginBottom: "16px" }}>
            Not just what I saw —<br /><em style={{ fontStyle: "italic", color: C.cyan }}>what each frame taught me.</em>
          </h1>
          <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "14px", fontWeight: 300, color: C.textMid, lineHeight: 1.8, maxWidth: "520px" }}>
            A collection from travel and everyday life — about attention, patience, and the discipline of finding meaning in a single frame.
          </p>
        </div>
      </div>

      <div className="sp" style={{ padding: "80px 80px", background: C.bg }}>
        <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
          <div className="pgrid">
            {PHOTOS.map((ph, i) => (
              <div key={i} className="photo-card">
                <div style={{
                  width: "100%",
                  aspectRatio: ph.aspect === "portrait" ? "3/4" : ph.aspect === "square" ? "1/1" : "4/3",
                  position: "relative", overflow: "hidden", flexShrink: 0,
                }}>
                  {ph.src && <img src={ph.src} alt={ph.title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />}
                  <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "55%", background: "linear-gradient(to top, rgba(7,17,28,0.82) 0%, transparent 100%)" }} />
                  <div style={{ position: "absolute", top: "10px", left: "10px" }}>
                    <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "7.5px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#fff", background: "rgba(0,180,198,0.65)", padding: "3px 8px", borderRadius: "2px" }}>{ph.cat}</span>
                  </div>
                  <div style={{ position: "absolute", bottom: "12px", left: "14px", right: "14px" }}>
                    <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "8.5px", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)", marginBottom: "3px" }}>{ph.location}</p>
                    <h4 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "17px", fontWeight: 500, color: "#EBF0F5", lineHeight: 1.15 }}>{ph.title}</h4>
                  </div>
                </div>
                <div style={{ padding: "16px 18px 20px" }}>
                  <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "14px", fontWeight: 300, color: C.textMid, lineHeight: 1.72, fontStyle: "italic" }}>{ph.story}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
