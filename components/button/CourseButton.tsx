import { HTMLAttributes } from "react";
import { Button } from "./Button";

interface CourseButtonProps extends HTMLAttributes<HTMLButtonElement> {
  subject: string;
  number: string;
}

export const CourseButton = ({ subject, number, className }: CourseButtonProps) => {
  const href = `/courses/${subject}/${number}`;
  return (
    <Button key={href} size="xs" href={href} className={className}>
      {subject} {number}
    </Button>
  );
};
