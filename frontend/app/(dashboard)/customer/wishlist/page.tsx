import WishlistHero from "@/components/wishlist/WishlistHero";
import WishlistSummary from "@/components/wishlist/WishlistSummary";
import WishlistFilters from "@/components/wishlist/WishlistFilters";
import WishlistCard from "@/components/wishlist/WishlistCard";

export default function WishlistPage() {
  return (
    <div className="space-y-8">

      <WishlistHero />

      <WishlistSummary />

      <WishlistFilters />

      <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">

        <WishlistCard />

        <WishlistCard />

        <WishlistCard />

      </div>

    </div>
  );
}