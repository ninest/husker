---
title: International Village
description: Information on International Village
createdAt: 2022-01-04
updatedAt: 2022-01-04

pageType: dorm
---

import { YoutubeEmbed } from "@/components/YoutubeEmbed"

## Images

import double1 from './house/international-village/images/double/double1.jpg'

<Expandable title="Double" icon="image">
  <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 gap-base">
    <Image src={double1} height={1478} width={1125} quality={50} /> 
  </div>
</Expandable>

import single1 from './house/international-village/images/single/single1.jpg'
import single2 from './house/international-village/images/single/single2.png'
import single3 from './house/international-village/images/single/single3.png'

<Expandable title="Single" icon="image">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-base">
    <Image src={single2} height={1608} width={2164} quality={50} /> 
    <Image src={single3} height={1608} width={2164} quality={50} /> 
  </div>
  <Spacer />
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-base">
    <Image src={single1} height={2048} width={1536} quality={50} /> 
  </div>
</Expandable>

import bathroom1 from './house/international-village/images/bathroom/bathroom1.jpg'

<Expandable title="Bathroom" icon="image">
  <div className="grid grid-cols-1 gap-base">
    <Image src={bathroom1} height={2048} width={1536} quality={50} />
  </div>
</Expandable>


import plan1 from './house/international-village/images/plan.jpg'

<Expandable title="Floor Plans" variant="gray">
  <div className="grid grid-cols-1 gap-base">
    <Image src={plan1} height={234} width={269} quality={50} />
  </div>
</Expandable>


<Expandable title="Videos" icon="video" variant="gray">
  <div className="grid grid-cols-1 gap-base">
    <YoutubeEmbed videoId="xNI5kKrLsyw" />
    <YoutubeEmbed videoId="5XV07tNnICw" />
    <YoutubeEmbed videoId="yd7RlBdA4ac" />
  </div>
</Expandable>

## Reddit Links

<LinkButtonGrid showDescription={true} links={[
{
name: "Freshman rating",
description: "2018",
icon: "reddit",
href: "https://www.reddit.com/r/NEU/comments/8c6bh3/rate_international_village_as_a_freshman_housing/"
},
{
name: "Gym",
description: "2013",
icon: "reddit",
href: "https://www.reddit.com/r/NEU/comments/3g9ndn/international_village_gym/"
},
{
name: "East",
description: "2013",
icon: "reddit",
href: "https://www.reddit.com/r/NEU/comments/1tmot0/has_anyone_lived_in_international_village_east/"
},
]} />
