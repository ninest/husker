---
title: Dining
lastUpdated: 2021-07-17
---

This is the dining page

import {useState} from 'react'

export const A = () => {
  const [a,seta] = useState(0);
  return (
    <h1 onClick={()=>seta(a+1)}>{a}</h1>
  )
};

This is <A/>



import gyear from "@c/huskycard/gyear.png"

<Image src={gyear} width={100} height={50}/>