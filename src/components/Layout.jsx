import { useState, useEffect } from "react";
import { C, NAV_LINKS, SOCIAL, CONTACT_EMAIL } from "../constants.js";

export const LinkedInIcon = ({ size = 14 }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>;
export const InstagramIcon = ({ size = 14 }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>;
export const MailIcon = ({ size = 14 }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>;
const LI = LinkedInIcon, IG = InstagramIcon, Mail = MailIcon;

// V4: real logo (public/branding/per-diem-logo.png), replacing the
// code-drawn "P" square placeholder. Source file is 230×157 with a flat
// white background baked in — fine at these sizes, would need a cleaner
// export to scale much larger.
export function PerDiemWordmark({ size = "md" }) {
  const big = size === "lg";
  return (
    <div style={{ display: "flex", alignItems: "center", gap: big ? "14px" : "10px" }}>
      <img
        src="/branding/per-diem-logo.png"
        alt="Per Diem"
        width={230}
        height={157}
        loading="lazy"
        decoding="async"
        style={{ height: big ? "40px" : "26px", width: "auto", borderRadius: "3px", flexShrink: 0 }}
      />
      {big && <p style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: "9px", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: C.accentDim }}>An Ongoing Writing Experiment</p>}
    </div>
  );
}

export default function Layout({ children, activePath = "/" }) {
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", h, { passive: true });
    window.scrollTo(0, 0);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const navigate = (href) => {
    setMenu(false);
    if (href.startsWith("http")) { window.open(href, "_blank"); return; }
    window.history.pushState({}, "", href);
    window.dispatchEvent(new PopStateEvent("popstate"));
  };

  return (
    <div style={{ background: C.bg, color: C.textHigh, minHeight: "100vh", fontFamily: "'IBM Plex Sans',sans-serif" }}>
      <style>{`
        /* nav-desktop has no natural wrap point (flex row, no flex-wrap) and the
           hamburger button below has no default hidden state — without this,
           both the full link row and the hamburger render at every width. */
        .nav-hamburger{display:none;}
        .site-nav{padding:0 52px;}
        @media(max-width:980px){
          .nav-desktop{display:none!important;}
          .nav-hamburger{display:flex!important;}
        }
        @media(max-width:600px){
          .site-nav{padding:0 20px!important;}
          .mobile-menu{padding:8px 20px 24px!important;}
          .site-footer{padding:32px 20px!important;}
        }
      `}</style>

      {/* NAV */}
      <nav className="site-nav" style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 500,
        height: "60px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        background: scrolled ? "rgba(250,247,241,0.94)" : "transparent",
        borderBottom: scrolled ? `1px solid ${C.borderSoft}` : "1px solid transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        transition: "all 0.3s ease",
      }}>
        <a href="/" onClick={e => { e.preventDefault(); navigate("/"); }} style={{ display: "flex", flexDirection: "column", gap: "2px", lineHeight: 1, minWidth: 0 }}>
          <span style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: "19px", fontWeight: 500, letterSpacing: "0.03em", color: C.textHigh, whiteSpace: "nowrap" }}>Udit Khurana</span>
        </a>

        <div className="nav-desktop" style={{ display: "flex", gap: "30px", alignItems: "center" }}>
          {NAV_LINKS.map(l => (
            <a key={l.label} href={l.href}
              onClick={e => { e.preventDefault(); navigate(l.href); }}
              style={{
                fontFamily: "'IBM Plex Sans',sans-serif",
                fontSize: "11px", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase",
                color: activePath === l.href ? C.accent : C.textMid,
                transition: "color .2s", cursor: "pointer", whiteSpace: "nowrap",
              }}
              onMouseEnter={e => { if (activePath !== l.href) e.target.style.color = C.textHigh; }}
              onMouseLeave={e => { if (activePath !== l.href) e.target.style.color = C.textMid; }}
            >{l.label}</a>
          ))}
        </div>

        <button className="nav-hamburger" onClick={() => setMenu(!menu)} aria-label="Menu" aria-expanded={menu}
          style={{ background: "none", border: "none", cursor: "pointer", padding: "6px", flexDirection: "column", gap: "5px", flexShrink: 0 }}>
          <span style={{ width: "18px", height: "1.5px", background: C.textMid, display: "block", transition: "all .25s", transform: menu ? "rotate(45deg) translateY(6px)" : "none" }} />
          <span style={{ width: "18px", height: "1.5px", background: C.textMid, display: "block", opacity: menu ? 0 : 1 }} />
          <span style={{ width: "18px", height: "1.5px", background: C.textMid, display: "block", transition: "all .25s", transform: menu ? "rotate(-45deg) translateY(-6px)" : "none" }} />
        </button>
      </nav>

      {/* Mobile menu */}
      {menu && (
        <div className="mobile-menu" style={{ position: "fixed", top: 60, left: 0, right: 0, zIndex: 499, background: "rgba(250,247,241,0.98)", backdropFilter: "blur(20px)", borderBottom: `1px solid ${C.borderSoft}`, padding: "8px 28px 28px" }}>
          {NAV_LINKS.map(l => (
            <a key={l.label} href={l.href}
              onClick={e => { e.preventDefault(); navigate(l.href); }}
              style={{ display: "block", padding: "16px 0", borderBottom: `1px solid ${C.borderSoft}`, fontFamily: "'IBM Plex Sans',sans-serif", fontSize: "13px", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: activePath === l.href ? C.accent : C.textMid }}>
              {l.label}
            </a>
          ))}
        </div>
      )}

      {/* PAGE CONTENT */}
      <main style={{ paddingTop: "60px" }}>
        {children}
      </main>

      {/* FOOTER — deliberately small: identity, four links, one line. */}
      <footer className="site-footer" style={{ background: C.bgSection, borderTop: `1px solid ${C.borderSoft}`, padding: "40px 80px" }}>
        <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "40px", flexWrap: "wrap" }}>
            <div style={{ maxWidth: "340px" }}>
              <p style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: "16px", fontWeight: 500, color: C.textHigh, marginBottom: "6px" }}>Udit Khurana</p>
              <p style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: "12px", color: C.textLow, lineHeight: 1.6 }}>Building systems. Connecting ideas. Living the eclectic life.</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <p style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: C.textLow, marginBottom: "4px" }}>Connect</p>
              <a href={SOCIAL.linkedin} target="_blank" rel="noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", color: C.textMid }}><LI /> LinkedIn</a>
              <a href="/per-diem" onClick={e => { e.preventDefault(); navigate("/per-diem"); }} style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", color: C.textMid }}>Per Diem</a>
              <a href={SOCIAL.instagram} target="_blank" rel="noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", color: C.textMid }}><IG /> Instagram</a>
              <a href={`mailto:${CONTACT_EMAIL}`} style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "11px", letterSpacing: "0.02em", color: C.textMid }}><Mail /> {CONTACT_EMAIL}</a>
            </div>
          </div>
          <div style={{ marginTop: "32px", paddingTop: "20px", borderTop: `1px solid ${C.borderSoft}` }}>
            <p style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: "10px", color: C.textLow }}>© {new Date().getFullYear()} Udit Khurana</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
