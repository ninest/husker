---
title: 407 Huntington Ave
description: Information on 407 Huntington Ave
createdAt: 2022-01-14
updatedAt: 2022-01-14

pageType: dorm
---

<Expandable title="Dorm Information" variant="gray">

- 1-, 2-, 3-, and 4-person apartments.
  - Studio single apartments
  - Standard double bedrooms with kitchenette
  - Economy single bedrooms without kitchenette
  - Economy double bedrooms without kitchenette
- No Lounges

</Expandable>

import plan1 from './house/407-huntington-ave/images/plan1.png'
import plan2 from './house/407-huntington-ave/images/plan2.png'

<Expandable title="Floor Plans" variant="gray">
  <div className="grid grid-cols-2 gap-base">
    <Image src={plan1} width={470} height={353} quality={50} />
    <Image src={plan2} width={430} height={265} quality={50} />
  </div>
</Expandable>

## Images

import double1 from './house/407-huntington-ave/images/double1.jpg'
import double2 from './house/407-huntington-ave/images/double2.jpg'
import double3 from './house/407-huntington-ave/images/double3.jpg'
import double4 from './house/407-huntington-ave/images/double4.jpg'

<Expandable title="Standard double" icon="image">
  <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 gap-base">
    <Image src={double1} width={2048} height={1536} quality={50} /> 
    <Image src={double2} width={2048} height={1536} quality={50} /> 
    <Image src={double3} width={2048} height={1536} quality={50} /> 
  </div>
</Expandable>

import common1 from './house/407-huntington-ave/images/common1.jpg'
import common2 from './house/407-huntington-ave/images/common2.jpg'
import hall1 from './house/407-huntington-ave/images/hall1.jpg'
import kitchen1 from './house/407-huntington-ave/images/kitchen1.jpg'

<Expandable title="Common area, kitchen, and hall" icon="image">
  <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 gap-base">
    <Image src={common1} width={2048} height={1536} quality={50} /> 
    <Image src={common2} width={2048} height={1536} quality={50} /> 
    <Image src={hall1} width={2048} height={1536} quality={50} /> 
    <Image src={kitchen1} width={2048} height={1536} quality={50} /> 
  </div>
</Expandable>

import bathroom1 from './house/407-huntington-ave/images/bathroom1.jpg'
import bathroom2 from './house/407-huntington-ave/images/bathroom2.jpg'
import bathroom3 from './house/407-huntington-ave/images/bathroom3.jpg'

<Expandable title="Bathroom" icon="image">
  <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 gap-base">
    <Image src={bathroom2} width={2048} height={1536} quality={50} /> 
    <Image src={bathroom3} width={2048} height={1536} quality={50} /> 
    <Image src={bathroom1} width={1536} height={2048} quality={50} /> 
  </div>
</Expandable>
