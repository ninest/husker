import { ValidateError } from "@markdoc/markdoc";
import { BreadCrumbJsonLdProps, FAQPageJsonLdProps } from "next-seo";

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

  /* JSON LD data for SEO */
  seo?: {
    faq: FAQPageJsonLdProps["mainEntity"];
  };
}

export interface MarkdocPage {
  frontmatter: Frontmatter;
  content: any;
  errors: ValidateError[];
}
