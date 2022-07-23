import { highlightedSidebarLinks } from "@/content/sidebar";
import { IconId } from "@/types/icon";
import { Button } from "@/components/button/Button";
import { Icon } from "../Icon";
import { SmartLink } from "../SmartLink";

interface MobileNavbarProps {
  onMenuClick: () => void;
}
export const MobileNavbar = ({ onMenuClick }: MobileNavbarProps) => {
  return (
    <header className="bg-light dark:bg-dark px-md py-base border-b dark:border-gray-900 flex items-center justify-between">
      <div className="flex items-center">
        <button
          className="text-gray border dark:border-gray-800 p-2 rounded mr-base"
          onClick={onMenuClick}
        >
          <Icon id="griplines"></Icon>
        </button>
        <SmartLink href="/" className="font-display font-black text-lg text-dark dark:text-light">
          Husker
        </SmartLink>
      </div>

      <div className="flex items-center space-x-xs">
        <div className="w-40 overflow-hidden flex justify-end space-x-xs">
          {highlightedSidebarLinks.map((link) => {
            return (
              <SmartLink
                key={link.href}
                href={link.href}
                className="text-gray border dark:border-gray-800 p-2 rounded-md"
              >
                <Icon id={link.icon as IconId} />
              </SmartLink>
            );
          })}
        </div>

        <button
          className="text-gray border dark:border-gray-800 p-2 rounded-full"
          onClick={() => {
            onMenuClick();
            // Manually focus search bar (yeah, I'm lazy)
            setTimeout(() => document.getElementById("search-input")?.focus(), 1);
          }}
        >
          <Icon id="search"></Icon>
        </button>
      </div>
    </header>
  );
};
