"use client";

import { motion } from "framer-motion";
import {
  Wallet,
  TrendingDown,
  PiggyBank,
  Receipt,
} from "lucide-react";

const stats = [
  {
    title: "Total Budget",
    value: "₹10L",
    subtitle: "Wedding Budget",
    icon: Wallet,
    color: "bg-emerald-100 text-emerald-600",
  },
  {
    title: "Spent",
    value: "₹4.8L",
    subtitle: "Total Expenses",
    icon: TrendingDown,
    color: "bg-red-100 text-red-600",
  },
  {
    title: "Remaining",
    value: "₹5.2L",
    subtitle: "Available Budget",
    icon: PiggyBank,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Transactions",
    value: "32",
    subtitle: "Expenses Added",
    icon: Receipt,
    color: "bg-yellow-100 text-yellow-600",
  },
];

export default function BudgetSummary() {
  return (
    <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

      {stats.map((item, index) => {

        const Icon = item.icon;

        return (

          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.08,
            }}
            className="
              rounded-3xl
              border
              border-gray-200
              bg-white
              p-6
              shadow-sm
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-xl
            "
          >

            <div className="flex items-start justify-between">

              <div
                className={`rounded-2xl p-3 ${item.color}`}
              >
                <Icon size={24} />
              </div>

              <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-600">
                Live
              </span>

            </div>

            <h3 className="mt-6 text-sm text-gray-500">
              {item.title}
            </h3>

            <p className="mt-2 text-4xl font-bold text-gray-900">
              {item.value}
            </p>

            <p className="mt-2 text-sm text-gray-500">
              {item.subtitle}
            </p>

          </motion.div>

        );

      })}

    </section>
  );
}