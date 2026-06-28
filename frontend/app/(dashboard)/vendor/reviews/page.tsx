import ReviewHero from "@/components/vendor/reviews/ReviewHero";
import ReviewStats from "@/components/vendor/reviews/ReviewStats";
// import ReviewFilters from "@/components/vendor/reviews/ReviewFilters";
import RatingSummary from "@/components/vendor/reviews/RatingSummary";
import ReviewGrid from "@/components/vendor/reviews/ReviewGrid";

export default function VendorReviewsPage() {
  return (
    <div className="space-y-8">

      <ReviewHero />

      <ReviewStats />

      <section className="grid gap-6 xl:grid-cols-3">

        <div className="xl:col-span-2">

          <ReviewGrid />

        </div>

        <RatingSummary />

      </section>

    </div>
  );
}