"use client";

import { Combobox } from "@/components/combobox";
import { NoElementsEmpty } from "@/components/empty";
import { SimpleSidebarLinkButton } from "@/components/simple-sidebar-link-button";
import { Spacer } from "@/components/spacer";
import { Article } from "@/modules/content/article";
import { Category } from "@/modules/content/category";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface WikiSideBarProps {
  categories: Category[];
  articles: Article[];
}

export function WikiSideBarContent({ categories, articles }: WikiSideBarProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const options = categories.map((category) => ({
    label: category.title,
    value: category.slug,
  }));
  const selectedFilters = searchParams.getAll("filter");

  const addFilter = (value: string) => {
    const params = new URLSearchParams(searchParams);
    const currentFilters = params.getAll("filter");
    params.delete("filter");
    const newFilters = [...currentFilters, value];
    newFilters.forEach((filter) => params.append("filter", filter));
    router.push(`${pathname}?${params}`);
  };
  const removeFilter = (value: string) => {
    const params = new URLSearchParams(searchParams);
    const currentFilters = params.getAll("filter");
    params.delete("filter");
    const newFilters = currentFilters.filter((filter) => filter !== value);
    newFilters.forEach((filter) => params.append("filter", filter));
    router.push(`${pathname}?${params}`);
  };
  const clearFilters = () => {
    const params = new URLSearchParams(searchParams);
    params.delete("filter");
    router.push(`${pathname}?${params}`);
  };

  const selectedFilterCategoryIds = selectedFilters.map(
    (filterSlug) => categories.find((cat) => cat.slug === filterSlug)!.id
  );

  const filteredArticles = articles.filter((article) => {
    return selectedFilterCategoryIds.every((catId) => article.categoryIds.includes(catId));
  });

  return (
    <>
      <div className="sticky pt-0 md:pt-4 p-4 top-0 bg-background/90">
        <Combobox
          placeholder="Select a category ..."
          searchPlaceholder="Search a category ... "
          options={options}
          type="multi-select"
          currentValues={selectedFilters}
          addValue={addFilter}
          removeValue={removeFilter}
          clearValues={clearFilters}
          className="w-full"
        />
      </div>

      <div className="pt-2 p-4 space-y-2">
        {filteredArticles.length === 0 && (
          <Link href="/wiki" className="block">
            <NoElementsEmpty>No articles with this filter. Click to clear filters.</NoElementsEmpty>
          </Link>
        )}
        {filteredArticles.map((article) => (
          <SimpleSidebarLinkButton key={article.id} href={`/wiki/${article.slug}`} title={article.title} />
        ))}
      </div>
    </>
  );
}
