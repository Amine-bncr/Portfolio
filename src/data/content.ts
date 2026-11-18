/**
 * All public copy for the site lives in this file.
 * Edit it, then rebuild. See the README for the Netlify deploy steps
 * and for the photo and site URL fields below.
 *
 * Facts here come from Amine's CV, LinkedIn details and the public
 * repositories. Do not add metrics, clients, quotes or job titles
 * that are not already written in this file.
 */

export const site = {
  name: "Mohamed Amine Bennacer",
  shortName: "Amine",
  brand: "Amine-dev",
  location: "London, UK",
  email: "bennaceramine9@gmail.com",
  github: "https://github.com/Amine-bncr",
  linkedin: "https://www.linkedin.com/in/amine-bennacer-6a85b2298",
  /**
   * GitHub avatar, used only until a real photo is ready.
   * Replace this with "/photo.jpg" after you add the file to public/.
   */
  photo: "https://avatars.githubusercontent.com/u/237804658?v=4",
  photoAlt:
    "Placeholder portrait of Amine Bennacer. Replace the photo URL in src/data/content.ts.",
  /**
   * Live site origin, with https and no trailing slash.
   * Leave this blank until the Netlify URL is known. Open Graph image
   * and the canonical link are filled in from it at build time.
   */
  url: "",
  title: "Amine Bennacer | Computer Science student and web developer",
  description:
    "Third-year Computer Science student at Middlesex University, London. Freelance websites for small businesses under Amine-dev, and graduate or junior software roles.",
  locale: "en_GB",
} as const;

export const nav = [
  { href: "#work", label: "Work" },
  { href: "#hire", label: "Hire me" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
] as const;

export const hero = {
  eyebrow: "Amine-dev · London",
  title: "Amine Bennacer",
  lead: "Third-year Computer Science student at Middlesex University, and a freelance web developer for small businesses, startups and e-commerce.",
  recruiter:
    "I am looking for graduate and junior roles in software, full-stack, front-end and data or BI.",
  business:
    "I also take on websites: a clear brochure site, a WhatsApp ordering page, or a Shopify shop.",
};

export const hire = {
  eyebrow: "For small businesses",
  title: "Hire me for your website",
  paragraphs: [
    "I design and build straightforward sites for small businesses, startups and shops, under the name Amine-dev.",
    "Two live examples are the Rose & Saveurs pâtisserie site and the Athar Remedies Shopify store, which I designed and built. Snaky DZ is a demo of the same kind of ordering page, not a launched shop.",
    "If you want a site, send a note with what you sell, who it is for, and when you would like it online. I will reply by email and say what I can take on.",
  ],
};

export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  title: string;
  status: "Live" | "Demo" | "In progress" | "Coursework";
  when?: string;
  summary: string;
  stack: string[];
  links: ProjectLink[];
  note?: string;
};

export const featuredProjects: Project[] = [
  {
    title: "Rose & Saveurs",
    status: "Live",
    summary:
      "A mobile-first website for an artisan pâtisserie. Visitors build an order — pickup or delivery, a date, an address and a cake message — and send it through WhatsApp. Built with Vite, React, TypeScript and Tailwind, and deployed on Netlify.",
    stack: ["Vite", "React", "TypeScript", "Tailwind CSS", "Netlify"],
    links: [
      { label: "Live site", href: "https://rose-et-saveurs.netlify.app" },
      {
        label: "Code",
        href: "https://github.com/Amine-bncr/rose-et-saveurs",
      },
    ],
  },
  {
    title: "Athar Remedies",
    status: "Live",
    summary:
      "A Shopify store. I designed and built the live website.",
    stack: ["Shopify"],
    links: [{ label: "Live site", href: "https://www.atharremedies.com" }],
  },
  {
    title: "Snaky DZ",
    status: "Demo",
    summary:
      "A one-page demo for Snaky DZ, an Algerian range of vegan, natural food products. It shows products and sends an order through WhatsApp. The repository marks the site as a demo and asks search engines not to index it.",
    stack: ["Vite", "React", "TypeScript", "Tailwind CSS"],
    links: [
      { label: "Demo", href: "https://snaky-demo.netlify.app" },
      { label: "Code", href: "https://github.com/Amine-bncr/Snaky-demo" },
    ],
  },
  {
    title: "Hearback",
    status: "In progress",
    summary:
      "A React and TypeScript app for tracking job applications, with a read-only inbox connection in mind. The dashboard and the inbox step are still placeholders in the repository, so there is no public demo.",
    stack: ["React", "TypeScript", "Tailwind CSS", "Supabase"],
    links: [
      { label: "Code", href: "https://github.com/Amine-bncr/Heardback" },
    ],
    note: "In progress",
  },
  {
    title: "Lessons shop",
    status: "Coursework",
    when: "Full-stack coursework (CST3144)",
    summary:
      "A coursework app for browsing lessons, adding them to a cart and checking out. The front end is Vue. The API is Express with MongoDB. The Vue page calls a local address, so the code is linked here rather than shown as a working demo.",
    stack: ["Vue", "Express", "MongoDB", "Node.js"],
    links: [
      {
        label: "Front-end code",
        href: "https://github.com/Amine-bncr/Frontend_CW",
      },
      {
        label: "Back-end code",
        href: "https://github.com/Amine-bncr/Backend-M01010322",
      },
    ],
  },
  {
    title: "Real Madrid Community",
    status: "Coursework",
    when: "October – December 2025",
    summary:
      "An Express and MongoDB fan platform from coursework. It covers registration and sign-in, a community feed, fan search and photo uploads with captions. Match results, the squad and club news are loaded from external sources.",
    stack: ["Express", "Node.js", "MongoDB", "HTML"],
    links: [
      {
        label: "Code",
        href: "https://github.com/Amine-bncr/Real-Madrid-Community-Website-Project",
      },
    ],
  },
];

export const smallerProjects: Project[] = [
  {
    title: "Museum Web App",
    status: "Coursework",
    summary:
      "A university museum application built with ASP.NET Core MVC, C# and Entity Framework Core on a SQL database. It includes tour search, saved tours and user sessions. There is no public repository.",
    stack: ["C#", "ASP.NET Core MVC", "Entity Framework Core", "SQL"],
    links: [],
  },
  {
    title: "Tic-Tac-Toe",
    status: "Coursework",
    when: "September – October 2025",
    summary:
      "A multi-page game in HTML, CSS and JavaScript. Players can register, choose an easy or hard computer opponent, and see wins on a leaderboard.",
    stack: ["HTML", "CSS", "JavaScript"],
    links: [
      {
        label: "Code",
        href: "https://github.com/Amine-bncr/Tic-Tac-Toe-Game",
      },
    ],
  },
  {
    title: "Superbowl",
    status: "Coursework",
    when: "October – December 2025",
    summary:
      "A Java application that reads 58 Super Bowl games, from 1967 to 2024, and lets someone search, sort and summarise them by team wins, MVPs, host cities and states. Packaged with Apache Ant.",
    stack: ["Java", "Apache Ant"],
    links: [
      {
        label: "Code",
        href: "https://github.com/Amine-bncr/Superbowl-Project",
      },
    ],
  },
  {
    title: "Java Dice Game",
    status: "Coursework",
    when: "September – October 2025",
    summary:
      "An object-oriented Java desktop dice game, written in NetBeans and built with Apache Ant.",
    stack: ["Java", "Apache Ant", "NetBeans"],
    links: [
      {
        label: "Code",
        href: "https://github.com/Amine-bncr/Java-Dice-Game-project",
      },
    ],
  },
];

export const skillGroups = [
  {
    label: "Languages",
    items: ["Python", "Java", "JavaScript", "TypeScript", "C#"],
  },
  {
    label: "Web",
    items: [
      "HTML",
      "CSS",
      "Tailwind CSS",
      "React",
      "Vue",
      "Node.js",
      "ASP.NET Core MVC",
    ],
  },
  {
    label: "Data and APIs",
    items: [
      "SQL",
      "Entity Framework Core",
      "MongoDB",
      "Power BI",
      "API integration",
    ],
  },
  {
    label: "Practice",
    items: [
      "Object-oriented programming",
      "MVC",
      "Git and GitHub",
      "Netlify",
      "Shopify",
      "Apache Ant",
    ],
  },
  {
    label: "AI",
    items: ["Gemini API", "Prompt engineering"],
  },
] as const;

export const education = [
  {
    title: "BSc Computer Science",
    place: "Middlesex University, London",
    when: "2024 – 2027 (expected)",
    detail:
      "Third year. Modules include Programming, Object-Oriented Programming, Web Applications and Databases, Software Engineering, Full Stack Development and Business Intelligence.",
  },
  {
    title: "Foundation in Science and Engineering",
    place: "INTO London",
    when: "Completed",
    detail: "",
  },
] as const;

export const certification = {
  title: "Google AI Essentials Specialization",
  by: "Google / Coursera",
  when: "November 2026",
  courses: [
    "Introduction to AI",
    "Maximize Productivity With AI Tools",
    "Discover the Art of Prompting",
    "Use AI Responsibly",
    "Stay Ahead of the AI Curve",
  ],
};

export const languages = [
  { name: "Arabic", level: "Native" },
  { name: "English", level: "Fluent" },
  { name: "French", level: "B2" },
] as const;

export const otherWork = [
  {
    role: "Crew member",
    place: "McDonald’s, London",
    when: "November 2023 – August 2024",
    detail:
      "Served customers in a busy team, following quality, hygiene and food safety standards.",
  },
  {
    role: "Store assistant",
    place: "Sainsbury’s, London",
    when: "October 2023",
    detail:
      "Supported customers, replenished shelves and helped with stocktaking and inventory records.",
  },
] as const;

export const contact = {
  title: "Contact",
  lead: "For a website, or about a graduate or junior role, use the form or the email link. I read both.",
  audiences: [
    { value: "I need a website", label: "I need a website" },
    { value: "I'm hiring", label: "I'm hiring for a graduate or junior role" },
    { value: "Something else", label: "Something else" },
  ],
};

export const mailto = `mailto:${site.email}`;
