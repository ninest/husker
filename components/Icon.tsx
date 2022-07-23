import { IconId } from "@/types/icon";
import clsx from "clsx";
import { HTMLAttributes } from "react";
import {
  FaApple,
  FaBook,
  FaBookmark,
  FaBug,
  FaCalendar,
  FaCaretDown,
  FaCaretLeft,
  FaCaretRight,
  FaCaretUp,
  FaChalkboard,
  FaCheck,
  FaCheckCircle,
  FaChevronLeft,
  FaClock,
  FaCog,
  FaDiscord,
  FaDizzy,
  FaDog,
  FaDoorClosed,
  FaDoorOpen,
  FaDownload,
  FaExclamationTriangle,
  FaFileInvoice,
  FaFirefox,
  FaGithub,
  FaGooglePlay,
  FaGripLines,
  FaHandPaper,
  FaHeart,
  FaHome,
  FaImage,
  FaInfoCircle,
  FaMapMarkerAlt,
  FaMoneyBillAlt,
  FaMoneyCheckAlt,
  FaNetworkWired,
  FaPen,
  FaPhone,
  FaPizzaSlice,
  FaPlus,
  FaPrint,
  FaReceipt,
  FaReddit,
  FaRegBuilding,
  FaRegClock,
  FaRegCommentAlt,
  FaRegEnvelope,
  FaRegFileAlt,
  FaRegFrown,
  FaRegHeart,
  FaRegMoneyBillAlt,
  FaRegMoon,
  FaRegSmileBeam,
  FaRegSun,
  FaSearch,
  FaStarHalfAlt,
  FaThermometerHalf,
  FaTimes,
  FaTrash,
  FaUniversalAccess,
  FaUserCircle,
  FaUtensils,
  FaVideo,
  FaVirus,
  FaVirusSlash,
  FaWrench,
} from "react-icons/fa";

export interface IconProps extends HTMLAttributes<HTMLDivElement> {
  id?: string;
}

export const Icon = ({ id = "filealt", ...props }: IconProps) => {
  const className = clsx("text-gray", props.className);

  // if (id == "filealt") return <FaFileAlt className={className} />;
  switch (id) {
    case "filealt":
      return <FaRegFileAlt className={className} />;
    case "invoice":
      return <FaFileInvoice className={className} />;
    case "pizza":
      return <FaPizzaSlice className={className} />;
    case "chalkboard":
      return <FaChalkboard className={className} />;
    case "phone":
      return <FaPhone className={className} />;
    case "printer":
      return <FaPrint className={className} />;
    case "network":
      return <FaNetworkWired className={className} />;
    case "halfthermometer":
      return <FaThermometerHalf className={className} />;
    case "virusslash":
      return <FaVirusSlash className={className} />;
    case "virus":
      return <FaVirus className={className} />;
    case "calendar":
      return <FaCalendar className={className} />;
    case "book":
      return <FaBook className={className} />;
    case "moneycheckalt":
      return <FaMoneyCheckAlt className={className} />;
    case "cog":
      return <FaCog className={className} />;
    case "frown":
      return <FaRegFrown className={className} />;
    case "moneybillalt":
      return <FaMoneyBillAlt className={className} />;
    case "regmoneybillalt":
      return <FaRegMoneyBillAlt className={className} />;
    case "home":
      return <FaHome className={className} />;
    case "caretright":
      return <FaCaretRight className={className} />;
    case "caretleft":
      return <FaCaretLeft className={className} />;
    case "caretdown":
      return <FaCaretDown className={className} />;
    case "caretup":
      return <FaCaretUp className={className} />;
    case "search":
      return <FaSearch className={className} />;
    case "starhalf":
      return <FaStarHalfAlt className={className} />;
    case "utensils":
      return <FaUtensils className={className} />;
    case "clock":
      return <FaRegClock className={className} />;
    case "x":
      return <FaTimes className={className} />;
    case "griplines":
      return <FaGripLines className={className} />;
    case "dog":
    case "husky":
      return <FaDog className={className} />;
    case "regmoon":
      return <FaRegMoon className={className} />;
    case "regsun":
      return <FaRegSun className={className} />;
    case "github":
      return <FaGithub className={className} />;
    case "pen":
      return <FaPen className={className} />;
    case "outlineheart":
      return <FaRegHeart className={className} />;
    case "heart":
      return <FaHeart className={className} />;
    case "apple":
      return <FaApple className={className} />;
    case "googleplay":
      return <FaGooglePlay className={className} />;
    case "firefox":
      return <FaFirefox className={className} />;
    case "markeralt":
      return <FaMapMarkerAlt className={className} />;
    case "exclamationtriangle":
      return <FaExclamationTriangle className={className} />;
    case "bug":
      return <FaBug className={className} />;
    case "reddit":
      return <FaReddit className={className} />;
    case "smilebeam":
      return <FaRegSmileBeam className={className} />;
    case "info":
      return <FaInfoCircle className={className} />;
    case "bookmark":
      return <FaBookmark className={className} />;
    case "universalaccess":
      return <FaUniversalAccess className={className} />;
    case "download":
      return <FaDownload className={className} />;
    case "usercircle":
      return <FaUserCircle className={className} />;
    case "envelope":
      return <FaRegEnvelope className={className} />;
    case "email":
      return <FaRegEnvelope className={className} />;
    case "website":
      return <FaFirefox className={className} />;
    case "address":
      return <FaRegBuilding className={className} />;
    case "commentalt":
      return <FaRegCommentAlt className={className} />;
    case "dizzy":
      return <FaDizzy className={className} />;
    case "wrench":
      return <FaWrench className={className} />;
    case "receipt":
      return <FaReceipt className={className} />;
    case "dooropen":
      return <FaDoorOpen className={className} />;
    case "doorclosed":
      return <FaDoorClosed className={className} />;
    case "image":
      return <FaImage className={className} />;
    case "video":
      return <FaVideo className={className} />;
    case "plus":
      return <FaPlus className={className} />;
    case "hand":
      return <FaHandPaper className={className} />;
    case "discord":
      return <FaDiscord className={className} />;
    case "trash":
      return <FaTrash className={className} />;
    case "chevronright":
      return <FaChevronLeft className={className} />;
    case "check":
      return <FaCheck className={className} />;
    case "checkcircle":
      return <FaCheckCircle className={className} />;

    default:
      return <FaRegFileAlt className={className} />;
  }
};
