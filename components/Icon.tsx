import { HTMLAttributes } from "react";
import clsx from "clsx";
import { IconId, iconMap } from "@/types/icon";

export interface IconProps extends HTMLAttributes<HTMLDivElement> {
  id?: IconId;
}

export const Icon = ({ id = "filealt", ...props }: IconProps) => {
  const className = clsx("text-gray", props.className);
  const Component = iconMap[id!];
  return <Component className={className}></Component>;
};
