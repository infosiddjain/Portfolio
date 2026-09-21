export interface Experience {
  readonly id: string;
  readonly title: string;
  readonly company: string;
  /** ISO start date (yyyy-mm-dd). */
  readonly start: string;
  /** ISO end date, or null when the role is current. */
  readonly end: string | null;
  readonly location: string;
  readonly description: string[];
}

/** Start of career: 06 Sep 2021. */
export const CAREER_START = "2021-09-06";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const monthDiff = (from: Date, to: Date) =>
  (to.getFullYear() - from.getFullYear()) * 12 + (to.getMonth() - from.getMonth()) + 1;

const fmt = (d: Date) => `${MONTHS[d.getMonth()]} ${d.getFullYear()}`;

export function formatDuration(months: number): string {
  const y = Math.floor(months / 12);
  const m = months % 12;
  return [y && `${y} yr${y > 1 ? "s" : ""}`, m && `${m} mo${m > 1 ? "s" : ""}`]
    .filter(Boolean)
    .join(" ");
}

/** e.g. "Mar 2024 - Present · 2 yrs 7 mos" — "Present" always uses today's date. */
export function formatPeriod(exp: Experience, now = new Date()): string {
  const start = new Date(exp.start);
  const end = exp.end ? new Date(exp.end) : now;
  return `${fmt(start)} - ${exp.end ? fmt(end) : "Present"} · ${formatDuration(monthDiff(start, end))}`;
}

/** Whole years of total experience since CAREER_START. */
export function totalYears(now = new Date()): number {
  const start = new Date(CAREER_START);
  let years = now.getFullYear() - start.getFullYear();
  const beforeAnniversary =
    now.getMonth() < start.getMonth() ||
    (now.getMonth() === start.getMonth() && now.getDate() < start.getDate());
  if (beforeAnniversary) years -= 1;
  return years;
}

export const experiences: Experience[] = [
  {
    id: "revoluza",
    title: "Software Engineer",
    company: "Revoluza Technologies · Full-time",
    start: "2024-03-01",
    end: null,
    location: "India · Remote",
    description: [
      "Leading full-stack development using React.js, React Native, Next.js, Node.js, Express.js, and MongoDB.",
      "Designed and developed the Learnz landing page, travel & transport website, student portal, and admin dashboard.",
      "Managed Figma-based UI/UX for all digital products ensuring responsive and accessible design.",
      "Oversaw the complete technical architecture and product roadmap aligning with business goals.",
    ],
  },
  {
    id: "completum",
    title: "Frontend Developer (React & React Native)",
    company: "Completum Health · Full-time",
    start: "2023-08-01",
    end: "2024-02-01",
    location: "United States · Remote",
    description: [
      "Developed Sahej App, a health management platform for diabetic patients using React Native.",
      "Created full UI designs in Figma for mobile and web.",
      "Implemented user onboarding, health tracking dashboards, and notification system.",
    ],
  },
  {
    id: "aara",
    title: "Frontend Developer (React & React Native)",
    company: "Aara Groups · Full-time",
    start: "2022-04-01",
    end: "2023-08-01",
    location: "Lucknow, Uttar Pradesh, India · Remote",
    description: [
      "Developed an e-commerce website, admin portal, and mobile application (My Pocket App) using React and React Native.",
      "Worked on Reward Dragon loyalty program platform using React.js.",
      "Implemented dashboards, payment flows, product listings, and user accounts.",
    ],
  },
  {
    id: "wonder-pillars",
    title: "Frontend Developer (React.js)",
    company: "Wonder Pillars Technology Pvt. Ltd. · Full-time",
    start: "2021-09-06",
    end: "2022-04-01",
    location: "Noida, Uttar Pradesh, India · Remote",
    description: [
      "Contributed to React.js development for Vantana Taxi App, Stock Market Dashboard, and Fexicel Platform.",
      "Designed and integrated interactive UI components with API integration.",
      "Optimized frontend performance and cross-browser compatibility.",
    ],
  },
];
