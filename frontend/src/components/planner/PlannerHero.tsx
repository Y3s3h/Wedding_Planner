"use client";

import { motion } from "framer-motion";
import {
  CalendarDays,
  Clock3,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

export default function PlannerHero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="
        relative
        overflow-hidden
        rounded-[32px]
        bg-gradient-to-br
        from-rose-500
        via-pink-500
        to-rose-600
        p-8
        text-white
        shadow-xl
      "
    >
      {/* Background Glow */}

      <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

      <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

      <div className="relative z-10 grid gap-8 lg:grid-cols-2">

        {/* Left */}

        <div>

          <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 backdrop-blur">

            <Sparkles size={16} />

            <span className="text-sm font-medium">
              Wedding Planner
            </span>

          </div>

          <h1 className="mt-6 text-5xl font-bold leading-tight">

            Plan every

            <br />

            wedding moment.

          </h1>

          <p className="mt-6 max-w-xl text-lg text-rose-100">

            Organize vendors, manage your checklist,
            track expenses and stay on schedule from
            engagement to your wedding day.

          </p>

        </div>

        {/* Right */}

        <div className="rounded-3xl bg-white/10 p-6 backdrop-blur">

          <div className="flex items-center gap-3">

            <CalendarDays size={22} />

            <h3 className="text-xl font-semibold">
              Wedding Summary
            </h3>

          </div>

          <div className="mt-8 space-y-5">

            <div className="flex items-center justify-between">

              <span className="flex items-center gap-2 text-rose-100">
                <CalendarDays size={18} />
                Wedding Date
              </span>

              <span className="font-semibold">
                12 Feb 2027
              </span>

            </div>

            <div className="flex items-center justify-between">

              <span className="flex items-center gap-2 text-rose-100">
                <Clock3 size={18} />
                Days Remaining
              </span>

              <span className="font-semibold">
                182 Days
              </span>

            </div>

            <div className="flex items-center justify-between">

              <span className="flex items-center gap-2 text-rose-100">
                <CheckCircle2 size={18} />
                Tasks Completed
              </span>

              <span className="font-semibold">
                8 / 24
              </span>

            </div>

          </div>

          <div className="mt-8">

            <div className="mb-2 flex justify-between text-sm">

              <span>Planning Progress</span>

              <span>33%</span>

            </div>

            <div className="h-3 rounded-full bg-white/20">

              <div className="h-3 w-1/3 rounded-full bg-white" />

            </div>

          </div>

        </div>

      </div>

    </motion.section>
  );
}