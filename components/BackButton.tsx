import { ReactNode } from "react";
import { Icon } from "./Icon";
import { SmartLink } from "./SmartLink";

interface BackButtonProps {
  href?: string;
  children?: ReactNode;
}

export const BackButton = ({ href = "/", children }: BackButtonProps) => {
  return (
    <SmartLink href={href} className="block">
      <div className="inline-flex items-center space-x-sm text-gray -m-xs p-xs rounded hover:bg-gray-100">
        <Icon id="caretleft" className="text-gray"></Icon>
        <div>{children ?? "Links"}</div>
      </div>
    </SmartLink>
  );
};
