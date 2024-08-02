import { wait } from "@/lib/wait";

export default async function PostsPage() {
  await wait(1000);
  const postsText = "Posts";
  return <div className="card posts">{postsText}</div>
}
