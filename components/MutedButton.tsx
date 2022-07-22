import { useTheme } from "@/hooks/settings";
import { IconId } from "@/types/icon";
import { Size } from "@/types/size";
import clsx from "clsx";
import { HTMLAttributes, ReactNode } from "react";
import { Icon } from "./Icon";
import { SmartLink, SmartLinkProps } from "./SmartLink";

interface MutedButtonProps extends HTMLAttributes<HTMLButtonElement> {
  icon?: IconId;
  href?: SmartLinkProps["href"];
  size?: Size;
  className?: string;
  type?: "button" | "reset" | "submit";
  disabled?: boolean;
  children?: ReactNode;
}

export const MutedButton = ({
  icon,
  size = "base",
  href,
  children,
  type = "button",
  disabled = false,
  ...props
}: MutedButtonProps) => {
  const { isLightTheme, isDarkTheme } = useTheme();

  const className = clsx(
    props.className,
    "rounded-md font-semibold text-gray-light -m-xs p-xs hover:bg-gray-50 hover:underline",
    {
      "text-sm": size === "sm" || size === "xs",
      "text-base ": size === "base",
      "text-lg ": size === "lg",
    },
    "flex items-center justify-center"
  );

  const Element = (
    <>
      {icon ? (
        <Icon
          id={icon}
          className={clsx("text-gray-lighter text-xs", { "mr-sm": children })}
        />
      ) : null}
      {children && <div>{children}</div>}
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
