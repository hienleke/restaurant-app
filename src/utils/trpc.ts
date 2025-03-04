
import { createTRPCReact } from "@trpc/react-query";
import type { AppRouter } from "../server/trpc"; // Ensure this path is correct

export const trpc = createTRPCReact<AppRouter>();
