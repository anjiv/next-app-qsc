import { wait } from "@/lib/wait";

export default async function PostsTestPage() {
  await wait(1000);
  const postsText = "Posts test";
  return <div className="card posts">{postsText}</div>
}
