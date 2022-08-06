import { PrerequisiteItem } from "@/types/courses";
import clsx from "clsx";
import { Button } from "../button/Button";

interface PreRequisiteProps {
  title: string;
  reqItems: PrerequisiteItem[];
}

export const PreRequisiteDisplay = ({ title, reqItems }: PreRequisiteProps) => {
  return (
    <div className="flex items-baseline space-x-base">
      <p className="flex-none font-bold">{title}</p>
      <div className="-mt-xs flex flex-wrap items-baseline">
        {reqItems.map((reqItem) => {
          const marginClassNames = "mr-1 mt-xs";
          if (typeof reqItem === "object") {
            const href = `/courses/${reqItem.subject}/${reqItem.number}`;
            return (
              <Button key={href} size="xs" href={href} className={marginClassNames}>
                {reqItem.subject} {reqItem.number}
              </Button>
            );
          }

          return (
            <div
              className={clsx(
                "font-medium",
                {
                  // Non course pre-reqs
                  "italic": !["And", "Or"].includes(reqItem),
                  // Show and/or in lower case
                  lowercase: ["And", "Or"].includes(reqItem),
                  // Make brackets bolder
                  "scale-y-[1.6] scale-x-125": ["(", ")"].includes(reqItem),
                },
                marginClassNames
              )}
            >
              {reqItem}
            </div>
          );
        })}
      </div>
    </div>
  );
};
