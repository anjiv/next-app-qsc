import { revalidatePath } from "next/cache";

export default function Revalidate() {
  // Revalidating test path.
  revalidatePath('/test');
  return <h1>Revalidated Path</h1>
}
