import { wait } from "@/lib/wait";

export default async function AnalyticsPage() {
  await wait(3000);
  const analyticsText = "Analytics";
  return <div className="card analytics">{analyticsText}</div>
}
