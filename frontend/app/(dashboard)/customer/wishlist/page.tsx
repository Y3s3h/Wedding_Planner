"use client";

import { useEffect } from "react";

import WishlistHero from "@/components/wishlist/WishlistHero";
import WishlistSummary from "@/components/wishlist/WishlistSummary";
import WishlistFilters from "@/components/wishlist/WishlistFilters";
import WishlistCard from "@/components/wishlist/WishlistCard";

import { useAuthStore } from "@/store/authStore";
import { useWishlistStore } from "@/store/wishlistStore";

export default function WishlistPage() {
  const { user } = useAuthStore();

  const {
    wishlist,
    loadWishlist,
  } = useWishlistStore();

  useEffect(() => {
    if (user) {
      loadWishlist(user._id);
    }
  }, [user, loadWishlist]);

  return (
    <div className="space-y-8">
      <WishlistHero />

      <WishlistSummary />

      <WishlistFilters />

      {wishlist.length === 0 ? (
        <div className="rounded-3xl border border-dashed border-gray-300 bg-white py-20 text-center">
          <h3 className="text-2xl font-semibold text-gray-700">
            Your wishlist is empty
          </h3>

          <p className="mt-3 text-gray-500">
            Start exploring vendors and save your favourites.
          </p>
        </div>
      ) : (
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
      )}
    </div>
  );
}