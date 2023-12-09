import { SimpleSidebarLinkButton } from "@/components/simple-sidebar-link-button";

interface MobileSidebarProps {}

export function MobileSidebar() {
  return (
    <>
      <div className="space-y-2">
        <SimpleSidebarLinkButton href={`/`} title={"Home"} />
        <SimpleSidebarLinkButton href={`/about`} title={"About"} />
        <SimpleSidebarLinkButton href={`/contribute`} title={"Contribute"} />
        <SimpleSidebarLinkButton href={`/settings`} title={"Settings"} />
      </div>
    </>
  );
}
