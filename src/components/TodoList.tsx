import { getTodos } from "@/api/api";
import TodoItem from "./TodoItem";
import { Child } from "./Child";

export default async function TodoList() {
  const todos = await getTodos();
  console.log("Todo list");
  return (
    <ul>
      {/* Here <Child> component is considered as Server component. */}
      <Child />

      {/* <Child> will still be considered a server component as it is passed down as a children.
      It can be passed as prop as well. */}
      {todos.slice(0,2).map(todo => <TodoItem key={todo.id} {...todo}><Child/></TodoItem>)}
    </ul>
  );
}
