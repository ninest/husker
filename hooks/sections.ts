import { getSection } from "@/api/sections";
import { SectionInfo } from "@/types/courses";
import { useQueries, useQuery } from "react-query";

export const useSections = (sections: SectionInfo[]) => {
  const results = useQueries(
    sections.map((section) => ({
      queryKey: ["section", section],
      queryFn: () => getSection(section),
    }))
  );

  return results;
};

export const useSection = (section: SectionInfo) => {
  const { data, isLoading, error } = useQuery(["section", section], () => getSection(section));
  return { section: data, isLoading, error };
};
