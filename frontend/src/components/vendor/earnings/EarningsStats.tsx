"use client";

import {
  Wallet,
  TrendingUp,
  CreditCard,
  IndianRupee,
} from "lucide-react";

const stats = [
  {
    title: "Total Revenue",
    value: "₹38L",
    icon: Wallet,
  },
  {
    title: "This Month",
    value: "₹4.8L",
    icon: TrendingUp,
  },
  {
    title: "Pending",
    value: "₹85K",
    icon: CreditCard,
  },
  {
    title: "Average Booking",
    value: "₹72K",
    icon: IndianRupee,
  },
];

export default function EarningsStats() {
  return (
    <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
          >
            <div className="w-fit rounded-2xl bg-blue-100 p-3">
              <Icon
                size={22}
                className="text-blue-700"
              />
            </div>

            <p className="mt-5 text-sm font-medium text-gray-500">
              {item.title}
            </p>

            <h3 className="mt-2 text-4xl font-bold text-gray-800">
              {item.value}
            </h3>
          </div>
        );
      })}
    </section>
  );
}