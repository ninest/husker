import { SimpleSidebarLinkButton } from "@/components/simple-sidebar-link-button";
import { siteMap } from "@/map";
import { ComponentProps } from "react";

type MobileSidebarProps = ComponentProps<"div"> & {};

export function MobileSidebar({ children }: MobileSidebarProps) {
  return (
    <>
      <div className="space-x-2 flex items-center">
        {siteMap.topLevel.map((link) => {
          return <SimpleSidebarLinkButton key={link.href} href={link.href} title={link.title} />;
        })}
      </div>
      {children ? (
        <>
          <hr className="my-3" />
          {children}
          <hr className="my-3" />
        </>
      ) : (
        <>
          <hr className="my-3" />
        </>
      )}
      <div className="space-x-2 flex items-center">
        {siteMap.utility.map((link) => {
          return <SimpleSidebarLinkButton key={link.href} href={link.href} title={link.title} />;
        })}
      </div>
    </>
  );
}
