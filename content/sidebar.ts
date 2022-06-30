import { isStartOfSemester } from "@/lib/here";

export const sidebarLinks = [
  { text: "Links", href: "/" },
  { text: "Contacts", href: "/contacts" },
  { text: "About", href: "/about" },
  { text: "Favorites", href: "/favorites" },
  { text: "Contribute", href: "/contribute" },
  { text: "Changelog", href: "/changelog" },
];

export const highlightedSidebarLinks = [
  {
    text: "Door",
    href: "https://huskycardcenter.neu.edu/student/openmydoor.php",
    icon: "doorclosed",
  },
  { text: "Discord", icon: "discord", href: "https://discord.gg/j7WkFct2rY" },

  // No longer required:
  // {
  //   text: "Wellness",
  //   href: "https://wellness-check.northeastern.edu/?utm_source=student&utm_medium=portal&utm_campaign=reopening",
  //   icon: "halfthermometer",
  // },
];
