---
title: East Village
description: Information on East Village
createdAt: 2022-01-04
updatedAt: 2022-04-27

pageType: dorm
---

## Images

import double1 from './house/east-village/images/double/double1.jpg'
import double2 from './house/east-village/images/double/double2.jpg'
import double3 from './house/east-village/images/double/double3.jpg'
import double4 from './house/east-village/images/double/double4.jpg'
import double5 from './house/east-village/images/double/double5.jpg'
import double6 from './house/east-village/images/double/double6.jpg'

import triple1 from './house/east-village/images/triple/triple1.png'
import triple2 from './house/east-village/images/triple/triple2.png'
import triple3 from './house/east-village/images/triple/triple3.png'
import triple4 from './house/east-village/images/triple/triple4.png'

<Expandable title="Honors double" icon="image">
  <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 gap-base">
    <Image src={double1} height={2992} width={2992} quality={50} /> 
    <Image src={double2} height={2992} width={2992} quality={50} /> 
    <Image src={double3} height={2992} width={2992} quality={50} /> 
    <Image src={double4} height={2992} width={2992} quality={50} /> 
    <Image src={double5} height={2992} width={2992} quality={50} /> 
    <Image src={double6} height={2992} width={2992} quality={50} /> 
  </div>
</Expandable>

<Expandable title="Forced triple" icon="image">
  <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 gap-base">
    <Image src={triple1} height={4032} width={3024} quality={50} /> 
    <Image src={triple2} height={4032} width={3024} quality={50} /> 
    <Image src={triple3} height={4032} width={3024} quality={50} /> 
  </div>
  <Spacer />
  <Image src={triple4} width={4032} height={3024} quality={50} /> 
</Expandable>

## Reddit Links

<LinkButtonGrid showDescription={true} links={[
{
name: "Suites",
description: "2021",
icon: "reddit",
href: "https://www.reddit.com/r/NEU/comments/lctoae/how_are_east_village_dorms/"
},
]} />
