---
title: Housing
description: More information about housing
lastUpdated: 2021-08-31
---

import { dorms } from '@/content/housing/'

## Dorms

<section className="grid gap-base grid-cols-2 md:grid-cols-3">
{dorms.map(dorm => {
  return <Block key={dorm.slug} title={dorm.title} href={`/housing/${dorm.slug}`}>{dorm.type.name}</Block>
})}
</section>
