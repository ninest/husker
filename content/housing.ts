import { Dorm, DormType } from "@/types/housing";
import { capitalizeFirstLetter } from "@/utils/string";

const traditional: DormType = {
  slug: "traditional",
  name: "Traditional",
};
const suite: DormType = {
  slug: "suite",
  name: "Suite",
};
const hotel: DormType = {
  slug: "hotel",
  name: "hotel",
};
const apartment: DormType = {
  slug: "apartment",
  name: "Apartment",
};

export const dorms: Dorm[] = [
  {
    type: traditional,
    slug: "hastings-hall",
    title: "Hastings Hall",
    links: [
      {
        name: "NEUDorms",
        description: "Images and videos from NEUDorms",
        href: "https://sites.google.com/view/neudorms/first-year/traditional/hastings-hall",
      },
    ],
  },
  {
    type: traditional,
    slug: "kerr-hall",
    title: "Kerr Hall",
    links: [
      {
        name: "NEUDorms",
        description: "Images and videos from NEUDorms",
        href: "https://sites.google.com/view/neudorms/first-year/traditional/kerr-hall",
      },
    ],
  },
  {
    type: traditional,
    slug: "melvin-hall",
    title: "Melvin Hall",
    links: [
      {
        name: "NEUDorms",
        description: "Images and videos from NEUDorms",
        href: "https://sites.google.com/view/neudorms/first-year/traditional/melvin-hall",
      },
    ],
  },
  {
    type: traditional,
    slug: "smith-hall",
    title: "Smith Hall",
    links: [
      {
        name: "NEUDorms",
        description: "Images and videos from NEUDorms",
        href: "https://sites.google.com/view/neudorms/first-year/traditional/smith-hall",
      },
    ],
  },
  {
    type: traditional,
    slug: "spears-hall",
    title: "Spears Hall",
    links: [
      {
        name: "NEUDorms",
        description: "Images and videos from NEUDorms",
        href: "https://sites.google.com/view/neudorms/first-year/traditional/spears-hall",
      },
    ],
  },
  {
    type: traditional,
    slug: "white-hall",
    title: "White Hall",
    links: [
      {
        name: "NEUDorms",
        description: "Images and videos from NEUDorms",
        href: "https://sites.google.com/view/neudorms/first-year/traditional/white-hall",
      },
    ],
  },
  {
    type: traditional,
    slug: "stetson-east",
    title: "Stetson East",
    links: [
      {
        name: "NEUDorms",
        description: "Images and videos from NEUDorms",
        href: "https://sites.google.com/view/neudorms/first-year/traditional/stetson-east",
      },
    ],
  },
  {
    type: traditional,
    slug: "stetson-west",
    title: "Stetson West",
    links: [
      {
        name: "NEUDorms",
        description: "Images and videos from NEUDorms",
        href: "https://sites.google.com/view/neudorms/first-year/traditional/stetson-west",
      },
    ],
  },
  {
    type: suite,
    slug: "153-hemenway-street",
    title: "153 Hemenway Street",
    links: [
      {
        name: "NEUDorms",
        description: "Images and videos from NEUDorms",
        href: "https://sites.google.com/view/neudorms/first-year/suite-style/153-hemenway-street",
      },
    ],
  },
  {
    type: suite,
    slug: "international-village",
    title: "International Village",
    links: [
      {
        name: "NEUDorms",
        description: "Images and videos from NEUDorms",
        href: "https://sites.google.com/view/neudorms/first-year/suite-style/international-village",
      },
    ],
  },
  {
    type: suite,
    slug: "east-village",
    title: "East Village",
    links: [
      {
        name: "NEUDorms",
        description: "Images and videos from NEUDorms",
        href: "https://sites.google.com/view/neudorms/first-year/suite-style/east-village",
      },
    ],
  },
  {
    type: suite,
    slug: "kennedy-hall",
    title: "Kennedy Hall",
    links: [
      {
        name: "NEUDorms",
        description: "Images and videos from NEUDorms",
        href: "https://sites.google.com/view/neudorms/first-year/suite-style/kennedy-hall",
      },
    ],
  },
  {
    type: hotel,
    slug: "midtown-hotel",
    title: "Midtown Hotel",
    links: [
      {
        name: "NEUDorms",
        description: "Images and videos from NEUDorms",
        href: "https://sites.google.com/view/neudorms/hotels/midtown-hotel",
      },
    ],
  },
  {
    type: hotel,
    slug: "the-sheraton",
    title: "The Sheraton",
    links: [
      {
        name: "NEUDorms",
        description: "Images and videos from NEUDorms",
        href: "https://sites.google.com/view/neudorms/hotels/the-sheraton",
      },
    ],
  },
  {
    type: hotel,
    slug: "the-westin",
    title: "The Westin",
    links: [
      {
        name: "NEUDorms",
        description: "Images and videos from NEUDorms",
        href: "https://sites.google.com/view/neudorms/hotels/the-westin",
      },
    ],
  },
  {
    type: apartment,
    slug: "116-st-stephen-street",
    title: "116 St. Stephen Street",
    links: [
      {
        name: "NEUDorms",
        description: "Images and videos from NEUDorms",
        href: "https://sites.google.com/view/neudorms/first-year/apartment-style/116-st-stephen-street",
      },
    ],
  },
  {
    type: apartment,
    slug: "122-st-stephen-street-levine-hall",
    title: "122 St. Stephen Street (Levine Hall)",
    links: [
      {
        name: "NEUDorms",
        description: "Images and videos from NEUDorms",
        href: "https://sites.google.com/view/neudorms/first-year/apartment-style/122-st-stephen-street-levine-hall",
      },
    ],
  },
  {
    type: apartment,
    slug: "dav-a",
    title: "Davenport A",
    links: [
      {
        name: "NEUDorms",
        description: "Images and videos from NEUDorms",
        href: "https://sites.google.com/view/neudorms/upperclassmen/davenport-commons/dav-a",
      },
    ],
  },
  {
    type: apartment,
    slug: "dav-b",
    title: "Davenport B",
    links: [
      {
        name: "NEUDorms",
        description: "Images and videos from NEUDorms",
        href: "https://sites.google.com/view/neudorms/upperclassmen/davenport-commons/dav-b",
      },
    ],
  },
  {
    type: apartment,
    slug: "west-village-a",
    title: "West Village A",
    links: [
      {
        name: "NEUDorms",
        description: "Images and videos from NEUDorms",
        href: "https://sites.google.com/view/neudorms/upperclassmen/west-villages/west-village-a",
      },
    ],
  },
  {
    type: apartment,
    slug: "west-village-b",
    title: "West Village B",
    links: [
      {
        name: "NEUDorms",
        description: "Images and videos from NEUDorms",
        href: "https://sites.google.com/view/neudorms/upperclassmen/west-villages/west-village-b",
      },
    ],
  },
  {
    type: apartment,
    slug: "west-village-c",
    title: "West Village C",
    links: [
      {
        name: "NEUDorms",
        description: "Images and videos from NEUDorms",
        href: "https://sites.google.com/view/neudorms/upperclassmen/west-villages/west-village-c",
      },
    ],
  },
  {
    type: apartment,
    slug: "west-village-d",
    title: "West Village D",
    links: [
      {
        name: "NEUDorms",
        description: "Images and videos from NEUDorms",
        href: "https://sites.google.com/view/neudorms/upperclassmen/west-villages/west-village-d",
      },
    ],
  },
  {
    type: apartment,
    slug: "west-village-e",
    title: "West Village E",
    links: [
      {
        name: "NEUDorms",
        description: "Images and videos from NEUDorms",
        href: "https://sites.google.com/view/neudorms/upperclassmen/west-villages/west-village-e",
      },
    ],
  },
  {
    type: apartment,
    slug: "west-village-f",
    title: "West Village F",
    links: [
      {
        name: "NEUDorms",
        description: "Images and videos from NEUDorms",
        href: "https://sites.google.com/view/neudorms/upperclassmen/west-villages/west-village-f",
      },
    ],
  },
  {
    type: apartment,
    slug: "west-village-g",
    title: "West Village G",
    links: [
      {
        name: "NEUDorms",
        description: "Images and videos from NEUDorms",
        href: "https://sites.google.com/view/neudorms/upperclassmen/west-villages/west-village-g",
      },
    ],
  },
  {
    type: apartment,
    slug: "west-village-h-21",
    title: "West Village H",
    links: [
      {
        name: "NEUDorms",
        description: "Images and videos from NEUDorms",
        href: "https://sites.google.com/view/neudorms/upperclassmen/west-villages/west-village-h-21",
      },
    ],
  },
];

// export const dorms: Dorm[] = [
//   ...["hastings", "kerr", "melvin", "smith", "spears", "white"].map((slug) => ({
//     type: traditional,
//     slug,
//     title: `${capitalizeFirstLetter(slug)} Hall`,
//     links:[{ title:"NEUDorms", description:"Images and videos from NEUDorms", href:`https://sites.google.com/view/neudorms/first-year/traditional/${slug}-hall`,}]
//   })),
//   {
//     type: traditional,
//     slug: "stetson-east",
//     title: "Stetson East",
//     links:[{ title:"NEUDorms", description:"Images and videos from NEUDorms", href:"https://sites.google.com/view/neudorms/first-year/traditional/stetson-east",}]
//   },
//   {
//     type: traditional,
//     slug: "stetson-west",
//     title: "Stetson West",
//     links:[{ title:"NEUDorms", description:"Images and videos from NEUDorms", href:"https://sites.google.com/view/neudorms/first-year/traditional/stetson-west",}]
//   },
//   ...[
//     "153-hemenway-street",
//     "international-village",
//     "east-village",
//     "kennedy-hall",
//   ].map((slug) => ({
//     type: suite,
//     slug,
//     title: slug
//       .split("-")
//       .map((s) => capitalizeFirstLetter(s))
//       .join(" "),
//     links:[{ title:"NEUDorms", description:"Images and videos from NEUDorms", href:`https://sites.google.com/view/neudorms/first-year/suite-style/${slug}`,}]
//   })),
//   ...["midtown-hotel", "the-sheraton", "the-westin"].map((slug) => ({
//     type: hotel,
//     slug,
//     title: slug
//       .split("-")
//       .map((s) => capitalizeFirstLetter(s))
//       .join(" "),
//     links:[{ title:"NEUDorms", description:"Images and videos from NEUDorms", href:`https://sites.google.com/view/neudorms/hotels/${slug}`,}]
//   })),
//   {
//     type: apartment,
//     slug: "116-st-stephen-street",
//     title: "116 St. Stephen Street",
//     links:[{ title:"NEUDorms", description:"Images and videos from NEUDorms", href:"https://sites.google.com/view/neudorms/first-year/apartment-style/116-st-stephen-street",}]
//   },
//   {
//     type: apartment,
//     slug: "122-st-stephen-street-levine-hall",
//     title: "122 St. Stephen Street (Levine Hall)",
//     links:[{ title:"NEUDorms", description:"Images and videos from NEUDorms", href:"https://sites.google.com/view/neudorms/first-year/apartment-style/122-st-stephen-street-levine-hall",}]
//   },
//   {
//     type: apartment,
//     slug: "dav-a",
//     title: "Davenport A",
//     links:[{ title:"NEUDorms", description:"Images and videos from NEUDorms", href:"https://sites.google.com/view/neudorms/upperclassmen/davenport-commons/dav-a",}]
//   },
//   {
//     type: apartment,
//     slug: "dav-b",
//     title: "Davenport B",
//     links:[{ title:"NEUDorms", description:"Images and videos from NEUDorms", href:"https://sites.google.com/view/neudorms/upperclassmen/davenport-commons/dav-b",}]
//   },

//   ...["A", "B", "C", "D", "E", "F", "G"].map(
//     (wv): Dorm => ({
//       type: apartment,
//       slug: `west-village-${wv.toLowerCase()}`,
//       title: `West Village ${wv}`,
//       links:[{ title:"NEUDorms", description:"Images and videos from NEUDorms", href:`https://sites.google.com/view/neudorms/upperclassmen/west-villages/west-village-${wv.toLowerCase()}`,}]
//     })
//   ),
//   {
//     type: apartment,
//     slug: `west-village-h-21`,
//     title: `West Village H`,
//     links:[{ title:"NEUDorms", description:"Images and videos from NEUDorms", href:`https://sites.google.com/view/neudorms/upperclassmen/west-villages/west-village-h-21`,}]
//   },
// ];

// console.log(dorms)
