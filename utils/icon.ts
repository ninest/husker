import { IconType } from "react-icons";
import { FaFile, FaFileInvoice } from "react-icons/fa6";
import { LuLayoutDashboard, LuBook, LuNewspaper, LuDumbbell, LuPlus, LuInfo, LuSettings2 } from "react-icons/lu";

export const iconMap = {
  FaFile,
  FaFileInvoice,
  LuLayoutDashboard,
  LuBook,
  LuNewspaper,
  LuDumbbell,
  LuPlus,
  LuInfo,
  LuSettings2,
};
export type IconSlug = keyof typeof iconMap;

export function getIcon(slug: IconSlug | string): IconType {
  if (slug in iconMap) return iconMap[slug as IconSlug];
  else return FaFile;
}
