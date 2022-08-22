import { descriptionToList } from "@/lib/courses";
import { Course } from "@/types/courses";
import clsx from "clsx";
import { useState } from "react";
import { NUPathDisplay } from "./NUPathDisplay";
import { RequisiteDisplay } from "./RequisiteDisplay";
import { SectionsList } from "./sections/SectionsList";

interface CourseInfoProps {
  course: Course;
}

export const CourseInfo = ({ course }: CourseInfoProps) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const descriptionList = descriptionToList(course.description ?? "");
  const showDescription = descriptionList.length > 0;
  return (
    <div className="space-y-md">
      <NUPathDisplay path={course.nuPath} />

      {showDescription && (
        <>
          <div
            className="text-gray text-sm"
            onClick={() => setShowFullDescription(!showFullDescription)}
          >
            <ul
              className={clsx(
                { open: showFullDescription, hidden: !showFullDescription },
                "list-outside list-disc ml-lg"
              )}
            >
              {descriptionList.map((sentence, index) => (
                <li key={index}>{sentence}</li>
              ))}
            </ul>

            <div className={clsx({ hidden: showFullDescription, open: !showFullDescription })}>
              {descriptionList.slice(0, 1).map((sentence, index) => (
                <span key={index}>{sentence}</span>
              ))}
              {/* Only show "show all" if the description has more than 1 line */}
              {descriptionList.length > 1 && (
                <span>
                  {" "}
                  <i>Show more.</i>
                </span>
              )}
            </div>
          </div>
        </>
      )}

      {((course?.coreqs ?? []).length > 0 || (course?.prereqs ?? []).length > 0) && (
        <RequisiteDisplay coreqs={course.coreqs!} prereqs={course.prereqs!} />
      )}

      {course.sections && <SectionsList course={course} />}
    </div>
  );
};
