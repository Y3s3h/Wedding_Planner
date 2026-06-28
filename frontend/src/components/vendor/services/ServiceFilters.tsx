"use client";

import { Search } from "lucide-react";

export default function ServiceFilters() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-4 lg:flex-row lg:justify-between">
        <div className="relative w-full lg:max-w-md">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="text"
            placeholder="Search service..."
            className="h-12 w-full rounded-2xl border border-slate-200 bg-white pl-11 pr-4 text-gray-700 placeholder:text-gray-400 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
          />
        </div>

        <select className="rounded-2xl border border-slate-200 bg-white px-5 py-3 text-gray-700 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100">
          <option>All Categories</option>
          <option>Photography</option>
          <option>Decoration</option>
          <option>Catering</option>
          <option>Venue</option>
        </select>
      </div>
    </section>
  );
}