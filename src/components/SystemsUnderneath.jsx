import { useState } from "react";
import { C, LAYERS } from "../constants.js";

// The layered-product visual: click a layer, the items in it illuminate and
// the rest recede. Click-driven (not hover-only) so it works identically on
// touch and mouse — no separate mobile fallback needed.
export default function SystemsUnderneath({ compact = false }) {
  const [active, setActive] = useState(0);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
      {LAYERS.map((layer, i) => {
        const isActive = active === i;
        return (
          <button
            key={layer.key}
            type="button"
            onClick={() => setActive(i)}
            aria-expanded={isActive}
            aria-controls={`layer-items-${layer.key}`}
            style={{
              display: "block", width: "100%", textAlign: "left", font: "inherit",
              cursor: "pointer",
              padding: compact ? "18px 22px" : "26px 28px",
              background: isActive ? C.bgCard : "transparent",
              border: `1px solid ${isActive ? C.border : "transparent"}`,
              borderRadius: "8px",
              transition: "background .35s ease, border-color .35s ease",
            }}
          >
            <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "12px", flexWrap: "wrap" }}>
              <p style={{
                fontFamily: "'DM Sans',sans-serif", fontSize: "9px", fontWeight: 700,
                letterSpacing: "0.24em", textTransform: "uppercase",
                color: isActive ? C.accent : C.textLow, transition: "color .3s ease",
              }}>
                Layer {i + 1} · {layer.label}
              </p>
            </div>
            <div id={`layer-items-${layer.key}`} style={{
              display: "flex", flexWrap: "wrap", gap: "10px 20px", marginTop: "12px",
              maxHeight: isActive ? "80px" : "0px", opacity: isActive ? 1 : 0,
              overflow: "hidden", transition: "max-height .4s ease, opacity .3s ease",
            }}>
              {layer.items.map((item) => (
                <span key={item} style={{ fontFamily: "'Instrument Serif',serif", fontSize: compact ? "17px" : "20px", color: C.textHigh }}>{item}</span>
              ))}
            </div>
          </button>
        );
      })}
    </div>
  );
}
