import { getTodos } from "@/api/api";
import MySelect from "@/components/MySelect";
import TodoList from "@/components/TodoList";

export default async function Home() {
  const todos = await getTodos();
  console.log("Home");

  return (
    <>
    <MySelect />
    <h1>Todos: {todos.length}</h1>
    <TodoList />
    </>
  );
}
