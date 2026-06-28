"use client";

import { motion } from "framer-motion";
import { CalendarDays } from "lucide-react";

export default function CalendarHero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-[32px] bg-gradient-to-r from-emerald-600 via-green-600 to-teal-700 p-8 shadow-xl"
    >
      <div>
        <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-gray-100">
          <CalendarDays size={16} />
          Event Calendar
        </div>

        <h1 className="mt-5 text-5xl font-bold text-gray-100">
          Organize your
          <br />
          wedding schedule.
        </h1>

        <p className="mt-5 max-w-xl text-gray-200">
          Track bookings, block dates and manage your availability.
        </p>
      </div>
    </motion.section>
  );
}