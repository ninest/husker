import { Menu } from "@headlessui/react";
import clsx from "clsx";
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
  menuClassName?: string;
  options: MenuDropdownItemProps[];
}

export const MenuDropdown = ({
  variant,
  iconLeft,
  iconRight = "caretdown",
  buttonClassName,
  title,
  menuClassName,
  options,
}: MenuDropdownProps) => {
  // TODO: Menu seems to be undefined on page load
  return Menu ? (
    <div className="relative">
      <Menu>
        <Menu.Button as="div" className="">
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
        <Menu.Items
          className={clsx(
            menuClassName,
            "absolute -right-3 mt-1 border dark:border-gray-darkest shadow rounded-lg p-xs bg-gray-50 dark:bg-gray-900"
          )}
        >
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
  action?: () => void;
}

const MenuDropdownItem = ({
  icon,
  text,
  href,
  action,
}: MenuDropdownItemProps) => {
  const className =
    "flex items-center justify-start w-full p-xs rounded-md hover:bg-gray-100 dark:hover:bg-gray-darkest";
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
        <button onClick={action} className={className}>
          {children}
        </button>
      )}
    </Menu.Item>
  );
};
