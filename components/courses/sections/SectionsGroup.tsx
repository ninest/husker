import { SectionsResponse } from "@/api/sections";
import { Icon } from "@/components/Icon";
import { Spacer } from "@/components/util/Spacer";
import { useSection, useSections } from "@/hooks/sections";
import { pluralize } from "@/lib/string";
import { Course, Term } from "@/types/courses";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { Disclosure } from "@headlessui/react";
import clsx from "clsx";
import { Section } from "./Section";

interface SectionsGroupProps {
  term: Term;
  course: Course;
}

export const SectionsGroup = ({ term, course }: SectionsGroupProps) => {
  const results = useSections(course.sections);
  const totalSections = results.length;
  const totalSectionsWithSeats = results.filter(
    (result) => result.data?.seats.available ?? 0 > 0
  ).length;

  const [parent] = useAutoAnimate<HTMLDivElement>({ duration: 100 });

  return (
    <section key={term.code} ref={parent}>
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="w-full flex items-center justify-between">
              <div className="flex items-baseline space-x-base">
                <h3 className="font-bold text-lg">{term.description}</h3>
                <div>
                  <span className="font-mono text-sm">{totalSections}</span>{" "}
                  {pluralize(totalSections, "section")},{" "}
                  <span className="font-mono text-sm">{totalSectionsWithSeats}</span>{" "}
                  {pluralize(totalSectionsWithSeats, "section")} with seats
                </div>
              </div>
              <div className="p-0.5 rounded-md bg-gray-50 dark:bg-gray-900 text-gray-400 dark:text-gray-600">
                <Icon id={open ? "caretup" : "caretdown"} />
              </div>
            </Disclosure.Button>
            {/* <div className={clsx({ hidden: !open })}> */}
            {open && (
              <div>
                <Spacer size="sm" />
                <div className="space-y-sm">
                  {course.sections?.map((sectionInfo, index) => (
                    <Section key={index} sectionInfo={sectionInfo} />
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </Disclosure>
    </section>
  );
};
