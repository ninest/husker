export interface GuideFrontmatter {
  title: string;
  description: string;
  lastUpdated: string;
  toc: boolean;
}

export interface Guide {
  frontmatter: GuideFrontmatter;
  code: any;
}
