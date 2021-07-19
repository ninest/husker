export interface GuideFrontmatter {
  title: string;
  lastUpdated: string;
}

export interface Guide {
  frontmatter: GuideFrontmatter;
  code: any;
}
