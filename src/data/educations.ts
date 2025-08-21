export interface Education {
  readonly id: string;
  readonly degree: string;
  readonly institution: string;
  readonly period: string;
}

export const educations: Education[] = [
  {
    id: "bachelor",
    degree: "Bachelor Degree",
    institution: "National University of Bangladesh",
    period: "2020 - Present",
  },
  {
    id: "hsc",
    degree: "Higher Secondary Certificate",
    institution: "Noakhali Islamia Kamil Madrasah",
    period: "2018 - 2020",
  },
  {
    id: "ssc",
    degree: "Secondary School Certificate",
    institution: "Baitus Saif Islamia Madrasah",
    period: "2008 - 2018",
  },
] as const;
