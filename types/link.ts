export interface Category {
  title: string;
  slug: string;
  description?: string;
  links?: {
    title: string;
    description?: string;
    href: string;
  }[];
}
