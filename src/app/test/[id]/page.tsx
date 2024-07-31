export default async function Home({params: {id}}: any) {
  console.log("rendering", id);
  return (
    <>
      <h1>Test dynamic page</h1>
    </>
  );
}
