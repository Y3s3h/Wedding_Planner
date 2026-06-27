"use client";

import { CalendarDays } from "lucide-react";

export default function WeddingCountdown() {
  return (
    <div className="rounded-3xl bg-gradient-to-br from-rose-500 to-pink-500 p-8 text-white shadow-xl">

      <div className="flex items-center gap-3">

        <CalendarDays />

        <h2 className="text-2xl font-semibold">
          Wedding Countdown
        </h2>

      </div>

      <h1 className="mt-10 text-7xl font-bold">
        120
      </h1>

      <p className="text-3xl">
        Days Remaining
      </p>

      <div className="mt-12">

        <p className="uppercase tracking-[0.2em] text-rose-100">
          Wedding Date
        </p>

        <h3 className="mt-2 text-4xl font-semibold">
          12 February 2027
        </h3>

      </div>

    </div>
  );
}