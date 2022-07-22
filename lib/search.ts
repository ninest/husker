import { dorms } from "@/content/housing";
import { contentMap } from "@/content/map";
import { Link, LinkWithCategory } from "@/types/category";
import { SearchableItem } from "@/types/search";
import { isCourse } from "@/utils/course";
import Fuse from "fuse.js";
import allCourses from "../.raw/all-courses.json";
import subjects from "../.raw/subjects.json";

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
    href: `/house/${dorm.slug}`,
    description: `${dorm.type.name} housing`,
  })),

  ...contentMap.map((cat) => ({
    name: cat.title,
    href: `/${cat.slug}`,
  })),

  ...subjects.map((subject) => ({
    name: subject.code,
    description: `Course list for ${subject.description}`,
    href: `/courses/${subject.code}`,
  })),

  ...allCourses.map((course) => ({
    name: `${course.subject} ${course.number}`,
    description: course.title,
    href: `/courses/${course.subject}/${course.number}`,
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
