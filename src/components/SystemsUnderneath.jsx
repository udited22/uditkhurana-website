import { useState } from "react";
import { C, LAYERS } from "../constants.js";

// V4 rebuild. Previous version hid two of three layers behind a click,
// leaving two collapsed rows with nothing in them until interacted with —
// the exact "hidden behind hover/click without enough reason to interact"
// failure named in the brief. All three layers now render fully expanded,
// connected by a single rail that threads through them (the visual claim:
// these aren't separate lists, they're one stack). Hovering a layer
// highlights it without hiding the other two — the complete mental model
// is legible before any interaction.
//
// This highlight is decorative, not actionable — nothing toggles, nothing
// navigates, there's no "activation." An earlier pass gave these divs
// role="button" + tabIndex={0} with no click handler and no keyboard
// activation, which is false semantics and a keyboard trap: screen reader
// users would land on something announced as a button that does nothing
// when pressed, and keyboard users would tab through 3 stops that serve no
// purpose. Plain hover-only divs, no ARIA role, no tab stop.
export default function SystemsUnderneath() {
  const [active, setActive] = useState(null);

  return (
    <div className="su-stack" style={{ position: "relative", display: "flex", flexDirection: "column", gap: "14px" }}>
      <div className="su-rail" aria-hidden="true" style={{
        position: "absolute", left: "13px", top: "22px", bottom: "22px", width: "2px",
        background: C.borderSoft, borderRadius: "1px",
      }} />
      {LAYERS.map((layer, i) => {
        const isActive = active === i;
        const dimmed = active !== null && !isActive;
        return (
          <div
            key={layer.key}
            onMouseEnter={() => setActive(i)}
            onMouseLeave={() => setActive(null)}
            style={{
              position: "relative", paddingLeft: "34px", padding: "18px 20px 18px 34px",
              background: isActive ? C.bgCard : "transparent",
              border: `1px solid ${isActive ? C.border : "transparent"}`,
              borderRadius: "8px",
              opacity: dimmed ? 0.62 : 1,
              transition: "opacity .25s ease, background .25s ease, border-color .25s ease",
            }}
          >
            <div aria-hidden="true" style={{
              position: "absolute", left: "8px", top: "22px", width: "10px", height: "10px",
              borderRadius: "50%", background: isActive ? C.accent : C.bg,
              border: `2px solid ${isActive ? C.accent : C.borderSoft}`,
              transition: "background .25s ease, border-color .25s ease",
            }} />
            <p style={{
              fontFamily: "'IBM Plex Sans',sans-serif", fontSize: "9.5px", fontWeight: 700,
              letterSpacing: "0.22em", textTransform: "uppercase",
              color: isActive ? C.accent : C.textLow, marginBottom: "10px", transition: "color .25s ease",
            }}>
              Layer {i + 1} · {layer.label}
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 16px" }}>
              {layer.items.map((item) => (
                <span key={item} style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: "15px", fontWeight: 500, color: C.textHigh }}>{item}</span>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
