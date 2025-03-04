import { initTRPC } from "@trpc/server";
import { PrismaClient } from "@prisma/client";
import { z } from "zod";
import {transalte} from "./translate";

const prisma = new PrismaClient();

export const createTRPCContext = () => ({
  prisma,
});

const t = initTRPC.context<typeof createTRPCContext>().create();

export const appRouter = t.router({
  getRestaurants: t.procedure.query(async ({ ctx }) => {
    const result = await ctx.prisma.restaurant.findMany();
    return result;
  }),

  getCategories: t.procedure.query(async ({ ctx }) => {
    const result = await ctx.prisma.category.findMany();
    for (const category of result) {
      category.name =  transalte(category.name);
    }
    return result;
  }),

  getRestaurantsByCategory: t.procedure
    .input(
      z.object({
        categoryId: z.string(),
      })
    )
    .query(async ({ ctx, input }) => {
      const result = await ctx.prisma.$queryRaw`
        SELECT r.*, c.name as categoryName 
        FROM "Restaurant" r
        LEFT JOIN "Category" c ON r."categoryId" = c.id
        WHERE r."categoryId" = ${input.categoryId}
      `;
      return result;
    }),
  addFavorite: t.procedure
    .input(
      z.object({
        id: z.string(),
        isFavorite: z.boolean(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const updatedRestaurant = await ctx.prisma.restaurant.update({
        where: { id: input.id },
        data: { isFavorite: input.isFavorite },
      });
      return updatedRestaurant; 
    }),
});

export type AppRouter = typeof appRouter;
