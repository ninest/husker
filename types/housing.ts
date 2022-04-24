import { Link } from "./category";

export interface DormType {
  slug: string;
  name: string;
}

export interface DormPricePoint {
  slug: string;
  name: string;
}

export interface Dorm {
  slug: string;
  type: DormType;
  title: string;
  pricesPoints: DormPricePoint[],
  links: Link[];
  pages?: Link[];
}
