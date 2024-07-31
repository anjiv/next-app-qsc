import { getTodo, getTodos } from "@/api/api";

export async function generateStaticParams() {
  const todos = await getTodos();
  return todos.map(todo => {
    return {todoId: todo.id.toString()}
  });
}

export default async function TodoPage({params: {todoId}}: any) {
  const todo = await getTodo(todoId);
  console.log(todo.id);
  return (
    <h2>Todo: {todo.title}</h2>
  );
}
