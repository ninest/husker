import { SectionsResponse } from "@/api/sections";
import { DayTable } from "./DayTable";

interface SectionProps {
  section: SectionsResponse;
}

export const Section = ({ section }: SectionProps) => {
  return (
    <div className="p-base rounded-lg bg-gray-100 dark:bg-gray-900 space-y-xs">
      <div className="flex items-center justify-between">
        <h4 className="font-medium">
          {section.facultyMeetTime.faculty.map((professor) => professor.name).join("; ")}
        </h4>
        <p className="font-mono text-sm">{section.crn}</p>
      </div>
      <DayTable days={section.facultyMeetTime.meetingTime.days} />
    </div>
  );
};
