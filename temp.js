const fs = require("fs");

const dorms = [
  {
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

for (const d of dorms) {
  const folderName = d.slug;
  const fileName = "index.md";
  const fileContent = `---
title: ${d.title}
description: Information on ${d.title}
createdAt: 2022-01-04
updatedAt: 2022-01-04
---
  
  `;

  // fs.mkdirSync(`./content/housing/${folderName}`);
  fs.writeFileSync(`./content/housing/${folderName}/index.md`, fileContent)
}
