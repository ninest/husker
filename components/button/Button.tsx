import { Icon } from "@/components/Icon";
import { SmartLink, SmartLinkProps } from "@/components/SmartLink";
import { Size } from "@/types/size";
import clsx from "clsx";
import { HTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "gray" | "ghost";
export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  iconLeft?: string | null;
  iconRight?: string | null;
  href?: SmartLinkProps["href"];
  size?: Size;
  variant?: ButtonVariant;
  className?: string;
  type?: "button" | "reset" | "submit";
  disabled?: boolean;
  children?: ReactNode;
}

const themeColors: Record<ButtonVariant, string> = {
  gray: "text-gray bg-gray-100 hover:bg-gray-200 dark:bg-gray-900 dark:hover:bg-gray-darker",
  primary: "text-gray-200 bg-primary hover:bg-primary-light",
  ghost: "",
};

const fontSizes: Record<Size, string> = {
  0.5: "",
  1: "",
  xs: "text-xs",
  sm: "text-sm",
  base: "text-base",
  md: "text-lg",
  lg: "text-lg",
  xl: "",
  "2xl": "",
  "3xl": "",
};

const padding: Record<Size, string> = {
  0.5: "",
  1: "",
  xs: "p-xs h-8",
  sm: "p-sm h-10",
  base: "p-base h-12",
  md: "p-lg h-14",
  lg: "p-lg h-14",
  xl: "",
  "2xl": "",
  "3xl": "",
};

// const ghostPadding: Record<Size, string> = {
//   0.5: "",
//   1: "",
//   xs: "p-xs h-8",
//   sm: "p-sm h-10",
//   base: "p-base h-12",
//   md: "p-lg h-14",
//   lg: "p-lg h-14",
//   xl: "",
//   "2xl": "",
//   "3xl": "",
// };

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
    "rounded-md font-semibold whitespace-nowrap",
    fontSizes[size],
    themeColors[variant],
    // Padding does not apply to ghost buttons
    // Use negative margin + margin for ghost button
    {
      [clsx(padding[size])]: variant != "ghost",
      "-m-xs p-xs hover:bg-gray-50 dark:hover:bg-gray-900 hover:underline": variant == "ghost",
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
