import Fuse from "fuse.js";
import { contentMap } from "@/content/map";
import { Link, LinkWithCategory } from "@/types/category";
import { SearchableItem } from "@/types/search";
import { dorms } from "@/content/housing";

const searchableItems: SearchableItem[] = [
  ...contentMap
    .map((category) => {
      let items: Link[] = [...category.links];
      if (category.pages) items = [...items, ...category.pages];

      return items.map(
        (link: Link): LinkWithCategory => ({
          ...link,
          categoryTitle: category.title,
        })
      );
    })
    .flat(),
  ...dorms.map((dorm) => ({
    name: dorm.title,
    href: `/housing/${dorm.slug}`,
    description: dorm.title,
    categoryTitle: "Housing",
  })),
];

const fuse = new Fuse(searchableItems, {
  keys: ["name", "href", "description", "categoryTitle"],
  threshold: 0.4,
});

interface FuseSearchResult<T> {
  item: T;
  refIndex: number;
}

export function search(keyword: string): LinkWithCategory[] {
  const results: FuseSearchResult<LinkWithCategory>[] = fuse.search(keyword);
  return results.map((result) => result.item);
}
