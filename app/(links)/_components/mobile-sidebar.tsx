import { SimpleSidebarLinkButton } from "@/components/simple-sidebar-link-button";
import { siteMap } from "@/map";

interface MobileSidebarProps {}

export function MobileSidebar() {
  return (
    <>
      <div className="space-x-2 flex items-center">
        {siteMap.topLevel.map((link) => {
          return <SimpleSidebarLinkButton key={link.href} href={link.href} title={link.title} />;
        })}
      </div>
      <hr className="my-3" />
      <div className="space-x-2 flex items-center">
        {siteMap.utility.map((link) => {
          return <SimpleSidebarLinkButton key={link.href} href={link.href} title={link.title} />;
        })}
      </div>
    </>
  );
}
