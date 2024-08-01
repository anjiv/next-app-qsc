"use server";

import { revalidatePath } from "next/cache";

// export async function createTodo(title: string)
export async function createTodo(formData: FormData) {

  await fetch(`http://localhost:3001/todos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: formData.get("title"),
      // title // If passing only title in TodoForm
      completed: false,
    }),
  }).then(resolve => resolve.json())

  revalidatePath("/todo");
}

export async function toggleTodo(id: number, completed: boolean) {
  await wait(2000);
  await fetch(`http://localhost:3001/todos/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      completed,
    }),
  }).then(resolve => resolve.json())
  revalidatePath("/");
}

function wait(duration: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
}
