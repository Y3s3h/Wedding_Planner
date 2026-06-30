"use client";

import { toast } from "sonner";

import { Vendor } from "@/types/vendor";
import { WishlistItem } from "@/types/wishlist";

import { useAuthStore } from "@/store/authStore";
import { useWishlistStore } from "@/store/wishlistStore";

export function useWishlist(vendor: Vendor) {
  const { user, isAuthenticated } = useAuthStore();

  const {
    toggleWishlist,
    isVendorWishlisted,
  } = useWishlistStore();

  const customerId = user?._id ?? "";

  const isWishlisted =
    isAuthenticated &&
    isVendorWishlisted(customerId, vendor.id);

  const handleToggleWishlist = () => {
    if (!isAuthenticated || !user) {
      toast.error("Please login to add vendors to your wishlist.");
      return;
    }

    const alreadyWishlisted = isVendorWishlisted(
      customerId,
      vendor.id
    );

    const wishlistItem: WishlistItem = {
      id: crypto.randomUUID(),

      customerId,

      vendorId: vendor.id,

      vendorName: vendor.name,

      category: vendor.category,

      city: vendor.city,

      image: vendor.image,

      rating: vendor.rating,

      startingPrice: vendor.price,

      addedAt: new Date().toISOString(),
    };

    toggleWishlist(wishlistItem);

    if (alreadyWishlisted) {
      toast.success("Removed from wishlist.");
    } else {
      toast.success("Added to wishlist.");
    }
  };

  return {
    isWishlisted,
    handleToggleWishlist,
  };
}