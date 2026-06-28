"use client";

import {
  User,
  Heart,
  CalendarDays,
  Wallet,
} from "lucide-react";

const stats = [
  {
    title: "Profile",
    value: "100%",
    subtitle: "Completed",
    icon: User,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Partner",
    value: "Added",
    subtitle: "Information",
    icon: Heart,
    color: "bg-pink-100 text-pink-600",
  },
  {
    title: "Wedding",
    value: "12 Feb",
    subtitle: "2027",
    icon: CalendarDays,
    color: "bg-green-100 text-green-600",
  },
  {
    title: "Budget",
    value: "₹10L",
    subtitle: "Planning",
    icon: Wallet,
    color: "bg-yellow-100 text-yellow-600",
  },
];

export default function ProfileOverview() {
  return (
    <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className={`inline-flex rounded-2xl p-3 ${item.color}`}>
              <Icon size={22} />
            </div>

            <h3 className="mt-5 text-sm text-gray-700">
              {item.title}
            </h3>

            <p className="mt-2 text-3xl font-bold text-gray-700">
              {item.value}
            </p>

            <p className="mt-2 text-sm text-gray-500">
              {item.subtitle}
            </p>
          </div>
        );
      })}
    </section>
  );
}