import { Section } from "@/types/resource";

interface Data {
  sections: Section[];
}

export default {
  sections: [
    {
      title: "Services",
      slug: "services",
      bricks: [
        {
          name: "Canvas",
          href: "https://northeastern.instructure.com/",
        },
        {
          name: "Husky Connect",
          href: "https://orientation.northeastern.wisr.io/dashboard",
        },
        {
          name: "Piazza",
          href: "https://piazza.com",
        },
        {
          name: "Trace",
          href: "https://www.applyweb.com/eval/shibboleth/neu/36892",
        },
        {
          name: "Navigate",
          href: "https://northeastern.campus.eab.com/capabilities#/my/appointment-dashboard?tab_name=appointments",
        },
        {
          name: "NUWorks",
          href: "https://northeastern-csm.symplicity.com/students/index.php?s=home",
        },
        {
          name: "Yammer",
          href: "https://web.yammer.com/main/feed",
        },
      ],
      moreInfoLink: {
        name: "More about services",
        href: "/services",
      },
    },
    {
      title: "Personal",
      slug: "personal",
      bricks: [
        {
          name: "Student Hub",
          href: "https://northeastern.sharepoint.com/sites/studenthub?wa=wsignin1.0",
        },
        {
          name: "Wellness Portal",
          href: "https://services.northeastern.edu/wellness?utm_source=student&utm_medium=portal&utm_campaign=reopening",
        },
        {
          name: "Daily wellness check",
          href: "https://wellness-check.northeastern.edu/?utm_source=student&utm_medium=portal&utm_campaign=reopening",
        },
        {
          name: "COVID-19 test scheduling",
          href: "https://northeastern.sharepoint.com/sites/covidscheduler/SitePages/TestScheduler.aspx",
        },
        {
          name: "Employment",
          href: "https://studentemployment.neu.edu/Cmx_Content.aspx?cpId=10",
        },
      ],
      list: [
        {
          name: "Apps to download",
          href: "/apps",
        },
      ],
      info: "Also be sure to download these apps",
    },
    {
      title: "Courses",
      slug: "courses",
      bricks: [
        {
          name: "Registration",
          href: "https://nubanner.neu.edu/StudentRegistrationSsb/ssb/classRegistration/classRegistration",
        },
        {
          name: "Schedule",
          href: "https://prod-web.neu.edu/wasapp/bn/AdmittedCourseSchedule/secure/index.jsp",
        },
      ],
      list: [
        {
          name: "Course descriptions",
          href: "http://catalog.northeastern.edu/course-descriptions/",
        },
        {
          name: "NUPath dashboard",
          href: "https://www.northeastern.edu/core/dashboard/",
        },
        {
          name: "SearchNEU",
          href: "https://searchneu.com/",
          icon: "external",
        },
        {
          name: "RateMyCourses",
          href: "https://ratemycourses.io/NEU",
          icon: "external",
        },
      ],
    },
    {
      title: "Husky Card",
      slug: "husky-card",
      bricks: [
        {
          name: "Account details",
          href: "https://nu.outsystemsenterprise.com/StudentFinance/HuskyCardAccounts",
        },
        {
          name: "Account preferences",
          href: "https://huskycardcenter.neu.edu/student/welcome.php",
        },
        {
          name: "Meal plan",
          href: "https://nubanner.neu.edu/ssomanager/c/SSB?pkg=bzskoacc.p_selmp",
        },
      ],
      list: [
        {
          name: "Menus",
          href: "https://nudining.com/public/menus",
          icon: "external",
        },
        {
          name: "Dining info",
          href: "/dining",
        },
      ],
    },
    {
      title: "Financial",
      slug: "financial",
      bricks: [
        {
          name: "E-bill",
          href: "https://nu.outsystemsenterprise.com/StudentFinance/ViewBill",
        },
        {
          name: "International payment",
          href: "https://prod-web.neu.edu/wasapp/ipayments/secure/main.action",
        },
        {
          name: "NUSHP",
          href: "https://go.gallagherstudent.com/en/Universities/Northeastern-University/Home/Student/Dashboard&sa=D&source=editors&ust=1628634466384653&usg=AFQjCNGV1OmhtCg64DKWNVYHztvfbIVuCQ",
        },
      ],
    },
    {
      title: "Social",
      slug: "social",
      bricks: [
        {
          name: "Clubs and organizations",
          href: "https://neu.campuslabs.com/engage/",
        },
        { name: "Virtual clubs info", href: "https://huskyeventhub.com/" },
        {
          name: "Social Impact Lab",
          href: "https://cssh.northeastern.edu/impactlab/",
        },
      ],
      list: [
        {
          name: "Group chats list",
          href: "/social/chats",
        },
        {
          name: "Instagram pages",
          href: "/social/instagram",
        },
      ],
    },
    {
      title: "Housing",
      slug: "housing",
      bricks: [
        {
          name: "Housing online",
          href: "https://neuidmsso.neu.edu/rmsmercury",
        },
      ],
      list: [
        {
          name: "Residential Mail",
          href: "https://mailservices.sites.northeastern.edu/residential-mail/",
        },
        {
          name: "Move in/out calendar",
          href: "https://www.northeastern.edu/housing/move-inout/",
        },
        {
          name: "Northeastern Dorms",
          href: "https://sites.google.com/view/neudorms/home",
          icon: "gallery",
        },
        {
          name: "Northeastern Dorms tumblr",
          href: "https://northeasterndorms.tumblr.com/",
          icon: "gallery",
        },
        {
          name: "Map, Floor plan, Room layouts",
          href: "https://www.northeastern.edu/housing/dnaesantoelrihtriseertn/",
        },
        {
          name: "NUTV cribs",
          href: "https://www.youtube.com/playlist?list=PL3s6etJXhUBHZhzMfQ1mJv-VrQ82I52LX",
          icon: "youtube",
        },
        {
          name: "Housing policies",
          href: "https://www.northeastern.edu/housing/policies-and-publications/",
        },
        {
          name: "What to bring",
          href: "https://www.northeastern.edu/housing/what-to-bring/",
        },
        {
          name: "Second year housing chats",
          href: "https://docs.google.com/document/d/1tFgnGDDVCX6m1qbZhCVOWJBDHFDs0VH6mIvDkFwyVG8/edit?usp=drivesdk",
          icon: "document",
        },
      ],
    },
    {
      title: "Free",
      slug: "free",
      moreInfoLink: {
        name: "Free or discounted things to get as a college student",
        href: "/free",
      },
    },
    {
      title: "Boston",
      slug: "boston",
      moreInfoLink: {
        name: "Things to do in Boston",
        href: "/boston",
      },
    },
    {
      title: "Resources",
      slug: "resources",
      bricks: [
        {
          name: "Find textbooks",
          href: "https://northeastern.bncollege.com/shop/northeastern/page/find-textbooks",
        },
      ],
      list: [
        {
          name: "Download books",
          href: "https://northeastern.bncollege.com/shop/northeastern/page/find-textbooks",
        },
      ],
    },
  ],
} as Data;
