import { activeTerms } from "@/content/terms";
import { useSections } from "@/hooks/sections";
import { pluralize } from "@/lib/string";
import { Course } from "@/types/courses";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { Disclosure } from "@headlessui/react";
import { Debug } from "../../util/Debug";
import { Spacer } from "../../util/Spacer";
import { Section } from "./Section";

interface SectionsListProps {
  course: Course;
}

export const SectionsList = ({ course }: SectionsListProps) => {
  const { sections, isLoading } = useSections(course.sections);

  const totalSections = sections?.length ?? 0;
  const totalSectionsWithSeats =
    sections?.filter((section) => section.seats.available > 0).length ?? 0;

  return (
    <div className="space-y-md">
      {[...activeTerms, ...activeTerms].map((term) => {
        const sectionsForTerm = sections?.filter((section) => section.term === term.code);
        const [parent] = useAutoAnimate<HTMLDivElement>({ duration: 100 });
        return (
          <section key={term.code} ref={parent}>
            <Disclosure>
              <Disclosure.Button className="flex items-baseline space-x-base">
                <h3 className="font-bold text-lg">{term.description}</h3>
                {!isLoading && (
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
      })}
    </div>
  );
};
