export interface GuideFrontmatter {
  title: string;
  description: string;
  lastUpdated: string;
  toc: boolean;
  related?: { title: string; href: string }[];
}

export interface Guide {
  frontmatter: GuideFrontmatter;
  code: any;
}

export type Breadcrumb = {
  title: string;
  href: string;
}[];
