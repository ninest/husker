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
  const className = clsx(props.className, "block p-base rounded", {
    "bg-gray-50": !isClickable,
    "bg-gray-100 hover:bg-gray-200": isClickable,
  });
  const content = (
    <>
      <div className="font-semibold text-sm text-gray">{title}</div>
      {children && (
        <>
          <Spacer size="xs"></Spacer>
          <div className="text-xs text-gray-light">{children}</div>
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
