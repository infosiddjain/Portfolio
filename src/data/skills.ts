export interface Skill {
  readonly id: string;
  readonly name: string;
  readonly iconSrc: string;
}

export interface SkillGroup {
  readonly title: string;
  readonly skills: readonly Skill[];
}

const dev = (name: string) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${name}/${name}-original.svg`;

export const skillGroups: readonly SkillGroup[] = [
  {
    title: "Mobile",
    skills: [
      { id: "reactnative", name: "React Native", iconSrc: dev("react") },
      { id: "redux", name: "Redux", iconSrc: dev("redux") },
      { id: "typescript", name: "TypeScript", iconSrc: dev("typescript") },
      { id: "android", name: "Android / Play Console", iconSrc: dev("android") },
    ],
  },
  {
    title: "Web",
    skills: [
      { id: "nextjs", name: "Next.js", iconSrc: dev("nextjs") },
      { id: "react", name: "React", iconSrc: dev("react") },
      { id: "tailwind", name: "Tailwind CSS", iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
      { id: "javascript", name: "JavaScript", iconSrc: dev("javascript") },
    ],
  },
  {
    title: "Backend",
    skills: [
      { id: "nodejs", name: "Node.js", iconSrc: dev("nodejs") },
      { id: "express", name: "Express", iconSrc: "https://cdn.simpleicons.org/express/0b1324" },
      { id: "mongodb", name: "MongoDB", iconSrc: dev("mongodb") },
      { id: "restapi", name: "REST APIs", iconSrc: "https://cdn.simpleicons.org/swagger/85EA2D" },
    ],
  },
  {
    title: "Design & Tools",
    skills: [
      { id: "figma", name: "Figma", iconSrc: dev("figma") },
      { id: "github", name: "GitHub", iconSrc: "https://cdn.simpleicons.org/github/0b1324" },
      { id: "gitlab", name: "GitLab", iconSrc: dev("gitlab") },
      { id: "jira", name: "Jira", iconSrc: dev("jira") },
    ],
  },
];
