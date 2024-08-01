import { useFormStatus } from "react-dom";

export default function SubmitButton() {
  const { pending } = useFormStatus();
  return <button disabled={pending}>{pending ? "Adding" : "Add"}</button>
}
