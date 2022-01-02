import { useTheme } from "@/lib/theme";
import { IconId } from "@/types/icon";
import { Size } from "@/types/size";
import clsx from "clsx";
import { ReactNode } from "react";
import { Icon } from "./Icon";
import { SmartLink, SmartLinkProps } from "./SmartLink";

interface ButtonProps {
  icon?: IconId;
  href?: SmartLinkProps['href'];
  size?: Size;
  children: ReactNode;
}

export const Button = ({
  icon,
  size = "base",
  href,
  children,
}: ButtonProps) => {
  const { isLightTheme, isDarkTheme } = useTheme();

  const className = clsx(
    "rounded-md font-semibold text-gray",
    {
      "bg-gray-100 hover:bg-gray-200": isLightTheme,
      "bg-gray-50 hover:bg-gray-100": isDarkTheme,
    },
    {
      "text-sm p-sm": size === "sm",
      "text-base p-base": size === "base",
      "text-lg p-lg": size === "lg",
    },
    "flex items-center justify-center"
  );

  const Element = (
    <>
      {icon ? <Icon id={icon} className="mr-base" /> : null}
      <div>{children}</div>
    </>
  );

  if (href) {
    return (
      <SmartLink href={href} className={className}>
        {Element}
      </SmartLink>
    );
  } else return <button className={className}>{Element}</button>;
};
