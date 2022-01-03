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
  name: "Hotel",
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
    slug: "dav",
    title: "Davenport",
    links: [
      {
        name: "Dav A NEUDorms",
        description: "Images and videos from NEUDorms",
        href: "https://sites.google.com/view/neudorms/upperclassmen/davenport-commons/dav-a",
      },
      {
        name: "Dav B NEUDorms",
        description: "Images and videos from NEUDorms",
        href: "https://sites.google.com/view/neudorms/upperclassmen/davenport-commons/dav-b",
      },
    ],
  },

  {
    type: apartment,
    slug: "west-village",
    title: "West Village",
    links: [
      {
        name: "WVA NEUDorms",
        description: "Images and videos from NEUDorms",
        href: "https://sites.google.com/view/neudorms/upperclassmen/west-villages/west-village-a",
      },
      {
        name: "WVB NEUDorms",
        description: "Images and videos from NEUDorms",
        href: "https://sites.google.com/view/neudorms/upperclassmen/west-villages/west-village-b",
      },
      {
        name: "WVC NEUDorms",
        description: "Images and videos from NEUDorms",
        href: "https://sites.google.com/view/neudorms/upperclassmen/west-villages/west-village-c",
      },
      {
        name: "WVD NEUDorms",
        description: "Images and videos from NEUDorms",
        href: "https://sites.google.com/view/neudorms/upperclassmen/west-villages/west-village-d",
      },
      {
        name: "WVE NEUDorms",
        description: "Images and videos from NEUDorms",
        href: "https://sites.google.com/view/neudorms/upperclassmen/west-villages/west-village-e",
      },
      {
        name: "WVF NEUDorms",
        description: "Images and videos from NEUDorms",
        href: "https://sites.google.com/view/neudorms/upperclassmen/west-villages/west-village-f",
      },
      {
        name: "WVG NEUDorms",
        description: "Images and videos from NEUDorms",
        href: "https://sites.google.com/view/neudorms/upperclassmen/west-villages/west-village-g",
      },
      {
        name: "WVH NEUDorms",
        description: "Images and videos from NEUDorms",
        href: "https://sites.google.com/view/neudorms/upperclassmen/west-villages/west-village-h-21",
      },
    ],
  },
];
