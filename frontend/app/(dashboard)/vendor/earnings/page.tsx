import EarningsHero from "@/components/vendor/earnings/EarningsHero";
import EarningsStats from "@/components/vendor/earnings/EarningsStats";
import RevenueChart from "@/components/vendor/earnings/RevenueChart";
import TransactionsTable from "@/components/vendor/earnings/TransactionsTable";
import PayoutCard from "@/components/vendor/earnings/PayoutCard";

export default function VendorEarningsPage() {
  return (
    <div className="space-y-8">

      <EarningsHero />

      <EarningsStats />

      <section className="grid gap-6 xl:grid-cols-3">

        <div className="xl:col-span-2">

          <RevenueChart />

        </div>

        <PayoutCard />

      </section>

      <TransactionsTable />

    </div>
  );
}