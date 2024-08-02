import { wait } from "@/lib/wait";

export default async function DashboardTestPage() {
  await wait(2000);
  const dashboardText = "Main Test dashboard";
  return <div className="card main">{dashboardText}</div>
}
