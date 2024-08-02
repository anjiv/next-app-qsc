import { PostForm } from "@/components/PostForm";
import { getPost } from "@/db/posts";
import { notFound } from "next/navigation";
import { UserSelectOptions } from "../../userSelectOptions";
import { getUsers } from "@/db/users";

type PageProps = {
  params: { postId: string }
}

export default async function EditPostPage(props: PageProps) {
  const { params: {postId} } = props;

  // Promise.all runs both in parallel. To load users and posts data at same time on Edit post page.
  const [post, users] = await Promise.all([getPost(postId), getUsers()]);

  if(post == null) return notFound();

  return (
    <>
      <h1 className="page-title">Edit Post</h1>
      <PostForm post={post} userSelectOptions={<UserSelectOptions users={users}/>}/>
    </>
  )
}
