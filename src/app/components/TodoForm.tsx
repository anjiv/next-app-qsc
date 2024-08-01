"use client";

import SubmitButton from "./SubmitButton";
import { useFormState } from "react-dom";

export default function TodoForm({createTodo}: any) {
  const [error, action] = useFormState(createTodo, { errorMessage: "" });
  return (
    <>
      <div>{error?.errorMessage}</div>
      <form
        action={action}
        style={{
          display: "flex",
          gap:".25rem",
          flexDirection: "column",
          maxWidth: "200px",
        }}
      >
        <label htmlFor="title">Title</label>
        <input type="text" name="title" id="title"/>
        <SubmitButton />
      </form>
    </>
  );
}
