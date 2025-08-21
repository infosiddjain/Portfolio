export interface Blog {
  readonly id: string;
  readonly title: string;
  readonly excerpt: string;
  readonly timeAgo: string;
  readonly readTime: string;
  readonly likes: number;
  readonly comments?: number;
  readonly href?: string;
  readonly imageSrc?: string;
}

export const blogs: Blog[] = [
  {
    id: "my-learning-journey",
    title: "My Learning Journey in Tech",
    excerpt:
      "From starting with basic HTML/CSS to building full-stack projects, here’s how my coding journey evolved.",
    timeAgo: "2 weeks ago",
    readTime: "6 Min Read",
    likes: 30,
    comments: 5,

    imageSrc: `https://picsum.photos/600/400?random=${Math.floor(
      Math.random() * 1000
    )}`,
  },
  {
    id: "life-as-developer",
    title: "Life as a Developer",
    excerpt:
      "Balancing deadlines, debugging late-night errors, and the joy of solving problems—this is what my daily routine looks like.",
    timeAgo: "1 month ago",
    readTime: "4 Min Read",
    likes: 22,

    imageSrc: `https://picsum.photos/600/400?random=${Math.floor(
      Math.random() * 1000
    )}`,
  },
  {
    id: "favorite-tools",
    title: "My Favorite Tools & Frameworks",
    excerpt:
      "React, Next.js, MongoDB, and TailwindCSS are my go-to stack. Here's why I love using them in my projects.",
    timeAgo: "3 weeks ago",
    readTime: "5 Min Read",
    likes: 18,

    imageSrc: `https://picsum.photos/600/400?random=${Math.floor(
      Math.random() * 1000
    )}`,
  },
  {
    id: "open-source",
    title: "Why I Contribute to Open Source",
    excerpt:
      "Open-source projects help me learn, collaborate, and give back to the developer community.",
    timeAgo: "2 months ago",
    readTime: "5 Min Read",
    likes: 15,

    imageSrc: `https://picsum.photos/600/400?random=${Math.floor(
      Math.random() * 1000
    )}`,
  },
  {
    id: "beyond-coding",
    title: "Beyond Coding: My Other Interests",
    excerpt:
      "Apart from coding, I enjoy reading, traveling, and exploring new cultures that help me stay creative.",
    timeAgo: "1 month ago",
    readTime: "3 Min Read",
    likes: 20,

    imageSrc: `https://picsum.photos/600/400?random=${Math.floor(
      Math.random() * 1000
    )}`,
  },
  {
    id: "future-goals",
    title: "My Future Goals",
    excerpt:
      "I aim to master advanced full-stack development, contribute more to open-source, and build products that make an impact.",
    timeAgo: "1 week ago",
    readTime: "4 Min Read",
    likes: 28,
    comments: 2,

    imageSrc: `https://picsum.photos/600/400?random=${Math.floor(
      Math.random() * 1000
    )}`,
  },
  {
    id: "expense-tracker-app",
    title: "Expense Tracker App",
    excerpt:
      "Keep track of your daily expenses with this intuitive React-based tracker.",
    timeAgo: "6 months ago",
    readTime: "4 Min Read",
    likes: 12,
    comments: 3,
    href: "https://github.com/infosiddjain/the-expense-tracker-app",
  },
  {
    id: "portfolio",
    title: "Personal Portfolio Website",
    excerpt:
      "A sleek, responsive portfolio showcasing projects and skills built with React.",
    timeAgo: "8 months ago",
    readTime: "3 Min Read",
    likes: 8,
    href: "https://github.com/infosiddjain/Portfolio",
  },
  {
    id: "text-to-speech",
    title: "Text-to-Speech App",
    excerpt:
      "Convert written text into voice using this TypeScript-powered TTS app.",
    timeAgo: "4 months ago",
    readTime: "5 Min Read",
    likes: 15,
    comments: 2,
    href: "https://github.com/infosiddjain/text-to-speech",
  },
  {
    id: "dicegame-web",
    title: "Dice Game Web",
    excerpt: "Try your luck with this fun and simple browser-based dice game.",
    timeAgo: "1 year ago",
    readTime: "2 Min Read",
    likes: 5,
    href: "https://github.com/infosiddjain/dicegame-web",
  },
  {
    id: "beans-app",
    title: "Beans App (APK)",
    excerpt:
      "A downloadable APK project built with TypeScript—beans-themed fun!",
    timeAgo: "5 months ago",
    readTime: "3 Min Read",
    likes: 10,
    href: "https://github.com/infosiddjain/beans-app",
  },
] as const;
