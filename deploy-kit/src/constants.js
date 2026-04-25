// ─── PALETTE ────────────────────────────────────────────────────
export const C = {
  bg:         "#07111C",
  bgCard:     "#0D1E2E",
  bgSection:  "#0A1829",
  bgLight:    "#112236",
  textHigh:   "#EBF0F5",
  textMid:    "#8BA4BA",
  textLow:    "#4A6070",
  cyan:       "#00B4C6",
  cyanDim:    "rgba(0,180,198,0.55)",
  cyanFaint:  "rgba(0,180,198,0.12)",
  border:     "rgba(0,180,198,0.12)",
  borderSoft: "rgba(235,240,245,0.07)",
};

// ─── NAV LINKS ──────────────────────────────────────────────────
export const NAV_LINKS = [
  { label: "About",       href: "/about"       },
  { label: "Essays",      href: "/writing"     },
  { label: "Photography", href: "/photography" },
  { label: "Projects",    href: "/projects"    },
  { label: "Advisory",    href: "/advisory"    },
  { label: "Per Diem",    href: "/per-diem"    },
];

// ─── IDENTITY CARDS (homepage) ───────────────────────────────────
export const IDENTITY_CARDS = [
  { icon: "◈", title: "Product & Fintech",    desc: "Operator notes on fintech, crypto, wealth, and product leadership.", href: "/writing"     },
  { icon: "◇", title: "Advisory",             desc: "Selective work with founders, product leaders, and fintech teams.",   href: "/advisory"    },
  { icon: "◎", title: "Writing & Per Diem",   desc: "Essays, notes, reflections, and frameworks for ambitious operators.", href: "/per-diem"    },
  { icon: "⬡", title: "Photography",          desc: "Visual stories from mountains, roads, cities, and quiet moments.",    href: "/photography" },
  { icon: "○", title: "Fitness & Discipline", desc: "Training, endurance, strength, and the systems behind transformation.", href: "/discipline" },
  { icon: "⟁", title: "AI & Systems",         desc: "Tools, workflows, experiments, and personal infrastructure.",         href: "/projects"    },
];

// ─── FEATURED (homepage strip — max 3) ──────────────────────────
export const FEATURED = [
  {
    type: "ESSAY",
    title: "Markets Move Faster Than Your Backlog",
    desc: "Why fintech product teams need a different operating rhythm.",
    href: "https://www.linkedin.com/posts/uditkhurana_markets-move-faster-than-your-backlog-it-share-7392407198410350592-Bjeh",
    cta: "Read on LinkedIn",
    external: true,
  },
  {
    type: "PHOTO STORY",
    title: "Nubra at Golden Hour",
    desc: "A roadside puddle, fading sunlight, and perfect timing in Ladakh.",
    href: "/photography",
    cta: "View Gallery",
    external: false,
  },
  {
    type: "ADVISORY",
    title: "Work With Me",
    desc: "High-context conversations for fintech founders and product leaders.",
    href: "/advisory",
    cta: "Learn More",
    external: false,
  },
];

// ─── WRITINGS ────────────────────────────────────────────────────
export const WRITINGS = [
  { platform: "LinkedIn", tag: "FINTECH",    title: "Comprehensive Research Report: Indian Broking Industry",  summary: "A deep-dive into India's broking landscape — market structure, players, growth drivers, and what it means for product builders.", url: "https://www.linkedin.com/posts/uditkhurana_indian-broking-industry-research-report-ugcPost-7396808985280073730-5r36", min: "12 min" },
  { platform: "LinkedIn", tag: "PRODUCT",    title: "Markets Move Faster Than Your Backlog",                  summary: "Why fintech product teams need a different operating rhythm — and how to build a backlog that can actually keep up with market velocity.", url: "https://www.linkedin.com/posts/uditkhurana_markets-move-faster-than-your-backlog-it-share-7392407198410350592-Bjeh", min: "5 min" },
  { platform: "LinkedIn", tag: "FINTECH",    title: "Don't Let Compliance Write Your UX",                     summary: "The hard-learned lesson most fintech teams discover too late — how to design for regulation without ruining the product experience.", url: "https://www.linkedin.com/posts/uditkhurana_most-teams-discover-this-the-hard-way-you-activity-7371399542723944448-WSP-", min: "4 min" },
  { platform: "LinkedIn", tag: "SYSTEMS",    title: "Data Is Never Perfect",                                   summary: "Waiting for clean data means waiting forever. A framework for making confident decisions with imperfect information.", url: "https://www.linkedin.com/posts/uditkhurana_fintech-productthinking-systemdesign-share-7356236354931904514-_3qf", min: "5 min" },
  { platform: "LinkedIn", tag: "CAREER",     title: "Where Does Product Sense Come From?",                    summary: "Product intuition is not a trait — it's a practice. Notes on how experienced PMs develop judgment.", url: "https://www.linkedin.com/posts/uditkhurana_where-does-product-sense-come-from-at-some-share-7290690643297812480-PSlF", min: "6 min" },
  { platform: "Essay",    tag: "PHILOSOPHY", title: "Building a Life Beyond One Dimension",                    summary: "A working operator's case for refusing to collapse into a single category — compounding across ambition, depth, and stillness.", url: "#", min: "8 min" },
];

// ─── ADVISORY AREAS ─────────────────────────────────────────────
export const ADVISORY_AREAS = [
  { icon: "◈", title: "Product Strategy & Roadmap",    desc: "Cutting through noise to define what matters — for early-stage teams and product leaders." },
  { icon: "⬡", title: "Fintech / Crypto / Wealth",     desc: "Domain depth across equity infra, crypto exchanges, and wealth products." },
  { icon: "⟁", title: "Growth & Activation",           desc: "How products grow, retain, and create durable habits over time." },
  { icon: "◇", title: "PM Cadence & Execution",        desc: "Operating rituals that make execution consistent across chaos." },
  { icon: "○", title: "AI-Enabled PM Workflows",       desc: "Using AI to think faster, write better, and ship more — without losing judgment." },
  { icon: "◎", title: "Career & Leadership Mentoring", desc: "For PMs and product leaders navigating their next move." },
];

// ─── PROJECTS ────────────────────────────────────────────────────
export const PROJECTS = [
  { tag: "TOOLS",   title: "PM Operating System",        desc: "For product managers who want clearer strategy, sharper roadmaps, and consistent decision logs.",          benefit: "Clarity for builders"   },
  { tag: "AI",      title: "AI Workflow Toolkit",         desc: "For operators who want to reduce repetitive work and multiply output without adding noise.",               benefit: "Leverage for operators" },
  { tag: "FITNESS", title: "Triathlete Training Tracker", desc: "For busy professionals balancing strength, endurance, and recovery without sacrificing performance.",     benefit: "Systems for athletes"   },
  { tag: "FINTECH", title: "Fintech Product Teardowns",   desc: "For builders who want to understand Indian fintech, crypto, and wealth products from the inside out.",    benefit: "Depth for builders"     },
  { tag: "WRITING", title: "Founder Operating Memos",     desc: "For leaders who want sharper thinking and execution clarity — internal-style frameworks made public.",    benefit: "Execution for leaders"  },
];

// ─── CRED STRIP ──────────────────────────────────────────────────
export const CRED = [
  { val: "9+",        sub: "Years in Product & Fintech"  },
  { val: "Ironman",   sub: "70.3 Finisher · Triathlete"  },
  { val: "TradFi",    sub: "→ Fintech → Crypto"          },
  { val: "CoinDCX",   sub: "Principal PM · Current"      },
  { val: "Bengaluru", sub: "Building in public"          },
];

// ─── JOURNEY ─────────────────────────────────────────────────────
export const JOURNEY = [
  { era: "TradFi",   label: "Traditional Finance",    sub: "Where it started — markets, instruments, fundamentals.", active: false },
  { era: "Fintech",  label: "smallcase & Tickertape", sub: "Equity investing infrastructure. How India builds portfolios.", active: false },
  { era: "Crypto →", label: "CoinDCX · Now",          sub: "Principal PM at India's leading crypto exchange.", active: true },
];
