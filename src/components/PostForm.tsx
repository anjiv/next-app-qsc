"use client"; // Since we need to handle errors, save button status on client side.

import { FormGroup } from "./FormGroup"
import { ReactNode, Suspense } from "react"
import Link from "next/link"
import { SkeletonInput } from "./Skeleton"
import { useFormState, useFormStatus } from "react-dom"
import { editPostAction, newPostAction } from "@/app/actions/posts";

type Props = {
  userSelectOptions: ReactNode
  post?: {title: string, body: string, userId: number, id: number}
}

export function PostForm({post, userSelectOptions}: Props) {

  // editPostAction binding one paramater as post.id and other two are picked from the function(prevState, formData).
  const action = post == null ? newPostAction : editPostAction.bind(null, post.id);
  const [errors, formAction] = useFormState(action, {});

  return (
    <form className="form" action={formAction}>
      <div className="form-row">

        <FormGroup errorMessage={errors.title}>
          <label htmlFor="title">Title</label>
          <input required type="text" name="title" id="title" defaultValue={post?.title}/>
        </FormGroup>

        <FormGroup errorMessage={errors.userId}>
          <label htmlFor="userId">Author</label>
          <select required name="userId" id="userId" defaultValue={post?.userId}>
            <Suspense fallback={<option value="">Loading...</option>}>
              {userSelectOptions}
            </Suspense>
          </select>
        </FormGroup>

      </div>

      <div className="form-row">
        <FormGroup errorMessage={errors.body}>
          <label htmlFor="body">Body</label>
          <textarea required name="body" id="body" defaultValue={post?.body}/>
        </FormGroup>
      </div>

      <div className="form-row form-btn-row">

        {/* If cancel button is clicked from New post then it takes to /posts.
        If cancel button is clicked from Edit post then to that particular post page i.e post.id */}
        <Link className="btn btn-outline" href={post ? `/posts/${post.id}` : `/posts`}>
          Cancel
        </Link>

        <SaveButton />
      </div>
    </form>
  )
}

function SaveButton() {
  const {pending} = useFormStatus();
  return (
    <button disabled={pending} className="btn">{pending? "Saving" : "Save"}</button>
  );
}

export function SkeletonPostForm() {
  return (
    <form className="form">
      <div className="form-row">
        <FormGroup>
          <label htmlFor="title">Title</label>
          <SkeletonInput />
        </FormGroup>
        <FormGroup>
          <label htmlFor="userId">Author</label>
          <SkeletonInput />
        </FormGroup>
      </div>
      <div className="form-row">
        <FormGroup>
          <label htmlFor="body">Body</label>
          <SkeletonInput />
        </FormGroup>
      </div>
      <div className="form-row form-btn-row">
        <Link className="btn btn-outline" href="/posts">
          Cancel
        </Link>
        <button disabled className="btn">
          Save
        </button>
      </div>
    </form>
  )
}
