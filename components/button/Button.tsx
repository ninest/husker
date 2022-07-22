import { useTheme } from "@/hooks/settings";
import { IconId } from "@/types/icon";
import { Size } from "@/types/size";
import clsx from "clsx";
import { HTMLAttributes, ReactNode } from "react";
import { Icon } from "@/components/Icon";
import { SmartLink, SmartLinkProps } from "@/components/SmartLink";

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  iconLeft?: string | null;
  iconRight?: string | null;
  href?: SmartLinkProps["href"];
  size?: Size;
  variant?: "primary" | "gray";
  className?: string;
  type?: "button" | "reset" | "submit";
  disabled?: boolean;
  children?: ReactNode;
}

export const Button = ({
  iconLeft,
  iconRight,
  size = "base",
  variant = "gray",
  href,
  children,
  type = "button",
  disabled = false,
  ...props
}: ButtonProps) => {
  const className = clsx(
    props.className,
    "rounded-md font-semibold",
    {
      "text-gray bg-gray-100 hover:bg-gray-200 dark:bg-gray-900 dark:hover:bg-gray-darker":
        variant === "gray",

      "text-gray-200 bg-primary hover:bg-primary-light": variant === "primary",
    },
    {
      "text-sm p-xs h-8": size === "xs",
      "text-sm p-sm h-10": size === "sm",
      "text-base p-base h-12": size === "base",
      "text-lg p-lg h-14": size === "lg",
    },
    "flex items-center justify-center space-x-base"
  );

  const Element = (
    <>
      {iconLeft && <Icon id={iconLeft} className="text-current" />}
      {children && <div>{children}</div>}
      {iconRight && <Icon id={iconRight} className="text-current" />}
    </>
  );

  if (href) {
    return (
      <SmartLink href={href} className={className}>
        {Element}
      </SmartLink>
    );
  } else
    return (
      <button
        type={type}
        className={className}
        disabled={disabled}
        onClick={props.onClick}
      >
        {Element}
      </button>
    );
};
