import Fuse from "fuse.js";
import { contentMap } from "@/content/map";
import { Link, LinkWithCategory } from "@/types/category";
import { SearchableItem } from "@/types/search";
import { dorms } from "@/content/housing";
import { cleanCourse, isCourse } from "@/utils/course";

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
    description: `${dorm.type.name} housing`,
  })),

  ...contentMap.map((cat) => ({
    name: cat.title,
    href: `/${cat.slug}`,
  })),
];

const fuse = new Fuse(searchableItems, {
  keys: [
    // More weightage for name than description
    { name: "name", weight: 2 },
    "href",
    "description",
    "categoryTitle",
  ],
  threshold: 0.4,
});

interface FuseSearchResult<T> {
  item: T;
  refIndex: number;
}

export function search(keyword: string): LinkWithCategory[] {
  const results: FuseSearchResult<LinkWithCategory>[] = fuse.search(keyword);

  const searchResults = results.map((result) => result.item);

  /* Check if there are numbers to determine if it's a course */
  if (isCourse(keyword)) {
    const { code, number } = cleanCourse(keyword);
    const courseResults: LinkWithCategory[] = [
      {
        categoryTitle: "Course",
        name: `SearchNEU: ${code} ${number}`,
        description: `${code} ${number} on SearchNEU`,
        href: `https://searchneu.com/NEU/202230/search/${code}%20${number}`,
        icon: "search",
      },
      {
        categoryTitle: "Course",
        name: `Reddit: ${code} ${number}`,
        description: `Search ${code} ${number} on r/NEU`,
        href: `https://www.google.com/search?q=${code}+${number}+site%3Areddit.com%2Fr%2Fneu`,
        icon: "reddit",
      },
      {
        categoryTitle: "Course",
        name: `RateMyCourses: ${code} ${number}`,
        description: `${code} ${number} on RateMyCourses`,
        href: `https://www.ratemycourses.io/neu/course/${code}${number}`,
      },
      {
        categoryTitle: "Course",
        name: `${code} Catalog`,
        description: `${code} courses on Northeastern's Catalog`,
        href: `https://catalog.northeastern.edu/course-descriptions/${code.toLowerCase()}`,
        icon: "book",
      },
    ];

    // Add all to start of array (The cool way)
    //  https://stackoverflow.com/a/8159547/8677167
    courseResults.reverse().forEach((result) => searchResults.unshift(result));
  } else {
    /* Search for professor on rate my professors */
    searchResults.push({
      categoryTitle: "Professor",
      name: "RateMyProfessors",
      description: `Search for "${keyword}"`,
      href: `https://www.google.com/search?q=${keyword} site%3Aratemyprofessors.com+northeastern+university`,
    });
  }

  return searchResults;
}
