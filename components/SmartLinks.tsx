import { AnchorHTMLAttributes } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import clsx from "clsx";

interface SmartLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
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
  const className = clsx(
    {
      underline,
      [`${activeClassName}`]: router.asPath === href,
    },
    props.className
  );

  if (href[0] === "/")
    return (
      <Link href={href}>
        <a {...props} className={className} />
      </Link>
    );

  return (
    <a
      {...props}
      className={className}
      href={href}
      target="_blank"
      rel="noreferrer"
    />
  );
};
