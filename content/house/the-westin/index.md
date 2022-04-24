---
title: The Westin
description: Information on The Westin
createdAt: 2022-01-04
updatedAt: 2022-01-04

pageType: dorm
---

## Images

import room1 from './house/the-westin/images/room1.jpg'
import gym1 from './house/the-westin/images/gym/weights1.jpg'
import gym2 from './house/the-westin/images/gym/weights2.jpg'
import gym3 from './house/the-westin/images/gym/weights3.jpg'

<Expandable title="Rooms" icon="image">
  <Image src={room1} height={ 3456} width={4608} alt={"Westin Room 1503"} />
</Expandable>

<Expandable title="Gym" icon="image">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-base">
    <Image src={gym1} height={ 3456} width={4608} quality={50} alt={"Westin Gym Weights section 1"}/>
    <Image src={gym2} height={ 3456} width={4608} quality={50} alt={"Westin Gym Weights section 2"}/>
    <Image src={gym3} height={ 3456} width={4608} quality={50} alt={"Westin Gym Weights section 3"}/>
  </div>
</Expandable>

## Reddit Links

<LinkButtonGrid showDescription={true} links={[
{
name: "Westin pros",
description: "2021",
icon: "reddit",
href: "https://www.reddit.com/r/NEU/comments/rj1vr2/whats_good_about_the_westin/"
},
{
name: "Westin vs regular housing",
description: "2021",
icon: "reddit",
href: "https://www.reddit.com/r/NEU/comments/odjoay/westin_hotel_vs_regular_firstyear_housing/"
},
]} />
