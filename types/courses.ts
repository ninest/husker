/* 
!! KEEP IN SYNC WITH !!
https://github.com/ninest/nu-course/blob/main/banner/types.ts
 */

export const campuses = ["nu", "cps", "law"] as const;
export type Campus = typeof campuses[number];

export interface Term {
  code: string;
  description: string;
}

export interface Subject {
  code: string;
  description: string;
}

export interface Course {
  // No term for courses. Terms are only required for sections
  subject: string;
  number: string;
  scheduleType: string;
  title: string;
  credits: number;
  nuPath: NUPath[];

  description?: string;

  // This can change during the semester if a section is added
  sections: {
    term: string;
    crn: string; //description: string
  }[];
}

export const nuPath = [
  "ND",
  "EI",
  "IC",
  "FQ",
  "SI",
  "AD",
  "DD",
  "ER",
  "WF",
  "WD",
  "WI",
  "EX",
  "CE",
] as const;
export type NUPath = typeof nuPath[number];
export const nuPathMap: Record<NUPath, string> = {
  ND: "Natural/Designed World",
  EI: "Creative Express/Innov",
  IC: "Interpreting Culture",
  FQ: "Formal/Quant Reasoning",
  SI: "Societies/Institutions",
  AD: "Analyzing/Using Data",
  DD: "Difference/Diversity",
  ER: "Ethical Reasoning",
  WF: "1st Yr Writing",
  WD: "Adv Writ Dscpl ",
  WI: "Writing Intensive",
  EX: "Integration Experience",
  CE: "Capstone Experience",
};
