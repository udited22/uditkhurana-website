import { useEffect, useRef, useState } from "react";
import { C, OPERATING_LOOP, PHOTO, LAYERS, PROJECTS } from "../constants.js";
import { PerDiemWordmark } from "./Layout.jsx";
import { PHOTOS } from "../photos.js";

// Photograph-backed states.
const PHOTO_EVIDENCE = {
  curiosity: PHOTOS.find((p) => p.title === "Monastery in the Mirror")?.src,
  do: PHOTO.fitness,
  reflect: PHOTOS.find((p) => p.title === "A Life Fully Lived")?.src,
};

// Non-photo evidence for the three states a travel/life photo wouldn't
// honestly represent: Systems reuses the same layered-product visual
// language as Home; Experiment points at real shipped side builds (the
// actual evidence of "tested," not another travel frame); Document points
// at the two properties that are literally the documentation habit.
function SystemsEvidence() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "6px", width: "100%" }}>
      {LAYERS.map((l) => (
        <div key={l.key} style={{ padding: "8px 10px", background: C.bgCard, border: `1px solid ${C.borderSoft}`, borderRadius: "5px" }}>
          <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "9px", fontWeight: 600, color: C.textMid }}>{l.label}</p>
        </div>
      ))}
    </div>
  );
}

function ExperimentEvidence() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px", width: "100%" }}>
      <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: C.textLow }}>Shipped side builds</p>
      {PROJECTS.slice(0, 4).map((p) => (
        <p key={p.name} style={{ fontFamily: "'Instrument Serif',serif", fontSize: "15px", color: C.textHigh }}>{p.name}</p>
      ))}
    </div>
  );
}

function DocumentEvidence() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "14px", width: "100%" }}>
      <PerDiemWordmark />
      <p style={{ fontFamily: "'Instrument Serif',serif", fontSize: "16px", color: C.textHigh }}>Udit Uncovered</p>
    </div>
  );
}

const CUSTOM_EVIDENCE = {
  systems: SystemsEvidence,
  experiment: ExperimentEvidence,
  document: DocumentEvidence,
};

// About's spine: six states, one visual+line each, the active one changing
// as the visitor scrolls past its section. A thin sticky rail shows
// progress through the loop and closes back to "Curiosity" at the end.
//
// Reduced motion removes the scroll-linked animation entirely rather than
// just skipping the observer — with the observer skipped but `active`
// still defaulting to 0, every state past the first would sit permanently
// dimmed at opacity 0.32, which is a legibility regression, not a motion
// reduction. `active === null` here is the signal downstream to render
// every state at full opacity and skip highlighting any single rail label.
function useActiveOnScroll(count) {
  const reduced = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const [active, setActive] = useState(reduced ? null : 0);
  const refs = useRef([]);

  useEffect(() => {
    if (reduced) return;
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
  }, [count, reduced]);

  return [active, refs, reduced];
}

export default function OperatingLoop() {
  const [active, refs, reduced] = useActiveOnScroll(OPERATING_LOOP.length);

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
              color: !reduced && active === i ? C.accent : C.textLow, transition: "color .3s ease",
            }}>
              {s.label}
            </span>
          ))}
        </div>

        {OPERATING_LOOP.map((s, i) => {
          const photo = PHOTO_EVIDENCE[s.key];
          const Custom = CUSTOM_EVIDENCE[s.key];
          return (
            <div
              key={s.key}
              ref={(el) => (refs.current[i] = el)}
              className="loop-state"
              style={{
                minHeight: "48vh", display: "grid", gridTemplateColumns: photo || Custom ? "160px 1fr" : "1fr",
                gap: "32px", alignItems: "center",
                padding: "40px 0", opacity: reduced || active === i ? 1 : 0.32, transition: "opacity .5s ease",
              }}
            >
              {photo && (
                <div className="loop-photo" style={{ width: "160px", aspectRatio: "1/1", borderRadius: "8px", overflow: "hidden", flexShrink: 0, border: `1px solid ${C.borderSoft}` }}>
                  <img src={photo} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                </div>
              )}
              {!photo && Custom && (
                <div className="loop-custom" style={{ width: "160px", flexShrink: 0, display: "flex", alignItems: "center" }}>
                  <Custom />
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
          );
        })}
      </div>

      <div style={{ textAlign: "center", padding: "40px 0 20px" }}>
        <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "10px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: C.textLow, marginBottom: "10px" }}>Back to the start</p>
        <p style={{ fontFamily: "'Instrument Serif',serif", fontSize: "clamp(26px,4vw,40px)", fontStyle: "italic", color: C.accent }}>Curiosity.</p>
      </div>

      <style>{`
        @media(max-width:600px){.loop-rail{gap:10px!important;top:60px!important;}}
        @media(max-width:560px){.loop-state{grid-template-columns:1fr!important;}.loop-photo{width:140px!important;}.loop-custom{width:100%!important;}}
      `}</style>
    </div>
  );
}
