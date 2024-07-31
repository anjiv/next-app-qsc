import { cookies } from "next/headers";

export default function Cookies() {
  const c = cookies().get("Name");
  console.log(c);
  return <h1>Cookies page</h1>
}
