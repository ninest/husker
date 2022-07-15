---
title: White Hall
description: Information on White Hall
createdAt: 2022-01-04
updatedAt: 2022-01-04

pageType: dorm
---

## Images

<Expandable title="Standard Double" icon="image">
  <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 gap-base">
    <Image src={"/housing/white-hall/double5.png"} height={ 1726} width={2302} quality={50} alt={"White Hall Double 5"}/>
    <Image src={"/housing/white-hall/double6.png"} height={ 1726} width={2302} quality={50} alt={"White Hall Double 6"}/>
    <Image src={"/housing/white-hall/double1.png"} height={ 1726} width={2302} quality={50} alt={"White Hall Double 1"}/>
    <Image src={"/housing/white-hall/double2.png"} height={ 1726} width={2302} quality={50} alt={"White Hall Double 2"}/>
    <Image src={"/housing/white-hall/double3.png"} height={ 1726} width={2302} quality={50} alt={"White Hall Double 3"}/>
    <Image src={"/housing/white-hall/double4.png"} height={ 1726} width={2302} quality={50} alt={"White Hall Double 4"}/>
  </div>
</Expandable>

<Expandable title="Forced Triple" icon="image">
  <Image src={"/housing/white-hall/triple1.jpeg"} height={3024} width={4032} quality={50} alt={"White Hall Triple 1"}/>
</Expandable>

<Expandable title="Videos" icon="video" variant="gray">
  <div className="grid grid-cols-1 gap-base">
    <YoutubeEmbed videoId="NTwTXX48DTM" />
    <YoutubeEmbed videoId="s3b34GOuv-U" />
  </div>
</Expandable>

<div className="flex">
  <Button 
    icon="plus"
    href={{
      pathname: "/contribute",
      query: { name: frontmatter.title },
    }}> Submit images </Button>
</div>

## Reddit Links

<LinkButtonGrid showDescription={true} links={[
{
name: "White Hall, what to bring",
description: "2018",
icon: "reddit",
href: "https://www.reddit.com/r/NEU/comments/8pdsls/whats_white_hall_like_and_what_should_we_bring_to/"
},
{
name: "Economy quad",
description: "2016",
icon: "reddit",
href: "https://www.reddit.com/r/NEU/comments/4n974m/got_placed_into_an_economy_quad_for_freshman_year/"
},
{
name: "White Hall",
description: "2015",
icon: "reddit",
href: "https://www.reddit.com/r/NEU/comments/6gc4l4/whats_white_hall_like/"
},
{
name: "Kitchen",
description: "2015",
icon: "reddit",
href: "https://www.reddit.com/r/NEU/comments/3cieno/white_hall_kitchen/"
},
]} />
