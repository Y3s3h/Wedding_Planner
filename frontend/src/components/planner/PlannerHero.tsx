"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import {
  CalendarDays,
  Clock3,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

import { useAuthStore } from "@/store/authStore";
import { useBookingStore } from "@/store/bookingStore";

export default function PlannerHero() {

  const { user } = useAuthStore();

const bookings = useBookingStore(
  (state) => state.bookings
);

const firstName =
  user?.name?.split(" ")[0] || "Customer";

const nextBooking = useMemo(() => {
  const today = new Date();

  return bookings
    .filter(
      (booking) =>
        booking.bookingStatus !== "cancelled" &&
        new Date(booking.eventDate) >= today
    )
    .sort(
      (a, b) =>
        new Date(a.eventDate).getTime() -
        new Date(b.eventDate).getTime()
    )[0];
}, [bookings]);

const daysRemaining = useMemo(() => {
  if (!nextBooking) return 0;

  const today = new Date();
  const wedding = new Date(nextBooking.eventDate);

  return Math.ceil(
    (wedding.getTime() - today.getTime()) /
      (1000 * 60 * 60 * 24)
  );
}, [nextBooking]);

const completedBookings = bookings.filter(
  (booking) =>
    booking.bookingStatus === "accepted" ||
    booking.bookingStatus === "completed"
).length;

const progress =
  bookings.length === 0
    ? 0
    : Math.round(
        (completedBookings / bookings.length) * 100
      );
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="
        relative
        overflow-hidden
        rounded-[32px]
        bg-gradient-to-br
        from-rose-500
        via-pink-500
        to-rose-600
        p-8
        text-white
        shadow-xl
      "
    >
      {/* Background Glow */}

      <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

      <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

      <div className="relative z-10 grid gap-8 lg:grid-cols-2">

        {/* Left */}

        <div>

          <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 backdrop-blur">

            <Sparkles size={16} />

            <span className="text-sm font-medium">
              Wedding Planner
            </span>

          </div>

          <h1 className="mt-6 text-5xl font-bold leading-tight">

           {firstName},

<br />

plan your dream wedding.

          </h1>

          <p className="mt-6 max-w-xl text-lg text-rose-100">

            Organize vendors, manage your checklist,
            track expenses and stay on schedule from
            engagement to your wedding day.

          </p>

        </div>

        {/* Right */}

        <div className="rounded-3xl bg-white/10 p-6 backdrop-blur">

          <div className="flex items-center gap-3">

            <CalendarDays size={22} />

            <h3 className="text-xl font-semibold">
              Wedding Summary
            </h3>

          </div>

          <div className="mt-8 space-y-5">

            <div className="flex items-center justify-between">

              <span className="flex items-center gap-2 text-rose-100">
                <CalendarDays size={18} />
                Wedding Date
              </span>

              <span className="font-semibold">
               {nextBooking
  ? new Date(
      nextBooking.eventDate
    ).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    })
  : "--"}
              </span>

            </div>

            <div className="flex items-center justify-between">

              <span className="flex items-center gap-2 text-rose-100">
                <Clock3 size={18} />
                Days Remaining
              </span>

              <span className="font-semibold">
                {nextBooking
  ? `${daysRemaining} Days`
  : "--"}
              </span>

            </div>

            <div className="flex items-center justify-between">

              {/* <span className="flex items-center gap-2 text-rose-100">
                <CheckCircle2 size={18} />
                Tasks Completed
              </span> */}

              <span className="font-semibold">
               {/* `${completedBookings} / ${bookings.length}` */}
              </span>

            </div>

          </div>

          <div className="mt-8">

            <div className="mb-2 flex justify-between text-sm">

              <span>Planning Progress</span>

              <span>{progress}%</span>

            </div>

            <div className="h-3 rounded-full bg-white/20">

              <div className="h-3 rounded-full bg-white"
style={{
  width: `${progress}%`,
}} />

            </div>

          </div>

        </div>

      </div>

    </motion.section>
  );
}