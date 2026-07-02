"use client";

import {
  Building2,
  CheckCircle2,
  Clock3,
  XCircle,
} from "lucide-react";

import { useBookingStore } from "@/store/bookingStore";

export default function VendorStatus() {
  const bookings = useBookingStore(
    (state) => state.bookings
  );

  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="mb-6 flex items-center gap-3">
        <div className="rounded-2xl bg-rose-100 p-3">
          <Building2
            className="text-rose-600"
            size={22}
          />
        </div>

        <div>
          <h3 className="font-semibold text-gray-900">
            Vendors
          </h3>

          <p className="text-sm text-gray-500">
            Booking status
          </p>
        </div>
      </div>

      {bookings.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-gray-200 py-8 text-center text-gray-500">
          No vendors booked yet.
        </div>
      ) : (
        <div className="space-y-4">
          {bookings.map((booking) => (
            <div
              key={booking.id}
              className="flex items-center justify-between"
            >
              <div>
                <p className="font-medium text-gray-900">
                  {booking.vendorName}
                </p>

                <p className="text-sm text-gray-500">
                  {booking.category}
                </p>
              </div>

              {booking.bookingStatus === "accepted" ? (
                <CheckCircle2
                  size={20}
                  className="text-green-500"
                />
              ) : booking.bookingStatus ===
                "pending" ? (
                <Clock3
                  size={20}
                  className="text-yellow-500"
                />
              ) : booking.bookingStatus ===
                "cancelled" ? (
                <XCircle
                  size={20}
                  className="text-red-500"
                />
              ) : (
                <CheckCircle2
                  size={20}
                  className="text-blue-500"
                />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}