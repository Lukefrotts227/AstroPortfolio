// src/data/work.ts
// All fields except title, tags, and year are optional — set to null to omit.
//
// FIELD GUIDE:
// title        — display name of the entry
// organization — employer, lab, institution, or "Personal" for solo work
// location     — city, remote, or null
// dateRange    — e.g. "Jan 2025 – Present" or "Summer 2023". Overrides year if set.
// year         — fallback if no dateRange. Can be null if dateRange is set.
// status       — "ongoing" | "complete"
// tags         — mix and match freely, see categories below
// links        — array of { label, url } pairs. Use [] for none.
//                url can be external (https://...) or a local PDF (/papers/foo.pdf)
// summary      — SHORT: one punchy sentence. Always visible.
// description  — MEDIUM: a paragraph. What you did and why it matters.
// details      — LONG: technical depth, for deep-dive readers.
// highlights   — string array of callout facts e.g. ["100+ concurrent users"]
// featured     — true to surface in the Highlights block at the top
//
// TAG CATEGORIES (mix freely — anything goes):
// Type:    "research" | "project" | "job" | "lab" | "independent"
// Domain:  "ml" | "systems" | "fullstack" | "data" | "robotics" | "teaching" | "leadership" | "automation"
// Stack:   "python" | "rust" | "javascript" | "typescript" | "cpp" | anything else

export const work = [
  {
    title: "Partial Imaginary Freezing in CVNNs",
    organization: "Dr Yu's Lab",
    location: null,
    dateRange: "Jan 2026 – Present",
    year: null,
    status: "ongoing",
    tags: ["research", "ml", "independent"],
    links: [],
    summary: "",
    description: "",
    details: null,
    highlights: [],
    featured: true,
  },
  {
    title: "AI Robotics",
    organization: "Dr Yu's Lab",
    location: null,
    dateRange: "Jan 2026 – Present",
    year: null,
    status: "ongoing",
    tags: ["lab", "ml", "robotics", "automation"],
    links: [],
    summary: "",
    description: "",
    details: null,
    highlights: [],
    featured: true,
  },
  {
    title: "MAP Team",
    organization: "Dr Yu's Lab",
    location: null,
    dateRange: "2025 – Present",
    year: null,
    status: "ongoing",
    tags: ["lab", "fullstack"],
    links: [],
    summary: "",
    description: "",
    details: null,
    highlights: [],
    featured: false,
  },
  {
    title: "ProfessoRank",
    organization: "Personal",
    location: null,
    dateRange: null,
    year: 2024,
    status: "complete",
    tags: ["project", "fullstack", "Next.js", "React", "Javascript"],
    links: [
      { label: "GitHub", url: "https://github.com/Lukefrotts227/proferankec" },
    ],
    summary: "",
    description: "",
    details: null,
    highlights: ["100+ concurrent users", "Self-hosted Spanish–English translation model"],
    featured: true,
  },
  {
    title: "Diabeater",
    organization: "Personal",
    location: null,
    dateRange: null,
    year: 2023,
    status: "ongoing",
    tags: ["project", "ml", "python"],
    links: [
      { label: "GitHub", url: "https://github.com/Lukefrotts227/TheRealDiabeater" },
    ],
    summary: "",
    description: "",
    details: null,
    highlights: [],
    featured: false,
  },
  {
    title: "MapRootDB",
    organization: "Personal",
    location: null,
    dateRange: null,
    year: 2023,
    status: "complete",
    tags: ["project", "systems", "rust", "C++"],
    links: [],
    summary: "",
    description: "",
    details: null,
    highlights: [],
    featured: false,
  },
  {
    title: "Data Reporting Analyst",
    organization: "Robert Half and Reworld",
    location: null,
    dateRange: "2023 – 2024",
    year: null,
    status: "complete",
    tags: ["job", "data", "excel", "communication"],
    links: [],
    summary: "",
    description: "",
    details: null,
    highlights: [],
    featured: false,
  },
  {
    title: "STEM Mentor & Teacher",
    organization: "Pathways For Exceptional Children",
    location: null,
    dateRange: null,
    year: 2023,
    status: "complete",
    tags: ["job", "teaching", "python", "AutoCad"],
    links: [],
    summary: "",
    description: "",
    details: null,
    highlights: [],
    featured: false,
  },
  {
    title: "Youth Baseball Umpire",
    organization: "USABL",
    location: null,
    dateRange: "2021",
    year: null,
    status: "complete",
    tags: ["job", "leadership"],
    links: [],
    summary: "",
    description: "",
    details: null,
    highlights: [],
    featured: false,
  },
];