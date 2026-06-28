"use client";

import { motion } from "framer-motion";
import {
  CalendarCheck,
  Clock3,
  CheckCircle2,
  XCircle,
} from "lucide-react";

const stats = [
  {
    title: "Total Bookings",
    value: "12",
    subtitle: "All vendor bookings",
    icon: CalendarCheck,
    color: "bg-indigo-100 text-indigo-600",
  },
  {
    title: "Upcoming",
    value: "08",
    subtitle: "Scheduled bookings",
    icon: Clock3,
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    title: "Completed",
    value: "04",
    subtitle: "Successfully completed",
    icon: CheckCircle2,
    color: "bg-green-100 text-green-600",
  },
  {
    title: "Cancelled",
    value: "01",
    subtitle: "Cancelled bookings",
    icon: XCircle,
    color: "bg-red-100 text-red-600",
  },
];

export default function BookingSummary() {
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

              <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-500">
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