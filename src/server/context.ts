import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export function createTRPCContext() {
  return { prisma }; // Ensure Prisma is available in the context
}

export type Context = ReturnType<typeof createTRPCContext>;
