import { C, DO_HARD_THINGS } from "../constants.js";

// Photographic, not iconographic — three real photos in an asymmetric grid
// (same visual spirit as the Udit Uncovered gallery) rather than identical
// SaaS-style cards.
//
// Each module's aspect-ratio matches its own source photo (Ironman 960x1280
// -> 3/4, scuba 1600x1200 -> 4/3, snow/ice 960x1280 -> 3/4) instead of being
// forced into a shared fixed grid-auto-rows height. A previous version used
// gridAutoRows:"230px" with the featured module spanning 2 rows, which put
// two 3:4 portrait photos inside cells shaped closer to 2:1 landscape —
// object-fit:cover had to crop away most of the vertical composition to
// fill that mismatched shape (Ironman lost context, snow/ice lost the
// slope entirely). Matching each cell's ratio to its photo's real ratio
// means cover now trims only a sliver at the edges, if anything.
//
// No media-query-specific aspect ratios are needed any more — the same
// ratios that look right on desktop are exactly what "natural, uncropped"
// means on mobile too. The only thing that changes at narrow widths is the
// grid structure itself (2 columns -> 1), not any individual ratio.
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
        <p style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: "9.5px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.7)", marginBottom: "8px" }}>
          {item.tag}
        </p>
        <h3 style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: item.featured ? "clamp(24px,3vw,32px)" : "19px", fontWeight: 400, color: "#fff", lineHeight: 1.15, marginBottom: "10px" }}>
          {item.title}
        </h3>
        <p style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: item.featured ? "13px" : "12px", color: "rgba(255,255,255,0.82)", lineHeight: 1.55, maxWidth: "34ch", marginBottom: item.cta ? "14px" : 0 }}>
          {item.copy}
        </p>
        {item.cta && (
          <a href={item.cta.url} target="_blank" rel="noreferrer"
            style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#fff", borderBottom: "1px solid rgba(255,255,255,0.5)", paddingBottom: "2px" }}>
            {item.cta.label}
          </a>
        )}
      </div>
    </div>
  );
}

export default function DoHardThings() {
  const [featured, scuba, snow] = DO_HARD_THINGS;
  return (
    <>
      <div className="dht-grid" style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: "14px", alignItems: "start" }}>
        <div style={{ aspectRatio: "3/4" }}>
          <Module item={featured} />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          <div style={{ aspectRatio: "4/3" }}>
            <Module item={scuba} />
          </div>
          <div style={{ aspectRatio: "3/4" }}>
            <Module item={snow} />
          </div>
        </div>
      </div>
      <style>{`
        @media(max-width:700px){
          .dht-grid{grid-template-columns:1fr!important;}
        }
      `}</style>
    </>
  );
}
