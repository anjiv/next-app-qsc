import { wait } from "@/lib/wait";

export default async function AnalyticsDefaultPage() {
  await wait(3000);
  const analyticsText = "Analytics def";
  return <div className="card analytics">{analyticsText}</div>
}
