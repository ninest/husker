export interface Category {
  name: string;
  slug: string;
  sheetId: string;
  description?: string;
  resources?: Resource[];
  moreInfoLink?: Resource;
}
export interface Resource {
  name: string;
  href: string;
  description?: string;
  notes?: string;
}

export interface Section {
  title: string;
  slug: string;
  bricks?: Link[];
  list?: Link[];
  moreInfoLink?: Link;
  info?: string;
}

export interface Link {
  name: string;
  href: string;
  icon?: string;
}
