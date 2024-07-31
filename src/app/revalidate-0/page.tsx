import { getTodos } from "@/api/api";

export const revalidate = 0;
// This won't be dynamic because data gets cached for 5sec. So, it shows static page.
// export const revalidate = 5;

export default async function Revalidate0() {
  const todos = await getTodos();

  return <h1>Dynamic: {todos.length}</h1>
}
