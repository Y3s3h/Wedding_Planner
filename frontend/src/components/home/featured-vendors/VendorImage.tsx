import Image from "next/image";
import { Heart, Star, BadgeCheck } from "lucide-react";

interface VendorImageProps {
  image: string;
  name: string;
  rating: number;
  reviews: number;
  featured: boolean;
}

export default function VendorImage({
  image,
  name,
  rating,
  reviews,
  featured,
}: VendorImageProps) {
  return (
    <div className="relative h-60 overflow-hidden rounded-t-3xl">

      <Image
        src={image}
        alt={name}
        fill
        sizes="(max-width:640px)100vw,
               (max-width:1024px)50vw,
               (max-width:1280px)33vw,
               25vw"
        className="object-cover transition-transform duration-700 group-hover:scale-110"
      />

      {/* Dark Overlay */}

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

      {/* Wishlist */}

      <button className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/90 shadow-lg backdrop-blur transition-all duration-300 hover:scale-110">
        <Heart
          size={20}
          className="text-rose-500"
        />
      </button>

      {/* Rating */}

      <div className="absolute bottom-4 right-4 rounded-full bg-white/90 px-3 py-1 text-sm text-gray-700 font-semibold backdrop-blur">
        ⭐ {rating} ({reviews})
      </div>

      {/* Featured */}

      {featured && (
        <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-emerald-500 px-3 py-1 text-xs font-semibold text-white shadow-lg">
          <BadgeCheck size={16} />
          Featured
        </div>
      )}

    </div>
  );
}