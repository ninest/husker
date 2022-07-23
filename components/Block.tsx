import { SmartLink } from "@/components/SmartLink";
import clsx from "clsx";
import { HTMLAttributes } from "react";
import { Spacer } from "./util/Spacer";

interface BlockProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  className?: string;
  href?: string;
}

export const Block = ({ title, children, href, ...props }: BlockProps) => {
  const isClickable = !!href;
  const className = clsx(
    props.className,
    "block p-sm rounded transition-colors bg-gray-50 dark:bg-gray-900",
    {
      "hover:bg-gray-100 dark:hover:bg-gray-800": isClickable,
    }
  );
  const content = (
    <>
      <div className="font-semibold text-sm text-gray dark:text-gray-light">{title}</div>
      {children && (
        <>
          <Spacer size="xs"></Spacer>
          <div className="text-xs text-gray-light dark:text-gray">{children}</div>
        </>
      )}
    </>
  );

  if (href)
    return (
      <SmartLink href={href} className={className}>
        {content}
      </SmartLink>
    );
  else return <div className={className}>{content}</div>;
};
