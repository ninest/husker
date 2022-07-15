import clsx from "clsx";
import { Size } from "@/types/size";

interface SpacerProps {
  size?: Size;
  axis?: "x" | "y";
}

export const Spacer = ({ size = "base", axis = "y" }: SpacerProps) => {
  const prefix = axis == "x" ? "w" : "h";
  return <div className={clsx(`${prefix}-${size}`)}></div>;
};

// So Tailwind can read it
// TODO: fix
const _ = [
  "w-0.5",
  "h-0.5",
  "w-1",
  "h-1",
  "h-md",
  "h-base",
  "h-sm",
  "h-xs",
  "h-xl",
  "h-2xl",
  "h-3xl",
  "h-lg",
  "w-md",
  "w-base",
  "w-sm",
  "w-xs",
  "w-xl",
  "w-lg",
  "w-xl",
  "w-2xl",
  "w-3xl",
] as const;
