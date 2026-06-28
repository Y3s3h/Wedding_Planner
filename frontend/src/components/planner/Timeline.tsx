"use client";

import { motion } from "framer-motion";
import {
  CalendarDays,
  CheckCircle2,
} from "lucide-react";

const timeline = [
  {
    title: "Venue Booked",
    date: "12 Jan 2026",
    completed: true,
  },
  {
    title: "Photographer Finalized",
    date: "25 Jan 2026",
    completed: true,
  },
  {
    title: "Invitation Design",
    date: "05 Feb 2026",
    completed: false,
  },
  {
    title: "Bridal Shopping",
    date: "20 Feb 2026",
    completed: false,
  },
  {
    title: "Wedding Ceremony",
    date: "12 Feb 2027",
    completed: false,
  },
];

export default function Timeline() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="
        rounded-3xl
        border
        border-gray-200
        bg-white
        p-7
        shadow-sm
      "
    >
      <div className="mb-8">

        <h2 className="text-2xl font-bold text-gray-900">
          Planning Timeline
        </h2>

        <p className="mt-1 text-gray-500">
          Important milestones before your big day.
        </p>

      </div>

      <div className="relative">

        {timeline.map((item, index) => (

          <div
            key={item.title}
            className="relative flex gap-5 pb-8 last:pb-0"
          >

            {/* Line */}

            {index !== timeline.length - 1 && (
              <div
                className={`
                  absolute
                  left-[17px]
                  top-10
                  h-full
                  w-[2px]

                  ${
                    item.completed
                      ? "bg-green-400"
                      : "bg-gray-200"
                  }
                `}
              />
            )}

            {/* Icon */}

            <div
              className={`
                relative
                z-10
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full

                ${
                  item.completed
                    ? "bg-green-100"
                    : "bg-rose-100"
                }
              `}
            >
              {item.completed ? (
                <CheckCircle2
                  size={20}
                  className="text-green-600"
                />
              ) : (
                <CalendarDays
                  size={18}
                  className="text-rose-500"
                />
              )}
            </div>

            {/* Content */}

            <div className="flex-1 rounded-2xl border border-gray-100 p-4 transition hover:border-rose-200 hover:bg-rose-50/30">

              <div className="flex items-center justify-between">

                <h3 className="font-semibold text-gray-900">
                  {item.title}
                </h3>

                <span
                  className={`
                    rounded-full
                    px-3
                    py-1
                    text-xs
                    font-semibold

                    ${
                      item.completed
                        ? "bg-green-100 text-green-700"
                        : "bg-rose-100 text-rose-600"
                    }
                  `}
                >
                  {item.completed
                    ? "Completed"
                    : "Upcoming"}
                </span>

              </div>

              <p className="mt-2 text-sm text-gray-500">
                {item.date}
              </p>

            </div>

          </div>

        ))}

      </div>

    </motion.section>
  );
}