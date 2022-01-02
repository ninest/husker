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
menu: [
<><b>Combo 3</b>: 3 pience bonafide chicken</>,
<><b>Combo 8</b>: 3 pience tenders</>,
<><b>Combo 10</b>: classic chicken sandwhich</>,
<><b>Combo 11</b>: Spicy chicken sandwhich</>,
],
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

<section className="grid gap-base grid-cols-2 md:grid-cols-3">
{mealExchanges.map(exc => {
  return <Block key={exc.name} title={exc.name}>
    {exc.menu.length > 0 ?
      <div className="mt-xs">
        <div className="space-y-sm">
          {exc.menu.map(item => {
            return <div className="text-sm text-gray">{item}</div>
          })}
        </div>
        <div className="mt-sm text-sm font-semibold text-gray">{exc.extra}</div>
      </div>
   : <div className="mt-xs text-sm text-gray-light text-center">Menu not added yet</div> }
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
