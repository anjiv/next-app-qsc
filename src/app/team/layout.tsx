import Link from "next/link";

export default function TeamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav style={{ display: "flex", flexDirection: "column", gap: "0.25rem", paddingTop: "0.25rem"}}>
        <Link href="/team/1">Team 1</Link>
        <Link href="/team/2">Team 2</Link>
      </nav>
      {children}
    </>
  );
}
