export interface Blog {
  readonly id: string;
  readonly title: string;
  readonly excerpt: string;
  readonly timeAgo: string;
  readonly readTime: string;
  readonly likes: number;
  readonly comments?: number;
  readonly imageSrc: string;
  readonly href: string;
}

export const blogs: Blog[] = [
  {
    id: "popover-react",
    title: "How to create a Popover using React and Tailwind CSS",
    excerpt:
      "Popover is a common UI element in web applications, providing a way to display additional information...",
    timeAgo: "1 years ago",
    readTime: "2 Min Read",
    likes: 22,
    comments: 2,
    imageSrc: "https://c.animaapp.com/mek409lvoDLlSz/assets/52.webp",
    href: "https://dev.to/said7388/how-to-create-a-popover-using-tailwind-css-13kj",
  },
  {
    id: "developer-habits",
    title: "Highly Effective 7 Habits for Developers",
    excerpt:
      "As a software developer, success doesn't just come from luck or chance. It is the result of years of...",
    timeAgo: "2 years ago",
    readTime: "3 Min Read",
    likes: 18,
    comments: 5,
    imageSrc: "https://c.animaapp.com/mek409lvoDLlSz/assets/50.webp",
    href: "https://dev.to/said7388/highly-effective-7-habits-for-developers-50c2",
  },
  {
    id: "react-interview",
    title: "Top 10 React js interview questions.",
    excerpt:
      "As a React developer, it is important to have a solid understanding of the framework's key concepts...",
    timeAgo: "2 years ago",
    readTime: "5 Min Read",
    likes: 60,
    comments: 1,
    imageSrc: "https://c.animaapp.com/mek409lvoDLlSz/assets/54.webp",
    href: "https://dev.to/said7388/top-10-react-js-interview-questions-48dc",
  },
  {
    id: "async-javascript",
    title: "Asynchronous programming in Javascript",
    excerpt:
      "JavaScript, being a single-threaded language, can only process one task at a time. This can result in...",
    timeAgo: "2 years ago",
    readTime: "3 Min Read",
    likes: 8,
    imageSrc: "https://c.animaapp.com/mek409lvoDLlSz/assets/51.webp",
    href: "https://dev.to/said7388/asynchronous-programming-in-javascript-4mep",
  },
  {
    id: "github-deployment",
    title: "GitHub and EC2 manual deployment with Deploy keys",
    excerpt:
      "For those looking to quickly deploy a project, whether it's a prototype or a solo endeavor, manual...",
    timeAgo: "1 years ago",
    readTime: "2 Min Read",
    likes: 19,
    comments: 2,
    imageSrc: "https://c.animaapp.com/mek409lvoDLlSz/assets/55.webp",
    href: "https://dev.to/said7388/github-and-ec2-manual-deployment-with-deploy-keys-397d",
  },
  {
    id: "javascript-scope",
    title: "Scop in Javascript.",
    excerpt:
      "JavaScript, renowned for its versatility, stands as a pivotal language in the realm of web...",
    timeAgo: "1 years ago",
    readTime: "2 Min Read",
    likes: 6,
    imageSrc: "https://c.animaapp.com/mek409lvoDLlSz/assets/53.webp",
    href: "https://dev.to/said7388/scop-in-javascript-1fjc",
  },
] as const;
