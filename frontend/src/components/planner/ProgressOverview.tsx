"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  Clock3,
  ListTodo,
  Target,
} from "lucide-react";

const stats = [
  {
    title: "Total Tasks",
    value: "24",
    subtitle: "Wedding checklist",
    icon: ListTodo,
  },
  {
    title: "Completed",
    value: "08",
    subtitle: "Finished tasks",
    icon: CheckCircle2,
  },
  {
    title: "Pending",
    value: "16",
    subtitle: "Still remaining",
    icon: Clock3,
  },
  {
    title: "Progress",
    value: "33%",
    subtitle: "Overall completion",
    icon: Target,
  },
];

export default function ProgressOverview() {
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

              <div className="rounded-2xl bg-rose-50 p-3">

                <Icon
                  size={24}
                  className="text-rose-500"
                />

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