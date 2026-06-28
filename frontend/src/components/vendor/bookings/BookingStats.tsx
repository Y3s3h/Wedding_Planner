"use client";

import {
  CalendarCheck2,
  Clock3,
  CheckCircle2,
  Wallet,
} from "lucide-react";

const stats = [
  {
    title: "Total",
    value: "54",
    icon: CalendarCheck2,
  },
  {
    title: "Pending",
    value: "09",
    icon: Clock3,
  },
  {
    title: "Completed",
    value: "41",
    icon: CheckCircle2,
  },
  {
    title: "Revenue",
    value: "₹8.4L",
    icon: Wallet,
  },
];

export default function BookingStats() {
  return (
    <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      {stats.map((item) => {

        const Icon = item.icon;

        return (

          <div
            key={item.title}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
          >

            <div className="rounded-2xl bg-blue-100 p-3 w-fit">

              <Icon
                size={24}
                className="text-blue-700"
              />

            </div>

            <p className="mt-5 text-sm text-slate-600">
              {item.title}
            </p>

            <h3 className="mt-2 text-4xl font-bold text-gray-700">
              {item.value}
            </h3>

          </div>

        );

      })}

    </section>
  );
}