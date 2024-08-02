import { SkeletonPostForm } from "@/components/PostForm";

export default function NewPostPageLoading() {
  return (
    <>
      <h1 className="page-title">New Post</h1>
      <SkeletonPostForm/>
    </>
  );
}
