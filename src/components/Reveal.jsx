import { useRef, useState, useEffect } from "react";

function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setVis(true); return; }
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVis(true); obs.disconnect(); }
    }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, vis];
}

// `style` merges onto Reveal's own root div rather than a nested one — this
// matters whenever Reveal wraps a CSS Grid item directly: grid-column/
// grid-row only take effect on an element that is itself a direct child of
// the grid container, and Reveal's root div is that direct child.
export default function Reveal({ children, delay = 0, style }) {
  const [ref, vis] = useInView();
  return (
    <div ref={ref} style={{
      opacity: vis ? 1 : 0,
      transform: vis ? "none" : "translateY(14px)",
      transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
      ...style,
    }}>{children}</div>
  );
}
