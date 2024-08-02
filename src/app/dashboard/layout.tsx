import Link from "next/link";
import { ReactNode } from "react"

export default function DashboardLayout({
  children,
  analytics,
  posts
}: {
  children: ReactNode,
  analytics: ReactNode,
  posts: ReactNode
}) {
  return (
    <>
      <Link href="/dashboard">Prod</Link>
      <Link href="/dashboard/test">Test</Link>
      <div className="dashboard-grid">
        {children}
        {analytics}
        {posts}
      </div>
    </>
  );
}
