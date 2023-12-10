import { IconSlug } from "@/utils/icon";

type SiteLink = { icon: IconSlug; title: string; href: string };

interface SiteMap {
  topLevel: SiteLink[];
  utility: SiteLink[];
}

export const siteMap: SiteMap = {
  topLevel: [
    // Which one looks better? LuHome or LuLayoutDashboard?
    { icon: "LuLayoutDashboard", title: "Husker Links", href: "/" },
    { icon: "LuBook", title: "Husker Courses", href: "/courses" },
    { icon: "LuNewspaper", title: "Husker Wiki", href: "/wiki" },
    { icon: "LuDumbbell", title: "Husker Gym", href: "/gym" },
  ],
  utility: [
    { icon: "LuPlus", title: "Contribute", href: "/contribute" },
    { icon: "LuInfo", title: "About", href: "/about" },
    { icon: "LuSettings2", title: "Settings", href: "/settings" },
  ],
};
