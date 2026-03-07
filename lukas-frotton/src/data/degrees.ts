// src/data/degrees.ts
//
// FIELD GUIDE:
// institution  — university or college name
// degree       — full degree title e.g. "B.S. Computer Science"
// minor        — minor or concentration, or null
// dateRange    — e.g. "2022 – Present"
// status       — "ongoing" | "complete"
// gpa          — e.g. "3.4" or null
// notes        — anything extra e.g. transfer info, honors, null
// summary      — SHORT: one line shown in featured block
// description  — MEDIUM: more context if needed
// featured     — true to show in top highlights block

export const degrees = [
  {
    institution: "Rutgers University – New Brunswick",
    degree: "B.S. Computer Science",
    minor: "Mathematics",
    dateRange: "2024 – Present",
    status: "ongoing",
    gpa: null,
    notes: null,
    summary: "",
    description: "",
    featured: true,
  },
  {
    institution: "Montclair State University",
    degree: "B.S. Computer Science (transferred)",
    minor: null,
    dateRange: "2022 – 2023",
    status: "complete",
    gpa: null,
    notes: null,
    summary: "",
    description: "",
    featured: false,
  },
];