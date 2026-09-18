import { useState } from "react";
import { C, INTERSECTIONS } from "../constants.js";

// The site's signature interaction. Desktop: hovering a relationship
// updates an adjacent evidence panel (a reusable interaction, not a
// decorative animation). Mobile: no hover dependency — a horizontally
// swipeable, scroll-snapped strip with the same evidence built in per card,
// so nothing is lost to touch devices.
function Mark({ active }) {
  return (
    <svg width="44" height="32" viewBox="0 0 44 32" style={{ flexShrink: 0 }}>
      <circle cx="16" cy="16" r="13" fill="none" stroke={C.accent} strokeWidth="1.3" opacity={active ? 0.9 : 0.35} style={{ transition: "opacity .35s ease" }} />
      <circle cx="28" cy="16" r="13" fill="none" stroke={C.rust} strokeWidth="1.3" opacity={active ? 0.9 : 0.35} style={{ transition: "opacity .35s ease" }} />
    </svg>
  );
}

export default function IntersectionEngine() {
  const [active, setActive] = useState(0);
  const current = INTERSECTIONS[active];

  return (
    <div>
      {/* Desktop: list + adjacent evidence panel */}
      <div className="ie-desktop" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "56px", alignItems: "start" }}>
        <div>
          {INTERSECTIONS.map((it, i) => (
            <button
              key={i}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              style={{
                display: "flex", alignItems: "center", gap: "14px", width: "100%",
                textAlign: "left", background: "none", border: "none", cursor: "pointer",
                padding: "13px 0", borderBottom: `1px solid ${C.borderSoft}`,
                fontFamily: "'IBM Plex Sans',sans-serif", fontSize: "14px", fontWeight: 500,
                color: active === i ? C.textHigh : C.textMid, transition: "color .2s ease",
              }}
            >
              <Mark active={active === i} />
              <span>{it.a} <em style={{ color: C.accent, fontStyle: "normal" }}>×</em> {it.b}</span>
            </button>
          ))}
        </div>

        <div style={{ paddingTop: "8px", minHeight: "140px" }}>
          <p key={active} style={{
            fontFamily: "'IBM Plex Sans',sans-serif", fontSize: "clamp(20px,2.4vw,28px)", fontStyle: "italic",
            color: C.textHigh, lineHeight: 1.4, animation: "ieFade .4s ease both",
          }}>
            {current.evidence}
          </p>
        </div>
      </div>

      {/* Mobile: swipeable, scroll-snapped strip — no hover, no JS touch handling */}
      <div className="ie-mobile" style={{ display: "none", gap: "14px", overflowX: "auto", scrollSnapType: "x mandatory", paddingBottom: "6px", margin: "0 -24px", padding: "0 24px 6px" }}>
        {INTERSECTIONS.map((it, i) => (
          <div key={i} style={{
            scrollSnapAlign: "start", flexShrink: 0, width: "84%", background: C.bgCard,
            border: `1px solid ${C.borderSoft}`, borderRadius: "8px", padding: "22px 20px",
          }}>
            <div style={{ marginBottom: "12px" }}><Mark active /></div>
            <p style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: "13px", fontWeight: 600, color: C.textHigh, marginBottom: "10px" }}>
              {it.a} <em style={{ color: C.accent, fontStyle: "normal" }}>×</em> {it.b}
            </p>
            <p style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: "18px", fontStyle: "italic", color: C.textMid, lineHeight: 1.4 }}>{it.evidence}</p>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes ieFade{from{opacity:0;transform:translateY(6px);}to{opacity:1;transform:none;}}
        @media(max-width:820px){.ie-desktop{display:none!important;}.ie-mobile{display:flex!important;}}
      `}</style>
    </div>
  );
}
