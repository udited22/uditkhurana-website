const base = { fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" };

function Svg({ children, size = 20 }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" {...base}>{children}</svg>;
}

export const IconBriefcase = (p) => (
  <Svg {...p}>
    <rect x="3" y="7.5" width="18" height="12" rx="1.5" />
    <path d="M8.5 7.5V5.8a1.8 1.8 0 0 1 1.8-1.8h3.4a1.8 1.8 0 0 1 1.8 1.8V7.5" />
    <path d="M3 12h18" />
  </Svg>
);

export const IconUsers = (p) => (
  <Svg {...p}>
    <circle cx="9" cy="8" r="3.2" />
    <path d="M3.5 19c0-3 2.5-5 5.5-5s5.5 2 5.5 5" />
    <circle cx="17" cy="8.5" r="2.4" />
    <path d="M15.5 13.3c2.6.3 4.5 2.1 4.5 4.7" />
  </Svg>
);

export const IconPen = (p) => (
  <Svg {...p}>
    <path d="M4 20l4.2-.9L19 8.3a2 2 0 0 0 0-2.8l-.5-.5a2 2 0 0 0-2.8 0L4.9 15.8 4 20z" />
    <path d="M14.5 6.5l3 3" />
  </Svg>
);

export const IconDumbbell = (p) => (
  <Svg {...p}>
    <path d="M2 12h2M20 12h2" />
    <path d="M5 9v6M19 9v6" />
    <rect x="6.3" y="10" width="2" height="4" rx="0.5" />
    <rect x="15.7" y="10" width="2" height="4" rx="0.5" />
    <path d="M8.3 12h7.4" />
  </Svg>
);

export const IconCamera = (p) => (
  <Svg {...p}>
    <path d="M4 8.5a1.5 1.5 0 0 1 1.5-1.5h2l1-1.8h7l1 1.8h2A1.5 1.5 0 0 1 20 8.5v9A1.5 1.5 0 0 1 18.5 19h-13A1.5 1.5 0 0 1 4 17.5z" />
    <circle cx="12" cy="13" r="3.2" />
  </Svg>
);

export const IconCompass = (p) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M14.8 9.2l-2 4.6-4.6 2 2-4.6z" />
  </Svg>
);

export const IconWallet = (p) => (
  <Svg {...p}>
    <path d="M3 7.8A1.8 1.8 0 0 1 4.8 6h12.4A1.8 1.8 0 0 1 19 7.8V9.5" />
    <rect x="3" y="9.5" width="18" height="10" rx="1.8" />
    <circle cx="16" cy="14.5" r="1.3" />
  </Svg>
);

export const IconTrendingUp = (p) => (
  <Svg {...p}>
    <path d="M3 16l6-6 4 4 8-8" />
    <path d="M15 6h6v6" />
  </Svg>
);

export const IconClock = (p) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7.5V12l3.2 2" />
  </Svg>
);

export const IconCpu = (p) => (
  <Svg {...p}>
    <rect x="7" y="7" width="10" height="10" rx="1.5" />
    <rect x="10" y="10" width="4" height="4" rx="0.5" />
    <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.8 5.8l1.8 1.8M16.4 16.4l1.8 1.8M18.2 5.8l-1.8 1.8M7.6 16.4l-1.8 1.8" />
  </Svg>
);

export const IconGraduationCap = (p) => (
  <Svg {...p}>
    <path d="M2 9l10-4.5L22 9l-10 4.5z" />
    <path d="M6 11.2v4.3c0 1.4 2.7 2.7 6 2.7s6-1.3 6-2.7v-4.3" />
    <path d="M22 9v5.5" />
  </Svg>
);

export const IconMedal = (p) => (
  <Svg {...p}>
    <circle cx="12" cy="15" r="5.5" />
    <path d="M12 11.7l1 2.1 2.3.25-1.7 1.55.45 2.25L12 16.7l-2.05 1.15.45-2.25-1.7-1.55 2.3-.25z" />
    <path d="M8.5 3l2 6.3M15.5 3l-2 6.3" />
  </Svg>
);

export const IconArrows = (p) => (
  <Svg {...p}>
    <path d="M3 8h13M13 8l3-3M13 8l3 3" />
    <path d="M21 16H8M8 16l3-3M8 16l3 3" />
  </Svg>
);

export const IconMoon = (p) => (
  <Svg {...p}>
    <path d="M20 13.5A8.5 8.5 0 1 1 10.5 4a6.8 6.8 0 0 0 9.5 9.5z" />
  </Svg>
);

export const ICONS = {
  briefcase: IconBriefcase,
  users: IconUsers,
  pen: IconPen,
  dumbbell: IconDumbbell,
  camera: IconCamera,
  compass: IconCompass,
  wallet: IconWallet,
  "trending-up": IconTrendingUp,
  clock: IconClock,
  cpu: IconCpu,
  "graduation-cap": IconGraduationCap,
  medal: IconMedal,
  arrows: IconArrows,
  moon: IconMoon,
};
