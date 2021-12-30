import {
  FaBook,
  FaCalendar,
  FaChalkboard,
  FaCog,
  FaFileInvoice,
  FaHome,
  FaMoneyBillAlt,
  FaMoneyCheckAlt,
  FaNetworkWired,
  FaPhone,
  FaPizzaSlice,
  FaRegFileAlt,
  FaRegFrown,
  FaThermometerHalf,
  FaVirusSlash,
  FaCaretRight,
  FaSearch,
  FaStarHalfAlt,
  FaUtensils,
  FaRegClock,
  FaTimes,
  FaGripLines,
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
  calendar: FaCalendar,
  book: FaBook,
  moneycheckalt: FaMoneyCheckAlt,
  cog: FaCog,
  frown: FaRegFrown,
  moneybillalt: FaMoneyBillAlt,
  home: FaHome,
  caretright: FaCaretRight,
  search: FaSearch,
  starhalf: FaStarHalfAlt,
  utensils: FaUtensils,
  clock: FaRegClock,
  x: FaTimes,
  griplines: FaGripLines,
};
export type IconId = keyof typeof iconMap;