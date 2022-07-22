import { Menu } from "@headlessui/react";
import { Icon } from "../Icon";
import { SmartLink } from "../SmartLink";
import { Button, ButtonProps } from "./Button";

interface MenuDropdownProps {
  // TODO: size
  variant?: ButtonProps["variant"];
  iconLeft?: string;
  iconRight?: string | null;
  buttonClassName?: string;
  title?: string;
  options: MenuDropdownItemProps[];
}

export const MenuDropdown = ({
  variant,
  iconLeft,
  iconRight = "caretdown",
  buttonClassName,
  title,
  options,
}: MenuDropdownProps) => {
  // TODO: Menu seems to be undefined on page load
  return Menu ? (
    <div className="relative">
      <Menu>
        <Menu.Button className="">
          <Button
            variant={variant}
            size="sm"
            iconLeft={iconLeft}
            iconRight={iconRight}
            className={buttonClassName}
          >
            {title}
          </Button>
        </Menu.Button>
        <Menu.Items className="absolute right-0 mt-1 border dark:border-gray-darkest shadow rounded-md p-xs bg-gray-50 dark:bg-gray-900">
          {options.map((option) => (
            <MenuDropdownItem key={option.text} {...option} />
          ))}
        </Menu.Items>
      </Menu>
    </div>
  ) : (
    <></>
  );
};

interface MenuDropdownItemProps {
  icon?: string;
  text: string;
  href?: string;
}

const MenuDropdownItem = ({ icon, text, href }: MenuDropdownItemProps) => {
  const className =
    "p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-darkest flex items-center";
  const children = (
    <>
      <div className="w-7">{icon && <Icon id={icon} />}</div>
      <div className="text-gray text-sm">{text}</div>
    </>
  );
  return (
    <Menu.Item>
      {href ? (
        <SmartLink href={href} className={className}>
          {children}
        </SmartLink>
      ) : (
        <div className={className}>{children}</div>
      )}
    </Menu.Item>
  );
};
