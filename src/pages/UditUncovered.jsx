import Layout from "../components/Layout.jsx";
import { C, SOCIAL } from "../constants.js";
import { PHOTOS } from "../photos.js";
import Reveal from "../components/Reveal.jsx";

// Full curated set — all 9 available photos, including the 4 carrying a
// baked-in "THE ECLECTIC LIFE" watermark from the pre-rebrand Instagram
// handle. Kept per Udit's explicit direction: prior-branding history, not a
// reason to lose strong personal imagery. A clean re-export is a
// non-blocking future polish item.
const GALLERY_TITLES = [
  "Nubra at Golden Hour",
  "A Life Fully Lived",
  "Infinite Overhead",
  "Raga in Colour",
  "At the Top, Looking Further",
  "The Patient One",
  "Monastery in the Mirror",
  "Wild at the Lake's Edge",
  "The Still Frame",
];
// Unexpected crop sizes rather than a uniform grid — spans are (col,row).
const SPANS = [[2, 2], [1, 1], [1, 1], [1, 2], [1, 1], [2, 1], [1, 1], [1, 1], [1, 1]];

// The full-bleed hero needs a clean (unwatermarked) photo regardless of
// gallery order — "Nubra at Golden Hour" (previously used here) carries the
// same baked-in "Shot on OnePlus / By The Eclectic Life" watermark as the
// other 4 flagged photos. Retention of watermarked photos applies to the
// grid below, not to an 82vh hero.
const HERO_TITLE = "Monastery in the Mirror";

export default function UditUncoveredPage() {
  const gallery = GALLERY_TITLES.map(t => PHOTOS.find(p => p.title === t)).filter(Boolean);
  const hero = PHOTOS.find(p => p.title === HERO_TITLE);

  return (
    <Layout activePath="/uncovered">
      <style>{`
        .unc-grid{display:grid;grid-template-columns:repeat(4,1fr);grid-auto-rows:180px;gap:10px;}
        .sp{padding:64px 80px;}
        @media(max-width:900px){.unc-grid{grid-template-columns:repeat(2,1fr);grid-auto-rows:220px;}}
        @media(max-width:768px){.sp{padding:48px 24px!important;}}
        @media(max-width:480px){.unc-grid{grid-template-columns:1fr!important;}.unc-grid>div{grid-column:span 1!important;grid-row:span 1!important;height:280px;}}
      `}</style>

      {/* Hero — one photograph filling most of the screen, no card border */}
      <section style={{ position: "relative", height: "82vh", minHeight: "480px", overflow: "hidden", background: "#111" }}>
        {hero && <img src={hero.src} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.6) 100%)" }} />
        <div className="uncov-hero-pad" style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "0 80px 56px" }}>
          <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "10px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.75)", marginBottom: "14px" }}>@udituncovered</p>
          <h1 style={{ fontFamily: "'Instrument Serif',serif", fontSize: "clamp(30px,5.5vw,58px)", fontWeight: 400, color: "#fff", lineHeight: 1.15, maxWidth: "16ch", marginBottom: "14px" }}>
            Things I wanted to experience for myself.
          </h1>
          <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.8)" }}>
            A running record of curiosity outside work.
          </p>
        </div>
      </section>

      {/* Gallery — large images, unexpected crops, tiny captions, no bordered UI */}
      <div className="sp" style={{ background: C.bg }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div className="unc-grid">
            {gallery.map((ph, i) => {
              const [cs, rs] = SPANS[i] || [1, 1];
              return (
                <Reveal key={ph.title} delay={(i % 4) * 0.05} style={{ gridColumn: `span ${cs}`, gridRow: `span ${rs}` }}>
                  <div style={{ position: "relative", height: "100%", overflow: "hidden", borderRadius: "4px" }}>
                    <img src={ph.src} alt={ph.title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                    <div style={{ position: "absolute", left: "10px", bottom: "8px", right: "10px" }}>
                      <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "9.5px", color: "rgba(255,255,255,0.85)", textShadow: "0 1px 4px rgba(0,0,0,0.6)" }}>{ph.location}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>

      {/* Follow */}
      <div className="sp" style={{ background: C.bgSection, borderTop: `1px solid ${C.borderSoft}`, textAlign: "center" }}>
        <a href={SOCIAL.instagram} target="_blank" rel="noreferrer"
          style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "12px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: C.rust }}>
          Follow @udituncovered →
        </a>
      </div>

      <style>{`@media(max-width:768px){.uncov-hero-pad{padding:0 24px 40px!important;}}`}</style>
    </Layout>
  );
}
