import { IconId } from "@/types/icon";

export interface Category {
  slug: string;
  title: string;
  links: Link[];
}

export interface Link {
  name: string;
  href: string;
  icon?: IconId;
}
