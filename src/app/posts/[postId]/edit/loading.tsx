import { SkeletonPostForm } from "@/components/PostForm";

export default function EditPostPageLoading() {
  return (
    <>
      <h1 className="page-title">Edit Post</h1>
      <SkeletonPostForm/>
    </>
  );
}
