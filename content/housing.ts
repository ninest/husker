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
  ...["hastings", "kerr", "melvin", "smith", "spears", "white"].map((slug) => ({
    type: traditional,
    slug,
    title: `${capitalizeFirstLetter(slug)} Hall`,
    url: `https://sites.google.com/view/neudorms/first-year/traditional/${slug}-hall`,
  })),
  {
    type: traditional,
    slug: "stetson-east",
    title: "Stetson East",
    url: "https://sites.google.com/view/neudorms/first-year/traditional/stetson-east",
  },
  {
    type: traditional,
    slug: "stetson-west",
    title: "Stetson West",
    url: "https://sites.google.com/view/neudorms/first-year/traditional/stetson-west",
  },
  ...[
    "153-hemenway-street",
    "international-village",
    "east-village",
    "kennedy-hall",
  ].map((slug) => ({
    type: suite,
    slug,
    title: slug
      .split("-")
      .map((s) => capitalizeFirstLetter(s))
      .join(" "),
    url: `https://sites.google.com/view/neudorms/first-year/suite-style/${slug}`,
  })),
  ...["midtown-hotel", "the-sheraton", "the-westin"].map((slug) => ({
    type: suite,
    slug,
    title: slug
      .split("-")
      .map((s) => capitalizeFirstLetter(s))
      .join(" "),
    url: `https://sites.google.com/view/neudorms/hotels/${slug}`,
  })),
];
