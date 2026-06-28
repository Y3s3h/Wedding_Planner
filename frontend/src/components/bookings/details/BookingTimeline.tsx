"use client";

import { motion } from "framer-motion";
import {
  CalendarCheck2,
  CheckCircle2,
  CreditCard,
  Users,
  PartyPopper,
} from "lucide-react";

const timeline = [
  {
    title: "Booking Requested",
    description: "Your booking request has been submitted.",
    date: "10 Jan 2027",
    completed: true,
    icon: CalendarCheck2,
  },
  {
    title: "Vendor Accepted",
    description: "The vendor confirmed your booking.",
    date: "11 Jan 2027",
    completed: true,
    icon: CheckCircle2,
  },
  {
    title: "Advance Payment",
    description: "Advance payment received successfully.",
    date: "12 Jan 2027",
    completed: true,
    icon: CreditCard,
  },
  {
    title: "Planning Meeting",
    description: "Schedule a meeting with the vendor.",
    date: "25 Jan 2027",
    completed: false,
    icon: Users,
  },
  {
    title: "Wedding Day",
    description: "Your special day is here.",
    date: "12 Feb 2027",
    completed: false,
    icon: PartyPopper,
  },
];

export default function BookingTimeline() {
  return (
    <section className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm">

      <div className="mb-8">

        <h2 className="text-2xl font-bold text-gray-900">
          Booking Timeline
        </h2>

        <p className="mt-1 text-gray-500">
          Track every milestone of your booking.
        </p>

      </div>

      <div className="relative">

        {timeline.map((step, index) => {

          const Icon = step.icon;

          return (

            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: index * 0.08,
              }}
              className="relative flex gap-5 pb-8 last:pb-0"
            >

              {/* Vertical Line */}

              {index !== timeline.length - 1 && (

                <div
                  className={`
                    absolute
                    left-[19px]
                    top-10
                    h-full
                    w-[2px]

                    ${
                      step.completed
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
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full

                  ${
                    step.completed
                      ? "bg-green-100"
                      : "bg-indigo-100"
                  }
                `}
              >

                <Icon
                  size={20}
                  className={
                    step.completed
                      ? "text-green-600"
                      : "text-indigo-600"
                  }
                />

              </div>

              {/* Content */}

              <div className="flex-1 rounded-2xl border border-gray-100 p-5 transition hover:border-indigo-200 hover:bg-indigo-50/30">

                <div className="flex items-center justify-between">

                  <h3 className="font-semibold text-gray-900">
                    {step.title}
                  </h3>

                  <span
                    className={`
                      rounded-full
                      px-3
                      py-1
                      text-xs
                      font-semibold

                      ${
                        step.completed
                          ? "bg-green-100 text-green-700"
                          : "bg-indigo-100 text-indigo-600"
                      }
                    `}
                  >
                    {step.completed
                      ? "Completed"
                      : "Upcoming"}
                  </span>

                </div>

                <p className="mt-2 text-sm text-gray-500">
                  {step.description}
                </p>

                <p className="mt-3 text-sm font-medium text-gray-700">
                  {step.date}
                </p>

              </div>

            </motion.div>

          );

        })}

      </div>

    </section>
  );
}