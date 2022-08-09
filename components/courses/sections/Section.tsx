import { SectionsResponse } from "@/api/sections";
import { stringTimeToTime } from "@/lib/courses";
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
      <div className="flex items-center space-x-base">
        <DayTable days={section.facultyMeetTime.meetingTime.days} />

        <div className="font-mono text-sm">
          {stringTimeToTime(section.facultyMeetTime.meetingTime.time.start)}-
          {stringTimeToTime(section.facultyMeetTime.meetingTime.time.end)}
        </div>
      </div>
    </div>
  );
};
