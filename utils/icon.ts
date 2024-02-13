import { IconType } from "react-icons";
import {
  FaBookBookmark,
  FaBookmark,
  FaCalendar,
  FaDumbbell,
  FaFile,
  FaFileInvoice,
  FaGear,
  FaMoneyCheckDollar,
  FaNetworkWired,
  FaPrint,
  FaRegClock,
  FaRegThumbsDown,
  FaTicket,
  FaEnvelope,
} from "react-icons/fa6";
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
  FaPrint,
  FaNetworkWired,
  FaCalendar,
  FaBookmark,
  FaBookBookmark,
  FaMoneyCheckDollar,
  FaGear,
  FaRegThumbsDown,
  FaRegClock,
  FaDumbbell,
  FaTicket,
  FaEnvelope,
};
export type IconSlug = keyof typeof iconMap;

export function getIcon(slug: IconSlug | string): IconType {
  if (slug in iconMap) return iconMap[slug as IconSlug];
  else return FaFile;
}
