import { FacultyMeetingTime, Seats, SectionInfo } from "@/types/courses";

// https://github.com/ninest/nu-courses/blob/main/api/types.ts
export interface SectionsResponse extends SectionInfo, FacultyMeetingTime {
  seats: Seats;
}

type GetSection = (section: SectionInfo) => Promise<SectionsResponse>;
export const getSection: GetSection = async (section) => {
  const response = await fetch(
    `https://nu-courses.deno.dev/sections/${section.term}/${section.crn}`
  );
  return response.json();
};

type GetSections = (sections: SectionInfo[]) => Promise<SectionsResponse[]>;
export const getSections: GetSections = async (sections) => {
  return await Promise.all(sections.map(getSection));
};
