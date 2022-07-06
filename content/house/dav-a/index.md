---
title: Davenport A
description: Information on the Davenports
createdAt: 2022-01-04
updatedAt: 2022-01-04

pageType: dorm
---

import { YoutubeEmbed } from "@/components/YoutubeEmbed"

<Expandable title="Dorm Information" variant="gray">

- 3-, 4-, 5-, and 6-person apartments; majority of apartments are 5- or 6-person
  - Enhanced single bedrooms
  - Enhanced double bedrooms
- Lounges on first floor

</Expandable>

import plan1 from './house/dav-a/images/plan1.jpg'
import plan2 from './house/dav-a/images/plan2.jpg'
import plan3 from './house/dav-a/images/plan3.jpg'

<Expandable title="Floor Plans" variant="gray">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-base">
    <div>
      <Image src={plan1} width={706} height={471} quality={50} />
    </div>
    <div>
      <Image src={plan2} width={997} height={480} quality={50} />
    </div>
    <div>
      <Image src={plan3} width={623} height={503} quality={50} />
    </div>
  </div>
</Expandable>

## Images

<Expandable title="Videos" icon="video" variant="gray">
  <div className="grid grid-cols-1 gap-base">
    <YoutubeEmbed videoId="4EtiBtBqh04" />
    <YoutubeEmbed videoId="reOT2ix-0E4" />
  </div>
</Expandable>
