import Example from "@/app/components/Example";
import { notFound } from "next/navigation";

function getTodo(id: string) {
  return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`).then(response=>response.json())
}

export default async function Page({params}:{params:{id:string}}) {
  const todo = await getTodo(params.id);
  if(todo.title == null) return notFound();
  return (
    <>
      <h1>{todo.title}</h1>
      <Example />
    </>
  )
}
