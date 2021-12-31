---
title: Dining
description: Information related to dining and meals
lastUpdated: 2021-09-08
---

## Useful links

- [Meal plans, rates, and dining dollars included](https://www.northeastern.edu/huskycard/meal-plans/traditional-meal-plan/)
- [On-campus vendors](https://www.northeastern.edu/huskycard/vendors/on-campus-vendors/)
- [Off-campus vendors](https://www.northeastern.edu/huskycard/vendors/off-campus-vendors/)

## Meal plan

export const mealPlans = [
{ meals: 7, exchange: 1, dollars: 140 },
{ meals: 12, exchange: 2, dollars: 200 },
{ meals: 17, exchange: 3, dollars: 250 },
{ meals: 'Unlimited', exchange: 5, dollars: 350 },
]

<section className="grid gap-base grid-cols-2 md:grid-cols-3">
{mealPlans.map(mealPlan => {
  return <div key={mealPlan.meals} className="p-base rounded bg-gray-100">
    <div className="font-bold">{mealPlan.meals} meal plan</div>
    <div className="text-sm text-gray">${mealPlan.dollars} dining dollars</div>
    <div className="text-sm text-gray">{mealPlan.exchange} meal exchange/week</div>
  </div>
})}
</section>

More information:

- Each meal plan includes 10 guest swipes for the semester (or 5 guest swipes in summer semesters)
- In summer semesters, you get half the dining dollars shown
- NUin Boston students have the 12 meal plan, $165 dining dollars and cannot change it ([source](https://nuin.northeastern.edu/destinations/boston/housing/))

Source: [northeastern.edu/huskycard](https://www.northeastern.edu/huskycard/meal-plans/traditional-meal-plan/), [nudining.com](https://nudining.com/public/meal-plans)

### Meal exchange

Meal swipes can be used at restaurants on campus that have a sign that says "Meal Exchange". Meal exchange can be used at locations listed on [nudining.com/public/meal-exchanges](https://nudining.com/public/meal-exchanges).

There are weekly limits for the number of meal exchanges (see up).

## Outtakes

At Stetson West, you can use your unused meal swipes to get "grocery food items" (like chips, cheetos, sandwiches, salads, water, drinks, fruits, etc)

- **1 meal swipe** becomes **10 points**.
- See the [opening hours](https://nudining.com/public/hours) for Outtakes at Stetson West
- You can use a maximum of 3 swipes here (unconfirmed)
