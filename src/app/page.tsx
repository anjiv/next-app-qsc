import { getTodos } from "@/api/api";
import { revalidatePath } from "next/cache";

async function createTodo(formData: FormData) {
  "use server";

  await fetch(`http://localhost:3001/todos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: formData.get("title"),
      completed: false,
    }),
  }).then(resolve => resolve.json())

  revalidatePath("/");
}

export default async function Page() {
  const todos = await getTodos();
  return (
    <>
      <h1>Todo list</h1>
      <form
      action={createTodo}
      style={{
        display: "flex",
        gap:".25rem",
        flexDirection: "column",
        maxWidth: "200px",
      }}>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" id="title"/>
        <button>Add</button>
      </form>

      <ul>{todos.map(todo => (<li key={todo.id}>{todo.title}</li>))}</ul>
    </>
  )
}
