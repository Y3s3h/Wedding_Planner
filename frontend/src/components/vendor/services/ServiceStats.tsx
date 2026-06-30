

"use client";

import {
  BriefcaseBusiness,
  Eye,
  Star,
  IndianRupee,
} from "lucide-react";

const stats = [
  {
    title: "Services",
    value: "12",
    icon: BriefcaseBusiness,
  },
  {
    title: "Views",
    value: "2.4K",
    icon: Eye,
  },
  {
    title: "Rating",
    value: "4.9",
    icon: Star,
  },
  {
    title: "Starting From",
    value: "₹15K",
    icon: IndianRupee,
  },
];

export default function ServiceStats() {
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