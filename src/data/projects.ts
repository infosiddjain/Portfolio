export type ProjectCategory = "client" | "product";

/** What the product is — drives the filter tabs. */
export type ProjectKind = "app" | "game" | "web";

/** Release state shown on the card. Defaults to "live". */
export type ProjectStatus = "live" | "coming-soon" | "apk";

export interface ProjectLinks {
  readonly web?: string;
  readonly playStore?: string;
  readonly appStore?: string;
  /** Direct APK download, for apps not on a store yet. */
  readonly apk?: string;
}

export interface Project {
  readonly id: string;
  readonly name: string;
  /** One-line hook shown under the title. */
  readonly tagline: string;
  readonly description: string;
  readonly category: ProjectCategory;
  readonly kind: ProjectKind;
  readonly status?: ProjectStatus;
  /** Client / brand name for company work. */
  readonly client?: string;
  readonly role: string;
  readonly tools: readonly string[];
  readonly links: ProjectLinks;
  /** Homepage screenshot in /public/projects. */
  readonly image?: string;
  /** App icon in /public/projects/icons. */
  readonly icon?: string;
  /** Brand colour used as a backdrop when a project has no screenshot. */
  readonly accent?: string;
  readonly featured?: boolean;
}

/** Google Play developer page — every published app lives here. */
export const PLAY_DEVELOPER_URL =
  "https://play.google.com/store/apps/developer?id=Siddharth+Gauri";

export const projects: readonly Project[] = [
  // ───────────── Client work ─────────────
  {
    id: "gamerun",
    accent: "#f59e0b",
    name: "GameRun",
    client: "GameRun Inc.",
    tagline: "AI that turns game film into player intelligence.",
    description:
      "Athletes upload game video and get a pro-level performance report — what to train and how to fix it. Trusted by USA Baseball scouts and 40+ organisations including Duke and Stanford coaches.",
    category: "client",
    kind: "app",
    role: "Frontend & Mobile Developer",
    tools: ["React Native", "Next.js", "TypeScript", "AI Video Analysis"],
    links: {
      web: "https://gamerun.ai/",
      playStore: "https://play.google.com/store/apps/details?id=com.gamerun.app",
    },
    image: "/projects/gamerun.jpg",
    icon: "/projects/icons/gamerun.png",
    featured: true,
  },
  {
    id: "sahej-health",
    name: "Sahej Health",
    client: "Completum Health · USA",
    tagline: "A holistic companion for managing Type 2 diabetes.",
    description:
      "Evidence-backed care that blends traditional medicine, psychological insight, lifestyle interventions and advanced monitoring to help people take control of their health.",
    category: "client",
    kind: "app",
    role: "Frontend Developer",
    tools: ["React Native", "Redux", "React Native Paper", "TypeScript"],
    links: {
      appStore: "https://apps.apple.com/in/app/sahej-health-app/id6469026236",
    },
    icon: "/projects/icons/sahej.png",
    accent: "#9f1d45",
    featured: true,
  },
  {
    id: "krishna-transport",
    accent: "#b91c1c",
    name: "Krishna Transport",
    client: "Krishna Transport Packers & Movers",
    tagline: "Lead-generating site for a Noida relocation company.",
    description:
      "Household and commercial relocation across Noida and Delhi NCR — services, gallery and instant WhatsApp enquiries, built to rank locally.",
    category: "client",
    kind: "web",
    role: "Frontend Developer",
    tools: ["Next.js", "Tailwind CSS", "TypeScript", "HubSpot"],
    links: { web: "https://www.krishnatransportpackersandmovers.com/" },
    image: "/projects/krishna-transport.jpg",
  },
  {
    id: "divansh-transport",
    accent: "#c2410c",
    name: "Divansh Transport",
    client: "Divansh Transport Service",
    tagline: "Logistics, import-export and moving — across India.",
    description:
      "A bold website for a logistics company offering transport, delivery, import-export and packers & movers services nationwide.",
    category: "client",
    kind: "web",
    role: "Frontend Developer",
    tools: ["Next.js", "Tailwind CSS", "TypeScript"],
    links: { web: "https://www.divanshtransportservice.in/" },
    image: "/projects/divansh-transport.jpg",
  },

  // ───────────── My products — apps on Google Play ─────────────
  {
    id: "dil-ki-bhakti",
    accent: "#ea580c",
    name: "Dil Ki Bhakti",
    tagline: "Daily aarti, bhajans, mantras and quotes — in Hindi.",
    description:
      "A devotional platform with a deity for every day of the week, a Hindi blog and a companion Android app rated 4.8★ on Google Play.",
    category: "product",
    kind: "app",
    role: "Founder · Full Stack",
    tools: ["Next.js", "MongoDB", "React Native", "TypeScript"],
    links: {
      web: "https://www.dilkibhakti.online/",
      playStore: "https://play.google.com/store/apps/details?id=com.dilkibhaktiapp",
    },
    image: "/projects/dilkibhakti.jpg",
    icon: "/projects/icons/dilkibhakti.png",
    featured: true,
  },
  {
    id: "hot-job",
    accent: "#7c3aed",
    name: "HotJob",
    tagline: "2,400+ remote jobs from top companies, in one feed.",
    description:
      "Aggregates remote openings from multiple job boards with search, saved jobs and daily updates — on the web and Android.",
    category: "product",
    kind: "app",
    role: "Founder · Full Stack",
    tools: ["React Native", "Next.js", "TypeScript"],
    links: {
      web: "https://hot-job-web.vercel.app/",
      playStore: "https://play.google.com/store/apps/details?id=com.hotjob",
    },
    image: "/projects/hotjob.jpg",
    icon: "/projects/icons/hotjob.png",
  },
  {
    id: "cpukit",
    accent: "#2563eb",
    name: "CpuKit",
    tagline: "Device info, battery and hardware — inside out.",
    description:
      "A fast, private Android app showing CPU, GPU, battery, memory, display, sensors, network and camera details — with a live web lab.",
    category: "product",
    kind: "app",
    role: "Founder · Mobile",
    tools: ["React Native", "Next.js", "TypeScript"],
    links: {
      web: "https://cpu-kit-web.vercel.app/",
      playStore: "https://play.google.com/store/apps/details?id=com.cpukit",
    },
    image: "/projects/cpukit.jpg",
    icon: "/projects/icons/cpukit.png",
  },
  {
    id: "calculator-zip",
    accent: "#0f766e",
    name: "Calculator Zip",
    tagline: "12 everyday calculators — EMI, GST, fuel and more.",
    description:
      "Fuel & EV, loan EMI, GST/VAT, savings, trip budget, electricity bill, BMI and more. Results update as you type, everything runs on-device, zero data collected.",
    category: "product",
    kind: "app",
    role: "Founder · Mobile",
    tools: ["React Native", "Next.js", "TypeScript"],
    links: {
      web: "https://calculator-zip-web.vercel.app/",
      playStore: "https://play.google.com/store/apps/details?id=com.calculatorzip",
    },
    image: "/projects/calculator-zip.jpg",
    icon: "/projects/icons/calculator-zip.png",
  },
  {
    id: "qr-vault",
    accent: "#6d28d9",
    name: "QR Vault",
    tagline: "Create, organise and password-protect your QR codes.",
    description:
      "Generate QR codes for contacts, Wi-Fi, notes and more, and lock the private ones behind a password. Everything stays on-device.",
    category: "product",
    kind: "app",
    role: "Founder · Mobile",
    tools: ["React Native", "Next.js", "TypeScript"],
    links: {
      web: "https://qrvault-web.vercel.app/",
      playStore: "https://play.google.com/store/apps/details?id=com.qrvault.com",
    },
    image: "/projects/qrvault.jpg",
    icon: "/projects/icons/qrvault.png",
  },
  {
    id: "silent-reminder",
    accent: "#0284c7",
    name: "Silent Reminder",
    tagline: "Vibrate-only reminders that respect your focus.",
    description:
      "A calm, distraction-free reminder app for events, medicine, trips, water, work and more.",
    category: "product",
    kind: "app",
    role: "Founder · Mobile",
    tools: ["React Native", "Next.js", "TypeScript"],
    links: {
      web: "https://silent-reminder-web.vercel.app/",
      playStore: "https://play.google.com/store/apps/details?id=com.silentreminder",
    },
    image: "/projects/silent-reminder.jpg",
    icon: "/projects/icons/silent-reminder.png",
  },
  {
    id: "english-offline",
    accent: "#881337",
    name: "English Offline",
    tagline: "Learn English in Hindi — 10,000+ lessons, fully offline.",
    description:
      "Grammar, daily spoken phrases and high-frequency vocabulary with 100% local privacy — zero ads, zero tracking.",
    category: "product",
    kind: "app",
    role: "Founder · Mobile",
    tools: ["React Native", "Next.js", "TypeScript"],
    links: {
      web: "https://english-offline-web.vercel.app/",
      playStore: "https://play.google.com/store/apps/details?id=englishoffline.com",
    },
    image: "/projects/english-offline.jpg",
    icon: "/projects/icons/english-offline.png",
  },
  {
    id: "vibelines",
    accent: "#e11d48",
    name: "VibeLines",
    tagline: "Design and share beautiful line cards.",
    description:
      "Romantic lines, flirty texts and love messages in English, Hindi and Bhojpuri — styled with custom backgrounds and fonts, shared instantly.",
    category: "product",
    kind: "app",
    role: "Founder · Mobile",
    tools: ["React Native", "Next.js", "TypeScript"],
    links: {
      web: "https://vibe-lines-web.vercel.app/",
      playStore: "https://play.google.com/store/apps/details?id=com.pickupline",
    },
    image: "/projects/vibelines.jpg",
    icon: "/projects/icons/vibelines.png",
  },
  {
    id: "rat-browser",
    accent: "#0f172a",
    name: "Rat Browser",
    tagline: "A fast, private web browser for Android.",
    description:
      "Built-in ad blocker with per-site controls, private tabs that leave no history, multi-engine search, themes and background audio — no accounts, no tracking.",
    category: "product",
    kind: "app",
    status: "coming-soon",
    role: "Founder · Mobile",
    tools: ["React Native", "Next.js", "TypeScript"],
    links: { web: "https://rat-browser-web.vercel.app/" },
    image: "/projects/rat-browser.jpg",
  },
  {
    id: "vip-editor",
    accent: "#9333ea",
    name: "VIP Editor",
    tagline: "Photo, video and audio editing — on-device.",
    description:
      "Photo filters and adjustments, a timeline video editor and an audio editor with noise removal and voice effects — with a live in-browser photo editor demo.",
    category: "product",
    kind: "app",
    status: "coming-soon",
    role: "Founder · Mobile",
    tools: ["React Native", "Next.js", "TypeScript"],
    links: { web: "https://vip-editor-web.vercel.app/" },
    image: "/projects/vip-editor.jpg",
  },

  // ───────────── My products — games ─────────────
  {
    id: "snakepad",
    accent: "#a16207",
    name: "Snakepad",
    tagline: "Snakes & Ladders online — play with friends by room code.",
    description:
      "Real-time 2–4 player rooms that sync every turn across screens, rejoin after a dropped connection, and offline play vs the computer in the Android app.",
    category: "product",
    kind: "game",
    role: "Founder · Full Stack",
    tools: ["React Native", "Next.js", "WebSockets", "Node.js"],
    links: {
      web: "https://snake-ladder-web-one.vercel.app/",
      playStore: "https://play.google.com/store/apps/details?id=com.infosiddjain.snakepad",
    },
    image: "/projects/snakepad.jpg",
    icon: "/projects/icons/snakepad.png",
  },
  {
    id: "math-adventure",
    accent: "#16a34a",
    name: "Math Adventure",
    tagline: "Turning arithmetic into a game kids love.",
    description:
      "Counting, tables, puzzles and problem-solving through vibrant mini-games and level-based progression.",
    category: "product",
    kind: "game",
    role: "Founder · Mobile",
    tools: ["React Native", "Next.js", "TypeScript"],
    links: {
      web: "https://math-adventure-web.vercel.app/",
      playStore: "https://play.google.com/store/apps/details?id=com.mathadvancer",
    },
    image: "/projects/math-adventure.jpg",
    icon: "/projects/icons/math-adventure.png",
  },
  {
    id: "fighter-aura",
    accent: "#ea580c",
    name: "Fighter Aura",
    tagline: "A 2.5D fighting game with a custom 60 FPS engine.",
    description:
      "Five fighters, fourteen moves, combos, blocking and Aura supers, with an arcade ladder across five arenas. Free, offline and ad-free.",
    category: "product",
    kind: "game",
    status: "apk",
    role: "Founder · Game Developer",
    tools: ["React Native", "Skia", "Reanimated", "Next.js"],
    links: {
      web: "https://fighter-aura.vercel.app/",
      apk: "https://fighter-aura.vercel.app/downloads/FighterAura-v1.0.apk",
    },
    image: "/projects/fighter-aura.jpg",
    featured: true,
  },
  {
    id: "ludo-masti",
    accent: "#dc2626",
    name: "Ludo Masti",
    tagline: "Classic Ludo — vs AI or live multiplayer.",
    description:
      "Play against a smart AI or friends in real-time 2–4 player matches, with dice sounds, music and smooth animations. No download needed.",
    category: "product",
    kind: "game",
    role: "Game Developer",
    tools: ["React", "WebSockets", "TypeScript"],
    links: { web: "https://ludo-web-snowy.vercel.app/" },
    image: "/projects/ludo-masti.jpg",
  },
  {
    id: "puzzle-buzz",
    accent: "#7c3aed",
    name: "Puzzle Buzz",
    tagline: "Train your brain. Feed your mind.",
    description:
      "Riddles, logic, number patterns, word scramble, memory and trivia across 10 categories — with timers, power-ups, XP and achievements.",
    category: "product",
    kind: "game",
    role: "Game Developer",
    tools: ["React Native", "Next.js", "TypeScript"],
    links: { web: "https://puzzle-buzz-web.vercel.app/" },
    image: "/projects/puzzle-buzz.jpg",
  },
  {
    id: "fruit-fiesta",
    accent: "#9f1239",
    name: "Fruit Fiesta",
    tagline: "Juicy mini games for sharp minds.",
    description:
      "Six bite-sized games across brain, arcade and word categories, a daily challenge, stars and XP — playable offline and right in the browser.",
    category: "product",
    kind: "game",
    status: "coming-soon",
    role: "Game Developer",
    tools: ["React Native", "Next.js", "TypeScript"],
    links: { web: "https://fruit-fiesta-web.vercel.app/" },
    image: "/projects/fruit-fiesta.jpg",
  },
  {
    id: "cheap-candy",
    accent: "#db2777",
    name: "Cheap Candy",
    tagline: "Match-3 candy puzzle with 100 levels.",
    description:
      "Swipe to match, striped, wrapped and colour-bomb specials, and a boss every tenth level. Offline, no sign-up, no ads.",
    category: "product",
    kind: "game",
    status: "coming-soon",
    role: "Game Developer",
    tools: ["React Native", "Next.js", "TypeScript"],
    links: { web: "https://cheap-candy-game-web.vercel.app/" },
    image: "/projects/cheap-candy.jpg",
  },

  // ───────────── My products — web platforms & tools ─────────────
  {
    id: "hub-form",
    accent: "#14532d",
    name: "HubForm",
    tagline: "Contact-form backend and one inbox for all your sites.",
    description:
      "Point any HTML form at a per-domain endpoint and every submission lands in a single dashboard — no server code needed. Free sign-up and auth included.",
    category: "product",
    kind: "web",
    role: "Founder · Full Stack",
    tools: ["Next.js", "Node.js", "MongoDB", "TypeScript"],
    links: { web: "https://hub-form.vercel.app/" },
    image: "/projects/hub-form.jpg",
    featured: true,
  },
  {
    id: "learn-refill",
    accent: "#4338ca",
    name: "LearnReFill",
    tagline: "Coding courses with 100+ projects and internships.",
    description:
      "A live training platform offering coding classes, internships and certifications in web development, React and Next.js.",
    category: "product",
    kind: "web",
    role: "Full Stack Developer",
    tools: ["Next.js", "Redux", "MongoDB", "TypeScript"],
    links: { web: "https://www.learnrefill.com/" },
    image: "/projects/learnrefill.jpg",
  },
  {
    id: "timeatlas",
    accent: "#0e7490",
    name: "TimeAtlas",
    tagline: "World clock & timezone planner for global teams.",
    description:
      "An interactive time scrubber, group-meeting overlap finder, daylight map and seven custom themes — everything calculated offline.",
    category: "product",
    kind: "web",
    role: "Product Engineer",
    tools: ["React", "TypeScript", "Tailwind CSS"],
    links: { web: "https://timeatlas-web.vercel.app/" },
    image: "/projects/timeatlas.jpg",
  },
  {
    id: "expense",
    accent: "#047857",
    name: "Expense",
    tagline: "Offline-first money tracker with multi-dashboards.",
    description:
      "Track every expense, run separate budget dashboards and analyse spending — with strict on-device privacy, no ads and no trackers.",
    category: "product",
    kind: "web",
    role: "Product Engineer",
    tools: ["React Native", "Next.js", "TypeScript"],
    links: { web: "https://expense-web-orpin.vercel.app/" },
    image: "/projects/expense.jpg",
  },
  {
    id: "math-concepts",
    accent: "#1d4ed8",
    name: "Math Concepts",
    tagline: "Calculators and real-world maths, explained.",
    description:
      "Six free calculators — scientific, percentage, fraction, ratio, unit converter and more — plus concept articles and practice. No sign-up.",
    category: "product",
    kind: "web",
    role: "Product Engineer",
    tools: ["Next.js", "TypeScript", "Tailwind CSS"],
    links: { web: "https://math-concepts-web.vercel.app/" },
    image: "/projects/math-concepts.jpg",
  },
  {
    id: "uniform-b2b",
    accent: "#334155",
    name: "Uniform B2B",
    tagline: "Web, mobile & mentorship studio.",
    description:
      "A studio site for website and mobile app development, SEO and project-based programming tuition.",
    category: "product",
    kind: "web",
    role: "Full Stack Developer",
    tools: ["Next.js", "Tailwind CSS", "TypeScript"],
    links: { web: "https://uniform-b2b-web.vercel.app/" },
    image: "/projects/uniform-b2b.jpg",
  },
  {
    id: "meta-blogger",
    accent: "#0f172a",
    name: "Meta Blogger",
    tagline: "Practical tech tutorials for creators and developers.",
    description:
      "An MDX-powered blog on web development, dev tools, productivity and more — fast, clean and SEO-friendly.",
    category: "product",
    kind: "web",
    role: "Frontend Developer",
    tools: ["Next.js", "MDX", "Tailwind CSS", "TypeScript"],
    links: { web: "https://meta-blogger.vercel.app/" },
    image: "/projects/meta-blogger.jpg",
  },
  {
    id: "image-convertor",
    accent: "#0369a1",
    name: "Image Convertor",
    tagline: "Convert, resize and compress images in the browser.",
    description:
      "Free, sign-up-free tools for JPG, PNG, WebP, ICO and more — plus passport photos and favicon generation.",
    category: "product",
    kind: "web",
    role: "Full Stack Developer",
    tools: ["Next.js", "Tailwind CSS", "TypeScript"],
    links: { web: "https://image-convertor-nine.vercel.app/" },
    image: "/projects/image-convertor.jpg",
  },
  {
    id: "nextgen-coders",
    accent: "#4f46e5",
    name: "NexGen Coders Program",
    tagline: "Bootcamp for web, Android and iOS development.",
    description:
      "Landing site for a coding bootcamp — curriculum, project opportunities and enrolment.",
    category: "product",
    kind: "web",
    role: "Frontend Developer",
    tools: ["React", "JavaScript", "CSS"],
    links: { web: "https://next-gen-coders-program-web.vercel.app/" },
    image: "/projects/nextgen-coders.jpg",
  },
];

export const clientProjects = projects.filter((p) => p.category === "client");
export const productProjects = projects.filter((p) => p.category === "product");

/** Apps currently live on Google Play (own products). */
export const playStoreApps = productProjects.filter((p) => p.links.playStore);

export const liveWebsites = projects.filter((p) => p.links.web);

export const isMobile = (p: Project) =>
  Boolean(p.links.playStore || p.links.appStore);
