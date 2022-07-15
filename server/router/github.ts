import { issueData } from "@/lib/github/issue";
import { contributeFormSchema } from "@/schema/contribute";
import { createRouter } from "@/server/router/context";

export const githubRouter = createRouter().mutation("create-issue", {
  input: contributeFormSchema,
  async resolve({ input, ctx }) {
    const { title, body } = issueData(input);
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
