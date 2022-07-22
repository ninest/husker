import { IconId } from "@/types/icon";
import { Menu } from "@headlessui/react";
import { Icon } from "../Icon";
import { SmartLink } from "../SmartLink";
import { ClientOnly } from "../util/ClientOnly";

interface MenuDropdownProps {
  title: string;
  options: MenuDropdownItemProps[];
}

export const MenuDropdown = ({ title, options }: MenuDropdownProps) => {
  // TODO: Menu seems to be undefined on page load
  return Menu ? (
    <div className="relative">
      <Menu>
        <Menu.Button className="flex items-center justify-center space-x-base bg-gray-100 rounded-md p-sm text-sm text-gray">
          <div className="">{title}</div>
          <Icon id="caretdown" />
        </Menu.Button>
        <Menu.Items className="absolute right-0 mt-1 border shadow rounded-md p-1 bg-gray-50">
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
  const className = "p-xs rounded hover:bg-gray-100 flex items-center";
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
