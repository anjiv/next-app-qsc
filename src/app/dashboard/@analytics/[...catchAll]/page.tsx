import { wait } from "@/lib/wait";

export default async function AnalyticsCatchAllPage() {
  await wait(3000);
  const analyticsText = "Analytics CA";
  return <div className="card analytics">{analyticsText}</div>
}
