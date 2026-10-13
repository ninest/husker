import categories from "@/content/categories.json";

export type Category = {
  id: string;
  title: string;
  slug: string;
};

const toCategory = ({ id, title, slug }: (typeof categories)[number]): Category => ({ id, title, slug });

/** Categories shown on the links page, in their links order. */
export async function getLinkCategories() {
  return categories
    .filter((category) => category.isLinksCategory)
    .sort((a, b) => (a.linksOrder ?? Infinity) - (b.linksOrder ?? Infinity))
    .map(toCategory);
}

/** All categories, in wiki order (content/categories.json is kept sorted). */
export async function getWikiCategories() {
  return categories.map(toCategory);
}
