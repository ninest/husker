import { Icon } from "@/components/Icon";
import { Spacer } from "@/components/util/Spacer";
import { useSections } from "@/hooks/sections";
import { pluralize } from "@/lib/string";
import { Course, Term } from "@/types/courses";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { Disclosure } from "@headlessui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Section } from "./Section";

interface SectionsGroupProps {
  term: Term;
  course: Course;
}

export const SectionsGroup = ({ term, course }: SectionsGroupProps) => {
  const results = useSections(course.sections.filter((section) => section.term === term.code));

  const totalSections = results.filter((result) => result.data?.term === term.code).length;
  const totalSectionsWithSeats = results
    .filter((result) => result.data?.term === term.code)
    .filter((result) => result.data?.seats.available ?? 0 >= 1).length;

  const [parent] = useAutoAnimate<HTMLDivElement>({ duration: 100 });

  const router = useRouter();
  const crn = router.asPath.split("#")[1];
  const containsCrn = course.sections.some((section) => section.crn == crn);

  // const sections = course.sections.filter((section) => section.term === term.code);
  // console.log();

  return (
    <section key={term.code} ref={parent} className="relative">
      <Disclosure defaultOpen={containsCrn}>
        {({ open }) => (
          <>
            <Disclosure.Button className="w-full flex items-center justify-between bg-light dark:bg-dark p-xs border dark:border-gray-800 rounded-lg sticky top-20 md:top-5">
              <div className="flex items-baseline space-x-base">
                <h3 className="font-bold text-lg ">{term.description}</h3>
                <div className="text-sm">
                  <span className="font-mono">{totalSections}</span>{" "}
                  {pluralize(totalSections, "section")},{" "}
                  <span className="font-mono">{totalSectionsWithSeats}</span> with seats
                </div>
              </div>

              <div className="p-0.5 rounded-md bg-gray-100 dark:bg-gray-900 text-gray-400 dark:text-gray-600">
                <Icon id={open ? "caretup" : "caretdown"} />
              </div>
            </Disclosure.Button>
            {open && (
              <div>
                <Spacer size="sm" />
                <div className="space-y-sm">
                  {course.sections
                    ?.filter((course) => course.term === term.code)
                    .map((sectionInfo, index) => (
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
