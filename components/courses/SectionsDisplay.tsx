import { SectionsResponse } from "@/api/sections";
import { activeTerms } from "@/content/terms";
import { useSections } from "@/hooks/sections";
import { Course } from "@/types/courses";
import { Debug } from "../util/Debug";
import { Spacer } from "../util/Spacer";

interface SectionsListProps {
  course: Course;
}

export const SectionsList = ({ course }: SectionsListProps) => {
  const { sections, isLoading } = useSections(course.sections);

  return (
    <div>
      {activeTerms.map((term) => {
        const sectionsForTerm = sections?.filter((section) => section.term === term.code);
        return (
          <section key={term.code}>
            <h3 className="font-bold text-lg">{term.description}</h3>
            <Spacer size="sm" />
            <div className="space-y-sm">
              {sectionsForTerm?.map((section, index) => (
                <Section key={index} section={section} />
              ))}
            </div>
          </section>
        );
      })}
      <Debug data={sections} />
    </div>
  );
};

interface SectionProps {
  section: SectionsResponse;
}
const Section = ({ section }: SectionProps) => {
  return (
    <div className="p-base rounded-md bg-gray-100">
      <div className="flex items-center justify-between">
        <h4>{section.facultyMeetTime.faculty.map((professor) => professor.name).join("; ")}</h4>
        <p className="font-mono text-sm">{section.crn}</p>
      </div>
    </div>
  );
};
