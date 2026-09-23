export type ProjectCategory = "client" | "product";

export interface ProjectLinks {
  readonly web?: string;
  readonly playStore?: string;
  readonly appStore?: string;
}

export interface Project {
  readonly id: string;
  readonly name: string;
  /** One-line hook shown under the title. */
  readonly tagline: string;
  readonly description: string;
  readonly category: ProjectCategory;
  /** Client / brand name for company work. */
  readonly client?: string;
  readonly role: string;
  readonly tools: readonly string[];
  readonly links: ProjectLinks;
  /** Homepage screenshot in /public/projects. */
  readonly image?: string;
  /** App icon in /public/projects/icons. */
  readonly icon?: string;
  /** Accent used for glows when a project has no screenshot. */
  readonly accent?: string;
  readonly featured?: boolean;
}

export const projects: readonly Project[] = [
  // ───────────── Client work ─────────────
  {
    id: "gamerun",
    name: "GameRun",
    client: "GameRun Inc.",
    tagline: "AI that turns game film into player intelligence.",
    description:
      "Athletes upload game video and get a pro-level performance report — what to train and how to fix it. Trusted by USA Baseball scouts and 40+ organisations including Duke and Stanford coaches.",
    category: "client",
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
    client: "Sahej",
    tagline: "A holistic companion for managing Type 2 diabetes.",
    description:
      "Evidence-backed care that blends traditional medicine, psychological insight, lifestyle interventions and advanced monitoring to help people take control of their health.",
    category: "client",
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
    id: "wow-momo",
    name: "Wow! Momo",
    client: "Wow! Momo Foods",
    tagline: "Web presence for one of India's fastest-growing QSR chains.",
    description:
      "Brand website covering menus, campaigns, franchise enquiries, bulk orders and HORECA services for a national quick-service restaurant brand.",
    category: "client",
    role: "Frontend Developer",
    tools: ["React", "TypeScript", "Responsive UI"],
    links: { web: "https://www.wowmomo.com/" },
    image: "/projects/wowmomo.jpg",
  },
  {
    id: "krishna-transport",
    name: "Krishna Transport",
    client: "Krishna Transport Packers & Movers",
    tagline: "Lead-generating site for a Noida relocation company.",
    description:
      "Household and commercial relocation across Noida and Delhi NCR — services, gallery and instant WhatsApp enquiries, built to rank locally.",
    category: "client",
    role: "Frontend Developer",
    tools: ["Next.js", "Tailwind CSS", "TypeScript", "HubSpot"],
    links: { web: "https://www.krishnatransportpackersandmovers.com/" },
    image: "/projects/krishna-transport.jpg",
  },
  {
    id: "divansh-transport",
    name: "Divansh Transport",
    client: "Divansh Transport Service",
    tagline: "Logistics, import-export and moving — across India.",
    description:
      "A bold, cinematic website for a logistics company offering transport, delivery, import-export and packers & movers services nationwide.",
    category: "client",
    role: "Frontend Developer",
    tools: ["Next.js", "Tailwind CSS", "TypeScript"],
    links: { web: "https://www.divanshtransportservice.in/" },
    image: "/projects/divansh-transport.jpg",
  },

  // ───────────── Products — web + store apps ─────────────
  {
    id: "dil-ki-bhakti",
    name: "Dil Ki Bhakti",
    tagline: "Daily aarti, bhajans, mantras and quotes — in Hindi.",
    description:
      "A devotional platform with a deity for every day of the week, a Hindi blog and a companion Android app for a calm, distraction-free experience.",
    category: "product",
    role: "Full Stack Developer",
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
    name: "HotJob",
    tagline: "2,400+ remote jobs from top companies, in one feed.",
    description:
      "Aggregates remote openings from multiple job boards with search, saved jobs and daily updates — on the web and Android.",
    category: "product",
    role: "App Creator",
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
    name: "CPUKit",
    tagline: "Know your device, inside out.",
    description:
      "A fast, private Android app showing CPU, GPU, battery, memory, display, sensors, network and camera details — with a live web lab.",
    category: "product",
    role: "App Creator",
    tools: ["React Native", "Next.js", "TypeScript"],
    links: {
      web: "https://cpu-kit-web.vercel.app/",
      playStore: "https://play.google.com/store/apps/details?id=com.cpukit",
    },
    image: "/projects/cpukit.jpg",
    icon: "/projects/icons/cpukit.png",
  },
  {
    id: "qr-vault",
    name: "QR Vault",
    tagline: "Create, organise and password-protect your QR codes.",
    description:
      "Generate QR codes for contacts, Wi-Fi, notes and more, and lock the private ones behind a password. Everything stays on-device.",
    category: "product",
    role: "App Creator",
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
    name: "Silent Reminder",
    tagline: "Quiet reminders that respect your focus.",
    description:
      "A calm, distraction-free reminder app for events, medicine, trips, water, work and more.",
    category: "product",
    role: "App Creator",
    tools: ["React Native", "Next.js", "TypeScript"],
    links: {
      web: "https://silent-reminder-web.vercel.app/",
      playStore: "https://play.google.com/store/apps/details?id=com.silentreminder",
    },
    image: "/projects/silent-reminder.jpg",
    icon: "/projects/icons/silent-reminder.png",
  },
  {
    id: "math-adventure",
    name: "Math Adventure",
    tagline: "Turning arithmetic into a game kids love.",
    description:
      "Counting, tables, puzzles and problem-solving through vibrant mini-games and level-based progression.",
    category: "product",
    role: "App Creator",
    tools: ["React Native", "Next.js", "TypeScript"],
    links: {
      web: "https://math-adventure-web.vercel.app/",
      playStore: "https://play.google.com/store/apps/details?id=com.mathadvancer",
    },
    image: "/projects/math-adventure.jpg",
    icon: "/projects/icons/math-adventure.png",
  },
  {
    id: "vibelines",
    name: "VibeLines",
    tagline: "Design and share beautiful line cards.",
    description:
      "Romantic lines, flirty texts and love messages in English, Hindi and Bhojpuri — styled with custom backgrounds and fonts, shared instantly.",
    category: "product",
    role: "App Creator",
    tools: ["React Native", "Next.js", "TypeScript"],
    links: {
      web: "https://vibe-lines-web.vercel.app/",
      playStore: "https://play.google.com/store/apps/details?id=com.pickupline",
    },
    image: "/projects/vibelines.jpg",
    icon: "/projects/icons/vibelines.png",
  },

  // ───────────── Products — more launches ─────────────
  {
    id: "timeatlas",
    name: "TimeAtlas",
    tagline: "World clock & timezone planner for global teams.",
    description:
      "An interactive time scrubber, group-meeting overlap finder, daylight map and seven custom themes — everything calculated offline.",
    category: "product",
    role: "Product Engineer",
    tools: ["React", "TypeScript", "Tailwind CSS"],
    links: { web: "https://timeatlas-web.vercel.app/" },
    image: "/projects/timeatlas.jpg",
    featured: true,
  },
  {
    id: "expense",
    name: "Expense",
    tagline: "Offline-first money tracker with multi-dashboards.",
    description:
      "Track every expense, run separate budget dashboards and analyse spending — with strict on-device privacy, no ads and no trackers.",
    category: "product",
    role: "Product Engineer",
    tools: ["React Native", "Next.js", "TypeScript"],
    links: { web: "https://expense-web-orpin.vercel.app/" },
    image: "/projects/expense.jpg",
  },
  {
    id: "ludo-masti",
    name: "Ludo Masti",
    tagline: "Classic Ludo, reimagined — vs AI or live multiplayer.",
    description:
      "Play against a smart AI or friends in real-time 2–4 player matches, with dice sounds, music and smooth animations. No download needed.",
    category: "product",
    role: "Game Developer",
    tools: ["React", "WebSockets", "TypeScript"],
    links: { web: "https://ludo-web-snowy.vercel.app/" },
    image: "/projects/ludo-masti.jpg",
  },
  {
    id: "english-offline",
    name: "English Offline",
    tagline: "10,000+ grammar & vocabulary lessons, fully offline.",
    description:
      "Grammar, daily spoken phrases and high-frequency vocabulary with 100% local privacy — zero ads, zero tracking.",
    category: "product",
    role: "Product Engineer",
    tools: ["React Native", "Next.js", "TypeScript"],
    links: { web: "https://english-offline-web.vercel.app/" },
    image: "/projects/english-offline.jpg",
  },
  {
    id: "calculator-zip",
    name: "Calculator Zip",
    tagline: "Every everyday calculator in one clean app.",
    description:
      "Trip planning, expenses, GST, bill estimates and loan interest — a multi-utility calculator with a simple, intuitive interface.",
    category: "product",
    role: "App Creator",
    tools: ["React Native", "TypeScript"],
    links: {
      playStore: "https://play.google.com/store/apps/details?id=com.calculatorzip",
    },
    icon: "/projects/icons/calculator-zip.png",
    accent: "#2563eb",
  },
  {
    id: "learn-refill",
    name: "LearnReFill",
    tagline: "Coding courses with 100+ projects and internships.",
    description:
      "A live training platform offering coding classes, internships and certifications in web development, React and Next.js.",
    category: "product",
    role: "Full Stack Developer",
    tools: ["Next.js", "Redux", "MongoDB", "TypeScript"],
    links: { web: "https://www.learnrefill.com/" },
    image: "/projects/learnrefill.jpg",
  },
  {
    id: "uniform-b2b",
    name: "Uniform B2B",
    tagline: "Web, mobile & mentorship studio.",
    description:
      "A studio site for website and mobile app development, SEO and project-based programming tuition.",
    category: "product",
    role: "Full Stack Developer",
    tools: ["Next.js", "Tailwind CSS", "TypeScript"],
    links: { web: "https://uniform-b2b-web.vercel.app/" },
    image: "/projects/uniform-b2b.jpg",
  },
  {
    id: "image-convertor",
    name: "Image Convertor",
    tagline: "Convert, resize and compress images in the browser.",
    description:
      "Free, sign-up-free tools for JPG, PNG, WebP, ICO and more — plus passport photos and favicon generation.",
    category: "product",
    role: "Full Stack Developer",
    tools: ["Next.js", "Tailwind CSS", "TypeScript"],
    links: { web: "https://image-convertor-nine.vercel.app/" },
    image: "/projects/image-convertor.jpg",
  },
  {
    id: "meta-blogger",
    name: "Meta Blogger",
    tagline: "Practical tech tutorials for creators and developers.",
    description:
      "An MDX-powered blog on web development, dev tools, productivity and more — fast, clean and SEO-friendly.",
    category: "product",
    role: "Frontend Developer",
    tools: ["Next.js", "MDX", "Tailwind CSS", "TypeScript"],
    links: { web: "https://meta-blogger.vercel.app/" },
    image: "/projects/meta-blogger.jpg",
  },
  {
    id: "nextgen-coders",
    name: "NexGen Coders Program",
    tagline: "Bootcamp for web, Android and iOS development.",
    description:
      "Landing site for a comprehensive coding bootcamp — curriculum, project opportunities and enrolment.",
    category: "product",
    role: "Frontend Developer",
    tools: ["React", "JavaScript", "CSS"],
    links: { web: "https://next-gen-coders-program-web.vercel.app/" },
    image: "/projects/nextgen-coders.jpg",
  },
];

export const isMobile = (p: Project) =>
  Boolean(p.links.playStore || p.links.appStore);
