"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  CalendarDays,
  IndianRupee,
} from "lucide-react";

export default function VendorHero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="
        relative
        overflow-hidden
        rounded-[32px]
        bg-gradient-to-br
        from-slate-800
        via-blue-800
        to-indigo-900
        p-10
        text-white
        shadow-xl
      "
    >
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

      <div className="absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

      <div className="relative z-10 flex flex-col gap-10 lg:flex-row lg:justify-between">

        <div>

          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">

            <BriefcaseBusiness size={16} />

            Vendor Dashboard

          </div>

          <h1 className="mt-6 text-5xl font-bold">
            Grow your wedding
            <br />
            business.
          </h1>

          <p className="mt-6 max-w-xl text-lg text-slate-300">
            Manage bookings, services, revenue and customers from one place.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">

            <Link
              href="/vendor/services"
              className="flex items-center gap-2 rounded-2xl bg-white px-6 py-4 font-semibold text-slate-900 transition hover:-translate-y-1"
            >
              Manage Services

              <ArrowRight size={18} />
            </Link>

            <Link
              href="/vendor/calendar"
              className="rounded-2xl border border-white/20 bg-white/10 px-6 py-4 font-semibold backdrop-blur hover:bg-white/20"
            >
              Open Calendar
            </Link>

          </div>

        </div>

        <div className="w-full max-w-sm rounded-3xl bg-white/10 p-6 backdrop-blur">

          <div className="flex items-center gap-3">

            <IndianRupee size={22} />

            <h3 className="text-xl font-semibold">
              This Month
            </h3>

          </div>

          <div className="mt-6 space-y-5">

            <div className="flex justify-between">

              <span>Revenue</span>

              <span className="font-semibold">
                ₹4.8L
              </span>

            </div>

            <div className="flex justify-between">

              <span>Bookings</span>

              <span className="font-semibold">
                18
              </span>

            </div>

            <div className="flex justify-between">

              <span>Upcoming</span>

              <span className="font-semibold">
                07
              </span>

            </div>

          </div>

          <div className="mt-8 flex items-center gap-3">

            <CalendarDays size={18} />

            Next Event: Tomorrow

          </div>

        </div>

      </div>

    </motion.section>
  );
}