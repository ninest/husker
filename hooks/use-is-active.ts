import { usePathname } from "next/navigation";

export function useIsActive({ href, parent = false }: { href: string; parent?: boolean }) {
  const pathname = usePathname();
  const isActive = parent
    ? pathname.split("?")[0].split("#")[0].startsWith(href)
    : pathname.split("?")[0].split("#")[0] === href;

  // If it's the route ("/" for Husker links), ignore `parent` because otherwise everything comes under it
  if (href === "/") return pathname.split("?")[0].split("#")[0] === href;

  return isActive;
}
