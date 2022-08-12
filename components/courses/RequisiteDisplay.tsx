import { PrerequisiteItem, Requisite } from "@/types/courses";
import clsx from "clsx";
import { CourseButton } from "../button/CourseButton";

interface RequisiteDisplayProps {
  coreqs: Requisite[];
  prereqs: PrerequisiteItem[];
}

export const RequisiteDisplay = ({ coreqs, prereqs }: RequisiteDisplayProps) => {
  return (
    <div className="grid gap-base grid-cols-[2fr_5fr] lg:grid-cols-[1fr_5fr]">
      {coreqs.length > 0 && (
        <>
          {/* Center vertically */}
          <div className="flex items-center">Co-requisites</div>
          <div className="flex">
            {coreqs.map((req, index) => (
              <CourseButton key={index} subject={req.subject} number={req.number} />
            ))}
          </div>
        </>
      )}

      {prereqs.length > 0 && (
        <>
          <div className="flex md:items-center">Pre-requisites</div>
          <div className="-mt-xs flex flex-wrap items-baseline">
            {prereqs.map((reqItem, index) => {
              const marginClassNames = "mr-1 mt-xs";
              if (typeof reqItem === "object")
                return (
                  <CourseButton
                    key={index}
                    subject={reqItem.subject}
                    number={reqItem.number}
                    className={marginClassNames}
                  />
                );

              return (
                <div
                  key={index}
                  className={clsx(
                    "text-sm md:text-base font-medium",
                    {
                      // Non course pre-reqs
                      italic: !["And", "Or", "(", ")"].includes(reqItem),
                      // Show and/or in lower case
                      lowercase: ["And", "Or"].includes(reqItem),
                      // Make brackets bolder
                      "scale-y-[1.4] md:scale-x-125": ["(", ")"].includes(reqItem),
                    },
                    marginClassNames
                  )}
                >
                  {reqItem}
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};
