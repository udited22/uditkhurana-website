import { Fragment } from "react";
import { C, CAREER_MATRIX } from "../constants.js";

// "The surface kept changing. The underlying systems accumulated." — a
// company × layer grid, read top-to-bottom as the accumulation building.
export default function CareerMatrix() {
  const { layers, rows } = CAREER_MATRIX;

  return (
    <div style={{ overflowX: "auto" }}>
      <div style={{ display: "grid", gridTemplateColumns: `120px repeat(${layers.length}, 1fr)`, gap: "0", minWidth: "620px" }}>
        <div />
        {layers.map((l) => (
          <div key={l} style={{ padding: "0 6px 14px", textAlign: "center" }}>
            <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: C.textLow, lineHeight: 1.4 }}>{l}</p>
          </div>
        ))}

        {rows.map((row) => (
          <Fragment key={row.company}>
            <div style={{ padding: "14px 12px 14px 0", borderTop: `1px solid ${C.borderSoft}`, display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <p style={{ fontFamily: "'Instrument Serif',serif", fontSize: "18px", color: C.textHigh }}>{row.company}</p>
              <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "9px", color: C.textLow, marginTop: "2px" }}>{row.period}</p>
            </div>
            {row.filled.map((isFilled, ci) => (
              <div key={ci} style={{ borderTop: `1px solid ${C.borderSoft}`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{
                  width: "9px", height: "9px", borderRadius: "50%",
                  background: isFilled ? C.accent : "transparent",
                  border: `1.4px solid ${isFilled ? C.accent : C.borderSoft}`,
                }} />
              </div>
            ))}
          </Fragment>
        ))}
      </div>
    </div>
  );
}
