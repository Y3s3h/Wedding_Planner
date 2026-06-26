"use client";

import Image from "next/image";
import { Heart, MapPin, Share2, Star } from "lucide-react";

interface VendorHeroProps {
  vendor: {
    name: string;
    image: string;
    category: string;
    city: string;
    rating: number;
    reviews: number;
    price: number;
  };
}

export default function VendorHero({ vendor }: VendorHeroProps) {
  return (
    <section className="relative overflow-hidden rounded-3xl">

      {/* Cover Image */}
      <div className="relative h-[500px] w-full">

        <Image
          src={vendor.image}
          alt={vendor.name}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/45" />

        {/* Content */}
        <div className="absolute inset-0 flex items-end">

          <div className="w-full p-8 md:p-12">

            <div className="flex flex-wrap items-center gap-3">

              <span className="flex items-center gap-1 rounded-full bg-white/20 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md">

                <Star
                  size={16}
                  className="fill-yellow-400 text-yellow-400"
                />

                {vendor.rating}

                <span className="text-white/80">
                  ({vendor.reviews} Reviews)
                </span>

              </span>

              <span className="rounded-full bg-rose-500 px-4 py-2 text-sm font-semibold text-white">
                {vendor.category}
              </span>

            </div>

            <h1 className="mt-5 text-5xl font-bold text-white md:text-6xl">
              {vendor.name}
            </h1>

            <div className="mt-4 flex flex-wrap items-center gap-6 text-white">

              <div className="flex items-center gap-2">
                <MapPin size={18} />
                {vendor.city}
              </div>

              <div className="text-2xl font-bold">
                ₹{vendor.price.toLocaleString("en-IN")}
              </div>

            </div>

            <div className="mt-8 flex gap-4">

              <button className="flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-gray-900 transition hover:bg-gray-100">
                <Heart size={18} />
                Save
              </button>

              <button className="flex items-center gap-2 rounded-xl border border-white/40 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur-md transition hover:bg-white/20">
                <Share2 size={18} />
                Share
              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}