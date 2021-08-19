export interface GuideFrontmatter {
  title: string;
  description: string;
  lastUpdated: string;
  toc: boolean;
  inSection?: { title: string; href: string }[];
}

export interface Guide {
  frontmatter: GuideFrontmatter;
  code: any;
}

export type Breadcrumb = {
  title: string;
  href: string;
}[];
