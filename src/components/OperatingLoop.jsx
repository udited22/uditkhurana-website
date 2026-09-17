import { useEffect, useRef, useState } from "react";
import { C, OPERATING_LOOP, PHOTO } from "../constants.js";
import { PHOTOS } from "../photos.js";

const VISUAL = {
  curiosity: PHOTOS.find((p) => p.title === "Monastery in the Mirror")?.src,
  experiment: PHOTOS.find((p) => p.title === "At the Top, Looking Further")?.src,
  do: PHOTO.fitness,
  reflect: PHOTOS.find((p) => p.title === "A Life Fully Lived")?.src,
};

// About's spine: six states, one visual+line each, the active one changing
// as the visitor scrolls past its section. A thin sticky rail shows
// progress through the loop and closes back to "Curiosity" at the end.
function useActiveOnScroll(count) {
  const [active, setActive] = useState(0);
  const refs = useRef([]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const observers = refs.current.map((el, i) => {
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(i); },
        { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, [count]);

  return [active, refs];
}

export default function OperatingLoop() {
  const [active, refs] = useActiveOnScroll(OPERATING_LOOP.length);

  return (
    <div>
      {/* Rail scoped to its own container so it releases exactly when the
          loop ends, instead of staying pinned through the closing beat. */}
      <div style={{ position: "relative" }}>
        <div className="loop-rail" style={{
          position: "sticky", top: "70px", zIndex: 5, display: "flex", justifyContent: "center",
          gap: "18px", padding: "18px 0 40px", background: `linear-gradient(${C.bg}, ${C.bg} 70%, transparent)`,
          flexWrap: "wrap",
        }}>
          {OPERATING_LOOP.map((s, i) => (
            <span key={s.key} style={{
              fontFamily: "'DM Sans',sans-serif", fontSize: "10px", fontWeight: 700,
              letterSpacing: "0.14em", textTransform: "uppercase",
              color: active === i ? C.accent : C.textLow, transition: "color .3s ease",
            }}>
              {s.label}
            </span>
          ))}
        </div>

        {OPERATING_LOOP.map((s, i) => (
          <div
            key={s.key}
            ref={(el) => (refs.current[i] = el)}
            className="loop-state"
            style={{
              minHeight: "48vh", display: "grid", gridTemplateColumns: VISUAL[s.key] ? "160px 1fr" : "1fr",
              gap: "32px", alignItems: "center",
              padding: "40px 0", opacity: active === i ? 1 : 0.32, transition: "opacity .5s ease",
            }}
          >
            {VISUAL[s.key] && (
              <div style={{ width: "160px", height: "160px", borderRadius: "8px", overflow: "hidden", flexShrink: 0, border: `1px solid ${C.borderSoft}` }}>
                <img src={VISUAL[s.key]} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
              </div>
            )}
            <div>
              <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", color: C.accent, marginBottom: "16px" }}>
                {String(i + 1).padStart(2, "0")} · {s.label}
              </p>
              <p style={{ fontFamily: "'Instrument Serif',serif", fontSize: "clamp(26px,4vw,44px)", fontStyle: "italic", color: C.textHigh, lineHeight: 1.3, maxWidth: "18ch" }}>
                {s.text}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div style={{ textAlign: "center", padding: "40px 0 20px" }}>
        <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "10px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: C.textLow, marginBottom: "10px" }}>Back to the start</p>
        <p style={{ fontFamily: "'Instrument Serif',serif", fontSize: "clamp(26px,4vw,40px)", fontStyle: "italic", color: C.accent }}>Curiosity.</p>
      </div>

      <style>{`
        @media(max-width:600px){.loop-rail{gap:10px!important;top:60px!important;}}
        @media(max-width:560px){.loop-state{grid-template-columns:1fr!important;}.loop-state > div:first-child{width:100%!important;height:180px!important;}}
      `}</style>
    </div>
  );
}
