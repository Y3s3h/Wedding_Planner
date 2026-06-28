"use client";

import { motion } from "framer-motion";
import {
  Heart,
  Eye,
  CalendarDays,
  Star,
} from "lucide-react";

const stats = [
  {
    title: "Saved Vendors",
    value: "15",
    subtitle: "Currently saved",
    icon: Heart,
    color: "bg-rose-100 text-rose-600",
  },
  {
    title: "Viewed",
    value: "28",
    subtitle: "Visited profiles",
    icon: Eye,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Ready to Book",
    value: "06",
    subtitle: "Shortlisted",
    icon: CalendarDays,
    color: "bg-green-100 text-green-600",
  },
  {
    title: "Favorites",
    value: "09",
    subtitle: "Highly rated",
    icon: Star,
    color: "bg-yellow-100 text-yellow-600",
  },
];

export default function WishlistSummary() {
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
            className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
          >

            <div className="flex justify-between">

              <div className={`rounded-2xl p-3 ${item.color}`}>

                <Icon size={24} />

              </div>

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