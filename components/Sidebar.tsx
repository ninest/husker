import { FaSearch } from "react-icons/fa";
import { SmartLink } from "@/components/SmartLinks";
import { contentMap } from "@/content/map";
import { Icon } from "./Icon";
import { useEffect } from "react";
import { Search } from "./Search";
import { useRouter } from "next/router";
import { Spacer } from "./Spacer";
import { useTheme } from "@/lib/theme";
import { highlightedSidebarLinks, sidebarLinks } from "@/content/sidebar";
import { Button } from "./Button";
import { IconId } from "@/types/icon";

interface SidebarProps {
  onCloseClick: () => void;
}

export const Sidebar = ({ onCloseClick }: SidebarProps) => {
  /* When route changes, close sidebar. It means a link has been clicked */
  const router = useRouter();
  useEffect(() => {
    onCloseClick();
  }, [router.asPath]);

  const { toggleTheme, isLightTheme, isDarkTheme } = useTheme();

  return (
    <aside className="bg-light md:w-64 lg:w-80 h-screen overflow-y-scroll sticky top-0 border-r">
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

      {/* Quick access highlight links */}
      <div className="px-md grid gap-base grid-cols-2">
        {highlightedSidebarLinks.map((link) => {
          return (
            <Button size="sm" icon={link.icon as IconId} href={link.href}>
              {link.text}
            </Button>
          );
        })}
      </div>

      <Spacer size="md"></Spacer>
      <hr />
      <Spacer size="md"></Spacer>

      <nav className="px-md text-sm flex flex-col space-y-base">
        {sidebarLinks.map((link) => {
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

      <Spacer size="3xl"></Spacer>
      <Spacer size="2xl"></Spacer>

      <section className="fixed bottom-0 w-full md:w-64 lg:w-80 bg-light border-r">
        <hr />

        <div className="p-md">
          <button
            onClick={toggleTheme}
            className="text-sm flex items-center space-x-base -m-xs p-xs hover:bg-gray-50 rounded"
          >
            <Icon id={isLightTheme ? "regmoon" : "regsun"}></Icon>
            <div className="font-semibold text-gray">
              {isLightTheme ? "Dark" : "Light"} theme
            </div>
          </button>
        </div>
      </section>
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
