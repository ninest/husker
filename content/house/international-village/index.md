---
title: International Village
description: Information on International Village
createdAt: 2022-01-04
updatedAt: 2022-01-04

pageType: dorm
---

<Expandable title="Dorm Information" variant="gray">

- 1-, 2-, 3-person suites
  - Enhanced single semi-private bedrooms (shares bathroom with connecting room)
  - Enhanced double semi-private bedrooms (shares bathroom with connecting room)
  - Enhanced forced triple semi-private bedrooms (shares bathroom with connecting room)
- Lounges on every floor
- <Icon className="inline" id="printer" /> Printer on first-floor lobby

</Expandable>

<Expandable title="Floor Plans" variant="gray">
  <div className="grid grid-cols-1 gap-base">
    <Image src={"/housing/international-village/plan1.jpg"} height={234} width={269} quality={50} />
  </div>
</Expandable>

## Images

<Expandable title="Double" icon="image">
  <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 gap-base">
    <Image src={"/housing/international-village/double1.jpg"} height={1478} width={1125} quality={50} /> 
  </div>
</Expandable>

<Expandable title="Single" icon="image">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-base">
    <Image src={"/housing/international-village/single2.png"} height={1608} width={2164} quality={50} /> 
    <Image src={"/housing/international-village/single3.png"} height={1608} width={2164} quality={50} /> 
  </div>
  <Spacer />
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-base">
    <Image src={"/housing/international-village/single1.jpg"} height={2048} width={1536} quality={50} /> 
  </div>
</Expandable>

<Expandable title="Bathroom" icon="image">
  <div className="grid grid-cols-1 gap-base">
    <Image src={"/housing/international-village/bathroom1.jpg"} height={2048} width={1536} quality={50} />
  </div>
</Expandable>

<Expandable title="Videos" icon="video" variant="gray">
  <div className="grid grid-cols-1 gap-base">
    <YoutubeEmbed videoId="xNI5kKrLsyw" />
    <YoutubeEmbed videoId="5XV07tNnICw" />
    <YoutubeEmbed videoId="yd7RlBdA4ac" />
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

## Other

<LinkButtonGrid showDescription={true} links={[
{
name: "My Dorm Room Is Secretly Awesome",
description: "2011",
href: "https://ithinkincomics.wordpress.com/2011/09/04/my-dorm-room-is-secretly-awesome/"
},
]} />
