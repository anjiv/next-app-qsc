import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <nav style={{display: "flex", flexDirection: "column", gap: "0.25rem"}}>
          <Link href="/">Home</Link>
          <Link href="/team">Team</Link>
          <Link href="/about">About</Link>
          <Link href="/team/nested">Team nested</Link>
          <Link href="/posts">Posts</Link>
          <Link href="/posts/1">Post 1</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
