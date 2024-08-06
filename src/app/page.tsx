import { Inter } from "next/font/google";

// Inter font will load only on this page.
const inter = Inter({ subsets: ["latin"]});

export default function Home() {
  return (
    <>
      <h1>Home page</h1>
      <p className={inter.className}>Checking font</p>
      {/* <p style={{fontFamily: "var(--my-font)"}}>Checking fonts</p> */}
    </>
  );
}
