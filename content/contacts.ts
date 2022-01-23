import { Contact, ContactMethod } from "@/types/contact";

export const hrefPrefix: Record<ContactMethod["type"], string> = {
  address: "https://maps.google.com/?q=",
  email: "mailto:",
  phone: "tel:",
  website: "",
};

export const contacts: Contact[] = [
  {
    name: "Husky Card Services",
    methods: [
      {
        type: "email",
        value: "huskycard@northeastern.edu",
      },
      {
        type: "phone",
        value: " 6173738740",
      },
    ],
  },
  {
    name: "Housing",
    methods: [
      { type: "email", value: "housing@northeastern.edu" },
      { type: "phone", value: "6173732814" },
      { type: "website", value: "https://www.northeastern.edu/housing/" },
    ],
  },
  {
    name: "Mailroom - Speare",
    methods: [
      { type: "phone", value: "6173735108" },
      { type: "phone", value: "6173732114" },
    ],
  },
  {
    name: "Undergraduate Admissions",
    methods: [
      {
        type: "email",
        value: "admissions@northeastern.edu",
      },
      {
        type: "phone",
        value: "6173732200",
      },
      {
        type: "website",
        value: "https://admissions.northeastern.edu/visit/contact/",
      },
    ],
  },
  {
    name: "Financial Aid - Undergraduate",
    methods: [
      { type: "email", value: "sfs@northeastern.edu" },
      { type: "phone", value: "6173733190" },
    ],
  },
  {
    name: "Financial Aid - Graduate",
    methods: [
      { type: "email", value: "gradsfs@northeastern.edu" },
      { type: "phone", value: "6173735899" },
    ],
  },
  {
    name: "Financial Aid - College of Professional Studies",
    methods: [
      { type: "email", value: "cpssfs@northeastern.edu" },
      { type: "phone", value: "6173732897" },
    ],
  },
  {
    name: "Billing and Payments",
    methods: [
      { type: "email", value: "studentaccounts@northeastern.edu" },
      { type: "phone", value: "6173732270" },
      { type: "address", value: "354 Richards Hall" },
    ],
  },
];
