import { Requisite } from "@/types/courses";
import { CourseButton } from "../button/CourseButton";

interface RequisiteProps {
  title: string;
  reqs: Requisite[];
}

export const RequisitesDisplay = ({ title, reqs }: RequisiteProps) => {
  return (
    <div className="flex items-center space-x-base">
      <p className="font-bold">{title}</p>
      <div>
        {reqs.map((req, index) => (
          <CourseButton key={index} subject={req.subject} number={req.number} />
        ))}
      </div>
    </div>
  );
};
