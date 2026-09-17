import { useEffect, useRef, useState } from "react";
import { C } from "../constants.js";

const WORDS = ["BUILD", "THINK", "TEST", "EXPLORE"];
// Starting offsets so the four words read as scattered, then converge —
// a scroll-triggered narrative transition (500–750ms class), not a
// decorative loop; it plays once.
const START_OFFSET = [-220, -80, 90, 230];

export default function ConvergeWords() {
  const ref = useRef(null);
  const [triggered, setTriggered] = useState(false);
  const [settled, setSettled] = useState(false);
  const reduced = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    if (reduced) { setTriggered(true); setSettled(true); return; }
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTriggered(true);
        obs.disconnect();
      }
    }, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [reduced]);

  useEffect(() => {
    if (!triggered || reduced) return;
    const t = setTimeout(() => setSettled(true), 700);
    return () => clearTimeout(t);
  }, [triggered, reduced]);

  return (
    <div ref={ref} style={{ textAlign: "center", padding: "60px 24px", minHeight: "220px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", overflow: "hidden", maxWidth: "100%" }}>
      {/* The scattered pre-trigger word positions sit well outside this box on
          narrow viewports (by design — they "fly in"); overflow:hidden here
          keeps that from extending the page's scrollWidth before the
          IntersectionObserver ever fires (e.g. on a page that loads with
          this section already visible, or before the user scrolls to it). */}
      <div style={{ position: "relative", height: "60px", width: "100%", display: settled ? "none" : "block" }}>
        {WORDS.map((w, i) => (
          <span key={w} style={{
            position: "absolute", left: "50%", top: 0,
            transform: `translateX(${triggered ? 0 : START_OFFSET[i]}px) translateX(-50%)`,
            opacity: triggered ? (i === 0 ? 1 : 0) : 1,
            transition: `transform .7s cubic-bezier(.22,.68,.36,1) ${i * 0.06}s, opacity .5s ease ${0.4 + i * 0.06}s`,
            fontFamily: "'DM Sans',sans-serif", fontSize: "13px", fontWeight: 700, letterSpacing: "0.3em",
            color: C.textLow, whiteSpace: "nowrap",
          }}>
            {w}
          </span>
        ))}
      </div>

      <div style={{ opacity: settled ? 1 : 0, transform: settled ? "none" : "translateY(8px)", transition: "opacity .6s ease, transform .6s ease" }}>
        <p style={{ fontFamily: "'Instrument Serif',serif", fontSize: "clamp(36px,6vw,64px)", fontStyle: "italic", color: C.accent, marginBottom: "14px" }}>Curiosity.</p>
        <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "12px", fontWeight: 500, letterSpacing: "0.08em", color: C.textMid }}>Different arenas. Same operating system.</p>
      </div>
    </div>
  );
}
