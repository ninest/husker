import { getSection, getSections } from "@/api/sections";
import { SectionInfo } from "@/types/courses";
import { useQuery } from "react-query";

export const useSections = (sections: SectionInfo[]) => {
  // Use `useQueries`?
  const { data, isLoading, error } = useQuery(["sections", sections], () => getSections(sections));
  return { sections: data, isLoading, error };
};

export const useSection = (section: SectionInfo) => {
  const { data, isLoading, error } = useQuery(["sections", section], () => getSection(section));
  return { section: data, isLoading, error };
};
