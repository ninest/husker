import { highlightedSidebarLinks } from "@/content/sidebar";
import { IconId } from "@/types/icon";
import { Icon } from "./Icon";
import { SmartLink } from "./SmartLinks";

interface MobileNavbarProps {
  onMenuClick: () => void;
}
export const MobileNavbar = ({ onMenuClick }: MobileNavbarProps) => {
  return (
    <header className="bg-light  px-md py-base border-b flex items-center justify-between">
      <div className="flex items-center">
        <button
          className="text-gray border p-2 rounded mr-base"
          onClick={onMenuClick}
        >
          <Icon id="griplines"></Icon>
        </button>
        <SmartLink
          href="/"
          className="font-display font-black text-lg text-dark"
        >
          Husker
        </SmartLink>
      </div>

      <div className="flex items-center space-x-xs">
        <div className="w-40 overflow-hidden flex justify-end ">
          {highlightedSidebarLinks.map((link) => {
            return (
              <SmartLink
                href={link.href}
                className="hover:bg-gray-100 p-2 rounded"
              >
                <Icon id={link.icon as IconId} />
              </SmartLink>
            );
          })}
        </div>

        <button
          className="text-gray border p-2 rounded-full"
          onClick={onMenuClick}
        >
          <Icon id="search"></Icon>
        </button>
      </div>
    </header>
  );
};
