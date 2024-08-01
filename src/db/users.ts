import { unstable_cache } from "next/cache";
import prisma from "./db"
import { cache } from "react";

// Added cache for memoization request.
// Added unstable_cache for next js data caching.
export const getUsers = unstable_cache(
  cache(async() => {
    await wait(2000);
    return prisma.user.findMany()
  }),
  ["users"]
);

export const getUser = unstable_cache(
  cache(async(userId: string | number) => {
    await wait(2000);
    return prisma.user.findUnique({ where: { id: Number(userId) } })
  }),
  ["users", "userId"]
);

function wait(duration: number) {
  return new Promise(resolve => {
    setTimeout(resolve, duration)
  })
}
