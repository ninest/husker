import { Icon } from "./Icon";
import { SmartLink } from "./SmartLink";

export const Footer = () => {
  const links = [
    {
      title: "GitHub",
      icon: "github",
      href: "https://github.com/ninest/huskinfo",
    },
    {
      title: "Contribute",
      icon: "outlineheart",
      href: "/contribute",
    },
  ];
  return (
    <div className="wrapper flex items-center space-x-lg">
      {links.map((link) => {
        return (
          <div className="flex items-center space-x-base -m-xs p-xs rounded hover:bg-gray-100">
            {/* @ts-ignore */}
            <Icon id={link.icon} />
            <SmartLink
              className="text-gray font-semibold text-sm"
              href={link.href}
            >
              {link.title}
            </SmartLink>
          </div>
        );
      })}
    </div>
  );
};
