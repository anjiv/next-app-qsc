import { Metadata } from "next"

// About Metadata written in layout.tsx will get overridden.
// export const metadata: Metadata = {
//   title: "About meta data new",
//   description: "About meta desc new",
// }

// Dynamically fetch metadata.
export async function generateMetadata({ params }): Promise<Metadata> {
  return {
    title: "users name"
  }
}


export default function About() {
  return <h1>About</h1>
}
