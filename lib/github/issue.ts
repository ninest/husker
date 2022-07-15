import { octokit } from "@/lib/github";
import { ContributeForm } from "@/schema/contribute";
import { formatDate } from "../utils/date";

export const issueData = (data: ContributeForm) => {
  let title = data.name;
  if (!title) title = formatDate(new Date());

  let body = data.content;
  if (data.name) body += `\n\n**Suggestion from ${data.name}**`;

  return { title, body };
};
