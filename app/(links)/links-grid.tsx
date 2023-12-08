"use client";

import { filterResults, useSearch } from "@/app/(links)/use-search";
import { NoElementsEmpty } from "@/components/empty";
import { LinkButton } from "@/components/link-button";
import { Spacer } from "@/components/spacer";
import { Title } from "@/components/title";
import { Category } from "@/modules/content/category";
import { HuskerLink } from "@/modules/content/link";

interface LinksGridProps {
  categories: Category[];
  links: HuskerLink[];
}

export function LinksGrid({ categories, links }: LinksGridProps) {
  const { searchQuery } = useSearch();
  const filteredLinks = !!searchQuery ? filterResults(searchQuery, links) : links;
  const containsLinks = filteredLinks.length > 0;

  return (
    <>
      {!containsLinks && <NoElementsEmpty children="No links found. Add one?" />}
      {categories.map((category) => {
        const filteredLinksInCategory = filteredLinks.filter((link) => link.categoryIds.includes(category.id));
        if (filteredLinksInCategory.length === 0) return <></>;
        return (
          <div key={category.slug}>
            <Title level={2} className="font-extrabold text-xl">
              {category.title}
            </Title>
            <Spacer className="h-3" />

            <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
              {filteredLinksInCategory.map((link) => (
                <LinkButton key={link.id} huskerLink={link} />
              ))}
            </div>
          </div>
        );
      })}
    </>
  );
}
