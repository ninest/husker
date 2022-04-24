import { Category } from "@/types/category";
import { dorms } from "./housing";

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
        name: "Office 365",
        href: "https://www.office.com/",
        description: "Outlook and other services",
        icon: "envelope",
      },
      {
        name: "Piazza",
        href: "https://piazza.com",
        description: "Student-professor forum",
        icon: "pizza",
      },
      {
        name: "PaperCut",
        href: "https://papercut.northeastern.edu",
        description: "Print with PaperCut",
        icon: "printer",
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
      {
        name: "My Workday",
        description: "Apply for on campus jobs",
        href: "https://www.myworkday.com/northeastern/d/pex/home.htmld",
      },
      {
        name: "Registrar Self Service",
        href: "https://nubanner.neu.edu/ssomanager/c/SSB?pkg=twbkwbis.P_GenMenu?name=bmenu.P_StuMainMnu",
        description:
          "Registration, student records, account, patterns of attendance",
        icon: "receipt",
      },
      {
        name: "Outlook",
        href: "https://outlook.office.com/mail/inbox",
        description: "Student email",
        icon: "email",
      },
    ],
    pages: [
      {
        name: "Student Hub",
        description: "Open the one and only Student Hub",
        href: "https://me.northeastern.edu/",
        icon: "dizzy",
      },
      {
        name: "COVID-19 Results",
        href: "https://nuniorchard.netsmartcloud.com/",
        description: "View COVID test results",
        icon: "virus",
      },

      {
        name: "Apps",
        description: "A list of Northeastern-related apps to download",
        href: "/services/apps",
      },
      {
        name: "Free",
        description: "Free stuff students can get",
        href: "/services/free",
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
        description: "View academic transcript",
      },
      {
        name: "Degree Audit",
        href: "https://prod-web.neu.edu/wasapp/DARSStudent/RequestAuditServlet",
        description: "View myPaws degree audit and requirements",
        icon: "invoice",
      },
      {
        name: "NUpath Dashboard",
        href: "https://www.northeastern.edu/core/dashboard/",
        description: "View NUpath covered by courses",
        icon: "bookmark",
      },
      {
        name: "Academic Calendar",
        description: "Undergraduate Calendar",
        href: "/courses/undergraduate-calendar",
        icon: "calendar",
      },
    ],
    pages: [
      {
        name: "Course descriptions",
        href: "http://catalog.northeastern.edu/course-descriptions/",
        description: "View course descriptions",
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
        name: "Dining info",
        description: "Information about meal plan",
        href: "/husky-card/dining",
      },
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
        name: "On-campus vendors",
        description: "Where to use dining dollars on campus?",
        href: "https://www.northeastern.edu/huskycard/vendors/on-campus-vendors/",
      },
      {
        name: "Off-campus vendors",
        description: "Places to use dining dollars outside campus",
        href: "https://www.northeastern.edu/huskycard/vendors/off-campus-vendors/",
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
      {
        name: "Financial Aid Status",
        href: "https://www.pfw.neu.edu/NetPartnerStudent/PgHome.aspx",
        description: "Financial Aid Self Service",
        icon: "regmoneybillalt",
      },
      {
        name: "Direct Deposit",
        href: "https://neuforms3.neu.edu/lfserver/DirectDeposit.xfm",
        description: "SFS Direct Deposit",
      },
      {
        name: "Scholarship Application",
        href: "https://nextgensso.com/sp/startSSO.ping?PartnerIdpId=https://neuidmsso.neu.edu/idp/shibboleth&TargetResource=https://northeastern.scholarships.ngwebsolutions.com/scholarx_studentportal.aspx",
        description: "Apply for Scholarships",
      },
    ],
  },
  {
    title: "Housing",
    // TEMPORARY to check SEO
    // slug: "housing",
    slug: "house",
    links: [
      {
        name: "Housing online",
        href: "https://neuidmsso.neu.edu/rmsmercury",
        description: "Apply for housing, roommate information, requests",
        icon: "home",
      },
      {
        name: "Room Rates",
        href: "/housing/room-rates",
        description: "Housing costs",
        icon: "moneybillalt",
      },
      {
        name: "Work Request",
        href: "https://workrequest.neu.edu/logon.aspx?ReturnUrl=%2fFAWorkRequestForm.aspx",
        description: "Request a repair",
        icon: "wrench",
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
      {
        name: "OnTheHub",
        href: "https://neu.onthehub.com/WebStore/Security/SignIn.aspx?rurl=%2fWebStore%2fProductsByMajorVersionList.aspx%3f",
        description: "Free and discounted software",
      },
    ],
    pages: [
      {
        name: "Download books",
        href: "/resources/download-books",
        description: "Download books for free",
      },
    ],
  },
  {
    title: "Miscellaneous",
    slug: "miscellaneous",
    links: [
      {
        name: "DRC services",
        description: "Disability Resource Center",
        href: "https://northeastern.secure.force.com/public/apex/ITSDRCMainEntry",
        icon: "universalaccess",
      },
      {
        name: "Snell Reservations",
        href: "https://northeastern.libcal.com/reserve/",
        description: "Reserve rooms in Snell Library",
        icon: "book",
      },
      {
        name: "Contacts",
        href: "/contacts",
        description: "Important emails and phone numbers",
        icon: "usercircle",
      },
      {
        name: "COVID FAQ",
        href: "https://news.northeastern.edu/coronavirus/spring-2022-faq/",
        description: "Spring 2022 COVID FAQ",
        icon: "virusslash",
      },
    ],
  },
];

export const pages = [
  "/about",
  "/services/apps",
  // "/boston",
  "/services/free",
  "/husky-card/dining",
  "/social/chats",
  "/social/instagram",
  "/resources/download-books",
  "/changelog",

  ...dorms.map((dorm): string => `/house/${dorm.slug}`),
];
