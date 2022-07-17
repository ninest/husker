import clsx from "clsx";
import { HTMLAttributes } from "react";

interface GridProps extends HTMLAttributes<HTMLDivElement> {}

export const Grid = ({ className, children }: GridProps) => {
  return <div className={clsx("grid gap-base", className)}>{children}</div>;
};
