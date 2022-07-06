---
title: Burstein Hall
description: Information on Burstein Hall
createdAt: 2022-01-14
updatedAt: 2022-01-14

pageType: dorm
---

<Expandable title="Dorm Information" variant="gray">

- 2-, 3-, and 4-person apartments; majority of apartments are economy or standard 2-person apartments
  - Standard double bedrooms
  - Studio double apartments
  - Economy single bedrooms
  - Economy double bedrooms
  - Economy triple apartments
- Lounge with TV, pool table and ping pong table

</Expandable>

import plan1 from './house/burstein-hall/images/plan1.jpg'
import plan2 from './house/burstein-hall/images/plan2.jpg'
import plan3 from './house/burstein-hall/images/plan3.jpg'

<Expandable title="Floor Plans" variant="gray">
  <div className="grid grid-cols-3 gap-base">
    <div>
      <Image src={plan1} width={227} height={338} quality={50} />
    </div>
    <div>
      <Image src={plan2} width={249} height={232} quality={50} />
    </div>
    <div>
      <Image src={plan3} width={239} height={171} quality={50} />
    </div>
  </div>
</Expandable>


## Images

import double1 from './house/burstein-hall/images/double1.jpg'
import single1 from './house/burstein-hall/images/single1.jpg'

<Expandable title="Three-person apartment: double + single" icon="image">
  
  <div className="prose">
    
    ### Double

    <Image src={double1} width={2560} height={1920} quality={50} />

    ### Single

    <Image src={single1} width={2560} height={1920} quality={50} />

  </div>
</Expandable>

import common1 from './house/burstein-hall/images/common1.jpg'
import common2 from './house/burstein-hall/images/common2.jpg'
import kitchen1 from './house/burstein-hall/images/kitchen1.jpg'

<Expandable title="Common area and kitchen" icon="image">
  <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 gap-base">
    <Image src={common1} width={2560} height={1920} quality={50} /> 
    <Image src={common2} width={2560} height={1920} quality={50} /> 
  </div>
  <Spacer />
  <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 gap-base">
    <Image src={kitchen1} width={1200} height={1600} quality={50} /> 
  </div>
</Expandable>

import bathroom1 from './house/burstein-hall/images/bathroom1.jpg'

<Expandable title="Bathroom" icon="image">
  <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 gap-base">
    <Image src={bathroom1} width={1200} height={1600} quality={50} /> 
  </div>
</Expandable>