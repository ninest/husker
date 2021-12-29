import { HTMLAttributes } from "react";
import clsx from "clsx";
import { IconType } from "react-icons";
import { FaRegFileAlt } from "react-icons/fa";

export interface IconProps extends HTMLAttributes<HTMLDivElement> {
  id?: string;
}

export const Icon = ({ id = "filealt", ...props }: IconProps) => {
  const className = clsx("text-gray", props.className);
  const Component = iconMap[id!];
  return <Component className={className}></Component>;
};

const iconMap: Record<string, IconType> = {
  filealt: FaRegFileAlt,
};
