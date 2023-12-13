"use client";

import { Combobox } from "@/components/combobox";
import { Category } from "@/modules/content/category";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface WikiSideBarProps {
  categories: Category[];
}

export function WikiSideBarContent({ categories }: WikiSideBarProps) {
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

  return (
    <>
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
    </>
  );
}
