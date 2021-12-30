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
}
