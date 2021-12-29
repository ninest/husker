import {
  FaChalkboard,
  FaFileInvoice,
  FaNetworkWired,
  FaPhone,
  FaPizzaSlice,
  FaRegFileAlt,
  FaThermometerHalf,
  FaVirusSlash,
} from "react-icons/fa";

export const iconMap = {
  filealt: FaRegFileAlt,
  invoice: FaFileInvoice,
  pizza: FaPizzaSlice,
  chalkboard: FaChalkboard,
  phone: FaPhone,
  network: FaNetworkWired,
  halfthermometer: FaThermometerHalf,
  virusslash: FaVirusSlash,
};
export type IconId = keyof typeof iconMap;
