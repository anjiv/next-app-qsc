import Link from "next/link";

export default function TestPage() {
  console.log("Rendering test");

  return (
    <>
      <h1>Page Test</h1>
      <Link href="/">Home</Link>
    </>
  );
}
