/** Edit this file to update portfolio copy without touching layout code. */
export const site = {
  name: "Akul Nehra",
  email: "hey@akulnehra.com",
  linkedin: "https://www.linkedin.com/in/akul-nehra-629994330/",
  github: "https://github.com/Akul-beep",
  resumeUrl: "/resume.pdf",
  tagline: "Building products that solve real problems.",
  role: "Student developer & founder",
  org: "Genesis Global School · IB",
  status: "Open to SWE internships · 2026",
  intro:
    "Feel free to explore my work and reach out — I'd love to connect about internships, building, or collaborations.",
  location: {
    city: "NEW DELHI",
    country: "INDIA",
    coords: "28.6139° N, 77.2090° E",
  },
};

export const stats = [
  { value: 4, suffix: "+", label: "Products shipped" },
  { value: 200, suffix: "+", label: "Students reached" },
  { value: 2500, suffix: "+", label: "Competition rank pool" },
  { value: 15, suffix: "%", label: "HUVTSP acceptance", prefix: "<" },
];

export const story = {
  headline: "Who I am",
  paragraphs: [
    "I'm an IB student in New Delhi who builds at the intersection of code, research, and real-world impact — from peer-reviewed AI work to apps on the App Store and funded nonprofits.",
    "I don't just enter competitions; I ship. Whether it's interning at a YC-backed startup, leading a global STEM challenge, or publishing at IEEE, I'm obsessed with learning fast and building things people actually use.",
  ],
};

export const spotlight = {
  label: "Featured experience",
  badge: "Harvard HUVTSP · Summer 2025",
  title: "Startup intern at Rove",
  subtitle: "YC-backed · Selected among <15% of applicants",
  body: "Through Harvard's Undergraduate Venture Tech Summer Program, I interned at Rove — testing entrepreneurship in a real startup. I spoke with users, challenged my own assumptions, and learned when to pivot. I built Orion Finance in parallel, applying the same rigor: treat every feature as a hypothesis, ship, listen, iterate.",
  highlights: [
    "15 hrs/week · product & growth exposure",
    "Frameworks: user research, GTM thinking, startup ops",
    "Shipped Orion Finance to the App Store during the program",
  ],
  tags: ["Entrepreneurship", "Product", "iOS", "HUVTSP"],
};

export const projects = [
  {
    title: "Orion Finance",
    category: "technical",
    tagline: "Personal finance on the App Store",
    problem:
      "Help people build better money habits — born from HUVTSP and my internship learnings at Rove.",
    stack: ["Swift", "iOS"],
    impact: "Live on the App Store",
    imageFallback: "OR",
    color: "#ff5c00",
    liveUrl: null,
    appStoreUrl: "https://apps.apple.com/search?term=Orion%20Finance",
    repoUrl: "https://github.com/Akul-beep/orion-app",
    featured: true,
  },
  {
    title: "Flowly",
    category: "technical",
    tagline: "AI scheduler for students",
    problem:
      "AI-powered task breakdowns and adaptive scheduling when school gets overwhelming.",
    stack: ["Next.js", "AI", "Vercel"],
    impact: "flowlyofficial.vercel.app",
    imageFallback: "FL",
    color: "#6366f1",
    liveUrl: "https://flowlyofficial.vercel.app/",
    appStoreUrl: null,
    repoUrl: "https://github.com/Akul-beep/focusflow",
    featured: true,
  },
  {
    title: "Project ARISE",
    category: "venture",
    tagline: "Financial literacy for women",
    problem:
      "Curriculum and tools empowering 300+ rural women across 4 countries — $2,500 IB Youth Action Fund.",
    stack: ["Nonprofit", "Curriculum"],
    impact: "arisewomen.cc",
    imageFallback: "AR",
    color: "#ec4899",
    liveUrl: "https://arisewomen.cc",
    appStoreUrl: null,
    repoUrl: null,
    featured: true,
  },
  {
    title: "Frontier Challenge",
    category: "venture",
    tagline: "Global STEM challenge",
    problem:
      "200+ students across ~14 countries prototyping real-world solutions — $500+ raised in two weeks.",
    stack: ["Operations", "STEM"],
    impact: "frontierchallenge.com",
    imageFallback: "FC",
    color: "#0ea5e9",
    liveUrl: "https://frontierchallenge.com",
    appStoreUrl: null,
    repoUrl: "https://github.com/Akul-beep/frontier-challenge",
    featured: true,
  },
];

export const honors = [
  {
    title: "IEEE ICITSIF 2026",
    subtitle: "Published peer-reviewed AI research",
    date: "Jan 2026",
    detail: "Traffic incidents, wait times & CO₂ — accepted at IEEE conference.",
    tag: "Research",
    link: "https://github.com/Akul-beep/research",
  },
  {
    title: "ICSC Silver Honour",
    subtitle: "Top 2% of 2,500+ globally",
    date: "Nov 2025",
    detail: "Timed coding, problem-solving & paper analysis.",
    tag: "CS",
    link: null,
  },
  {
    title: "CMIMC 2026",
    subtitle: "Top 10 team",
    date: "2026",
    detail: "Carnegie Mellon Informatics & Mathematics Competition.",
    tag: "Math",
    link: null,
  },
  {
    title: "Malaysia WSDC",
    subtitle: "Champion · Best Speaker",
    date: "Apr 2025",
    detail: "50+ teams, 200+ debaters internationally.",
    tag: "Debate",
    link: null,
  },
  {
    title: "ISDS Selections",
    subtitle: "Top ~60 nationwide",
    date: "Nov 2025",
    detail: "Final WSDC selection from 1,500+ students.",
    tag: "Debate",
    link: null,
  },
  {
    title: "F1 in Schools",
    subtitle: "Top 7 nationally",
    date: "Jul 2025",
    detail: "Design engineer · top-10 fastest car · full scrutineering.",
    tag: "Engineering",
    link: "https://www.teamsixthgear.com/",
  },
];

export const experience = [
  {
    title: "Startup Intern",
    org: "Rove · via Harvard HUVTSP",
    meta: "Jun — Jul 2025",
    highlight: "YC-backed startup · <15% program acceptance",
    featured: true,
  },
  {
    title: "Founder & Developer",
    org: "Orion Finance",
    meta: "2025 — Present",
    highlight: "App Store · built during HUVTSP",
  },
  {
    title: "Executive Director",
    org: "Project ARISE",
    meta: "2024 — Present",
    highlight: "$2.5k IB grant · 300+ women",
  },
  {
    title: "Founder",
    org: "Frontier Challenge",
    meta: "2025 — Present",
    highlight: "200+ students · 14 countries",
  },
  {
    title: "Design Engineer",
    org: "F1 in Schools — Sixth Gear",
    meta: "2024 — 2025",
    highlight: "Top 7 nationals · CFD & Fusion 360",
  },
  {
    title: "VP of Education",
    org: "Toastmasters Gavels Club",
    meta: "2024 — Present",
    highlight: "Leadership & public speaking",
  },
];

export const skills = {
  languages: ["Python", "JavaScript", "TypeScript", "Swift", "SQL"],
  frontend: ["React", "Next.js"],
  backend: ["Node.js", "Firebase", "AI / LLM APIs"],
  tools: ["Git", "Vercel", "Fusion 360", "SolidWorks"],
};

export const about = {
  bio: "IB student · developer · founder · researcher. I care about software that ships, ideas that get tested, and work that outlasts a competition season.",
};
