"use client";

import { ArrowUpDown } from "lucide-react";
import { useVendorStore } from "@/store/vendorStore";

export default function SortDropdown() {
  const { sort, setSort } = useVendorStore();

  return (
    <div className="mb-8 flex justify-end">
      <div className="relative">

        <ArrowUpDown
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
        />

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="
            h-12
            rounded-xl
            border
            border-gray-200
            bg-white
            pl-10
            pr-10
            text-sm
            font-medium
            outline-none
            transition
            focus:border-rose-500
          "
        >
          <option value="Popularity">Popularity</option>
          <option value="Highest Rated">Highest Rated</option>
          <option value="Price Low">Price: Low → High</option>
          <option value="Price High">Price: High → Low</option>
          <option value="Newest">Newest</option>
        </select>

      </div>
    </div>
  );
}