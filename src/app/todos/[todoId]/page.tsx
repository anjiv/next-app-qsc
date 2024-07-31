export default function TodoPage({params: {todoId}}: {params: {todoId: string}}) {
  return <h1>Todo: {todoId}</h1>
}
