import { ReactNode } from "react";
import { Icon } from "./Icon";
import { SmartLink } from "./SmartLinks";

interface BackButtonProps {
  href?: string;
  children?: ReactNode;
}

export const BackButton = ({ href = "/", children }: BackButtonProps) => {
  return (
    <SmartLink className="flex items-center space-x-sm text-gray" href={href}>
      <Icon id="caretleft" className="text-gray"></Icon>
      <div>{children ?? "Links"}</div>
    </SmartLink>
  );
};
