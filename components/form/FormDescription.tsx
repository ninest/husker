import { LabelHTMLAttributes, ReactNode } from "react";

export const FormDescription = ({ children }: { children: ReactNode }) => {
  return <div className="text-sm text-gray">{children}</div>;
};
