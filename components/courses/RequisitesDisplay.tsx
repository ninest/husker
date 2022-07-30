import { Requisite } from "@/types/courses";
import { Button } from "../button/Button";

interface RequisiteProps {
  title: string;
  reqs: Requisite[];
}

export const RequisitesDisplay = ({ title, reqs }: RequisiteProps) => {
  return (
    <div className="flex items-center space-x-base">
      <p className="font-bold">{title}</p>
      <div>
        {reqs.map((req) => {
          const href = `/courses/${req.subject}/${req.number}`;
          return (
            <Button key={href} size="xs" href={href}>
              {req.subject} {req.number}
            </Button>
          );
        })}
      </div>
    </div>
  );
};
