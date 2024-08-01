import { getTodos } from "@/api/api";
import Todoform from "../components/TodoForm";
import TodoItem from "../components/TodoItem";
import { createTodo } from "../actions/todos";

export default async function Todo() {
  const todos = await getTodos();
  return (
    <>
      <h1>Todo list</h1>
      <Todoform createTodo={createTodo}/>
      {/* Server action passed as prop */}
      {/* <Todoform createTodo={createTodo}/> */}
      <ul>{todos.map(todo => (<TodoItem key={todo.id} {...todo} />))}</ul>
    </>
  )
}
