"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaSearch } from "react-icons/fa";

import LocationSelect from "../search/LocationSelect";
import CategorySelect from "../search/CategorySelect";
import DatePicker from "../search/DatePicker";

export default function HeroSearch() {
  const router = useRouter();

  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState<Date>();

  const handleSearch = () => {
    const params = new URLSearchParams();

    if (location) {
      params.set("city", location);
    }

    if (category) {
      params.set("category", category);
    }

    if (date) {
      params.set("date", date.toISOString().split("T")[0]);
    }

    router.push(`/vendors?${params.toString()}`);
  };

  return (
    <div className="  relative isolate z-50 mt-12 w-full max-w-6xl rounded-3xl border border-white/20 bg-white/10 p-3 backdrop-blur-xl shadow-2xl">

      <div className="grid grid-cols-1 md:grid-cols-4">

        {/* Location */}

        <div className="border-b border-white/20 px-6 py-4 md:border-b-0 md:border-r">

          <LocationSelect
            value={location}
            onChange={setLocation}
          />

        </div>

        {/* Category */}

        <div className="border-b border-white/20 px-6 py-4 md:border-b-0 md:border-r">

          <CategorySelect
            value={category}
            onChange={setCategory}
          />

        </div>

        {/* Date */}

        <div className="border-b border-white/20 px-6 py-4 md:border-b-0 md:border-r">

          <DatePicker
            value={date}
            onChange={setDate}
          />

        </div>

        {/* Search */}

        <div className="flex items-center justify-center p-3">

          <button
            onClick={handleSearch}
            className="
              flex
              w-full
              items-center
              justify-center
              gap-3
              rounded-2xl
              bg-gradient-to-r
              from-rose-500
              to-pink-500
              py-4
              font-semibold
              text-white
              transition-all
              duration-300
              hover:scale-105
              hover:shadow-[0_15px_40px_rgba(244,63,94,.45)]
            "
          >
            <FaSearch />

            Search

          </button>

        </div>

      </div>

    </div>
  );
}