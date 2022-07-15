---
title: Stetson West
description: Information on Stetson West
createdAt: 2022-01-04
updatedAt: 2022-01-04

pageType: dorm
---




## Images

import double1 from './house/stetson-west/images/double/double1.jpeg'
import double2 from './house/stetson-west/images/double/double2.jpeg'

<Expandable title="Standard Double" icon="image">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-base">
    <Image src={double1} height={3024} width={4032} quality={50} alt={"Stetson West Double 1"}/>
    <Image src={double2} height={3024} width={4032} quality={50} alt={"Stetson West Double 2"}/>
  </div>
</Expandable>

import hall1 from './house/stetson-west/images/hall/hall1.jpeg'
import hall2 from './house/stetson-west/images/hall/hall2.jpeg'

<Expandable title="Hall" icon="image" variant="gray">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-base">
    <Image src={hall1} height={4032} width={3024} quality={50} alt={"Stetson West Hall 1"}/>
    <Image src={hall2} height={4032} width={3024} quality={50} alt={"Stetson West Hall 2"}/>
  </div>
</Expandable>

<Expandable title="Videos" icon="video" variant="gray">
  <div className="grid grid-cols-1 gap-base">
    <YoutubeEmbed videoId="5JZtVdhZM18" />
  </div>
</Expandable>


## Reddit Links

<LinkButtonGrid showDescription={true} links={[
{
name: "Perks",
description: "2016",
icon: "reddit",
href: "https://www.reddit.com/r/NEU/comments/50df6i/what_are_some_perks_of_living_at_stetson_west/"
},
{
name: "Info on Stetson West",
description: "2014",
icon: "reddit",
href: "https://www.reddit.com/r/NEU/comments/27wzva/information_about_stetson_west/"
},
{
name: "How's Stetson West",
description: "2013",
icon: "reddit",
href: "https://www.reddit.com/r/NEU/comments/1g5uac/how_is_stetson_west_housing/"
},
]} />
