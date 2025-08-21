export interface Skill {
  readonly id: string;
  readonly name: string;
  readonly iconSrc: string;
}

export const skills: Skill[] = [
  {
    id: "html",
    name: "HTML",
    iconSrc: "https://c.animaapp.com/mek409lvoDLlSz/assets/html.ed6aaa50.svg",
  },
  {
    id: "css",
    name: "CSS",
    iconSrc: "https://c.animaapp.com/mek409lvoDLlSz/assets/css.e5e99f36.svg",
  },
  {
    id: "javascript",
    name: "Javascript",
    iconSrc:
      "https://c.animaapp.com/mek409lvoDLlSz/assets/javascript.b472cbc1.svg",
  },
  {
    id: "typescript",
    name: "Typescript",
    iconSrc:
      "https://c.animaapp.com/mek409lvoDLlSz/assets/typescript.97711300.svg",
  },
  {
    id: "react",
    name: "React",
    iconSrc: "https://c.animaapp.com/mek409lvoDLlSz/assets/react.512a3a7e.svg",
  },
  {
    id: "nextjs",
    name: "Next JS",
    iconSrc: "https://c.animaapp.com/mek409lvoDLlSz/assets/nextJS.99e26750.svg",
  },
  {
    id: "tailwind",
    name: "Tailwind",
    iconSrc:
      "https://c.animaapp.com/mek409lvoDLlSz/assets/tailwind.c0bbaf6f.svg",
  },
  {
    id: "mongodb",
    name: "MongoDB",
    iconSrc:
      "https://c.animaapp.com/mek409lvoDLlSz/assets/mongoDB.d8d2b67f.svg",
  },
  {
    id: "mysql",
    name: "MySQL",
    iconSrc: "https://c.animaapp.com/mek409lvoDLlSz/assets/mysql.2ddb80d9.svg",
  },
  {
    id: "postgresql",
    name: "PostgreSQL",
    iconSrc:
      "https://c.animaapp.com/mek409lvoDLlSz/assets/postgresql.1b536c2f.svg",
  },
  {
    id: "git",
    name: "Git",
    iconSrc: "https://c.animaapp.com/mek409lvoDLlSz/assets/git.21d80414.svg",
  },
  {
    id: "aws",
    name: "AWS",
    iconSrc: "https://c.animaapp.com/mek409lvoDLlSz/assets/aws.8dff8f22.svg",
  },
  {
    id: "bootstrap",
    name: "Bootstrap",
    iconSrc:
      "https://c.animaapp.com/mek409lvoDLlSz/assets/bootstrap.9e6ddba8.svg",
  },
  {
    id: "docker",
    name: "Docker",
    iconSrc: "https://c.animaapp.com/mek409lvoDLlSz/assets/docker.23787008.svg",
  },
  {
    id: "go",
    name: "Go",
    iconSrc: "https://c.animaapp.com/mek409lvoDLlSz/assets/go.c93ed780.svg",
  },
  {
    id: "figma",
    name: "Figma",
    iconSrc: "https://c.animaapp.com/mek409lvoDLlSz/assets/figma.00471f51.svg",
  },
  {
    id: "firebase",
    name: "Firebase",
    iconSrc:
      "https://c.animaapp.com/mek409lvoDLlSz/assets/firebase.20c6dcf8.svg",
  },
  {
    id: "materialui",
    name: "MaterialUI",
    iconSrc:
      "https://c.animaapp.com/mek409lvoDLlSz/assets/materialui.2900e517.svg",
  },
  {
    id: "nginx",
    name: "Nginx",
    iconSrc: "https://c.animaapp.com/mek409lvoDLlSz/assets/nginx.dd577355.svg",
  },
  {
    id: "strapi",
    name: "Strapi",
    iconSrc: "https://c.animaapp.com/mek409lvoDLlSz/assets/strapi.e4741f5a.svg",
  },
] as const;
