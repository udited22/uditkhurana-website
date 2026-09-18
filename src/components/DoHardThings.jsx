import { C, DO_HARD_THINGS } from "../constants.js";

// Photographic, not iconographic — three real photos in an asymmetric grid
// (same grid-span technique as the Udit Uncovered gallery) rather than
// identical SaaS-style cards. Ironman is portrait-shaped and spans two rows
// as the featured story; the landscape scuba shot and the portrait snow
// shot fill the two supporting cells, each cropped only at the edges its
// own aspect ratio doesn't already fit. On mobile, each of the three keeps
// an aspect ratio close to its own source photo (3/4 for the two portrait
// shots, 4/3 for the landscape scuba shot) rather than a uniform crop — the
// snow photo in particular needs its portrait shape to keep the slope and
// the full outstretched pose visible.
function Module({ item }) {
  return (
    <div style={{ position: "relative", height: "100%", overflow: "hidden", borderRadius: "6px" }}>
      <img
        src={item.photo}
        alt={item.alt}
        loading="lazy"
        decoding="async"
        style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block" }}
      />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(0,0,0,0.05) 40%, rgba(0,0,0,0.7) 100%)" }} />
      <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, padding: item.featured ? "28px" : "20px" }}>
        <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "9.5px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.7)", marginBottom: "8px" }}>
          {item.tag}
        </p>
        <h3 style={{ fontFamily: "'Instrument Serif',serif", fontSize: item.featured ? "clamp(24px,3vw,32px)" : "19px", fontWeight: 400, color: "#fff", lineHeight: 1.15, marginBottom: "10px" }}>
          {item.title}
        </h3>
        <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: item.featured ? "13px" : "12px", color: "rgba(255,255,255,0.82)", lineHeight: 1.55, maxWidth: "34ch", marginBottom: item.cta ? "14px" : 0 }}>
          {item.copy}
        </p>
        {item.cta && (
          <a href={item.cta.url} target="_blank" rel="noreferrer"
            style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#fff", borderBottom: "1px solid rgba(255,255,255,0.5)", paddingBottom: "2px" }}>
            {item.cta.label}
          </a>
        )}
      </div>
    </div>
  );
}

export default function DoHardThings() {
  const [featured, ...rest] = DO_HARD_THINGS;
  return (
    <>
      <div className="dht-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gridAutoRows: "230px", gap: "14px" }}>
        <div style={{ gridColumn: "1", gridRow: "span 2" }}>
          <Module item={featured} />
        </div>
        {rest.map((item) => (
          <div key={item.key}>
            <Module item={item} />
          </div>
        ))}
      </div>
      <style>{`
        @media(max-width:700px){
          .dht-grid{grid-template-columns:1fr!important;grid-auto-rows:auto!important;}
          .dht-grid>div{grid-column:1!important;grid-row:auto!important;}
          .dht-grid>div:nth-child(1){aspect-ratio:3/4;}
          .dht-grid>div:nth-child(2){aspect-ratio:4/3;}
          .dht-grid>div:nth-child(3){aspect-ratio:3/4;}
        }
      `}</style>
    </>
  );
}
