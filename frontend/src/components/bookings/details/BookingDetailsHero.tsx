"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowLeft,
  CalendarDays,
  CheckCircle2,
} from "lucide-react";

export default function BookingDetailsHero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      className="
        rounded-[32px]
        bg-gradient-to-r
        from-indigo-600
        via-violet-600
        to-purple-600
        p-8
        text-white
      "
    >
      <Link
        href="/customer/bookings"
        className="inline-flex items-center gap-2 text-white/80 transition hover:text-white"
      >
        <ArrowLeft size={18} />

        Back to Bookings
      </Link>

      <div className="mt-8 flex flex-wrap items-center justify-between gap-6">

        <div>

          <h1 className="text-5xl font-bold">
            Royal Palace Banquet
          </h1>

          <p className="mt-3 text-lg text-indigo-100">
            Wedding Venue Booking
          </p>

        </div>

        <div className="rounded-3xl bg-white/10 p-6 backdrop-blur">

          <div className="flex items-center gap-3">

            <CalendarDays size={22} />

            <span>
              12 February 2027
            </span>

          </div>

          <div className="mt-4 flex items-center gap-3">

            <CheckCircle2
              size={22}
              className="text-green-300"
            />

            <span>
              Booking Confirmed
            </span>

          </div>

        </div>

      </div>

    </motion.section>
  );
}