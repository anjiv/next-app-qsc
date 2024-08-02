"use server"; // server actions

import { createPost, deletePost, updatePost } from "@/db/posts";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function deletePostAction(postId: string | number) {
  const post = await deletePost(postId);

  revalidatePath("/posts");
  revalidatePath(`/users/${post.userId}`); // getting upto-date information from db.
  revalidatePath(`${post.id}`);
  redirect("/posts");
}

export async function editPostAction(postId: number, prevState: unknown, formData: FormData) {
  const [data, errors] = validatePostAndSanitisePost(formData);

  if(!data) return errors;

  const post = await updatePost(postId, data);

  revalidatePath("/posts");
  revalidatePath(`/posts/${post.id}`);
  revalidatePath(`/users/${post.userId}`); // getting upto-date information from db.
  redirect(`/posts/${post.id}`);
}

// formData is passed in whenever using actions.
export async function newPostAction(prevState: unknown, formData: FormData) {
  const [data, errors] = validatePostAndSanitisePost(formData);

  if(!data) return errors;

  const post = await createPost(data);

  revalidatePath("/posts"); // Revalidating posts list page to show updated data.
  revalidatePath(`/users/${post.userId}`); // Revalidating users post page.
  redirect(`/posts/${post.id}`); // Redirect to newly created post page.
}

type SanitisedFormDataType = {
  title?: string;
  body?: string;
  userId?: string
};


function validatePostAndSanitisePost(formData: FormData) {
  const errors: SanitisedFormDataType = {};
  const title = formData.get("title") as string; // title cached as string
  const body = formData.get("body") as string; // body cached as string
  const userId = Number(formData.get("userId")); // userId cached as number
  let isValid = true;

  if(title === null) {
    errors.title="Required";
    isValid = false;
  }

  if(body === null) {
    errors.body="Required";
    isValid = false;
  }

  if(isNaN(userId)) {
    errors.userId="Required";
    isValid = false;
  }

  return [isValid ? {title, body, userId}: undefined, errors] as const
}
