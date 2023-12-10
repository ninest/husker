import { HuskerLink } from "@/modules/content/link";
import { atom, useAtom } from "jotai";

const searchQueryAtom = atom("");

export function useSearch() {
  const [searchQuery, setSearchQuery] = useAtom(searchQueryAtom);

  return { searchQuery, setSearchQuery };
}

export function filterResults(query: string, links: HuskerLink[]) {
  return links.filter(
    (link) =>
      link.title.toLowerCase().includes(query.toLowerCase()) ||
      link.description.toLowerCase().includes(query.toLowerCase())
  );
}
