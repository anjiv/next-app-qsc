"use client";

import { useRef } from "react";
// Importing server actions from another file.
import { createTodo } from "../actions/todos";

export default function Todoform() {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form
    action={async formData => {
      if(inputRef.current != null) {
        inputRef.current.value=""
      }
      await createTodo(formData);
      // Instead of passing the entire formData we can also just pass title.
      // await createTodo(formData.get("title") as string);
    }}
    style={{
      display: "flex",
      gap:".25rem",
      flexDirection: "column",
      maxWidth: "200px",
    }}>
      <label htmlFor="title">Title</label>
      <input type="text" name="title" id="title" ref={inputRef}/>
      <button>Add</button>
    </form>
  );
}
