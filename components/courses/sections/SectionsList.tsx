import { activeTerms } from "@/content/terms";
import { useSections } from "@/hooks/sections";
import { pluralize } from "@/lib/string";
import { Course } from "@/types/courses";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { Disclosure } from "@headlessui/react";
import { Spacer } from "../../util/Spacer";
import { Section } from "./Section";
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
