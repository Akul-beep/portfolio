export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  slug: string;
  title: string;
  lane: "technical" | "impact";
  tagline: string;
  problem: string;
  approach: string;
  stack: string[];
  impact: string;
  imageFallback: string;
  /** Optional screenshot in /public/projects/ — e.g. "/projects/orion.png" */
  image?: string;
  imageFit?: "cover" | "contain";
  imageBg?: string;
  color: string;
  links: ProjectLink[];
  featured?: boolean;
};

export type BeyondItem = {
  slug: string;
  title: string;
  subtitle: string;
  story: string;
  tags: string[];
  date?: string;
  link?: string | null;
};

export type ExperienceItem = {
  title: string;
  org: string;
  meta: string;
  bullets: string[];
  featured?: boolean;
};

export type HeroStat = {
  value: string;
  label: string;
};

export const site = {
  name: "Akul Nehra",
  email: "akulnehra@gmail.com",
  linkedin: "https://www.linkedin.com/in/akul-nehra-629994330/",
  github: "https://github.com/Akul-beep",
  resumeUrl: "/resume.pdf",
  role: "iOS & full-stack developer",
  roleDetail: "founder · builder",
  org: "Genesis Global School",
  status: "Open to SWE internships · Summer 2026",
  location: {
    city: "New Delhi",
    country: "India",
  },
};

export const education = {
  school: "Genesis Global School",
  programme: [
    "Completed **IB MYP Programme** · 2026",
    "Incoming **IB DP programme** · Class of 2028",
  ],
  highlights: [
    "**$2,500** Youth Action Fund grant for Project ARISE",
    "Harvard Undergraduate Venture Tech Summer Program (HUVTSP)",
  ],
};

export const hero = {
  positioning:
    "Based in New Delhi — I build **iOS (Swift)** and **full-stack (Next.js)** products, publish **ML research**, and ship at startups and ventures.",
  proofChips: ["App Store", "IEEE ICITSIF", "Harvard HUVTSP"],
  intro:
    "Seeking software engineering internships for Summer 2026 — explore my work below or email me to connect.",
  stats: [
    { value: "4+", label: "Products shipped" },
    { value: "200+", label: "People reached" },
    { value: "300+", label: "Nonprofit beneficiaries" },
    { value: "4", label: "Countries · ARISE" },
  ] satisfies HeroStat[],
};

export const spotlight = {
  id: "spotlight",
  badge: "Summer 2025",
  title: "Startup intern at Rove",
  subtitle: "YC-backed startup",
  body: "At **Rove**, I worked on **flight tracking routes**, **destination optimization**, and hands-on **implementation** with a YC-backed team — **~15 hrs/week** shipping real product code.",
  bullets: [
    "Built and refined **flight tracking routes** for the core product",
    "Worked on **optimizing destinations** — routing logic and data-driven improvements",
    "Owned **implementation** from spec to production alongside the engineering team",
  ],
  tags: ["Engineering", "Routing", "Implementation"],
  link: { label: "View experience", href: "#experience" },
};

export const story = {
  headline: "Who I am",
  paragraphs: [
    "I'm a developer and founder in New Delhi, building at the intersection of code, research, and real-world impact — from **peer-reviewed AI work** to **apps on the App Store** and a **funded nonprofit**.",
    "Recent highlights: **IEEE paper accepted**, **App Store launch**, **Rove** internship at a YC-backed startup, **Harvard HUVTSP**, and **Project ARISE** serving **300+ women across 4 countries**.",
  ],
};

export const personality = {
  interests: [
    "Debate & public speaking",
    "Engineering & design",
    "Building products",
    "STEM outreach",
    "Competitive problem-solving",
  ],
  paragraphs: [
    "When I'm not coding, you'll find me prepping for debate rounds, tinkering with CAD for F1 in Schools, or mentoring through Toastmasters.",
    "I believe the best builders are curious outside the IDE — whether that's arguing a case at WSDC or prototyping a faster car on the track.",
  ],
};

export const projects: Project[] = [
  {
    slug: "orion-finance",
    title: "Orion Finance",
    lane: "technical",
    tagline: "Personal finance on the App Store",
    problem:
      "Help people build better money habits — shaped by user research and product iteration.",
    approach:
      "Built in Swift/UIKit with a hypothesis-driven loop: ship features, talk to users, iterate. Launched on the App Store in 2025.",
    stack: ["Swift", "iOS", "UIKit"],
    impact: "Live on the App Store",
    image: "/projects/orion.webp",
    imageFallback: "OR",
    color: "#2563eb",
    links: [
      { label: "App Store", href: "https://apps.apple.com/app/id6755752931" },
      { label: "GitHub", href: "https://github.com/Akul-beep/orion-app" },
    ],
    featured: true,
  },
  {
    slug: "flowly",
    title: "Flowly",
    lane: "technical",
    tagline: "AI scheduler for busy schedules",
    problem:
      "Schedules get overwhelming — people need adaptive planning, not another static to-do list.",
    approach:
      "Built AI-powered task breakdowns and smart scheduling in Next.js; deployed on Vercel with real testers.",
    stack: ["Next.js", "TypeScript", "AI / LLM APIs", "Vercel"],
    impact: "Live · real testers",
    image: "/projects/flowly.jpg",
    imageFit: "contain",
    imageBg: "#0c0c0c",
    imageFallback: "FL",
    color: "#38bdf8",
    links: [
      { label: "Live site", href: "https://flowlyofficial.vercel.app/" },
      { label: "GitHub", href: "https://github.com/Akul-beep/focusflow" },
    ],
    featured: true,
  },
  {
    slug: "ieee-research",
    title: "IEEE ICITSIF Research",
    lane: "technical",
    tagline: "Peer-reviewed AI for traffic & emissions",
    problem:
      "Urban traffic incidents drive wait times and CO₂ — we needed data-driven insight, not guesswork.",
    approach:
      "Co-authored a paper accepted at IEEE ICITSIF 2026 (Jan 2026), modeling incidents, wait times, and environmental impact.",
    stack: ["Python", "AI / ML", "Research"],
    impact: "Accepted · Jan 2026",
    image: "/projects/ieee.jpg",
    imageFit: "contain",
    imageBg: "#ffffff",
    imageFallback: "IE",
    color: "#00629B",
    links: [],
    featured: true,
  },
  {
    slug: "project-arise",
    title: "Project ARISE",
    lane: "impact",
    tagline: "$2,500 Youth Action Fund grant",
    problem:
      "Rural women lacked accessible financial education across borders.",
    approach:
      "Founded a nonprofit with curriculum, workshops, and tools — **$2,500 Youth Action Fund** recipient scaling financial literacy programs.",
    stack: ["Nonprofit", "Curriculum", "Operations"],
    impact: "$2,500 grant · 300+ women · 4 countries",
    image: "/projects/arise.png",
    imageFit: "contain",
    imageBg: "#0f172a",
    imageFallback: "AR",
    color: "#ec4899",
    links: [{ label: "Visit site", href: "https://arisewomen.cc" }],
    featured: true,
  },
  {
    slug: "frontier-challenge",
    title: "Frontier Challenge",
    lane: "impact",
    tagline: "Global STEM challenge",
    problem:
      "Students worldwide needed a platform to prototype real-world solutions, not just classroom exercises.",
    approach:
      "Built operations, outreach, and judging infrastructure — raised $500+ in two weeks.",
    stack: ["Operations", "STEM", "Community"],
    impact: "200+ participants · ~14 countries",
    image: "/projects/frontier.jpg",
    imageFallback: "FC",
    color: "#2962FF",
    links: [
      { label: "Live site", href: "https://frontierchallenge.com" },
      { label: "GitHub", href: "https://github.com/Akul-beep/frontier-challenge" },
    ],
    featured: true,
  },
];

export const beyond: BeyondItem[] = [
  {
    slug: "debate-wsdc",
    title: "World Schools Debate",
    subtitle: "Malaysia WSDC · Champion & Best Speaker",
    story:
      "Competed against 50+ teams and 200+ debaters internationally — champion team and best speaker. Selected in the top ~60 nationwide from 1,500+ for ISDS.",
    tags: ["Debate", "Leadership", "Public speaking"],
    date: "Apr 2025",
  },
  {
    slug: "f1-schools",
    title: "F1 in Schools",
    subtitle: "Design Engineer · Sixth Gear",
    story:
      "Top 7 nationally as design engineer — top-10 fastest car, full scrutineering, CFD and Fusion 360 modeling for competitive aerodynamics.",
    tags: ["Engineering", "CAD", "Team lead"],
    date: "2024 — 2025",
    link: "https://www.teamsixthgear.com/",
  },
  {
    slug: "cmimc",
    title: "CMIMC 2026",
    subtitle: "Carnegie Mellon Informatics & Math",
    story:
      "Top 10 team at CMIMC (Feb 2026) — timed problem-solving across informatics and mathematics at one of the strongest competitions in the US.",
    tags: ["Math", "CS", "Competition"],
    date: "Feb 2026",
  },
  {
    slug: "icsc",
    title: "ICSC Silver Honour",
    subtitle: "Top 2% of 2,500+ globally",
    story:
      "Silver honour in the International Computer Science Competition — timed coding, algorithmic thinking, and technical paper analysis under pressure.",
    tags: ["CS", "Algorithms"],
    date: "Nov 2025",
  },
  {
    slug: "toastmasters",
    title: "Toastmasters Gavels",
    subtitle: "VP of Education",
    story:
      "Lead education programming for the club — coaching members on speeches, running workshops, and building a culture of confident public speaking.",
    tags: ["Leadership", "Mentorship"],
    date: "2024 — 2025",
  },
];

export const experience: ExperienceItem[] = [
  {
    title: "Startup Intern",
    org: "Rove",
    meta: "Jun — Jul 2025",
    bullets: [
      "**YC-backed** startup — flight & travel product",
      "Flight **tracking routes**, **destination optimization**, and feature **implementation**",
      "~15 hrs/week shipping with the engineering team",
    ],
    featured: true,
  },
  {
    title: "Harvard HUVTSP",
    org: "Undergraduate Venture Tech Summer Program",
    meta: "Summer 2025",
    bullets: [
      "Selected among **<15%** of applicants",
      "Venture and technology entrepreneurship at Harvard",
    ],
  },
  {
    title: "President",
    org: "School AI Club",
    meta: "Present",
    bullets: [
      "Lead my school's AI Club with **25+ members**",
      "Mentor on applying data-driven thinking to real-world problems",
      "Emphasize evaluating assumptions, managing uncertainty, and using models as **decision-support tools** — not definitive answers",
      "Guide discussions on **ethical deployment** of AI",
    ],
  },
  {
    title: "Founder & Developer",
    org: "Orion Finance",
    meta: "2025 — Present",
    bullets: [
      "Personal finance learning app — **live on the App Store**",
      "Swift/UIKit; hypothesis-driven feature iteration",
    ],
  },
  {
    title: "Executive Director",
    org: "Project ARISE",
    meta: "2025 — Present",
    bullets: [
      "**$2,500** Youth Action Fund grant",
      "Financial literacy for **300+ women** across **4 countries**",
    ],
  },
  {
    title: "Founder",
    org: "Frontier Challenge",
    meta: "2025 — Present",
    bullets: [
      "Global STEM challenge — **200+ participants**, **~14 countries**",
      "Raised **$500+** in two weeks; built ops and judging infrastructure",
    ],
  },
  {
    title: "Design Engineer",
    org: "F1 in Schools — Sixth Gear",
    meta: "2024 — 2025",
    bullets: [
      "**Top 7** nationally; top-10 fastest car",
      "CFD analysis and Fusion 360 aerodynamic modeling",
    ],
  },
  {
    title: "VP of Education",
    org: "Toastmasters Gavels Club",
    meta: "2024 — 2025",
    bullets: [
      "Lead workshops and coach members on public speaking",
    ],
  },
];

export const skills = {
  languages: ["Python", "JavaScript", "TypeScript", "Swift", "SQL"],
  frontend: ["React", "Next.js"],
  backend: ["Node.js", "Firebase", "Supabase", "AI / LLM APIs"],
  tools: ["Git", "Vercel", "Fusion 360", "SolidWorks"],
};

export const contact = {
  headline: "Let's build something.",
  bio: "iOS & full-stack developer · founder · researcher. **Seeking software engineering internships for Summer 2026** — email is the fastest way to reach me.",
};

export const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Beyond", href: "#beyond" },
  { label: "Contact", href: "#contact" },
] as const;

export function getTechnicalProjects() {
  return projects.filter((p) => p.lane === "technical");
}

export function getImpactProjects() {
  return projects.filter((p) => p.lane === "impact");
}
