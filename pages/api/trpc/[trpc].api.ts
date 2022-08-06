import { appRouter } from "@/server/router";
import { createContext } from "@/server/router/context";
import { createNextApiHandler } from "@trpc/server/adapters/next";

export default createNextApiHandler({
  router: appRouter,
  createContext: createContext,
});
