import { IconType } from "react-icons";
import { FaFile, FaFileInvoice } from "react-icons/fa6";

export const iconMap = { FaFile, FaFileInvoice };
export type IconSlug = keyof typeof iconMap;

export function getIcon(slug: IconSlug | string): IconType {
  if (slug in iconMap) return iconMap[slug as IconSlug];
  else return FaFile;
}
