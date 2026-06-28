"use client";

import {
  CalendarCheck2,
  Clock3,
  Ban,
  CheckCircle2,
} from "lucide-react";

const stats = [
  {
    title: "Events",
    value: "24",
    icon: CalendarCheck2,
  },
  {
    title: "Today",
    value: "02",
    icon: Clock3,
  },
  {
    title: "Blocked",
    value: "05",
    icon: Ban,
  },
  {
    title: "Available",
    value: "18",
    icon: CheckCircle2,
  },
];

export default function CalendarStats() {
  return (
    <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
          >
            <div className="w-fit rounded-2xl bg-green-100 p-3">
              <Icon
                size={22}
                className="text-green-700"
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