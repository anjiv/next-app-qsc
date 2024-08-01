import { cache } from "react";
import prisma from "./db";
import { unstable_cache } from "next/cache";

// Added cache for memoization request.
// Added unstable_cache for next js data caching.
export const getPostComments = unstable_cache(
  cache(async (postId: string | number) => {
    await wait(2000);
    return prisma.comment.findMany({ where: { postId: Number(postId) } })
  }),
  ["comments", "postId"]
);

function wait(duration: number) {
  return new Promise(resolve => {
    setTimeout(resolve, duration)
  })
}
