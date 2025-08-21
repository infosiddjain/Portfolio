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
    institution: "Chaudhary Charan Singh University, Meerut",
    period: "2017 - 2020",
  },
  {
    id: "12th",
    degree: "Inter Pass",
    institution: "Tagore Public School Hapur",
    period: "2014 - 2015",
  },
  {
    id: "high",
    degree: "High School Pass",
    institution: "Tagore Shiksha Sadan Inter College, Hapur",
    period: "2012 - 2013",
  },
] as const;
