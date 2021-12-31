import { ReactNode } from "react";
import { SmartLink } from "@/components/SmartLinks";
import clsx from "clsx";

interface BlockChildren {
  title: string;
  children: ReactNode;
  href?: string;
}
export const Block = ({ title, children, href }: BlockChildren) => {
  const Block = (
    <div
      className={clsx("p-base rounded bg-gray-100", {
        "hover:bg-gray-200": href,
      })}
    >
      <div className="font-bold">{title}</div>
      <div className="text-sm text-gray">{children}</div>
    </div>
  );

  if (href)
    return (
      <SmartLink href={href} className="block no-underline">
        {Block}
      </SmartLink>
    );
  else return Block;
};
