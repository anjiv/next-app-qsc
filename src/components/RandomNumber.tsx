import { unstable_noStore } from "next/cache";

export default function RandomNumber() {
  {/* Anything that imports this functions or component cannot be stored inside caching i.e
    cannot be statically rendered. */}
  unstable_noStore();
  return <h1>{Math.random()}</h1>
}
