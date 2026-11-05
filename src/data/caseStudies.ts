import { FEATURED_IDS, projects, type Project } from "./projects";

/**
 * Long-form case studies for the "Selected work" projects.
 *
 * Everything here is drawn from real sources — the live products, the
 * experience history and public store listings. When you have real outcome
 * numbers (downloads, users, revenue, time saved), add them to `results`
 * in projects.ts — they appear on the card and on the case-study page.
 */
export interface CaseStudy {
  readonly slug: string;
  /** e.g. "2023 – 2024". Leave out if unsure. */
  readonly period?: string;
  readonly engagement: string;
  readonly challenge: string;
  readonly approach: readonly { readonly title: string; readonly text: string }[];
  readonly outcome: string;
}

const studies: Record<(typeof FEATURED_IDS)[number], Omit<CaseStudy, "slug">> = {
  gamerun: {
    engagement: "Client project — GameRun Inc.",
    challenge:
      "Game film is hours of footage. Athletes, parents and coaches need it turned into clear, practical feedback — what to train and how to fix it — on the phone in their pocket and on the web, without hiring an analyst.",
    approach: [
      {
        title: "A mobile app athletes actually open",
        text: "Worked on the React Native app, live on Google Play, where athletes upload game film and read their AI performance reports.",
      },
      {
        title: "The same product on the web",
        text: "Built Next.js web experiences alongside the app, so coaches and organisations get the same reports on a big screen.",
      },
      {
        title: "Typed, maintainable UI",
        text: "TypeScript across web and mobile keeps a fast-moving AI product stable as new report types and features land.",
      },
    ],
    outcome:
      "Live on Google Play and the web, and used by 40+ organisations — including USA Baseball scouts and coaches from Duke and Stanford.",
  },
  "sahej-health": {
    period: "2023 – 2024",
    engagement: "Full-time — Completum Health (United States, remote)",
    challenge:
      "People living with Type 2 diabetes juggle diet, medication, readings and lifestyle changes. Completum Health wanted one calm, guided app that blends evidence-based care with everyday tracking.",
    approach: [
      {
        title: "Designed end to end in Figma",
        text: "Created the full UI design for both mobile and web before a line of code — so the team could test flows with real users early.",
      },
      {
        title: "Built the React Native app",
        text: "Implemented user onboarding, health-tracking dashboards and the notification system that keeps patients on their care plan.",
      },
      {
        title: "Solid foundations",
        text: "Redux for predictable state, React Native Paper for accessible components and TypeScript throughout.",
      },
    ],
    outcome: "Shipped as Sahej Health on the App Store for Completum Health.",
  },
  "dil-ki-bhakti": {
    engagement: "My own product — designed, built and published",
    challenge:
      "Devotional content in Hindi is scattered across ad-heavy sites and long videos. I wanted one calm place for daily aarti, bhajans, mantras and quotes — on the web and on Android.",
    approach: [
      {
        title: "A deity for every day",
        text: "The experience changes with the day of the week, so there's always something fresh to open in the morning.",
      },
      {
        title: "Website built to be found",
        text: "Next.js and MongoDB power the site and a Hindi blog, built for fast loads and Google search.",
      },
      {
        title: "Companion Android app",
        text: "A React Native app for a calm, distraction-free daily routine — designed, built and published to Google Play by me.",
      },
    ],
    outcome: "Live on the web and rated 4.8★ on Google Play.",
  },
  "krishna-transport": {
    engagement: "Client project — Krishna Transport Packers & Movers",
    challenge:
      "A Noida relocation company needed enquiries, not just a brochure. Customers across Delhi NCR search on Google, compare quickly and want to talk to someone straight away.",
    approach: [
      {
        title: "Built to rank locally",
        text: "Service pages for household and commercial moves, structured for local search across Noida and Delhi NCR.",
      },
      {
        title: "Enquiries in one tap",
        text: "Instant WhatsApp enquiries plus HubSpot lead capture, so no visitor who wants a quote gets lost.",
      },
      {
        title: "Fast on every phone",
        text: "Next.js and Tailwind CSS keep pages light, with a gallery and trust content that load quickly on mobile data.",
      },
    ],
    outcome: "Live with WhatsApp and HubSpot enquiry flows for customers across Delhi NCR.",
  },
  snakepad: {
    engagement: "My own product — designed, built and published",
    challenge:
      "Everyone knows Snakes & Ladders — but playing it with family in another city usually means installing an app and creating accounts first.",
    approach: [
      {
        title: "No sign-up, just a code",
        text: "Start a game, share a six-letter room code and friends join from any browser.",
      },
      {
        title: "Real-time for 2–4 players",
        text: "Every turn syncs across all screens over WebSockets, and players can rejoin with the same code and name after a dropped connection.",
      },
      {
        title: "Web and Android together",
        text: "The Android app joins the same rooms, and adds offline play against the computer.",
      },
    ],
    outcome: "Live in the browser and on Google Play.",
  },
  "hub-form": {
    engagement: "My own product — SaaS",
    challenge:
      "Every small website needs a contact form — and every form needs a backend, spam handling and somewhere to actually read the messages.",
    approach: [
      {
        title: "No server code",
        text: "Point any HTML form at a per-domain endpoint and submissions are stored and delivered.",
      },
      {
        title: "One inbox for every site",
        text: "A dashboard shows every message with sender, domain and content — across all your websites.",
      },
      {
        title: "Secure server-to-server API",
        text: "Secret keys for server-side sends, plus sign-up, login and password reset.",
      },
    ],
    outcome: "Live — and it powers the contact form on this portfolio.",
  },
};

export const caseStudySlugs = FEATURED_IDS as readonly string[];

export function getCaseStudy(slug: string): { study: CaseStudy; project: Project; next: Project } | null {
  const data = studies[slug as keyof typeof studies];
  const project = projects.find((p) => p.id === slug);
  if (!data || !project) return null;
  const i = caseStudySlugs.indexOf(slug);
  const nextId = caseStudySlugs[(i + 1) % caseStudySlugs.length];
  const next = projects.find((p) => p.id === nextId)!;
  return { study: { slug, ...data }, project, next };
}
