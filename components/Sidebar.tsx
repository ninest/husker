import { SmartLink } from "@/components/SmartLink";
import { contentMap } from "@/content/map";
import { highlightedSidebarLinks, sidebarLinks } from "@/content/sidebar";
import { useSecretSettings, useSettings, useTheme } from "@/hooks/settings";
import { IconId } from "@/types/icon";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Button } from "./Button";
import { ClientOnly } from "./ClientOnly";
import { Icon } from "./Icon";
import { Search } from "./Search";
import { Spacer } from "./Spacer";

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

  const { secretSettingsEnabled, secretSettings, setSecretSettingsEnabled } =
    useSecretSettings();

  const [settingsClicked, setSettingsClicked] = useState(0);

  useEffect(() => {
    if (settingsClicked > 7) {
      setSecretSettingsEnabled(!secretSettingsEnabled);
      setSettingsClicked(0);
    }
  }, [settingsClicked]);

  return (
    <aside className="bg-light md:w-72 lg:w-80 h-screen overflow-y-scroll sticky z-50 top-0 left-0 bottom-0 border-r">
      {/* Close button for mobile only */}
      <div className="flex items-center pt-base px-md">
        <button
          onClick={onCloseClick}
          className="block md:hidden mr-base border p-2 rounded"
        >
          <Icon id="x"></Icon>
        </button>
        <SmartLink
          href="/"
          className="font-display font-black flex items-baseline space-x-1"
          suppressHydrationWarning
        >
          <div className="text-lg text-dark">Husker</div>
          <ClientOnly>
            {secretSettings?.augmentedTitle && (
              <div className="text-gray text-lg">
                {secretSettings.augmentedTitle}
              </div>
            )}
          </ClientOnly>
        </SmartLink>
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
            <Button
              key={link.href}
              size="sm"
              icon={link.icon as IconId}
              href={link.href}
            >
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
      <Spacer size="3xl"></Spacer>
      <Spacer size="3xl"></Spacer>

      <section className="fixed bottom-0 left-0 w-full md:w-72 lg:w-80 bg-light border-r">
        <hr />

        <div className="p-md flex justify-between items-center">
          <button
            onClick={toggleTheme}
            className="text-sm flex items-center space-x-base -m-sm p-sm hover:bg-gray-50 rounded"
          >
            <Icon id={isLightTheme ? "regmoon" : "regsun"} />
            <div className="font-semibold text-gray">
              {isLightTheme ? "Dark" : "Light"} theme
            </div>
          </button>

          <SmartLink
            href="/settings"
            className="text-sm -m-sm p-sm hover:bg-gray-50 rounded"
            onClick={() => setSettingsClicked(settingsClicked + 1)}
          >
            <Icon id="cog" />
          </SmartLink>
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
