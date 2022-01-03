import { ReactNode } from "react";
import { SmartLink } from "@/components/SmartLink";
import clsx from "clsx";
import { Spacer } from "./Spacer";

interface BlockChildren {
  title: string;
  children: ReactNode;
  href?: string;
}
export const Block = ({ title, children, href }: BlockChildren) => {
  const isClickable = !!href;
  const className = clsx("block p-base rounded", {
    "bg-gray-50": !isClickable,
    "bg-gray-100 hover:bg-gray-200": isClickable,
  });
  const content = (
    <>
      <div className="font-semibold text-sm text-gray">{title}</div>
      <Spacer size="xs"></Spacer>
      <div className="text-xs text-gray-light">{children}</div>
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
