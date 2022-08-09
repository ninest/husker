import { activeTerms } from "@/content/terms";
import { Course } from "@/types/courses";
import { SectionsGroup } from "./SectionsGroup";

interface SectionsListProps {
  course: Course;
}

export const SectionsList = ({ course }: SectionsListProps) => {
  return (
    <div className="space-y-md">
      {activeTerms.map((term) => {
        return <SectionsGroup key={term.code} term={term} course={course} />;
      })}
    </div>
  );
};
