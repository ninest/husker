import { AnchorHTMLAttributes } from "react";
import { useRouter } from "next/router";
import Link, { LinkProps } from "next/link";
import clsx from "clsx";

export interface SmartLinkProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  href: LinkProps["href"] | string;
  underline?: boolean;
  activeClassName?: string;
}

export const SmartLink = ({
  href,
  activeClassName,
  underline = false,
  ...props
}: SmartLinkProps) => {
  const router = useRouter();
  const path = router.asPath.split("?")[0];
  const className = clsx(
    {
      underline,
      [`${activeClassName}`]: path === href,
    },
    props.className
  );

  if (typeof href === "string") {
    if (href[0] === "/" || href[0] === "#")
      return (
        <Link href={href}>
          <a {...props} className={className}>
            {props.children}
          </a>
        </Link>
      );
    else
      return (
        <a
          {...props}
          className={className}
          href={href}
          target="_blank"
          rel="noreferrer"
        />
      );
  } else {
    /* href is not a string, it's a URL param object */
    return (
      <Link href={href}>
        <a {...props} className={className} />
      </Link>
    );
  }
};
