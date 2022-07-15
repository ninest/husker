import superjson from "superjson";
import { createRouter } from "./context";
import { githubRouter } from "./github";

export const appRouter = createRouter()
  // .transformer(superjson)
  .merge("github.", githubRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
