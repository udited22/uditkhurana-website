import Layout from "../components/Layout.jsx";
import { C, SOCIAL, PHOTO } from "../constants.js";
import { PHOTOS } from "../photos.js";
import Reveal from "../components/Reveal.jsx";

const IG = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>;

// Deliberately excludes "Infinite Overhead", "Raga in Colour", "Wild at the
// Lake's Edge" and "The Still Frame" — all four carry a baked-in
// "THE ECLECTIC LIFE" watermark in the image pixels from the pre-V2 Instagram
// handle. Cropping/inpainting is out of scope here; worth re-exporting clean
// source files for those four next time real photo assets are touched.
const GALLERY_TITLES = [
  "Nubra at Golden Hour",
  "At the Top, Looking Further",
  "A Life Fully Lived",
  "The Patient One",
  "Monastery in the Mirror",
];

export default function UditUncoveredPage() {
  const gallery = GALLERY_TITLES.map(t => PHOTOS.find(p => p.title === t)).filter(Boolean);

  return (
    <Layout activePath="/uncovered">
      <style>{`
        .photo-card{border-radius:6px;overflow:hidden;background:${C.bgCard};border:1px solid ${C.borderSoft};transition:all .28s;display:flex;flex-direction:column;}
        .photo-card:hover{border-color:${C.rustBorder};transform:translateY(-2px);}
        .pgrid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;}
        .unc-hero{display:grid;grid-template-columns:280px 1fr;gap:56px;align-items:center;}
        .sp{padding:80px 80px;}
        @media(max-width:900px){.pgrid{grid-template-columns:1fr 1fr!important;}.unc-hero{grid-template-columns:1fr!important;}}
        @media(max-width:768px){.sp{padding:64px 24px!important;}.pgrid{grid-template-columns:1fr 1fr!important;}}
        @media(max-width:480px){.pgrid{grid-template-columns:1fr!important;}}
      `}</style>

      {/* Hero */}
      <div style={{ background: C.bgSection, padding: "80px 80px 64px", borderBottom: `1px solid ${C.borderSoft}` }} className="sp">
        <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
          <div className="unc-hero">
            <div style={{ width: "100%", aspectRatio: "3/4", borderRadius: "8px", overflow: "hidden", border: `1px solid ${C.rustBorder}`, backgroundImage: `url(${PHOTO.fitness})`, backgroundSize: "cover", backgroundPosition: "center 15%", flexShrink: 0 }} />
            <div>
              <span style={{ display: "inline-block", fontFamily: "'DM Sans',sans-serif", fontSize: "8.5px", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: C.rust, background: C.rustFaint, border: `1px solid ${C.rustBorder}`, padding: "5px 12px", borderRadius: "20px", marginBottom: "16px" }}>@udituncovered</span>
              <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(28px,4vw,50px)", fontWeight: 400, color: C.textHigh, lineHeight: 1.1, marginBottom: "16px" }}>
                Living <em style={{ fontStyle: "italic", color: C.rust }}>the eclectic life.</em>
              </h1>
              <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "14px", fontWeight: 300, color: C.textMid, lineHeight: 1.8, maxWidth: "520px", marginBottom: "18px" }}>
                Travel, endurance, food, and the odd experiment — the parts of life that don't fit in a job title. An Ironman 70.3 finisher and PADI Advanced Open Water Diver with an unreasonable affection for long games and difficult things.
              </p>
              <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "12.5px", fontWeight: 500, color: C.textLow }}>
                1.9km swim · 90km bike · 21.1km run — Ironman 70.3 Finisher, Goa 2024
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Instagram callout */}
      <div className="sp" style={{ padding: "56px 80px 0", background: C.bg }}>
        <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
          <Reveal>
            <a href={SOCIAL.instagram} target="_blank" rel="noreferrer" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px", flexWrap: "wrap", padding: "22px 28px", background: C.bgCard, border: `1px solid ${C.rustBorder}`, borderRadius: "8px", textDecoration: "none" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                <span style={{ color: C.rust, display: "flex" }}><IG /></span>
                <div>
                  <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "17px", color: C.textHigh }}>@udituncovered on Instagram</p>
                  <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "11.5px", color: C.textLow, marginTop: "2px" }}>The dives, the treks, the training, and the road trips that don't make the gallery below.</p>
                </div>
              </div>
              <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "10px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: C.rust, whiteSpace: "nowrap" }}>Follow →</span>
            </a>
          </Reveal>
        </div>
      </div>

      {/* Gallery */}
      <div className="sp" style={{ padding: "40px 80px 80px", background: C.bg }}>
        <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
          <Reveal>
            <h2 style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", color: C.rust, marginBottom: "24px" }}>Through My Lens</h2>
          </Reveal>
          <div className="pgrid">
            {gallery.map((ph, i) => (
              <Reveal key={ph.title} delay={(i % 3) * 0.07}>
                <div className="photo-card">
                  <div style={{
                    width: "100%",
                    aspectRatio: ph.aspect === "portrait" ? "3/4" : ph.aspect === "square" ? "1/1" : "4/3",
                    position: "relative", overflow: "hidden", flexShrink: 0,
                  }}>
                    {ph.src && <img src={ph.src} alt={ph.title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />}
                    <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "55%", background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 100%)" }} />
                    <div style={{ position: "absolute", top: "10px", left: "10px" }}>
                      <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "7.5px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#fff", background: C.rust, padding: "3px 8px", borderRadius: "2px" }}>{ph.cat}</span>
                    </div>
                    <div style={{ position: "absolute", bottom: "12px", left: "14px", right: "14px" }}>
                      <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "8.5px", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.7)", marginBottom: "3px" }}>{ph.location}</p>
                      <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "17px", fontWeight: 500, color: "#fff", lineHeight: 1.15 }}>{ph.title}</h3>
                    </div>
                  </div>
                  <div style={{ padding: "16px 18px 20px" }}>
                    <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "14px", fontWeight: 300, color: C.textMid, lineHeight: 1.72, fontStyle: "italic" }}>{ph.story}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
