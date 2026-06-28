"use client";

import {
  Eye,
  Users,
  TrendingUp,
  Star,
} from "lucide-react";

const stats = [
  {
    title: "Profile Views",
    value: "18.5K",
    icon: Eye,
  },
  {
    title: "Customers",
    value: "520",
    icon: Users,
  },
  {
    title: "Growth",
    value: "+24%",
    icon: TrendingUp,
  },
  {
    title: "Rating",
    value: "4.9",
    icon: Star,
  },
];

export default function AnalyticsStats() {
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