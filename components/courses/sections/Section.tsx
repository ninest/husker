import { Button } from "@/components/button/Button";
import { Empty } from "@/components/Empty";
import { Spacer } from "@/components/util/Spacer";
import { showToast } from "@/components/util/Toast";
import { useSection } from "@/hooks/sections";
import { stringTimeToTime } from "@/lib/courses";
import { shareLink } from "@/lib/share";
import { SectionInfo } from "@/types/courses";
import { copy } from "@/utils/copy";
import clsx from "clsx";
import { useRouter } from "next/router";
import { FaShareAlt } from "react-icons/fa";
import { DayTable } from "./DayTable";

interface SectionProps {
  sectionInfo: SectionInfo;
}

export const Section = ({ sectionInfo }: SectionProps) => {
  const { section, isLoading } = useSection(sectionInfo);

  console.log();
  console.log(sectionInfo);
  console.log(section);

  const showTime = section?.startTime && section.endTime;
  const showCampus = section?.campus?.description
    ? section?.campus.description !== "Boston"
    : false;
  const showWaitlist =
    section?.seats.waitlist.available !== 0 && section?.seats.waitlist.capacity !== 0;

  const router = useRouter();
  const crn = router.asPath.split("#")[1];
  const highlighted = crn === sectionInfo.crn;

  const copyCRN = () => {
    copy(section?.crn ?? "", `Course CRN`);
    showToast({ text: "Copied CRN" });
  };

  return (
    <div>
      {/* Anchor */}
      <a id={sectionInfo.crn} className="invisible block relative -top-40" />
      {section && !isLoading ? (
        <>
          <div
            className={clsx("p-base rounded-lg bg-gray-100 dark:bg-gray-900 space-y-sm", {
              "border-2 border-primary": highlighted,
            })}
          >
            <div className="flex items-center justify-between">
              <h4 className="font-medium">
                {section.faculty && section.faculty.length > 0 ? (
                  section?.faculty.map((professor) => professor.name).join("; ")
                ) : (
                  <i>Professors to be announced</i>
                )}
              </h4>
              <p className="font-mono text-sm" onClick={copyCRN}>
                {section.crn}
              </p>
            </div>
            <div className="flex flex-col space-y-xs items-start md:items-center md:space-y-0 md:flex-row md:justify-between">
              <div className="flex items-center space-x-base">
                {section.days && <DayTable days={section.days} />}

                {showTime && (
                  <div className="font-mono text-sm">
                    {stringTimeToTime(section.startTime)}-{stringTimeToTime(section.endTime)}
                  </div>
                )}
              </div>

              <div className="pt-1 md:pt-0 text-sm">
                {section.online ? (
                  "Online"
                ) : (
                  <>
                    {section.building && (
                      <>
                        {section.building.description} {section.building.room}
                      </>
                    )}
                    {showCampus && <>, {section.campus.description}</>}
                  </>
                )}
              </div>
            </div>

            <div className="pt-0.5 flex items-center justify-between">
              <div className="flex space-x-base">
                <div className="flex items-center space-x-1 text-lg font-mono font-bold">
                  <span
                    className={clsx({
                      "text-yellow-600":
                        section.seats.available >= 5 && section.seats.available < 10,
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

              <div>
                <Button
                  variant="ghost"
                  size="xs"
                  iconLeft="sharealt"
                  onClick={async () => {
                    await shareLink({
                      text: `CRN ${section.crn}`,
                      url: window.location.href + `#${section.crn}`,
                    });
                    router.push(`#${section.crn}`);
                  }}
                />
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <Empty
            className={clsx(
              "p-base rounded-lg flex items-center justify-center font-medium text-gray h-32",
              {
                "border-primary dark:border-primary": highlighted,
              }
            )}
          >
            <div className="flex items-center space-x-xs">
              <span>Loading section</span>
              <span className="text-sm font-mono">{sectionInfo.crn}</span>
            </div>
          </Empty>
        </>
      )}
    </div>
  );
};
