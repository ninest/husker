import { IconId } from "@/types/icon";
import { Button } from "./Button";
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
    {
      title: "Status",
      icon: "exclamationtriangle",
      href: "https://northeastern.statuspage.io/",
    },
  ];
  return (
    <div className="wrapper p-md flex items-center space-x-lg">
      {links.map((link) => {
        return (
          <SmartLink
            href={link.href}
            key={link.href}
            className="text-sm flex items-center space-x-base -m-xs p-xs hover:bg-gray-50 rounded"
          >
            <Icon id={link.icon as IconId} />
            <div className="text-gray font-semibold text-sm">{link.title}</div>
          </SmartLink>
        );
      })}
    </div>
  );
};
