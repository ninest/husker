import { atom, useAtom } from "jotai";

const searchQueryAtom = atom("");

export function useSearch() {
  const [searchQuery, setSearchQuery] = useAtom(searchQueryAtom);

  return { searchQuery, setSearchQuery };
}
