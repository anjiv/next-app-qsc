import { getTodos } from "@/api/api";

export async function TodoList() {
  const todos = await getTodos();
  return (
    todos.map(todo => <li key={todo.id}>{todo.title}</li>)
  );
}
