import { ReactNode } from "react";
import { SmartLink } from "@/components/SmartLinks";
import clsx from "clsx";

interface BlockChildren {
  title: string;
  children: ReactNode;
  href?: string;
}
export const Block = ({ title, children, href }: BlockChildren) => {
  const className = clsx("block p-base rounded bg-gray-100", {
    "hover:bg-gray-200": href,
  });
  const content = (
    <>
      <div className="font-bold">{title}</div>
      <div className="text-sm text-gray">{children}</div>
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
