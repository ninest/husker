---
title: 319 Huntington Ave
description: Information on 319 Huntington Ave
createdAt: 2022-01-14
updatedAt: 2022-01-14

pageType: dorm
---

<Expandable title="Dorm Information" variant="gray">

- 2-, 3-, and 4-person apartments; majority of apartments are economy style
  - Studio double apartments
  - Economy single bedrooms with no common area
  - Economy double bedrooms with no common area
- Lounges with TV

</Expandable>

import plan1 from './house/319-huntington-ave/images/plan1.jpg'
import plan2 from './house/319-huntington-ave/images/plan2.jpg'
import plan3 from './house/319-huntington-ave/images/plan3.jpg'

<Expandable title="Floor Plans" variant="gray">
  <div className="grid grid-cols-3 gap-base">
    <div>
      <Image src={plan3} width={224} height={323} quality={50} />
    </div>
    <div>
      <Image src={plan1} width={375} height={385} quality={50} />
    </div>
    <div>
      <Image src={plan2} width={361} height={448} quality={50} />
    </div>
  </div>
</Expandable>

## Images

import economyDouble1 from './house/319-huntington-ave/images/economyDouble1.png'
import economyDouble2 from './house/319-huntington-ave/images/economyDouble2.png'
import economyDouble3 from './house/319-huntington-ave/images/economyDouble3.png'
import economyDouble4 from './house/319-huntington-ave/images/economyDouble4.png'

<Expandable title="Economy Double" icon="image">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-base">
    <Image src={economyDouble1} width={2120} height={1600} quality={50} alt={"Economy Double"}/>
    <Image src={economyDouble2} width={2118} height={1594} quality={50} alt={"Economy Double"}/>
  </div>
  <Spacer />
  <div className="grid grid-cols-1 md:grid-cols-2 gap-base">
    <Image src={economyDouble3} width={1200} height={1596} quality={50} alt={"Economy Double"}/>
    <Image src={economyDouble4} width={1194} height={1582} quality={50} alt={"Economy Double"}/>
  </div>
</Expandable>

import studioDouble1 from './house/319-huntington-ave/images/studioDouble1.png'
import studioDouble2 from './house/319-huntington-ave/images/studioDouble2.png'
import studioDouble3 from './house/319-huntington-ave/images/studioDouble3.png'
import studioDouble4 from './house/319-huntington-ave/images/studioDouble4.png'
import studioDouble5 from './house/319-huntington-ave/images/studioDouble5.png'
import studioDouble6 from './house/319-huntington-ave/images/studioDouble6.png'
import studioDouble7 from './house/319-huntington-ave/images/studioDouble7.png'

<Expandable title="Studio Double" icon="image">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-base">
    <Image src={studioDouble1} width={1200} height={1582} quality={50} alt={"Studio Double"}/>
    <Image src={studioDouble2} width={2388} height={1590} quality={50} alt={"Studio Double"}/>
  </div>
  <Spacer />
  <div className="grid grid-cols-1 md:lg:grid-cols-2 gap-base">
    <Image src={studioDouble3} width={2380} height={1586} quality={50} alt={"Studio Double"}/>
    <Image src={studioDouble4} width={2380} height={1594} quality={50} alt={"Studio Double"}/>
    <Image src={studioDouble5} width={2382} height={1590} quality={50} alt={"Studio Double"}/>
    <Image src={studioDouble6} width={1280} height={714} quality={50} alt={"Studio Double"}/>
    <Image src={studioDouble7} width={2110} height={1592} quality={50} alt={"Studio Double"}/>
  </div>
</Expandable>

import common1 from './house/319-huntington-ave/images/common1.png'
import kitchen1 from './house/319-huntington-ave/images/kitchen1.png'
import kitchen2 from './house/319-huntington-ave/images/kitchen2.png'

<Expandable title="Common area and kitchen" icon="image">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-base">
    <Image src={common1} width={1192} height={1592} quality={50} />
    <Image src={kitchen1} width={1072} height={1594} quality={50} />
  </div>
  <Spacer />
  <div className="grid grid-cols-1 md:grid-cols-2 gap-base">
    <Image src={kitchen2} width={2122} height={1592} quality={50} />
  </div>
</Expandable>

import single1 from './house/319-huntington-ave/images/single1.png'
import single2 from './house/319-huntington-ave/images/single2.png'

<Expandable title="Single" icon="image">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-base">
    <Image src={single1} width={2122} height={1594} quality={50} />
  </div>
  <Spacer />
  <div className="grid grid-cols-1 md:grid-cols-2 gap-base">
    <Image src={single2} width={1186} height={1592} quality={50} />
  </div>
</Expandable>
