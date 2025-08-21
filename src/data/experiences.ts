export interface Experience {
  readonly id: string;
  readonly title: string;
  readonly company: string;
  readonly period: string;
}

export const experiences: Experience[] = [
  {
    id: "teton",
    title: "Software Engineer I",
    company: "Teton Private Ltd.",
    period: "Jan 2022 - Present",
  },
  {
    id: "fiverr",
    title: "FullStack Developer",
    company: "Fiverr (freelance)",
    period: "Jun 2021 - Jan 2022",
  },
  {
    id: "self-employed",
    title: "Self Employed",
    company: "Code and build something in everyday.",
    period: "Jan 2018 - Present",
  },
] as const;
