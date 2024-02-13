import { IconSlug } from "@/utils/icon";

type SiteLink = { inSidebar?: boolean; icon: IconSlug; title: string; href: string };

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
    { inSidebar: false, icon: "FaEnvelope", title: "Mailing list", href: "http://eepurl.com/imB7zE" },
    { inSidebar: false, icon: "FaEnvelope", title: "Discord", href: "https://discord.gg/j7WkFct2rY" },
    { inSidebar: false, icon: "FaEnvelope", title: "GitHub", href: "https://github.com/ninest/huskinfo" },
  ],
};
