import { HTMLAttributes } from "react";

export const MarkdocDiv = ({
  className = "",
  children,
}: HTMLAttributes<HTMLDivElement>) => {
  return <div className={className}>{children}</div>;
};
