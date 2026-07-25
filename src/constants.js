// ─── PALETTE ────────────────────────────────────────────────────
// Deep institutional navy + a restrained, deeper blue-teal accent —
// dialed back from a brighter, more "content-creator neon" cyan to
// read closer to a fintech/product-leader site than a course-seller page.
export const C = {
  bg:         "#0A131C",
  bgCard:     "#101E2C",
  bgSection:  "#0D1A26",
  bgLight:    "#16283A",
  textHigh:   "#EBF0F5",
  textMid:    "#8BA4BA",
  textLow:    "#4A6070",
  cyan:       "#1C8FA6",
  cyanDim:    "rgba(28,143,166,0.55)",
  cyanFaint:  "rgba(28,143,166,0.12)",
  border:     "rgba(28,143,166,0.14)",
  borderSoft: "rgba(235,240,245,0.07)",
};

// ─── CONTACT ────────────────────────────────────────────────────
export const CONTACT_EMAIL = "writetouditkhurana@gmail.com";

// ─── SOCIAL ─────────────────────────────────────────────────────
export const SOCIAL = {
  linkedin: "https://linkedin.com/in/uditkhurana",
  instagram: "https://instagram.com/livingtheeclecticlife",
};

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

// ─── NAV LINKS ──────────────────────────────────────────────────
export const NAV_LINKS = [
  { label: "About",       href: "/about"       },
  { label: "Essays",      href: "/writing"     },
  { label: "Photography", href: "/photography" },
  { label: "Advisory",    href: "/advisory"    },
  { label: "Per Diem",    href: "/per-diem"    },
];

// ─── IDENTITY CARDS (homepage) ───────────────────────────────────
// Ordered professional-first: the two cards that establish industry
// credibility lead, the eclectic-life cards follow as supporting proof.
export const IDENTITY_CARDS = [
  { icon: "◈", title: "Product & Fintech",    desc: "Operator notes on fintech, crypto, wealth, and product leadership.", href: "/writing"     },
  { icon: "◇", title: "Advisory",             desc: "Selective work with founders, product leaders, and fintech teams.",   href: "/advisory"    },
  { icon: "◎", title: "Writing & Per Diem",   desc: "Essays, notes, reflections, and frameworks for ambitious operators.", href: "/per-diem"    },
  { icon: "○", title: "Fitness & Discipline", desc: "Training, endurance, strength, and the systems behind transformation.", href: "/discipline" },
  { icon: "⬡", title: "Photography",          desc: "Visual stories from mountains, roads, cities, and quiet moments.",    href: "/photography" },
];

// ─── FEATURED (homepage strip, non-LinkedIn — max 2) ────────────
// The LinkedIn essay slot lives in its own live-embedded "Featured on
// LinkedIn" section on the homepage instead (see WRITINGS + linkedInEmbedSrc).
export const FEATURED = [
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
    desc: "A small number of high-context conversations for fintech founders and product leaders.",
    href: "/advisory",
    cta: "See How I Can Help",
    external: false,
  },
];

// ─── WRITINGS ────────────────────────────────────────────────────
// Real LinkedIn posts, manually curated (LinkedIn has no public API for
// pulling a personal profile's activity — see .claude/skills/integration-tech-plan).
// The first three are embedded live on the Writing page via linkedInEmbedSrc().
export const WRITINGS = [
  { platform: "LinkedIn", tag: "FINTECH",    title: "What Decades of Indian Broking Data Actually Tells You",  summary: "A deep-dive into India's broking landscape — market structure, players, growth drivers, and what it means for product builders.", url: "https://www.linkedin.com/posts/uditkhurana_indian-broking-industry-research-report-ugcPost-7396808985280073730-5r36", min: "12 min" },
  { platform: "LinkedIn", tag: "PRODUCT",    title: "Markets Move Faster Than Your Backlog",                  summary: "Why fintech product teams need a different operating rhythm — and how to build a backlog that can actually keep up with market velocity.", url: "https://www.linkedin.com/posts/uditkhurana_markets-move-faster-than-your-backlog-it-share-7392407198410350592-Bjeh", min: "5 min" },
  { platform: "LinkedIn", tag: "FINTECH",    title: "Don't Let Compliance Write Your UX",                     summary: "The hard-learned lesson most fintech teams discover too late — how to design for regulation without ruining the product experience.", url: "https://www.linkedin.com/posts/uditkhurana_most-teams-discover-this-the-hard-way-you-activity-7371399542723944448-WSP-", min: "4 min" },
  { platform: "LinkedIn", tag: "SYSTEMS",    title: "Data Is Never Perfect",                                   summary: "Waiting for clean data means waiting forever. A framework for making confident decisions with imperfect information.", url: "https://www.linkedin.com/posts/uditkhurana_fintech-productthinking-systemdesign-share-7356236354931904514-_3qf", min: "5 min" },
  { platform: "LinkedIn", tag: "CAREER",     title: "Where Does Product Sense Come From?",                    summary: "Product intuition is not a trait — it's a practice. Notes on how experienced PMs develop judgment.", url: "https://www.linkedin.com/posts/uditkhurana_where-does-product-sense-come-from-at-some-share-7290690643297812480-PSlF", min: "6 min" },
];

// ─── ADVISORY AREAS ─────────────────────────────────────────────
// General areas of help — not a fixed engagement menu.
export const ADVISORY_AREAS = [
  { icon: "◈", title: "Product Strategy & Roadmap",    desc: "Cutting through noise to define what matters — sequencing, prioritization, and roadmaps for early-stage teams and product leaders." },
  { icon: "⬡", title: "Fintech, Crypto & Wealth",      desc: "General domain guidance across equity investing infrastructure, crypto exchanges, and wealth products." },
  { icon: "⟁", title: "Growth & Activation",           desc: "How products grow, retain, and build durable habits over time." },
  { icon: "◇", title: "PM Cadence & Execution",        desc: "Operating rituals and rhythms that make execution consistent across chaos." },
  { icon: "○", title: "AI-Enabled PM Workflows",       desc: "Using AI to think faster, write better, and ship more — without losing judgment." },
  { icon: "◎", title: "Career & Leadership Mentoring", desc: "General guidance for PMs and product leaders navigating their next move." },
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
  { era: "TradFi",   label: "Traditional Finance",    sub: "Where it started — markets, instruments, and the fundamentals of how capital moves.", active: false },
  { era: "Fintech",  label: "smallcase & Tickertape", sub: "Equity investing infrastructure and research — building how everyday India discovers and builds portfolios.", active: false },
  { era: "Crypto →", label: "CoinDCX · Now",          sub: "Principal PM at India's leading crypto exchange, owning core product and trading experience.", active: true },
];
