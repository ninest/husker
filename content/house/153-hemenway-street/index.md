---
title: 153 Hemenway Street
description: Information on 153 Hemenway Street
createdAt: 2022-01-04
updatedAt: 2022-01-04

pageType: dorm
---

<Expandable title="Dorm Information" variant="gray">

- 2-, 3-, 4-person apartments
  - Standard double bedrooms
  - Economy double bedrooms
  - Economy triple bedrooms
  - Economy quad bedrooms
- Lounge/study area is located on the lower level: 2 study lounges, 1 multimedia lounge.
- No elevator

</Expandable>

import plan1 from './house/153-hemenway-street/images/plan1.jpg'

<Expandable title="Floor Plans" variant="gray">
  <Image className="w-full" src={plan1} height={234} width={269} quality={50} />
</Expandable>

## Images

import double1 from './house/153-hemenway-street/images/double1.jpg'
import common1 from './house/153-hemenway-street/images/common1.jpg'


<Expandable title="Economy Double" icon="image">
  <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 gap-base">
    <Image src={double1} width={1536} height={2048}quality={50} /> 
    <Image src={common1} width={1536} height={2048}quality={50} /> 
  </div>
</Expandable>

## Links

<LinkButtonGrid showDescription={true} links={[
{
name: "Suite",
description: "2021",
icon: "reddit",
href: "https://www.reddit.com/r/NEU/comments/ooa9y5/153_hemenway_dorm/"
},
{
name: "Economy double",
description: "2017",
icon: "reddit",
href: "https://www.reddit.com/r/NEU/comments/6tktql/153_hemenway_st/"
},
]} />
