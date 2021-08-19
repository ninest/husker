import Link from "next/link";
import { HTMLProps } from "react";

interface Props extends HTMLProps<HTMLAnchorElement> {}

export const SmartLink = ({ href, children, ...props }: Props) => {
  if (href.startsWith("/") || href.startsWith("https://neulinks.vercel.app/")) {
    return (
      <Link href={href}>
        <a href={href} {...props}>
          {children}
        </a>
      </Link>
    );
  } else
    return (
      <a rel="noreferrer" target="_blank" href={href} {...props}>
        {children}
      </a>
    );
};
