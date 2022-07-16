import { ValidateError } from "@markdoc/markdoc";

export interface Page {
  slug: string;
  frontmatter: Frontmatter;
  code: any;
}
export type IncompletePage = Omit<Page, "frontmatter" | "code">;

export interface Frontmatter {
  slug: string;
  title: string;
  description: string;
  updatedAt: string;

  /* Some pages, like housing pages, are *special* */
  pageType?: "dorm" | "other";
}

export interface MarkdocPage {
  frontmatter: Frontmatter;
  content: any;
  errors: ValidateError[];
}
