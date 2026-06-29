"use client";
import WishlistHero from "@/components/wishlist/WishlistHero";
import WishlistSummary from "@/components/wishlist/WishlistSummary";
import WishlistFilters from "@/components/wishlist/WishlistFilters";
import WishlistCard from "@/components/wishlist/WishlistCard";
import { useCustomerStore } from "@/store";

export default function WishlistPage() {

  const wishlist = useCustomerStore(
  (state) => state.wishlist
);
  return (
    <div className="space-y-8">

      <WishlistHero />

      <WishlistSummary />

      <WishlistFilters />

      <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">

        {wishlist.map((item) => (

          <WishlistCard
            key={item.id}
            vendorName={item.vendorName}
            category={item.category}
            city={item.city}
            rating={item.rating}
            startingPrice={item.startingPrice}
            image={item.image}
          />

        ))}

      </div>

    </div>
  );
}