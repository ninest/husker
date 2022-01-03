import { Link } from "./category";

export interface DormType {
  slug: string;
  name: string;
}

export interface Dorm {
  type: DormType;
  slug: string;
  title: string;
  links: Link[];
  pages?: Link[];
}
