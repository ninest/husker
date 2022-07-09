import { HTMLAttributes } from "react";

interface ClientOnlyProps extends HTMLAttributes<HTMLDivElement> {}

export const ClientOnly = ({ children }: ClientOnlyProps) => {
  return <>{typeof window !== "undefined" && children}</>;
};
