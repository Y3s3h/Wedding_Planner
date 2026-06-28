"use client";

import Link from "next/link";
import Image from "next/image";
import {
  CalendarDays,
  Clock3,
  MapPin,
  IndianRupee,
  MessageCircle,
  FileText,
  Eye,
} from "lucide-react";

export default function BookingCard() {
  return (
    <div
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
      <div className="flex flex-col gap-6 lg:flex-row">

        {/* Vendor Image */}

        <div className="relative h-52 w-full overflow-hidden rounded-3xl lg:h-44 lg:w-72">

          <Image
            src="https://images.unsplash.com/photo-1519741497674-611481863552?w=800"
            alt="Vendor"
            fill
            className="object-cover"
          />

        </div>

        {/* Details */}

        <div className="flex flex-1 flex-col justify-between">

          <div>

            {/* Top */}

            <div className="flex flex-wrap items-center justify-between gap-4">

              <div>

                <h2 className="text-2xl font-bold text-gray-900">
                  Royal Palace Banquet
                </h2>

                <p className="mt-1 text-gray-500">
                  Wedding Venue
                </p>

              </div>

              <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
                Confirmed
              </span>

            </div>

            {/* Info */}

            <div className="mt-6 grid gap-4 md:grid-cols-2">

              <div className="flex items-center gap-3">

                <CalendarDays
                  size={18}
                  className="text-indigo-500"
                />

                <span className="text-gray-700">
                  12 February 2027
                </span>

              </div>

              <div className="flex items-center gap-3">

                <Clock3
                  size={18}
                  className="text-indigo-500"
                />

                <span className="text-gray-700">
                  11:00 AM
                </span>

              </div>

              <div className="flex items-center gap-3">

                <MapPin
                  size={18}
                  className="text-indigo-500"
                />

                <span className="text-gray-700">
                  Noida, Uttar Pradesh
                </span>

              </div>

              <div className="flex items-center gap-3">

                <IndianRupee
                  size={18}
                  className="text-indigo-500"
                />

                <span className="text-gray-700">
                  ₹2,50,000 Paid
                </span>

              </div>

            </div>

          </div>

          {/* Bottom */}

          <div className="mt-8 flex flex-wrap gap-3">

            <Link
              href="/customer/bookings/1"
              className="flex items-center gap-2 rounded-2xl bg-indigo-600 px-5 py-3 font-semibold text-white transition hover:bg-indigo-700"
            >
              <Eye size={18} />

              View Details
            </Link>

            <button className="flex items-center gap-2 rounded-2xl border border-gray-200 px-5 py-3 font-medium transition hover:bg-gray-50">

              <MessageCircle size={18} />

              Chat

            </button>

            <button className="flex items-center gap-2 rounded-2xl border border-gray-200 px-5 py-3 font-medium transition hover:bg-gray-50">

              <FileText size={18} />

              Invoice

            </button>

          </div>

        </div>

      </div>

    </div>
  );
}