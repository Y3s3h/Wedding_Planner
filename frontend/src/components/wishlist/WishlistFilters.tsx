"use client";

import { SlidersHorizontal } from "lucide-react";

export default function WishlistFilters() {
  return (
    <section className="flex items-center justify-between rounded-3xl border border-gray-200 bg-white text-gray-700 p-6 shadow-sm">

      <div>

        <h2 className="text-xl font-bold text-gray-900">
          Saved Vendors
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          Compare and book your favourites.
        </p>

      </div>

      <select className="h-11 rounded-2xl border border-gray-200 px-5 text-sm outline-none">

        <option>Latest Saved</option>

        <option>Highest Rated</option>

        <option>Price Low → High</option>

        <option>Price High → Low</option>

      </select>

    </section>
  );
}