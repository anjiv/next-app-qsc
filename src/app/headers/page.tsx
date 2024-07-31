import { headers } from "next/headers";

export default function Header() {
  const h = headers().get("user-agent");
  console.log(h);
  return <h1>Headers page</h1>
}
