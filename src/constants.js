// ─── PALETTE ────────────────────────────────────────────────────
// Editorial × institutional × personal: a warm off-white base with
// near-black type and one restrained deep-peacock accent, instead of
// the previous dark-charcoal-and-gold treatment. Kept the `gold` key
// name's siblings renamed to `accent` (the value is no longer gold),
// but the token *shape* is unchanged so every page still reads off
// this single object — repaint the site by editing values here.
export const C = {
  bg:         "#FAF7F1",
  bgCard:     "#FFFFFF",
  bgSection:  "#F2ECDF",
  bgLight:    "#EAE2CF",
  textHigh:   "#18181A",
  textMid:    "#4A473F",
  textLow:    "#726B5C",
  accent:     "#0E6B74",
  accentDim:  "rgba(14,107,116,0.55)",
  accentFaint:"rgba(14,107,116,0.10)",
  onAccent:   "#FAF7F1",
  border:     "rgba(14,107,116,0.22)",
  borderSoft: "rgba(24,25,26,0.10)",
  // Reserved for Udit Uncovered only — the one deliberate departure from
  // the single-accent rule, so that pillar reads as distinct-but-coherent
  // rather than another teal section.
  rust:       "#A85736",
  rustFaint:  "rgba(168,87,54,0.10)",
  rustBorder: "rgba(168,87,54,0.35)",
};

// ─── PHOTOS (drop the real files here) ───────────────────────────
export const PHOTO = {
  heroLandscape: "/photos/hero-adventure-landscape.jpg", // Nubra Valley, Ladakh — golden hour
  product:       "/photos/headshot-professional.jpg",     // professional headshot
  adventure:     "/photos/adventure-diving.jpg",           // PADI advanced dive, wreck
  fitness:       "/photos/fitness-ironman.jpg",            // Ironman 70.3 Goa 2024, finisher
};

// ─── CONTACT ────────────────────────────────────────────────────
export const CONTACT_EMAIL = "writetouditkhurana@gmail.com";

// ─── SOCIAL ─────────────────────────────────────────────────────
// Instagram is @udituncovered — the consolidated identity for travel,
// endurance, adventure, food and everything outside the work pillar.
// Do not point this back at the old @livingtheeclecticlife handle.
export const SOCIAL = {
  linkedin: "https://linkedin.com/in/uditkhurana",
  instagram: "https://www.instagram.com/udituncovered/",
  github: "https://github.com/udited22?tab=repositories",
};

// ─── PER DIEM NEWSLETTER ──────────────────────────────────────────
// LinkedIn's own "follow this newsletter" action, provided directly by Udit — the
// entityUrn identifies the Per Diem Newsletter object on LinkedIn. Do not regenerate
// or guess this URL; if it ever needs to change, get the fresh one from LinkedIn's
// own share/embed panel for the newsletter.
export const PER_DIEM_LINKEDIN_URL =
  "https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7502097177293492225";

// ─── LINKEDIN EMBED HELPER ──────────────────────────────────────
// LinkedIn doesn't offer a public API to pull a personal profile's
// activity feed, but it does support embedding a specific known post
// via a public iframe keyed on the post's numeric share id — present in
// linkedin.com/posts/...-share-<id>-... URLs. No API key needed.
// Only the "share-" URL pattern reliably resolves to a valid embed —
// "activity-" and "ugcPost-" ids point at feed/document objects that
// render LinkedIn's own "Page not found" inside the iframe, so those
// fall back to a plain outbound link instead of a broken-looking embed.
export function linkedInEmbedSrc(url) {
  const match = url.match(/share-(\d+)/);
  if (!match) return null;
  return `https://www.linkedin.com/embed/feed/update/urn:li:share:${match[1]}`;
}

// ─── NAV LINKS (source of truth for the IA) ──────────────────────
// Four principal identity layers, plus About as the bridge between them.
// "Adventure" and "Fitness" are deliberately not top-level anymore — both
// now live inside Udit Uncovered. "Projects" lives beneath Work.
export const NAV_LINKS = [
  { label: "Work",            href: "/work"      },
  { label: "Per Diem",        href: "/per-diem"  },
  { label: "Advisory",        href: "/advisory"  },
  { label: "Udit Uncovered",  href: "/uncovered" },
  { label: "About",           href: "/about"     },
];

// ─── HERO INTERSECTIONS ───────────────────────────────────────────
// Rendered as a single restrained static list, never a rotating carousel.
export const INTERSECTIONS = [
  "Markets × Technology",
  "Product × Infrastructure",
  "Regulation × User Experience",
  "Business Models × Behaviour",
  "Traditional Finance × New Financial Rails",
];

// ─── MULTI-LENS SYSTEMS THINKING ──────────────────────────────────
// The lenses a problem gets examined through — rendered as a plain
// typographic list on the Work page, never as coloured tag-soup.
export const LENSES = [
  "Customer journey", "Market structure", "Economics", "Regulation",
  "Technology", "Operations", "Risk", "Distribution",
];

// ─── CRED STRIP ──────────────────────────────────────────────────
export const CRED = [
  { val: "10+",       sub: "Years Across Financial Systems"  },
  { val: "CoinDCX",   sub: "Principal PM · Current"      },
  { val: "Ironman",   sub: "70.3 Finisher · Goa 2024"    },
  { val: "PADI",      sub: "Advanced Open Water Diver"   },
  { val: "Bengaluru", sub: "Building in public"          },
];

// ─── COMPANIES ────────────────────────────────────────────────────
export const COMPANIES = [
  { name: "CoinDCX",           era: "2025–Present" },
  { name: "smallcase & Tickertape", era: "2021–2025" },
  { name: "EdgeVerve · Finacle", era: "2020–2021" },
  { name: "Newgen Software",   era: "2018–2020" },
  { name: "Infosys",           era: "2014–2016" },
];

// ─── THE JOURNEY ───────────────────────────────────────────────────
// The real span, per résumé — newest to oldest. The two most recent
// chapters carry the full mandate/scope/selectedWork treatment (the
// class of problem, the systems involved, and 2–3 concrete examples);
// earlier chapters are framed by scope alone. No delivered-impact
// metrics anywhere here — none have been independently verified, and
// the site should show breadth of systems and problems, not a
// highlight reel of numbers.
export const JOURNEY = [
  {
    years: "2025–Present", company: "CoinDCX", role: "Principal Product Manager",
    active: true,
    mandate: "India's largest crypto exchange, operating at the intersection of retail trust, regulatory uncertainty, and global market expansion.",
    scope: "Core exchange infrastructure, retail growth, and international expansion into the GCC — three concurrent charters spanning very different regulatory regimes and user sophistication levels.",
    selectedWork: [
      "Owning product for core exchange infrastructure — the machinery underneath order flow, custody, and market data that every other feature sits on top of.",
      "Standing up the product line for GCC market entry, where the regulatory architecture and user behaviour are both starting from a different baseline than India.",
      "Working the retail growth charter as a distribution and behaviour problem as much as a features problem.",
    ],
  },
  {
    years: "2021–2025", company: "smallcase & Tickertape", role: "Senior Product Manager",
    active: false,
    mandate: "Regulated retail investing infrastructure, at a moment when Indian retail investing was scaling faster than most of the systems built to serve it.",
    scope: "Mutual funds, US equities, and broker integrations — four years leading a team of product managers across concurrent, regulator-adjacent product lines.",
    selectedWork: [
      "Led the product line connecting Indian retail investors to US equities — a case study in reconciling two regulatory regimes inside one user journey.",
      "Built out mutual fund infrastructure where compliance requirements, not UI decisions, set the real constraints on the experience.",
      "Managed broker integrations where the hard problem was operational reliability, not the integration surface itself.",
    ],
  },
  {
    years: "2020–2021", company: "EdgeVerve (Finacle)", role: "Associate Product Manager",
    active: false,
    scope: "First product role — owned the loan origination product line for retail and commercial lending on Infosys' enterprise banking platform.",
  },
  {
    years: "2018–2020", company: "Newgen Software", role: "Banking COE Consultant",
    active: false,
    scope: "Consulted global banks on BPM-based commercial lending, including large-scale loan digitisation — the first deep immersion in regulated banking infrastructure.",
  },
  {
    years: "2016–2017", company: "Akshada Investment Solutions", role: "Proprietor",
    active: false,
    scope: "Independently managed portfolios across equities, F&O, real estate, and insurance — a market practitioner's chapter before becoming a product builder.",
  },
  {
    years: "2014–2016", company: "Infosys", role: "Systems Engineer",
    active: false,
    scope: "Enterprise financial systems — implementing SAP FICO for large corporate finance operations. The technical grounding everything since has built on.",
  },
];

// ─── ADVISORY AREAS ─────────────────────────────────────────────
// General areas of help — not a fixed engagement menu.
export const ADVISORY_AREAS = [
  { icon: "compass",         title: "Product Strategy & Roadmap",    desc: "Cutting through noise to define what matters — sequencing, prioritization, and roadmaps for early-stage teams and product leaders." },
  { icon: "wallet",          title: "Fintech, Crypto & Wealth",      desc: "General domain guidance across equity investing infrastructure, crypto exchanges, and wealth products." },
  { icon: "trending-up",     title: "Growth & Activation",           desc: "How products grow, retain, and build durable habits over time." },
  { icon: "clock",           title: "PM Cadence & Execution",        desc: "Operating rituals and rhythms that make execution consistent across chaos." },
  { icon: "cpu",             title: "AI-Enabled PM Workflows",       desc: "Using AI to think faster, write better, and ship more — without losing judgment." },
  { icon: "graduation-cap",  title: "Career & Leadership Mentoring", desc: "General guidance for PMs and product leaders navigating their next move." },
];

// ─── SIDE PROJECTS (public GitHub builds) ────────────────────────
// Kept in sync with github.com/udited22 — one-line status tags on the
// two early-stage scaffolds (Exposure Dashboard, Morpheus Rapid Ring)
// are honest about where they are, not padded to look further along.
export const PROJECTS = [
  {
    name: "Aegis",
    tag: "Exchange Intelligence",
    stack: "TypeScript · Full-Stack",
    summary: "A role-gated, real-time intelligence platform for crypto exchange health — liquidity, revenue, and competitive positioning in one view.",
    url: "https://github.com/udited22/aegis",
  },
  {
    name: "Sentinel",
    tag: "Market Infrastructure",
    stack: "Python",
    summary: "Real-time order book health monitoring across crypto exchanges, with composite scoring, alerting, and a live dashboard.",
    url: "https://github.com/udited22/sentinel",
  },
  {
    name: "Rapid Ring",
    tag: "AI Agents",
    stack: "Python",
    summary: "An autonomous AI agent that runs crypto exchange trade-ops SOPs end-to-end, with risk-tiered human approval built in, not bolted on.",
    url: "https://github.com/udited22/rapid-ring",
  },
  {
    name: "Algo Trading Platform",
    tag: "Quant & Trading",
    stack: "FastAPI · Next.js",
    summary: "A full-stack algo trading platform for crypto — strategy code moves from backtest to paper trading to live execution without changing logic at any step.",
    url: "https://github.com/udited22/algo-trading-platform",
  },
  {
    name: "Niyam",
    tag: "RegTech & AI",
    stack: "Python · RAG",
    summary: "A RAG-powered regulatory co-pilot for Indian fintech — ask plain-English questions on SEBI, AMFI, and IFSCA rules, or audit a PRD before it reaches compliance review.",
    url: "https://github.com/udited22/niyam",
  },
  {
    name: "Exposure Dashboard",
    tag: "Risk & Crypto",
    stack: "Early Build",
    summary: "A planned dashboard for tracking custody and concentration risk across wallets and venues on a crypto platform. Design in progress.",
    url: "https://github.com/udited22/exposure-dashboard",
  },
  {
    name: "Morpheus Rapid Ring",
    tag: "Experimental",
    stack: "Early Build",
    summary: "A reserved build slot for a related trade-ops experiment, distinct from Rapid Ring. Early-stage.",
    url: "https://github.com/udited22/morpheus-rapid-ring",
  },
];

export const RESEARCH_PORTFOLIO_URL = "https://app.notion.com/p/theeclecticlife/Side-Projects-Product-Portfolio-1438f1766bce8074af71e29411b1afbd?source=copy_link";

// ─── PERSONAL ESSAYS ──────────────────────────────────────────────
// Native long-form writing that predates Per Diem and isn't part of the
// newsletter identity — referenced from About, not from the Per Diem archive.
export const ESSAYS = [
  { title: "Life is Intelligent", tag: "Philosophy", url: "/writing/life-is-intelligent", min: "3 min" },
];
