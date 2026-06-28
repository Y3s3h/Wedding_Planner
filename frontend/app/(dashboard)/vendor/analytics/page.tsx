import AnalyticsHero from "@/components/vendor/analytics/AnalyticsHero";
import AnalyticsStats from "@/components/vendor/analytics/AnalyticsStats";
import BookingAnalytics from "@/components/vendor/analytics/BookingAnalytics";
import RevenueAnalytics from "@/components/vendor/analytics/RevenueAnalytics";
import TopServices from "@/components/vendor/analytics/TopServices";
import InsightsCard from "@/components/vendor/analytics/InsightsCard";



export default function VendorAnalyticsPage() {
  return (
    <div className="space-y-8">

      <AnalyticsHero />

      <AnalyticsStats />

      <section className="grid gap-6 xl:grid-cols-2">

        <BookingAnalytics />

        <RevenueAnalytics />

      </section>

      <section className="grid gap-6 xl:grid-cols-3">

        <div className="xl:col-span-2">

          <TopServices />

        </div>

        <InsightsCard />

      </section>

    </div>
  );
}