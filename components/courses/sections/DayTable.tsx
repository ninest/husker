import { DayOfWeek, daysOfWeek } from "@/types/courses";
import clsx from "clsx";

const dayShortCodes: Record<DayOfWeek, string> = {
  sunday: "S",
  monday: "M",
  tuesday: "T",
  wednesday: "W",
  thursday: "R",
  friday: "F",
  saturday: "S",
};

interface DayTableProps {
  days: DayOfWeek[];
}

export const DayTable = ({ days }: DayTableProps) => {
  return (
    <div className="rounded-md inline-flex items-center border dark:border-gray-800 divide-x dark:divide-gray-800">
      {daysOfWeek.map((day, index) => {
        const highlighted = days.includes(day);
        return (
          <div>
            <div
              key={index}
              className={clsx("px-xs py-1 font-semibold text-xs md:text-sm", {
                "rounded bg-gray dark:bg-primary-darker text-gray-200 dark:text-primary-lighter":
                  highlighted,
              })}
            >
              {dayShortCodes[day]}
            </div>
          </div>
        );
      })}
    </div>
  );
};
