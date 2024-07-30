import { getNewTodo, getTodos, getUsers } from "@/api/api";
import { TodoList } from "@/components/todolist";

export default async function Home() {
  const todos1 = await getTodos();
  const todos2 = await getTodos();
  const user = await getUsers();

  const newtodo1 = await getNewTodo();
  const newtodo2 = await getNewTodo();
  return (
    <>
      <h1>Todo count: {todos1.length}</h1>
      <h1>Users count: {user.length}</h1>
      <li key={newtodo1.id}>{newtodo1.title}</li>
      <TodoList />
    </>
  );
}
