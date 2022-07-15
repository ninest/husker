import { octokit } from "@/lib/github";

export const createIssue = async () => {
  const {
    data: { login },
  } = await octokit.rest.users.getAuthenticated();
  console.log("Hello, %s", login);
};
