export interface Skill {
  readonly id: string;
  readonly name: string;
  readonly iconSrc: string;
}

export const skills: Skill[] = [
  {
    id: "react",
    name: "React",
    iconSrc: "https://c.animaapp.com/mek409lvoDLlSz/assets/react.512a3a7e.svg",
  },
  {
    id: "reactnative",
    name: "React Native",
    iconSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    id: "nextjs",
    name: "Next.js",
    iconSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    id: "redux",
    name: "Redux",
    iconSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
  },
  {
    id: "restapi",
    name: "REST API",
    iconSrc: "https://cdn.simpleicons.org/swagger/85EA2D",
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    iconSrc:
      "https://c.animaapp.com/mek409lvoDLlSz/assets/tailwind.c0bbaf6f.svg",
  },
  {
    id: "typescript",
    name: "TypeScript",
    iconSrc:
      "https://c.animaapp.com/mek409lvoDLlSz/assets/typescript.97711300.svg",
  },
  {
    id: "javascript",
    name: "JavaScript",
    iconSrc:
      "https://c.animaapp.com/mek409lvoDLlSz/assets/javascript.b472cbc1.svg",
  },
  {
    id: "figma",
    name: "Figma",
    iconSrc: "https://c.animaapp.com/mek409lvoDLlSz/assets/figma.00471f51.svg",
  },
  {
    id: "nodejs",
    name: "Node.js",
    iconSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    id: "express",
    name: "Express",
    iconSrc: "https://cdn.simpleicons.org/express/ffffff",
  },
  {
    id: "mongodb",
    name: "MongoDB",
    iconSrc:
      "https://c.animaapp.com/mek409lvoDLlSz/assets/mongoDB.d8d2b67f.svg",
  },
  {
    id: "github",
    name: "GitHub",
    iconSrc: "https://cdn.simpleicons.org/github/ffffff",
  },
  {
    id: "gitlab",
    name: "GitLab",
    iconSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg",
  },
  {
    id: "jira",
    name: "Jira",
    iconSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg",
  },
  {
    id: "npm",
    name: "NPM",
    iconSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
  },
  {
    id: "html5",
    name: "HTML5",
    iconSrc: "https://c.animaapp.com/mek409lvoDLlSz/assets/html.ed6aaa50.svg",
  },
  {
    id: "css",
    name: "CSS",
    iconSrc: "https://c.animaapp.com/mek409lvoDLlSz/assets/css.e5e99f36.svg",
  },
] as const;
