import RecentActivity from "../widgets/RecentActivity";
import WeddingProgress from "../widgets/WeddingProgress";

export default function InsightsSection() {
  return (
    <section className="grid gap-6 xl:grid-cols-2">
      <RecentActivity />
      <WeddingProgress />
    </section>
  );
}