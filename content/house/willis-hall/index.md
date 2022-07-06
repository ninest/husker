---
title: Willis Hall
description: Information on Willis Hall
createdAt: 2022-01-14
updatedAt: 2022-01-14

pageType: dorm
---

import { YoutubeEmbed } from "@/components/YoutubeEmbed"

## Images

import double1 from './house/willis-hall/images/double1.png'
import double2 from './house/willis-hall/images/double2.png'
import double3 from './house/willis-hall/images/double3.png'

<Expandable title="Double (Four person apartment)" icon="image">
  <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 gap-base">
    <Image src={double1} width={2124} height={1592} /> 
    <Image src={double2} width={2128} height={1592} /> 
    <Image src={double3} width={2284} height={1474} /> 
  </div>
</Expandable>

import bathroom1 from './house/willis-hall/images/bathroom1.png'
import bathroom2 from './house/willis-hall/images/bathroom2.png'

<Expandable title="Bathroom" icon="image">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-base">
    <Image src={bathroom1} width={1198} height={1594} /> 
    <Image src={bathroom2} width={1194} height={1596} /> 
  </div>
</Expandable>

import common1 from './house/willis-hall/images/common1.png'
import common2 from './house/willis-hall/images/common2.png'
import common3 from './house/willis-hall/images/common3.png'
import common4 from './house/willis-hall/images/common4.png'

<Expandable title="Common area" icon="image">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-base">
    <Image src={common1} width={2118} height={1596} /> 
    <Image src={common2} width={1198} height={1588} /> 
    <Image src={common3} width={2124} height={1596} /> 
    <Image src={common4} width={2130} height={1598} /> 
  </div>
</Expandable>


import kitchen1 from './house/willis-hall/images/kitchen1.png'
import kitchen2 from './house/willis-hall/images/kitchen2.png'
import kitchen3 from './house/willis-hall/images/kitchen3.png'

<Expandable title="Kitchen" icon="image">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-base">
    <Image src={kitchen1} width={1188} height={1600} /> 
    <Image src={kitchen2} width={1194} height={1598} /> 
    <Image src={kitchen3} width={1194} height={1600} /> 
  </div>
</Expandable>

<Expandable title="Videos" icon="video" variant="gray">
  <div className="grid grid-cols-1 gap-base">
    <YoutubeEmbed videoId="SN87vuKhcHQ  " />
  </div>
</Expandable>

## Reddit Links

<LinkButtonGrid showDescription={true} links={[
{
name: "Willis Hall",
description: "2012",
icon: "reddit",
href: "https://www.reddit.com/r/NEU/comments/pf596/has_anyone_lived_in_willis_or_know_stuff_about_it/"
},
]} />
