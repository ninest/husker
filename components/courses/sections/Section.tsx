import { SectionsResponse } from "@/api/sections";
import { Spacer } from "@/components/util/Spacer";
import { stringTimeToTime } from "@/lib/courses";
import clsx from "clsx";
import { DayTable } from "./DayTable";

interface SectionProps {
  section: SectionsResponse;
}

export const Section = ({ section }: SectionProps) => {
  const showTime =
    section.facultyMeetTime.meetingTime.time.start && section.facultyMeetTime.meetingTime.time.end;
  const showCampus = section.facultyMeetTime.meetingTime.location.campus.description !== "Boston";
  const showWaitlist =
    section.seats.waitlist.available !== 0 && section.seats.waitlist.capacity !== 0;

  return (
    <div className="p-base rounded-lg bg-gray-100 dark:bg-gray-900 space-y-xs">
      <div className="flex items-center justify-between">
        <h4 className="font-medium">
          {section.facultyMeetTime.faculty.map((professor) => professor.name).join("; ")}
        </h4>
        <p className="font-mono text-sm">{section.crn}</p>
      </div>

      <div className="flex flex-col space-y-xs items-start md:items-center md:space-y-0 md:flex-row md:justify-between">
        <div className="flex items-center space-x-base">
          <DayTable days={section.facultyMeetTime.meetingTime.days} />

          {showTime && (
            <div className="font-mono text-sm">
              {stringTimeToTime(section.facultyMeetTime.meetingTime.time.start)}-
              {stringTimeToTime(section.facultyMeetTime.meetingTime.time.end)}
            </div>
          )}
        </div>
        <div className="text-sm">
          {section.facultyMeetTime.meetingTime.online ? (
            "Online"
          ) : (
            <>
              {section.facultyMeetTime.meetingTime.location.building.description}{" "}
              {section.facultyMeetTime.meetingTime.location.building.room}
              {showCampus && (
                <>, {section.facultyMeetTime.meetingTime.location.campus.description}</>
              )}
            </>
          )}
        </div>
      </div>

      <div className="pt-xs flex space-x-base">
        <div className="flex items-center space-x-1 text-lg font-mono font-bold">
          <span
            className={clsx({
              "text-yellow-600": section.seats.available >= 5 && section.seats.available < 10,
              "text-red-600": section.seats.available < 5,
            })}
          >
            {section.seats.available}
          </span>
          <span>/</span>
          <span>{section.seats.total}</span>
        </div>

        {showWaitlist && (
          <div className="flex items-center space-x-1 text-sm">
            <span>{section.seats.waitlist.available}</span>
            <span>/</span>
            <span>{section.seats.waitlist.capacity}</span>
            <span>waitlist</span>
          </div>
        )}
      </div>
    </div>
  );
};
