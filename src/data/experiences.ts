export interface Experience {
  readonly id: string;
  readonly title: string;
  readonly company: string;
  readonly period: string;
  readonly location: string;
  readonly description: string[];
}

export const experiences: Experience[] = [
  {
    id: "Trioford Technosys Pvt. Ltd",
    title: "Software Engineer",
    company: "Trioford Technosys Pvt. Ltd.",
    period: "March 2024 - Present",
    location: "Full-time | Remote",
    description: [
      "Leading full-stack development using React.js, React Native, Next.js, Node.js, Express.js, and MongoDB.",
      "Designed and developed the Learnz landing page, travel & transport website, student portal, and admin dashboard.",
      "Managed Figma-based UI/UX for all digital products ensuring responsive and accessible design.",
      "Oversaw the complete technical architecture and product roadmap aligning with business goals.",
    ],
  },
  {
    id: "CompletumHealth Pvt Ltd.",
    title: "Frontend Developer",
    company: "CompletumHealth Pvt Ltd.",
    period: "Aug 2023 - Feb 2024",
    location: "Full-time | Remote",
    description: [
      "Developed Sahej App, a health management platform for diabetic patients using React Native",
      "Created full UI designs in Figma for mobile and web.",
      "Implemented user onboarding, health tracking dashboards, and notification system",
    ],
  },
  {
    id: "Dank Pvt Ltd.",
    title: "Frontend Developer",
    company: "Dank Pvt Ltd.",
    period: "Feb 2023 - Aug 2023",
    location: "Full-time | Remote",
    description: [
      "Built a LinkedIn-like social platform (web + mobile) with profiles, feeds, messaging, and search features",
      "Developed clean, scalable architecture for both mobile and web using React Native & React.js.",
      "Focused on UI/UX consistency and internationalization.",
    ],
  },
  {
    id: "Aara Technology Pvt Ltd.",
    title: "Frontend Developer",
    company: "Aara Technology Pvt Ltd.",
    period: "Aug 2022 - Feb 2023",
    location: "Full-time | Remote",
    description: [
      "Developed an e-commerce website, admin portal, and mobile application (My Pocket App) using React and React Native.",
      "Worked on Reward Dragon loyalty program platform using React.js.",
      "Implemented dashboards, payment flows, product listings, and user accounts.",
    ],
  },
  {
    id: "Qwerty Code Pvt Ltd.",
    title: "React Native Developer",
    company: "Qwerty Code Pvt Ltd.",
    period: "May 2022 - Jul 2022",
    location: "Full-time | On Site",
    description: [
      "Built a crypto trading application (BAAP Network) from scratch in React Native.",
      "Integrated real-time crypto APIs, charts, and wallet features",
      "Focused on performance, security, and onboarding flows.",
    ],
  },
  {
    id: "Wonder Pillars Technology",
    title: "React Developer",
    company: "Wonder Pillars Technology",
    period: "Sep 2021 - Apr 2022",
    location: "Full-time | Remote",
    description: [
      "Contributed to React.js development for Vantana Taxi App, Stock Market Dashboard, and Fexicel Platform.",
      "Designed and integrated interactive UI components with API integration",
      "Optimized frontend performance and cross-browser compatibility.",
    ],
  },
  {
    id: "Wintej Pvt Ltd.",
    title: "Frontend Developer",
    company: "Wintej Pvt Ltd.",
    period: "Aug 2023 - Oct 2023",
    location: "Freelance | Remote",
    description: [
      "Built a fantasy gaming platform (similar to Dream11) and games like Ludo, Tambola, and Snake using React Native and React.js.",
      "Developed both web and mobile versions with live match tracking and betting logic.",
      "Focused on real-time user data flow, wallet integration, and secure gameplay",
    ],
  },
  {
    id: "Binovative Pvt Ltd.",
    title: "Frontend Developer",
    company: "Binovative Pvt Ltd.",
    period: "Aug 2023 - Nov 2023",
    location: "Freelance | Remote",
    description: [
      "Developed Wow Mom e-commerce web and mobile app using React.js and React Native.",
      "Integrated payment systems, product listings, cart, and order management.",
      "Ensured cross-platform performance, security, and user-friendly interfaces.",
    ],
  },
] as const;
