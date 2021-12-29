import { Category } from "@/types/category";

export const contentMap: Category[] = [
  {
    slug: "service",
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
  },
];

export const pages = ["/about", "/contribute", "/apps", "/boston"];
