"use client";

import {
  MessageCircle,
  CalendarClock,
  FileText,
  AlertTriangle,
} from "lucide-react";

export default function BookingActions() {
  return (
    <section className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm">

      <h2 className="text-2xl font-bold text-gray-900">
        Booking Actions
      </h2>

      <p className="mt-1 text-gray-500">
        Manage your booking quickly.
      </p>

      <div className="mt-8 space-y-4">

        <button className="flex w-full items-center justify-between rounded-2xl bg-indigo-600 px-5 py-4 font-semibold text-white transition hover:bg-indigo-700">

          <div className="flex items-center gap-3">

            <MessageCircle size={20} />

            Chat with Vendor

          </div>

        </button>

        <button className="flex w-full items-center justify-between rounded-2xl border border-gray-200 px-5 py-4 transition hover:bg-gray-50 text-gray-700">

          <div className="flex items-center gap-3">

            <FileText size={20} />

            Download Invoice

          </div>

        </button>

        <button className="flex w-full items-center justify-between rounded-2xl border border-gray-200 px-5 py-4 transition hover:bg-gray-50 text-gray-700">

          <div className="flex items-center gap-3">

            <CalendarClock size={20} />

            Reschedule Booking

          </div>

        </button>

        <button className="flex w-full items-center justify-between rounded-2xl border border-red-200 bg-red-50 px-5 py-4 font-medium text-red-600 transition hover:bg-red-100 ">

          <div className="flex items-center gap-3">

            <AlertTriangle size={20} />

            Cancel Booking

          </div>

        </button>

      </div>

    </section>
  );
}