
"use client";

import { Search, Filter } from "lucide-react";

export default function BookingFilters() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        {/* Search */}
        <div className="relative w-full lg:max-w-md">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="text"
            placeholder="Search customer..."
            className="h-12 w-full rounded-2xl border border-slate-200 bg-white pl-11 pr-4 text-gray-700 placeholder:text-gray-400 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
          />
        </div>

        {/* Filters */}
        <div className="flex gap-3">
          <select className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-gray-700 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100">
            <option>All Status</option>
            <option>Pending</option>
            <option>Accepted</option>
            <option>Completed</option>
            <option>Cancelled</option>
          </select>

          <button className="flex items-center gap-2 rounded-2xl bg-slate-900 px-5 py-3 font-medium text-white transition hover:bg-slate-800">
            <Filter size={18} />
            Filter
          </button>
        </div>
      </div>
    </section>
  );
}