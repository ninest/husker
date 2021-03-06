import { ReactNode } from "react";
import { Icon } from "../Icon";
import { SmartLink } from "../SmartLink";
import { Button } from "./Button";

interface BackButtonProps {
  href?: string;
  children?: ReactNode;
}

export const BackButton = ({ href = "/", children }: BackButtonProps) => {
  return (
    <SmartLink href={href} className="block">
      <div className="inline-flex items-center space-x-sm text-gray -m-xs p-xs rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900">
        <Icon id="chevronright" className="text-xs text-gray" />
        <div>{children ?? "Links"}</div>
      </div>
    </SmartLink>
  );
};
