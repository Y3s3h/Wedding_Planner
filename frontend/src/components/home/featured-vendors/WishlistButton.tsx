"use client";

import { Heart } from "lucide-react";

interface WishlistButtonProps {
  isWishlisted: boolean;

  onClick: () => void;
}

export default function WishlistButton({
  isWishlisted,
  onClick,
}: WishlistButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/90 shadow-lg backdrop-blur transition-all duration-300 hover:scale-110"
    >
      <Heart
        size={20}
        className={
          isWishlisted
            ? "fill-rose-500 text-rose-500"
            : "text-rose-500"
        }
      />
    </button>
  );
}