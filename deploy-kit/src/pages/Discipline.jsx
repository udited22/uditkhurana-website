import Layout from "../components/Layout.jsx";
import { C } from "../constants.js";

const PRINCIPLES = [
  { icon: "◎", title: "Train like you build product", desc: "Periodisation, load management, recovery — the same systems thinking that works in product works in training." },
  { icon: "◈", title: "Consistency over intensity",   desc: "Showing up at 70% every day beats showing up at 100% twice a week. The compounding is in the habit, not the heroics." },
  { icon: "⟁", title: "The long game mindset",        desc: "An Ironman 70.3 is built over months of unglamorous training. So is every meaningful physical transformation." },
  { icon: "○", title: "Recovery is the work",         desc: "Sleep, nutrition, and rest are not breaks from the system. They are the system." },
  { icon: "⬡", title: "Discipline creates freedom",  desc: "Structure is not a cage. A well-designed training system gives you the freedom to perform, not just survive." },
  { icon: "◇", title: "The body is infrastructure",  desc: "Physical capacity is leverage. Energy, focus, resilience — everything downstream improves when the body is strong." },
];

const MILESTONES = [
  { label: "Ironman 70.3",  sub: "1.9km swim · 90km bike · 21.1km run. Completed." },
  { label: "Hybrid Athlete",sub: "Training across strength, endurance, and mobility simultaneously." },
  { label: "Swim",          sub: "Open water and pool — a discipline built from scratch as an adult." },
  { label: "Cycling",       sub: "Long-distance road cycling as a meditative and physical practice." },
  { label: "Running",       sub: "From casual runner to half-marathon distance under structured training." },
  { label: "Strength",      sub: "Compound lifts as the foundation of physical resilience and posture." },
];

export default function DisciplinePage() {
  return (
    <Layout activePath="/discipline">
      <style>{`
        .prin-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;}
        .mile-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;}
        .sp{padding:80px 80px;}
        @media(max-width:900px){.prin-grid{grid-template-columns:1fr 1fr!important;}.mile-grid{grid-template-columns:1fr 1fr!important;}}
        @media(max-width:768px){.sp{padding:64px 24px!important;}.prin-grid{grid-template-columns:1fr!important;}.mile-grid{grid-template-columns:1fr!important;}}
      `}</style>

      {/* Header */}
      <div style={{ background: C.bgSection, padding: "80px 80px 64px", borderBottom: `1px solid ${C.borderSoft}` }} className="sp">
        <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
          <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", color: C.cyan, marginBottom: "14px" }}>Fitness & Discipline</p>
          <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(28px,4vw,52px)", fontWeight: 400, color: C.textHigh, lineHeight: 1.1, marginBottom: "16px" }}>
            Training is not a hobby.<br /><em style={{ fontStyle: "italic", color: C.cyan }}>It is an operating philosophy.</em>
          </h1>
          <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "14px", fontWeight: 300, color: C.textMid, lineHeight: 1.8, maxWidth: "560px" }}>
            The discipline of an Ironman 70.3 finisher — applied to work, systems, and the examined life.
            Physical training is not separate from the operating system. It is the foundation of it.
          </p>
        </div>
      </div>

      {/* Ironman feature */}
      <div className="sp" style={{ padding: "80px 80px", background: C.bg }}>
        <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center", marginBottom: "80px" }}>
            <div>
              <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "0.28em", textTransform: "uppercase", color: C.cyan, marginBottom: "16px" }}>Signature Achievement</p>
              <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(32px,4vw,56px)", fontWeight: 400, color: C.textHigh, lineHeight: 1.05, marginBottom: "20px" }}>
                Ironman<br /><em style={{ fontStyle: "italic", color: C.cyan }}>70.3 Finisher.</em>
              </h2>
              <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "13.5px", fontWeight: 300, color: C.textMid, lineHeight: 1.82, marginBottom: "20px" }}>
                1.9km open water swim. 90km bike. 21.1km run. The Ironman 70.3 is not just a race — it is a months-long education in patience, process, and what the body is capable of under a well-designed system.
              </p>
              <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "13.5px", fontWeight: 300, color: C.textMid, lineHeight: 1.82 }}>
                The same principles that got me to the finish line apply everywhere: trust the process, do the unglamorous work, and never negotiate with the non-negotiables.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
              {[
                { val: "1.9km",  label: "Open Water Swim" },
                { val: "90km",   label: "Road Cycling" },
                { val: "21.1km", label: "Run Distance" },
                { val: "70.3",   label: "Total Miles" },
              ].map((s, i) => (
                <div key={i} style={{ background: C.bgCard, border: `1px solid ${C.borderSoft}`, borderRadius: "5px", padding: "20px 18px" }}>
                  <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "28px", fontWeight: 400, color: C.cyan, lineHeight: 1, marginBottom: "6px" }}>{s.val}</p>
                  <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "10px", fontWeight: 500, letterSpacing: "0.1em", color: C.textLow, textTransform: "uppercase" }}>{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Milestones */}
          <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "0.28em", textTransform: "uppercase", color: C.cyan, marginBottom: "20px" }}>Disciplines</p>
          <div className="mile-grid" style={{ marginBottom: "64px" }}>
            {MILESTONES.map((m, i) => (
              <div key={i} style={{ background: C.bgCard, border: `1px solid ${C.borderSoft}`, borderRadius: "5px", padding: "18px 18px" }}>
                <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "17px", fontWeight: 500, color: C.textHigh, marginBottom: "6px" }}>{m.label}</p>
                <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "11.5px", fontWeight: 300, color: C.textMid, lineHeight: 1.65 }}>{m.sub}</p>
              </div>
            ))}
          </div>

          {/* Principles */}
          <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "0.28em", textTransform: "uppercase", color: C.cyan, marginBottom: "20px" }}>Operating Principles</p>
          <div className="prin-grid">
            {PRINCIPLES.map((p, i) => (
              <div key={i} style={{ background: C.bgCard, border: `1px solid ${C.borderSoft}`, borderRadius: "5px", padding: "22px 20px" }}>
                <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "18px", color: C.cyan, opacity: 0.55, marginBottom: "12px" }}>{p.icon}</p>
                <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "17px", fontWeight: 500, color: C.textHigh, marginBottom: "8px", lineHeight: 1.25 }}>{p.title}</p>
                <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "12px", fontWeight: 300, color: C.textMid, lineHeight: 1.7 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
