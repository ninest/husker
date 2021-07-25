export interface GuideFrontmatter {
  title: string;
  description: string;
  lastUpdated: string;
}

export interface Guide {
  frontmatter: GuideFrontmatter;
  code: any;
}
