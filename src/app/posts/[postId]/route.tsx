import { getPost } from "@/db/posts";
import { NextRequest } from "next/server";

export async function GET(
  request: NextRequest,
{
  params: { postId },
}: {
  params: { postId: string }
}) {
  const posts = await getPost(postId);
  return Response.json(posts);
}
