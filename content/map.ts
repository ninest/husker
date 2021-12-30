import { Category } from "@/types/category";

export const contentMap: Category[] = [
  {
    slug: "services",
    title: "Services",
    links: [
      {
        name: "Canvas",
        href: "https://northeastern.instructure.com/",
        description: "Manage courses and grades",
        icon: "invoice",
      },

      {
        name: "Piazza",
        href: "https://piazza.com",
        description: "Student-professor forum",
        icon: "pizza",
      },
      {
        name: "Trace",
        href: "https://www.applyweb.com/eval/shibboleth/neu/36892",
        description: "Professor evaluation",
        icon: "chalkboard",
      },
      {
        name: "Navigate",
        href: "https://northeastern.campus.eab.com/capabilities#/my/appointment-dashboard?tab_name=appointments",
        description: "Schedule meetings",
        icon: "phone",
      },
      {
        name: "NUWorks",
        href: "https://northeastern-csm.symplicity.com/students/index.php?s=home",
        description: "Find work",
        icon: "network",
      },
    ],
    pages: [
      {
        name: "Apps",
        description: "A list of Northeastern-related apps to download",
        href: "/apps",
      },
    ],
  },
  {
    slug: "personal",
    title: "Personal",
    links: [
      {
        name: "Daily wellness",
        href: "https://wellness-check.northeastern.edu/?utm_source=student&utm_medium=portal&utm_campaign=reopening",
        description: "COVID-19 Daily wellness",
        icon: "halfthermometer",
      },
      {
        name: "COVID-19 test",
        href: "https://northeastern.sharepoint.com/sites/covidscheduler/SitePages/TestScheduler.aspx",
        description: "Book a COVID-19 test",
        icon: "virusslash",
      },
      {
        name: "Employment Hub",
        description: "Access student employment hub",
        href: "https://studentemployment.neu.edu/Cmx_Content.aspx?cpId=10",
      },
    ],
    pages: [
      {
        name: "Apps",
        description: "A list of Northeastern-related apps to download",
        href: "/apps",
      },
    ],
  },
  {
    title: "Courses",
    slug: "courses",
    links: [
      {
        name: "Registration",
        href: "https://nubanner.neu.edu/StudentRegistrationSsb/ssb/classRegistration/classRegistration",
        description: "Course registration on Banner",
        icon: "book",
      },
      {
        name: "Schedule",
        href: "https://prod-web.neu.edu/wasapp/bn/AdmittedCourseSchedule/secure/index.jsp",
        description: "Summarized semester schedule",
        icon: "calendar",
      },
      {
        name: "Grades",
        href: "https://nubanner.neu.edu/ssomanager/c/SSB?pkg=bwskogrd.P_ViewTermGrde",
        description: "View grades and GPA",
      },
      {
        name: "Transcript",
        href: "https://nubanner.neu.edu/ssomanager/c/SSB?pkg=bwskotrn.P_ViewTermTran",
        description: "View degree audit",
      },
    ],
    pages: [
      {
        name: "Course descriptions",
        href: "http://catalog.northeastern.edu/course-descriptions/",
        description: "View course descriptions",
      },
      {
        name: "NUPath dashboard",
        href: "https://www.northeastern.edu/core/dashboard/",
        description: "View course NUPath, filter courses by NUPath",
      },
      {
        name: "SearchNEU",
        href: "https://searchneu.com/",
        description: "Courses list, notifications for seat openings",
        icon: "search",
      },
      {
        name: "RateMyCourses",
        href: "https://ratemycourses.io/NEU",
        description: "Course ratings",
        icon: "starhalf",
      },
    ],
  },
  {
    title: "Husky Card",
    slug: "husky-card",
    links: [
      {
        name: "Balance",
        href: "https://nu.outsystemsenterprise.com/StudentFinance/HuskyCardAccounts",
        description: "Account balances and transaction history",
        icon: "moneycheckalt",
      },
      {
        name: "Meal plan",
        href: "https://nubanner.neu.edu/ssomanager/c/SSB?pkg=bzskoacc.p_selmp",
        description: "Change meal plan",
        icon: "frown",
      },
      {
        name: "Preferences",
        href: "https://huskycardcenter.neu.edu/student/welcome.php",
        description: "Balance, lost card, open my door, settings",
        icon: "cog",
      },
    ],
    pages: [
      {
        name: "Menus",
        href: "https://nudining.com/public/menus",
        description: "Dining hall menus",
        icon: "utensils",
      },
      {
        name: "Hours",
        href: "https://nudining.com/public/hours",
        description: "Dining hall and restaurants timings",
        icon: "clock",
      },
      {
        name: "Dining info",
        description: "Information about meal plan",
        href: "/dining",
      },
    ],
  },
  {
    title: "Financial",
    slug: "financial",
    links: [
      {
        name: "E-bill",
        href: "https://nu.outsystemsenterprise.com/StudentFinance/ViewBill",
        description: "View and pay bill",
        icon: "moneybillalt",
      },
      {
        name: "Payment Plan",
        href: "https://sso.myonplanu.com/landing/northeastern",
        description: "Set up and view payment plan",
        icon: "regmoneybillalt",
      },
    ],
  },
  {
    title: "Housing",
    slug: "housing",
    links: [
      {
        name: "Housing online",
        href: "https://neuidmsso.neu.edu/rmsmercury",
        description: "Apply for housing, roommate information, requests",
        icon: "home",
      },
    ],
    pages: [
      {
        name: "Northeastern Dorms",
        href: "https://sites.google.com/view/neudorms/home",
        description: "Images and descriptions of dorms",
      },
      {
        name: "Map, Floor plan, Room layouts",
        href: "https://www.northeastern.edu/housing/dnaesantoelrihtriseertn/",
        description: "Layouts and floor plans of dorms",
      },
    ],
  },
  {
    title: "Social",
    slug: "social",
    links: [
      {
        name: "Clubs and organizations",
        href: "https://neu.campuslabs.com/engage/",
        description: "Organizations list and description",
      },
    ],
    pages: [
      {
        name: "Group chats list",
        description: "GroupMe and other chats to join",
        href: "/social/chats",
      },
      {
        name: "Instagram pages",
        description: "Official and student-run Instagram pages",
        href: "/social/instagram",
      },
    ],
  },
  {
    title: "Resources",
    slug: "resources",
    links: [
      {
        name: "Find textbooks",
        href: "https://northeastern.bncollege.com/shop/northeastern/page/find-textbooks",
        description: "Northeastern book store",
      },
    ],
    pages: [
      {
        name: "Download books",
        href: "https://northeastern.bncollege.com/shop/northeastern/page/find-textbooks",
        description: "Download books for free",
      },
    ],
  },
];

export const pages = [
  "/about",
  "/apps",
  "/boston",
  "/social/chats",
  "/social/instagram",
  "/changelog",
];
