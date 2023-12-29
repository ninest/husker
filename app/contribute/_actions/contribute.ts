"use server";

import { ContributeFormType } from "@/app/contribute/contribute-form";

export async function contributeAction(params: ContributeFormType) {
  const content = encodeURIComponent(`${params.content}\n\n${params.images.map((image) => image.url).join("\n\n")}`);
  const formUrl = `https://docs.google.com/forms/d/e/1FAIpQLSdQ8vhyic8Z5lxnBw9643UnqPxN2MIfssLYz32OBW_Vhn_X9A/formResponse?usp=pp_url&entry.770504043=${params.name}&entry.1613298240=${content}&entry.1321358172=${params.credit}`;
  try {
    const response = await fetch(formUrl);
    return { type: "success" };
  } catch (e) {
    return { type: "error", submitUrl: formUrl };
  }
}
