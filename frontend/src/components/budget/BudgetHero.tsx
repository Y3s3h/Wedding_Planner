"use client";

import { motion } from "framer-motion";
import {
  Wallet,
  TrendingUp,
  IndianRupee,
} from "lucide-react";

export default function BudgetHero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="
        relative
        overflow-hidden
        rounded-[32px]
        bg-gradient-to-br
        from-emerald-500
        via-green-500
        to-teal-600
        p-8
        text-white
        shadow-xl
      "
    >
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

      <div className="relative z-10 grid gap-8 lg:grid-cols-2">

        <div>

          <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 backdrop-blur">

            <Wallet size={16} />

            <span className="text-sm font-medium">
              Wedding Budget
            </span>

          </div>

          <h1 className="mt-6 text-5xl font-bold leading-tight">
            Keep every
            <br />
            expense under control.
          </h1>

          <p className="mt-6 max-w-xl text-lg text-green-100">
            Track spending, monitor your remaining budget,
            and make smarter wedding planning decisions.
          </p>

        </div>

        <div className="rounded-3xl bg-white/10 p-6 backdrop-blur">

          <div className="flex items-center gap-3">

            <IndianRupee size={22} />

            <h3 className="text-xl font-semibold">
              Budget Overview
            </h3>

          </div>

          <div className="mt-8 space-y-5">

            <div className="flex justify-between">

              <span>Total Budget</span>

              <span className="font-semibold">
                ₹10,00,000
              </span>

            </div>

            <div className="flex justify-between">

              <span>Spent</span>

              <span className="font-semibold">
                ₹4,80,000
              </span>

            </div>

            <div className="flex justify-between">

              <span>Remaining</span>

              <span className="font-semibold">
                ₹5,20,000
              </span>

            </div>

          </div>

          <div className="mt-8">

            <div className="mb-2 flex justify-between text-sm">

              <span>Budget Used</span>

              <span>48%</span>

            </div>

            <div className="h-3 rounded-full bg-white/20">

              <div className="h-3 w-[48%] rounded-full bg-white" />

            </div>

          </div>

        </div>

      </div>

    </motion.section>
  );
}