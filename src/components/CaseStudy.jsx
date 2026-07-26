import { useState } from "react";
import { C } from "../constants.js";

const label = { fontFamily: "'DM Sans',sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase" };
const body  = { fontFamily: "'DM Sans',sans-serif", fontSize: "13.5px", fontWeight: 300, lineHeight: 1.8, color: C.textMid };

function Block({ b }) {
  switch (b.t) {
    case "h3":
      return <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "20px", fontWeight: 500, color: C.textHigh, margin: "30px 0 12px" }}>{b.text}</h3>;
    case "h4":
      return <p style={{ ...label, color: C.gold, margin: "22px 0 10px" }}>{b.text}</p>;
    case "p":
      return <p style={{ ...body, marginBottom: "14px" }}>{b.text}</p>;
    case "ul":
      return (
        <ul style={{ margin: "0 0 14px", paddingLeft: "0", listStyle: "none", display: "flex", flexDirection: "column", gap: "7px" }}>
          {b.items.map((it, i) => (
            <li key={i} style={{ ...body, display: "flex", gap: "10px" }}>
              <span style={{ color: C.gold, flexShrink: 0 }}>—</span>{it}
            </li>
          ))}
        </ul>
      );
    case "quote":
      return (
        <blockquote style={{ margin: "16px 0", padding: "14px 20px", borderLeft: `2px solid ${C.border}`, fontFamily: "'Cormorant Garamond',serif", fontSize: "17px", fontStyle: "italic", color: C.textHigh, lineHeight: 1.6 }}>
          {b.text}
        </blockquote>
      );
    case "flow":
      return (
        <div style={{ display: "flex", flexDirection: "column", margin: "16px 0" }}>
          {b.items.map((it, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "16px", flexShrink: 0 }}>
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: C.gold, flexShrink: 0 }} />
                {i < b.items.length - 1 && <span style={{ width: "1px", flex: 1, minHeight: "18px", background: C.border }} />}
              </div>
              <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "12.5px", fontWeight: 500, color: C.textHigh, padding: "0 0 12px" }}>{it}</p>
            </div>
          ))}
        </div>
      );
    case "proscons":
      return (
        <div style={{ margin: "16px 0", background: C.bgCard, border: `1px solid ${C.borderSoft}`, borderRadius: "6px", padding: "18px 20px" }}>
          <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "16px", fontWeight: 500, color: C.textHigh, marginBottom: "12px" }}>{b.label}</p>
          <div style={{ display: "flex", gap: "28px", flexWrap: "wrap", marginBottom: "12px" }}>
            <div>
              <p style={{ ...label, color: C.textLow, marginBottom: "6px" }}>Pros</p>
              {b.pros.map((p, i) => <p key={i} style={{ ...body, fontSize: "12.5px", marginBottom: "3px" }}>{p}</p>)}
            </div>
            <div>
              <p style={{ ...label, color: C.textLow, marginBottom: "6px" }}>Cons</p>
              {b.cons.map((p, i) => <p key={i} style={{ ...body, fontSize: "12.5px", marginBottom: "3px" }}>{p}</p>)}
            </div>
          </div>
          <p style={{ ...body, fontSize: "12.5px", color: C.textHigh, borderTop: `1px solid ${C.borderSoft}`, paddingTop: "10px" }}><strong style={{ color: C.gold, fontWeight: 600 }}>Recommendation — </strong>{b.rec}</p>
        </div>
      );
    case "reco":
      return (
        <div style={{ margin: "16px 0", background: C.bgCard, border: `1px solid ${C.borderSoft}`, borderRadius: "6px", padding: "18px 20px" }}>
          <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "16px", fontWeight: 500, color: C.textHigh, marginBottom: "6px" }}>{b.label}</p>
          <p style={{ ...body, fontSize: "12.5px", marginBottom: b.items ? "10px" : "12px" }}>{b.lead}</p>
          {b.items && (
            <ul style={{ margin: "0 0 12px", paddingLeft: "0", listStyle: "none", display: "flex", flexDirection: "column", gap: "5px" }}>
              {b.items.map((it, i) => (
                <li key={i} style={{ ...body, fontSize: "12.5px", display: "flex", gap: "10px" }}>
                  <span style={{ color: C.gold, flexShrink: 0 }}>—</span>{it}
                </li>
              ))}
            </ul>
          )}
          <p style={{ ...body, fontSize: "12.5px", color: C.textHigh, borderTop: `1px solid ${C.borderSoft}`, paddingTop: "10px" }}><strong style={{ color: C.gold, fontWeight: 600 }}>Recommendation — </strong>{b.rec}</p>
        </div>
      );
    case "outcome":
      return (
        <div style={{ margin: "26px 0 4px", padding: "22px 24px", background: "rgba(201,162,75,0.06)", border: `1px solid ${C.border}`, borderRadius: "6px" }}>
          <p style={{ ...label, color: C.gold, marginBottom: "10px" }}>Strategic Outcome</p>
          <p style={{ ...body, marginBottom: "10px" }}>{b.lead}</p>
          <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "19px", fontStyle: "italic", color: C.textHigh, lineHeight: 1.5, marginBottom: "10px" }}>{b.quote}</p>
          <p style={{ ...body }}>{b.body}</p>
        </div>
      );
    default:
      return null;
  }
}

export default function CaseStudyCard({ study }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ background: C.bgCard, border: `1px solid ${C.borderSoft}`, borderRadius: "8px", overflow: "hidden" }}>
      <button onClick={() => setOpen(!open)}
        style={{ width: "100%", textAlign: "left", padding: "24px 26px", background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px" }}>
        <div>
          <p style={{ ...label, color: C.gold, marginBottom: "8px" }}>{study.tag}</p>
          <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "19px", fontWeight: 500, color: C.textHigh, lineHeight: 1.3 }}>{study.title}</p>
        </div>
        <span style={{ color: C.textLow, fontSize: "13px", flexShrink: 0, transform: open ? "rotate(90deg)" : "none", transition: "transform .2s" }}>▸</span>
      </button>
      {open && (
        <div style={{ padding: "0 26px 30px", maxWidth: "68ch" }}>
          {study.blocks.map((b, i) => <Block key={i} b={b} />)}
        </div>
      )}
    </div>
  );
}
