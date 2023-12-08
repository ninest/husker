import { cn } from "@/utils/style";
import { HTMLAttributes, ReactNode } from "react";

interface EmptyProps extends HTMLAttributes<HTMLDivElement> {}

export const Empty = ({ children, className }: EmptyProps) => {
  return (
    <div className={cn(className, "border-2 border-dashed dark:border-gray-800 p-base rounded-lg text-gray-400")}>
      {children}
    </div>
  );
};

export const NoElementsEmpty = ({ children }: { children: ReactNode }) => (
  <Empty className="p-5 text-center">{children}</Empty>
);
