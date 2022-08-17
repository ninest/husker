import { PropsWithChildren } from "react";
import { Icon } from "./Icon";
import { SmartLink } from "./SmartLink";

interface MiniAlertProps extends PropsWithChildren<{}> {
  title: string;
  href: string;
}

export const MiniAlert = ({ title, children,href }: MiniAlertProps) => {
  return (
    <SmartLink className="inline-flex rounded-full overflow-hidden group bg-gray-100 dark:bg-gray-900/60 hover:bg-primary-lightest" href={href}>
      {title ? (
        <div className="rounded-full text-sm bg-gray-200 dark:bg-gray-900 group-hover:bg-primary-lighter dark:group-hover:bg-primary-darkest p-0.5 px-xs">
          {title}
        </div>
      ) : (
        <></>
      )}
      <div className="p-0.5 px-xs text-sm flex items-center space-x-xs">
        <div>{children}</div>
        <div className="">
          <Icon id="chevronright" />
        </div>
      </div>
    </SmartLink>
  );
};
