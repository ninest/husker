import { issueData } from "@/lib/github/issue";
import { contributeFormSchema } from "@/schema/contribute";
import { createRouter } from "./context";

export const githubRouter = createRouter().mutation("create-issue", {
  input: contributeFormSchema,
  async resolve({ input, ctx }) {
    const { title, body } = issueData(input);
    console.log({ title, body });
    const issue = await ctx.octokit.rest.issues.create({
      owner: "ninest",
      repo: "husker",
      title,
      body,
      // TODO: label not working
      labels: ["suggestion"],
    });
    return issue;
  },
});
