import Fuse from "fuse.js";
import { contentMap } from "@/content/map";
import { Link, LinkWithCategory } from "@/types/category";

const searchableItems: any[] = contentMap
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
  .flat();

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
