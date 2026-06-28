"use client";

import {
  Star,
  MessageSquare,
  ThumbsUp,
  Users,
} from "lucide-react";

const stats = [
  {
    title: "Average Rating",
    value: "4.9",
    icon: Star,
  },
  {
    title: "Reviews",
    value: "248",
    icon: MessageSquare,
  },
  {
    title: "Recommendations",
    value: "96%",
    icon: ThumbsUp,
  },
  {
    title: "Happy Clients",
    value: "520",
    icon: Users,
  },
];

export default function ReviewStats() {
  return (
    <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
          >
            <div className="w-fit rounded-2xl bg-orange-100 p-3">
              <Icon
                size={22}
                className="text-orange-600"
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