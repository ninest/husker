import { SectionsResponse } from "@/api/sections";
import { Spacer } from "@/components/util/Spacer";
import { useSection, useSections } from "@/hooks/sections";
import { pluralize } from "@/lib/string";
import { Course, Term } from "@/types/courses";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { Disclosure } from "@headlessui/react";
import { Section } from "./Section";

interface SectionsGroupProps {
  term: Term;
  course: Course;
}

export const SectionsGroup = ({ term, course }: SectionsGroupProps) => {
  const { sections, isLoading } = useSections(course.sections);
  const sectionsForTerm = sections?.filter((section) => section.term === term.code);

  const totalSections = sectionsForTerm?.length ?? 0;
  const totalSectionsWithSeats =
    sectionsForTerm?.filter((section) => section.seats.available > 0).length ?? 0;

  const [parent] = useAutoAnimate<HTMLDivElement>({ duration: 100 });

  return (
    <section key={term.code} ref={parent}>
      <Disclosure>
        <Disclosure.Button className="flex items-baseline space-x-base">
          <h3 className="font-bold text-lg">{term.description}</h3>
          {isLoading ? (
            <div>
              <span className="font-mono text-sm">{course.sections.length}</span>{" "}
              {pluralize(course.sections.length, "section")},{" "}loading ...
            </div>
          ) : (
            <div>
              <span className="font-mono text-sm">{totalSections}</span>{" "}
              {pluralize(totalSections, "section")},{" "}
              <span className="font-mono text-sm">{totalSectionsWithSeats}</span>{" "}
              {pluralize(totalSectionsWithSeats, "section")} with seats
            </div>
          )}
        </Disclosure.Button>
        <Disclosure.Panel>
          {!isLoading && (
            <>
              <Spacer size="sm" />
              <div className="space-y-sm">
                {sectionsForTerm?.map((section, index) => (
                  <Section key={index} section={section} />
                ))}
              </div>
            </>
          )}
        </Disclosure.Panel>
      </Disclosure>
    </section>
  );
};
