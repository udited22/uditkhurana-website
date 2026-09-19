import { C, INTERSECTIONS } from "../constants.js";

// V4 rebuild. Previous version was a 50/50 hover-to-reveal split — a full
// screen that delivered one sentence only after the visitor guessed to
// hover. Every module here shows its name + evidence by default; hover/
// focus adds exactly one more layer (the two-circle mark converges, and a
// link chip resolves where a genuine on-site destination exists). Mobile
// gets the same complete content with no hover dependency — the link chip
// just renders inline instead of waiting for a gesture that doesn't exist.
//
// The reveal is driven entirely by CSS :hover/:focus-within (see the
// stylesheet below), not JS state. An earlier version put tabIndex={0} on
// the outer div to catch keyboard focus and mirror it into React state —
// that made the div a tab stop with no action of its own, so a keyboard
// user landed on it, saw a focus ring, and had to Tab again to reach the
// actual link. The link `<a>` is the only new tab stop now; focusing it
// triggers :focus-within on its ancestor .ie-module, which gets the exact
// same rule as :hover.
function Mark() {
  return (
    <svg className="ie-mark" width="40" height="26" viewBox="0 0 40 26" style={{ flexShrink: 0 }}>
      <circle className="ie-circle-a" cx="13" cy="13" r="10.5" fill="none" stroke={C.accent} strokeWidth="1.3" />
      <circle className="ie-circle-b" cx="27" cy="13" r="10.5" fill="none" stroke={C.rust} strokeWidth="1.3" />
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

function Module({ item, index }) {
  const isWide = index === INTERSECTIONS.length - 1;
  return (
    <div
      className="ie-module"
      style={{
        gridColumn: isWide ? "1 / -1" : "auto",
        padding: isWide ? "26px 30px" : "22px 24px",
        border: `1px solid ${C.borderSoft}`,
        borderRadius: "8px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
        <Mark />
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
      {/* Desktop: link chip only appears on hover/focus-within of .ie-module.
          Mobile: always rendered (see .ie-chip-wrap rule below) — no hover to gate it behind. */}
      <div className="ie-chip-wrap">
        <Chip link={item.link} />
      </div>
    </div>
  );
}

export default function IntersectionEngine() {
  return (
    <div>
      <div className="ie-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "12px" }}>
        {INTERSECTIONS.map((item, i) => (
          <Module key={i} item={item} index={i} />
        ))}
      </div>
      <style>{`
        .ie-module{background:transparent;transition:background .2s ease,border-color .2s ease;}
        .ie-module:hover, .ie-module:focus-within{background:${C.bgCard};border-color:${C.border}!important;}
        .ie-circle-a, .ie-circle-b{transition:transform .18s ease-out;}
        .ie-module:hover .ie-circle-a, .ie-module:focus-within .ie-circle-a{transform:translateX(2px);}
        .ie-module:hover .ie-circle-b, .ie-module:focus-within .ie-circle-b{transform:translateX(-2px);}
        .ie-chip-wrap{opacity:0;height:0;overflow:hidden;transition:opacity .15s ease;}
        .ie-module:hover .ie-chip-wrap, .ie-module:focus-within .ie-chip-wrap{opacity:1;height:auto;}
        .ie-chip:focus-visible{outline:2px solid ${C.accent};outline-offset:2px;}
        @media(max-width:820px){
          .ie-grid{grid-template-columns:1fr!important;}
          .ie-module{grid-column:1!important;}
          .ie-chip-wrap{opacity:1!important;height:auto!important;}
        }
      `}</style>
    </div>
  );
}
