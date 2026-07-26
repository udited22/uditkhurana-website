import Layout from "../components/Layout.jsx";
import { C, PHOTO, PILLAR_ACCENTS } from "../constants.js";
import { ICONS } from "../components/Icons.jsx";
import Reveal from "../components/Reveal.jsx";

const A = PILLAR_ACCENTS.fitness;

const PRINCIPLES = [
  { icon: "cpu",       title: "Train like you build product", desc: "Periodisation, load management, recovery — the same systems thinking that works in product works in training." },
  { icon: "clock",     title: "Consistency over intensity",   desc: "Showing up at 70% every day beats showing up at 100% twice a week. The compounding is in the habit, not the heroics." },
  { icon: "trending-up", title: "The long game mindset",      desc: "An Ironman 70.3 is built over months of unglamorous training. So is every meaningful physical transformation." },
  { icon: "moon",      title: "Recovery is the work",         desc: "Sleep, nutrition, and rest are not breaks from the system. They are the system." },
  { icon: "compass",   title: "Discipline creates freedom",   desc: "Structure is not a cage. A well-designed training system gives you the freedom to perform, not just survive." },
  { icon: "dumbbell",  title: "The body is infrastructure",   desc: "Physical capacity is leverage. Energy, focus, resilience — everything downstream improves when the body is strong." },
];

const MILESTONES = [
  { label: "Ironman 70.3",  sub: "1.9km swim · 90km bike · 21.1km run. Finisher, Goa 2024." },
  { label: "Hybrid Athlete",sub: "Training across strength, endurance, and mobility simultaneously." },
  { label: "Swim",          sub: "Open water and pool — a discipline built from scratch as an adult." },
  { label: "Cycling",       sub: "Long-distance road cycling as a meditative and physical practice." },
  { label: "Running",       sub: "From casual runner to half-marathon distance under structured training." },
  { label: "Strength",      sub: "Compound lifts as the foundation of physical resilience and posture." },
];

export default function FitnessPage() {
  return (
    <Layout activePath="/fitness">
      <style>{`
        .prin-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;}
        .mile-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;}
        .fit-hero{display:grid;grid-template-columns:240px 1fr;gap:56px;align-items:center;}
        .sp{padding:80px 80px;}
        @media(max-width:900px){.prin-grid{grid-template-columns:1fr 1fr!important;}.mile-grid{grid-template-columns:1fr 1fr!important;}}
        @media(max-width:768px){.sp{padding:64px 24px!important;}.prin-grid{grid-template-columns:1fr!important;}.mile-grid{grid-template-columns:1fr!important;}.fit-hero{grid-template-columns:1fr!important;}}
      `}</style>

      {/* Hero */}
      <div style={{ background: C.bgSection, padding: "80px 80px 64px", borderBottom: `1px solid ${C.borderSoft}` }} className="sp">
        <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
          <div className="fit-hero">
            <div style={{ width: "100%", aspectRatio: "3/4", borderRadius: "8px", overflow: "hidden", border: `1px solid ${A.border}`, backgroundImage: `url(${PHOTO.fitness})`, backgroundSize: "cover", backgroundPosition: "center 15%", flexShrink: 0 }} />
            <div>
              <span style={{ display: "inline-block", fontFamily: "'DM Sans',sans-serif", fontSize: "8.5px", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: A.accent, background: A.soft, border: `1px solid ${A.border}`, padding: "5px 12px", borderRadius: "20px", marginBottom: "16px" }}>Ironman 70.3 Finisher · Goa 2024</span>
              <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(28px,4vw,50px)", fontWeight: 400, color: C.textHigh, lineHeight: 1.1, marginBottom: "16px" }}>
                Training is not a hobby.<br /><em style={{ fontStyle: "italic", color: A.accent }}>It's an operating philosophy.</em>
              </h1>
              <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "14px", fontWeight: 300, color: C.textMid, lineHeight: 1.8, maxWidth: "520px" }}>
                1.9km swim. 90km bike. 21.1km run. Physical training isn't separate from the operating system — it's the foundation of it.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="sp" style={{ padding: "80px 80px", background: C.bg }}>
        <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
          <Reveal>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px", marginBottom: "80px" }}>
              {[
                { val: "1.9km",  label: "Open Water Swim" },
                { val: "90km",   label: "Road Cycling" },
                { val: "21.1km", label: "Run Distance" },
                { val: "70.3",   label: "Total Miles" },
              ].map((s, i) => (
                <div key={i} style={{ background: C.bgCard, border: `1px solid ${C.borderSoft}`, borderRadius: "5px", padding: "20px 18px" }}>
                  <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "28px", fontWeight: 400, color: A.accent, lineHeight: 1, marginBottom: "6px" }}>{s.val}</p>
                  <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "10px", fontWeight: 500, letterSpacing: "0.1em", color: C.textLow, textTransform: "uppercase" }}>{s.label}</p>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Milestones */}
          <Reveal>
            <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "0.28em", textTransform: "uppercase", color: A.accent, marginBottom: "20px" }}>Disciplines</p>
          </Reveal>
          <div className="mile-grid" style={{ marginBottom: "64px" }}>
            {MILESTONES.map((m, i) => (
              <Reveal key={i} delay={(i % 3) * 0.06}>
                <div style={{ background: C.bgCard, border: `1px solid ${C.borderSoft}`, borderRadius: "5px", padding: "18px 18px" }}>
                  <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "17px", fontWeight: 500, color: C.textHigh, marginBottom: "6px" }}>{m.label}</p>
                  <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "11.5px", fontWeight: 300, color: C.textMid, lineHeight: 1.65 }}>{m.sub}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Principles */}
          <Reveal>
            <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "0.28em", textTransform: "uppercase", color: A.accent, marginBottom: "20px" }}>Operating Principles</p>
          </Reveal>
          <div className="prin-grid">
            {PRINCIPLES.map((p, i) => {
              const Icon = ICONS[p.icon];
              return (
                <Reveal key={i} delay={(i % 3) * 0.06}>
                  <div style={{ background: C.bgCard, border: `1px solid ${C.borderSoft}`, borderRadius: "5px", padding: "22px 20px" }}>
                    <div style={{ color: A.accent, opacity: 0.9, marginBottom: "12px" }}><Icon size={19} /></div>
                    <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "17px", fontWeight: 500, color: C.textHigh, marginBottom: "8px", lineHeight: 1.25 }}>{p.title}</p>
                    <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "12px", fontWeight: 300, color: C.textMid, lineHeight: 1.7 }}>{p.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
}
