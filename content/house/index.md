---
title: Housing
description: More information about housing
lastUpdated: 2021-08-31
---

import { dorms, traditional, suite, hotel, apartment, leased } from '@/content/housing/'

## Dorms

{[traditional, suite, hotel, apartment, leased].map(dormType => {
return <div key={dormType.slug} className="prose">

<h3>{dormType.name}</h3>
<section className="grid gap-base grid-cols-2 md:grid-cols-3">
{dorms.filter(dorm => dorm.type == dormType).map(dorm => (
  <Block 
    key={dorm.slug} 
    title={dorm.title} 
    href={`/housing/${dorm.slug}`}>
    {dorm.pricesPoints.map((p) => p.name).join(", ")}
  </Block>
))}
</section>
  </div>
})}
