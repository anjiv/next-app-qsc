import { getTodos } from "@/api/api";
import Todoform from "../components/TodoForm";
import SelectAllButton from "../components/SelectAllButton";
import TodoItem from "../components/TodoItem";

export default async function Todo() {
  const todos = await getTodos();
  return (
    <>
      <h1>Todo list</h1>
      <Todoform />
      {/* Server action passed as prop */}
      {/* <Todoform createTodo={createTodo}/> */}

      <SelectAllButton ids={todos.map((todo) => todo.id)} />
      <ul>{todos.map(todo => (<TodoItem key={todo.id} {...todo} />))}</ul>
    </>
  )
}
