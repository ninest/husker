import { IconId } from "@/types/icon";
import { Button } from "@/components/button/Button";
import { Icon } from "../Icon";
import { SmartLink } from "../SmartLink";

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
    // {
    //   title: "Status",
    //   icon: "exclamationtriangle",
    //   href: "https://northeastern.statuspage.io/",
    // },
    {
      title: "Discord",
      icon: "discord",
      href: "https://discord.gg/j7WkFct2rY",
    },
  ];
  return (
    <div className="wrapper py-md flex items-center space-x-lg">
      {links.map((link) => {
        return (
          <SmartLink
            href={link.href}
            key={link.href}
            className="text-sm flex items-center space-x-base -m-xs p-xs hover:bg-gray-50 dark:hover:bg-gray-900 rounded"
          >
            <Icon id={link.icon as IconId} />
            <div className="text-gray font-semibold text-sm">{link.title}</div>
          </SmartLink>
        );
      })}
    </div>
  );
};
