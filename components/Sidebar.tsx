import { FaSearch } from "react-icons/fa";
import { SmartLink } from "@/components/SmartLinks";
import { contentMap } from "@/content/map";
import { Icon } from "./Icon";
import { useEffect, useRef, useState } from "react";
import { LinkButton } from "./LinkButton";
import { Link } from "@/types/category";
import { search } from "@/lib/search";
import { Search } from "./Search";
import { useRouter } from "next/router";
import { Spacer } from "./Spacer";

interface SidebarProps {
  onCloseClick: () => void;
}

export const Sidebar = ({ onCloseClick }: SidebarProps) => {
  const links = [
    { text: "Index", href: "/" },
    { text: "About", href: "/about" },
    { text: "Contribute", href: "/contribute" },
    { text: "Changelog", href: "/changelog" },
    // { text: "More", href: "/more" },
  ];

  /* When route changes, close sidebar. It means a link has been clicked */
  const router = useRouter();
  useEffect(() => {
    onCloseClick();
  }, [router.asPath]);

  return (
    <aside className="bg-light md:w-80 h-screen overflow-y-scroll sticky top-0 border-r">
      {/* Close button for mobile only */}
      <div className="flex items-center pt-base px-md">
        <button
          onClick={onCloseClick}
          className="block md:hidden mr-base border p-2 rounded"
        >
          <Icon id="x"></Icon>
        </button>
        <div className="font-display font-black text-lg text-dark">Husker</div>
      </div>

      <Spacer></Spacer>
      <Search></Search>
      <Spacer size="md"></Spacer>
      <hr />
      <Spacer size="md"></Spacer>

      <nav className="px-md text-sm flex flex-col space-y-base">
        {links.map((link) => {
          return (
            <div key={link.href}>
              <SidebarLink href={link.href} title={link.text}></SidebarLink>
            </div>
          );
        })}
      </nav>

      <Spacer size="md"></Spacer>
      <hr />
      <Spacer size="md"></Spacer>

      <div className="px-md text-sm flex flex-col space-y-base">
        {contentMap.map((category) => {
          return (
            <div key={category.slug}>
              <SidebarLink
                href={`/${category.slug}`}
                title={category.title}
              ></SidebarLink>
            </div>
          );
        })}
      </div>
    </aside>
  );
};

interface SidebarLinkProps {
  href: string;
  title: string;
}
const SidebarLink = ({ href, title }: SidebarLinkProps) => {
  return (
    <SmartLink
      href={href}
      className="block font-semibold text-gray-dark -m-xs p-xs hover:bg-gray-50 rounded"
      activeClassName="bg-gray-100"
    >
      {title}
    </SmartLink>
  );
};
