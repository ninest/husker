import { createRouter } from "./context";
import { z } from "zod";
import { contributeFormSchema } from "@/schema/contribute";
import { isNumberObject } from "util/types";

export const githubRouter = createRouter()
  .query("get-user", {
    resolve({ ctx }) {
      console.log({ ctx });
      return {};
    },
  })
  .mutation("create-issue", {
    input: contributeFormSchema,
    async resolve({ input, ctx }) {
      const issue = await ctx.octokit.rest.issues.create({
        owner: "ninest",
        repo: "husker",
        title: `Issue title`, //`${input.name ?? "Suggestion"}`,
        body: input.content,
      });
      return issue;
    },
  });
