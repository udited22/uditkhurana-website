import { useState } from "react";
import { C, INTERSECTIONS } from "../constants.js";

// V4 rebuild. Previous version was a 50/50 hover-to-reveal split — a full
// screen that delivered one sentence only after the visitor guessed to
// hover. Every module here shows its name + evidence by default; hover/
// focus adds exactly one more layer (the two-circle mark converges, and a
// link chip resolves where a genuine on-site destination exists). Mobile
// gets the same complete content with no hover dependency — the link chip
// just renders inline instead of waiting for a gesture that doesn't exist.
function Mark({ hovered }) {
  return (
    <svg width="40" height="26" viewBox="0 0 40 26" style={{ flexShrink: 0 }}>
      <circle cx={hovered ? 15 : 13} cy="13" r="10.5" fill="none" stroke={C.accent} strokeWidth="1.3" style={{ transition: "cx .18s ease-out" }} />
      <circle cx={hovered ? 25 : 27} cy="13" r="10.5" fill="none" stroke={C.rust} strokeWidth="1.3" style={{ transition: "cx .18s ease-out" }} />
    </svg>
  );
}

function Chip({ link }) {
  if (!link) return null;
  const isAnchor = link.href.startsWith("#");
  return (
    <a
      href={link.href}
      onClick={isAnchor ? (e) => {
        e.preventDefault();
        document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
      } : (e) => {
        e.preventDefault();
        window.history.pushState({}, "", link.href);
        window.dispatchEvent(new PopStateEvent("popstate"));
      }}
      className="ie-chip"
      style={{
        display: "inline-flex", alignItems: "center", gap: "5px", marginTop: "12px",
        fontFamily: "'IBM Plex Sans',sans-serif", fontSize: "10.5px", fontWeight: 600,
        letterSpacing: "0.06em", textTransform: "uppercase", color: C.accent,
      }}
    >
      {link.label} <span aria-hidden="true">→</span>
    </a>
  );
}

function Module({ item, index, hovered, setHovered }) {
  const isWide = index === INTERSECTIONS.length - 1;
  const isHovered = hovered === index;
  return (
    <div
      className="ie-module"
      style={{
        gridColumn: isWide ? "1 / -1" : "auto",
        padding: isWide ? "26px 30px" : "22px 24px",
        background: isHovered ? C.bgCard : "transparent",
        border: `1px solid ${isHovered ? C.border : C.borderSoft}`,
        borderRadius: "8px",
        transition: "background .2s ease, border-color .2s ease",
      }}
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      onFocus={() => setHovered(index)}
      onBlur={() => setHovered(null)}
      tabIndex={0}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
        <Mark hovered={isHovered} />
        <p style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: isWide ? "16px" : "14.5px", fontWeight: 600, color: C.textHigh }}>
          {item.a} <span style={{ color: C.accent, fontWeight: 400 }}>×</span> {item.b}
        </p>
      </div>
      <p style={{
        fontFamily: "'IBM Plex Sans',sans-serif", fontSize: isWide ? "15px" : "13.5px", fontWeight: 400,
        color: C.textMid, lineHeight: 1.55, maxWidth: isWide ? "62ch" : "34ch",
      }}>
        {item.evidence}
      </p>
      {/* Desktop: link chip only appears with the hovered/focused module.
          Mobile: always rendered (see .ie-chip-wrap rule below) — no hover to gate it behind. */}
      <div className="ie-chip-wrap" style={{ opacity: isHovered ? 1 : 0, height: isHovered ? "auto" : 0, overflow: "hidden", transition: "opacity .15s ease" }}>
        <Chip link={item.link} />
      </div>
    </div>
  );
}

export default function IntersectionEngine() {
  const [hovered, setHovered] = useState(null);
  return (
    <div>
      <div className="ie-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "12px" }}>
        {INTERSECTIONS.map((item, i) => (
          <Module key={i} item={item} index={i} hovered={hovered} setHovered={setHovered} />
        ))}
      </div>
      <style>{`
        @media(max-width:820px){
          .ie-grid{grid-template-columns:1fr!important;}
          .ie-module{grid-column:1!important;}
          .ie-chip-wrap{opacity:1!important;height:auto!important;}
        }
      `}</style>
    </div>
  );
}
