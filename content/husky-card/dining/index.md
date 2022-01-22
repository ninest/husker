---
title: Dining Information
description: Information related to dining and meals
lastUpdated: 2021-09-08
---

import { Icon } from '@/components/Icon'

export const mealPlans = [
{ meals: 7, exchange: 1, dollars: 140 },
{ meals: 12, exchange: 2, dollars: 200 },
{ meals: 17, exchange: 3, dollars: 250 },
{ meals: 'Unlimited', exchange: 5, dollars: 350 },
]

export const mealExchangeVendors = [
{ name: "Sweet Tomatoes Pizza", address: "Curry Student Center" },
{ name: "Popeyes", address: "Curry Student Center" },
{ name: "Tú Taco", address: "Curry Student Center" },
{ name: "Burger 373", address: "Curry Student Center" },
{ name: "Kigo Kitchen", address: "Curry Student Center" },
{ name: "Chaat House", address: "Curry Student Center" },
{ name: "Café Crossing", address: "International village" },
{ name: "Subway", address: "Ryder Hall" },
{ name: "Churchill's Kitchen + Sandwich Shop", address: " Churchill Hall" }
]

export const onCampusVendors = [
{ name: "AFC Sushi", address: "AFC Sushi, the Market" },
{ name: "afterHOURS Nightclub", address: "afterHOURS Nightclub, Curry Student Center" },
{ name: "Argo Tea", address: "Argo Tea, Snell Library" },
{ name: "b.good", address: "b.good, at Marino Center" },
{ name: "Café716", address: "Café716 northeastern" },
{ name: "Café Crossing", address: "Café Crossing, at International Village" },
{ name: "Caffé Strega", address: "Caffé Strega, ISEC" },
{ name: "Dunkin Donuts", address: "Dunkin Donuts, Hayden Hall" },
{ name: "Dunkin Donuts", address: "Dunkin Donuts, Shillman Hall" },
{ name: "Tatte Bakery and Cafe", address: "Tatte Bakery and Cafe, at Marino Center" },
{ name: "The Faculty Club", address: "The Faculty Club, the Alumni Center" },
{ name: "Kigo Kitchen", address: "Kigo Kitchen, Curry Student Center" },
{ name: "Levine Marketplace", address: "Levine Marketplace, Stetson East Residence Hall" },
{ name: "On The Go", address: "On The Go, the Market" },
{ name: "Outtakes", address: "Outtakes Northeastern" },
{ name: "Popeyes Louisiana Kitchen", address: "Popeyes, Curry Student Center" },
{ name: "Qdoba", address: "Qdoba, White Hall" },
{ name: "Starbucks", address: "Starbucks, Curry Student Center" },
{ name: "Food Hall at Stetson West", address: "Food Hall at Stetson West, Stetson West" },
{ name: "Subway", address: "Subway, Ryder Hall" },
{ name: "Sweet Tomatoes Pizza", address: "Sweet Tomatoes Pizza, Curry Student Center" },
{ name: "UBurger", address: "UBurger, Curry Student Center" },
{ name: "The West End", address: "The West End, Curry Student Center" },
{ name: "Wollaston’s Grocery II", address: "Wollaston’s Grocery II, West Village B" },
{ name: "Wollaston’s Grocery", address: "Wollaston’s Grocery, Marino Center" },
{ name: "Tu Taco", address: "Tu Taco, Curry Student Center" },
]

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

<Expandable title="Meal plan and Outtakes" icon="pizza" containsProse>

### Meal plan

<section className="grid gap-base grid-cols-2 md:grid-cols-3">
{mealPlans.map(mealPlan => {
  return <Block key={mealPlan.meals} title={`${mealPlan.meals} meals`}>
    <div>${mealPlan.dollars} dining dollars</div>
    <div>{mealPlan.exchange} meal exchange/week</div>
  </Block>
})}
</section>

- Each meal plan includes 10 guest swipes for the semester (or 5 guest swipes in summer semesters)
- In summer semesters, you get half the dining dollars shown
- NUin Boston students have the 12 meal plan and [cannot change it](https://nuin.northeastern.edu/destinations/boston/housing/)

Sources: [northeastern.edu/huskycard](https://www.northeastern.edu/huskycard/meal-plans/traditional-meal-plan/), [nudining.com](https://nudining.com/public/meal-plans)

### Meal exchange

Meal swipes can be used at restaurants on campus that have a sign that says "Meal Exchange". Meal exchange can be used at locations listed on [nudining.com/public/meal-exchanges](https://nudining.com/public/meal-exchanges).

There are weekly limits for the number of meal exchanges (see up).

### Outtakes

At Stetson West, you can use your unused meal swipes to get "grocery food items" (like chips, cheetos, sandwiches, salads, water, drinks, fruits, etc)

- **1 meal swipe** becomes **10 points**.
- See the [opening hours](https://nudining.com/public/hours) for Outtakes at Stetson West
- You can use a maximum of 3 swipes here

</Expandable>

## Off-campus vendors

These restaurants/shops accept dining dollars and husky dollars. Click on the below vendors to locate them on Google Maps.

<section className="grid gap-base grid-cols-2 md:grid-cols-3">
{offCampusVendors.map(ocv => {
  return <Block key={ocv.name} title={ocv.name} href={`https://maps.google.com/?q=${ocv.name}, ${ocv.address}`}>
  <div className="flex items-baseline space-x-sm">
  <Icon id="markeralt" className="text-gray-light" />
  <div>{ocv.address}</div>
  </div>
  </Block>
})}
</section>

## On-campus vendors

<section className="grid gap-base grid-cols-2 md:grid-cols-3">
{onCampusVendors.map(cv => {
  return <Block key={cv.name} title={cv.name} href={`https://maps.google.com/?q=${cv.name}, ${cv.address}`}>
  <div className="flex items-baseline space-x-sm">
  <Icon id="markeralt" className="text-gray-light" />
  <div>{cv.address}</div>
  </div>
  </Block>
})}
</section>

## Meal exchange

<section className="grid gap-base grid-cols-2 md:grid-cols-3">
{mealExchangeVendors.map(mev => {
  return <Block key={mev.name} title={mev.name} href={`https://maps.google.com/?q=${mev.name}, ${mev.address}`}>
  <div className="flex items-baseline space-x-sm">
  <Icon id="markeralt" className="text-gray-light" />
  <div>{mev.address}</div>
  </div>
  </Block>
})}
</section>
