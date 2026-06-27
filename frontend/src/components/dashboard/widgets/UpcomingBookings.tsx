"use client";

import Link from "next/link";
import {
  CalendarDays,
  Clock3,
  MapPin,
  ArrowRight,
} from "lucide-react";

const bookings = [
  {
    id: 1,
    vendor: "Royal Palace Jaipur",
    service: "Venue Visit",
    date: "Tomorrow",
    time: "11:00 AM",
    location: "Jaipur",
  },
  {
    id: 2,
    vendor: "Bliss Photography",
    service: "Final Discussion",
    date: "Friday",
    time: "3:30 PM",
    location: "Delhi",
  },
  {
    id: 3,
    vendor: "Melody Beats",
    service: "Music Planning",
    date: "12 Aug",
    time: "5:00 PM",
    location: "Pune",
  },
];

export default function UpcomingBookings() {
  return (
    <div className="rounded-3xl border border-gray-200 bg-white shadow-sm">

      {/* Header */}
      <div className="flex items-center justify-between border-b border-gray-100 px-7 py-6">

        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            Upcoming Bookings
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Your scheduled meetings & visits.
          </p>
        </div>

        <Link
          href="/customer/bookings"
          className="flex items-center gap-2 font-semibold text-rose-500 transition hover:text-rose-600"
        >
          View All
          <ArrowRight size={16} />
        </Link>

      </div>

      {/* Booking List */}
      <div className="divide-y divide-gray-100">

        {bookings.map((booking) => (
          <div
            key={booking.id}
            className="flex items-center justify-between px-7 py-5 transition hover:bg-rose-50"
          >
            <div>
              <h3 className="font-semibold text-gray-900">
                {booking.vendor}
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                {booking.service}
              </p>

              <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-gray-500">

                <span className="flex items-center gap-1">
                  <CalendarDays size={15} />
                  {booking.date}
                </span>

                <span className="flex items-center gap-1">
                  <Clock3 size={15} />
                  {booking.time}
                </span>

                <span className="flex items-center gap-1">
                  <MapPin size={15} />
                  {booking.location}
                </span>

              </div>
            </div>

            <button className="rounded-xl bg-rose-500 px-5 py-2 text-sm font-semibold text-white transition hover:bg-rose-600">
              Details
            </button>
          </div>
        ))}

      </div>
    </div>
  );
}