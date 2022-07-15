import type { AppRouter } from "../server/router";
import { createReactQueryHooks } from "@trpc/react";

export const server = createReactQueryHooks<AppRouter>();
