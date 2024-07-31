import { revalidateTag } from "next/cache";

export default function Revalidate() {
  // Revalidating test path.
  // revalidatePath('/test');

  revalidateTag("Todo");
  return <h1>Revalidated Tag</h1>
}
