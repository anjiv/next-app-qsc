import { createPost, getPosts } from "@/db/posts";
import { revalidatePath } from "next/cache";
import { NextRequest } from "next/server";

export async function GET() {
  const posts = await getPosts();
  revalidatePath("/posts");
  return Response.json(posts);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const posts = await createPost(body);
  revalidatePath("/posts");
  return Response.json(posts);
}
