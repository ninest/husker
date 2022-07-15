import { ContributeForm } from "@/schema/contribute";

export const submitToContributeForm = async (data: ContributeForm) => {
  const formUrl = `https://docs.google.com/forms/d/e/1FAIpQLSdQ8vhyic8Z5lxnBw9643UnqPxN2MIfssLYz32OBW_Vhn_X9A/formResponse?usp=pp_url&entry.770504043=${data.name}&entry.1613298240=${data.content}&entry.1321358172=${data.credit}`;
  try {
    // CORS bypasser
    await fetch(`https://api.codetabs.com/v1/proxy?quest=${formUrl}`);
    return true;
  } catch {
    return false;
  }
};
