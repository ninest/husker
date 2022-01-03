---
title: Dining Information
description: Information related to dining and meals
lastUpdated: 2021-09-08
---

## Meal plan

export const mealPlans = [
{ meals: 7, exchange: 1, dollars: 140 },
{ meals: 12, exchange: 2, dollars: 200 },
{ meals: 17, exchange: 3, dollars: 250 },
{ meals: 'Unlimited', exchange: 5, dollars: 350 },
]

<section className="grid gap-base grid-cols-2 md:grid-cols-3">
{mealPlans.map(mealPlan => {
  return <Block key={mealPlan.meals} title={`${mealPlan.meals} meals`}>
    <div>${mealPlan.dollars} dining dollars</div>
    <div>{mealPlan.exchange} meal exchange/week</div>
  </Block>
})}
</section>

More information:

- Each meal plan includes 10 guest swipes for the semester (or 5 guest swipes in summer semesters)
- In summer semesters, you get half the dining dollars shown
- NUin Boston students have the 12 meal plan and cannot change it ([source](https://nuin.northeastern.edu/destinations/boston/housing/))

Sources: [northeastern.edu/huskycard](https://www.northeastern.edu/huskycard/meal-plans/traditional-meal-plan/), [nudining.com](https://nudining.com/public/meal-plans)

### Meal exchange

export const mealExchanges = [
{
name: "Sweet Tomatoes Pizza",
menu: []
},
{
name: "Popeyes",
menu: [],
extra: "With cajun fries and medium fountain drink"
},

{
name: "Tú Taco",
menu: []
},

{
name: "Burger 373",
menu: []
},

{
name: "Kigo Kitchen",
menu: []
},

{
name: "Chaat House",
menu: []
},

{
name: "Café Crossing",
menu: []
},

{
name: "Subway",
menu: []
},

{
name: "Churchill's Kitchen + Sandwich Shop",
menu: []
},
]

<section className="grid gap-base grid-cols-2 lg:grid-cols-1 xl:grid-cols-3">
{mealExchanges.map(exc => {
  return <Block key={exc.name} title={exc.name}>
  </Block>
})}
</section>

Meal swipes can be used at restaurants on campus that have a sign that says "Meal Exchange". Meal exchange can be used at locations listed on [nudining.com/public/meal-exchanges](https://nudining.com/public/meal-exchanges).

There are weekly limits for the number of meal exchanges (see up).

## Outtakes

At Stetson West, you can use your unused meal swipes to get "grocery food items" (like chips, cheetos, sandwiches, salads, water, drinks, fruits, etc)

- **1 meal swipe** becomes **10 points**.
- See the [opening hours](https://nudining.com/public/hours) for Outtakes at Stetson West
- You can use a maximum of 3 swipes here (unconfirmed)

## Off-campus vendors

import { Icon } from '@/components/Icon'

export const offCampusVendors = [
  { name: "Amelia’s Taqueria", address: "309 Huntington Ave" },
  { name: "Bangkok Pinto", address: "1041 Tremont Street" },
  { name: "Blaze Pizza", address: "1282 Boylston St" },
  { name: "Boston Shawarma", address: "315 Huntington Avenue" },
  { name: "Cappy’s Pizza & Subs", address: "82 Westland Avenue" },
  { name: "College Convenience", address: "281 Huntington Ave" },
  { name: "CVS", address: "231 Massachusetts Ave" },
  { name: "Domino’s Pizza", address: "1260 Boylston St" },
  { name: "Domino’s Pizza", address: "1400 Tremont St" },
  { name: "Dos Diablos Taco Bar & Two Saints Tavern", address: "52 Gainsborough St" },
  { name: "El Jefe’s Taqueria", address: "269 Huntington Ave" },
  { name: "Giovanni’s Market", address: "624 Columbus Avenue" },
  { name: "Gyroscope", address: "305 Huntington Ave" },
  { name: "Honeygrow", address: "1282 Boylston St" },
  { name: "Ingredients @ the Westin Hotel", address: "10 Huntington Ave" },
  { name: "Lobstah on a Roll", address: "537 Columbus Ave" },
  { name: "Mamacita Authentic Mexican Comida", address: "329 Huntington Ave" },
  { name: "MARKET @ the Sheraton Hotel", address: "39 Dalton St" },
  { name: "Panera Bread", address: "289 Huntington Ave" },
  { name: "Sprout", address: "305 Huntington Ave" },
  { name: "Star Market", address: "53 Huntington Avenue" },
  { name: "Star Market", address: "33 Kilmarnock Street (near Fenway)" },
  { name: "Symphony Market", address: "291 Huntington Avenue" },
  { name: "University House of Pizza", address: "452 Huntington Avenue" },
  { name: "Whole Foods Market", address: "15 Westland Ave" },
  { name: "Wings Over Boston", address: "325 Huntington Ave" },
  { name: "Energize", address: "265 Massachusetts Ave" },
  { name: "Poke Station", address: "313 Huntington Ave" },
  { name: "Quick Pick Convenience", address: "973 Tremont St" },
]

Click on the below vendors to locate them on Google Maps.

<section className="grid gap-base md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
{offCampusVendors.map(ocv => {
  return <Block key={ocv.name} title={ocv.name} href={`https://maps.google.com/?q=${ocv.name}, ${ocv.address}`}>
  <div className="flex items-baseline space-x-sm">
  <Icon id="markeralt" className="text-gray-light" />
  <div>{ocv.address}</div>
  </div>
  </Block>
})}
</section>