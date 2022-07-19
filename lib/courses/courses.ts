import { getTerms } from "./terms";
import FormData from "form-data";

export interface Course {
  term: string;
  subject: string;
  courseNumber: string;
  campusDescription: string;
  scheduleTypeDescription: string;
  courseTitle: string;
  // TODO: credits
  // TODO: nupath
}

interface SearchSectionsParams {
  subjectCode: string;
  termCode: string;
  courseNumber: string;
}
export const searchSections = async ({
  termCode,
  subjectCode,
  courseNumber,
}: SearchSectionsParams): Promise<any[]> => {
  const { cookie } = await getTerms({ noTerms: 10 });

  const form = new FormData();
  // form.append("term", termCode);
  form.append("term", "202310");
  form.append("studyPath", "");
  form.append("studyPathText", "");
  form.append("startDatepicker", "");
  form.append("endDatepicker", "");

  // Search continue (required): send the cookies to this API first, then we can search for courses
  await fetch(
    "https://nubanner.neu.edu/StudentRegistrationSsb/ssb/term/search?" +
      new URLSearchParams({ mode: "search" }),
    {
      method: "POST",
      body: form,
      credentials: "include",
      headers: { cookie },
    }
  );

  // Search for courses
  const searchResponse = await fetch(
    "https://nubanner.neu.edu/StudentRegistrationSsb/ssb/searchResults/searchResults?" +
      new URLSearchParams({
        txt_subject: subjectCode.toUpperCase(),
        txt_courseNumber: courseNumber ?? "",
        txt_term: termCode,
        startDatepicker: "",
        endDatepicker: "",
        pageOffset: "0",
        pageMaxSize: "1000",
        sortColumn: "subjectDescription",
        sortDirection: "asc",
      }),
    {
      credentials: "include",
      headers: { cookie },
    }
  );

  const { data } = await searchResponse.json();
  console.log(data);

  return data;
};

interface GetAllCoursesParams {
  subjectCode: string;
  termCode: string;
}
export const getAllCourses = async ({
  subjectCode,
  termCode,
}: GetAllCoursesParams): Promise<Course[]> => {
  // Will contain multiple sections of the same course
  const sections = await searchSections({
    subjectCode,
    termCode,
    courseNumber: "",
  });

  const uniqueCourses: Course[] = [];

  sections.forEach((section) => {
    // To the list of courses, only add one course of each section
    // This will remove the duplicates
    if (
      !uniqueCourses.some(
        (course) => course.courseNumber === section.courseNumber
      )
    ) {
      uniqueCourses.push(section);
    }
  });

  return uniqueCourses;
};
