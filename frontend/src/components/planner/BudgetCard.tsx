"use client";

import { useMemo } from "react";
import { Wallet } from "lucide-react";

import { useBookingStore } from "@/store/bookingStore";

export default function BudgetCard() {
  const bookings = useBookingStore(
    (state) => state.bookings
  );

  const totalBudget = useMemo(() => {
    return bookings.reduce(
      (sum, booking) => sum + booking.amount,
      0
    );
  }, [bookings]);

  const spent = useMemo(() => {
    return bookings.reduce(
      (sum, booking) => sum + booking.advancePaid,
      0
    );
  }, [bookings]);

  const remaining = useMemo(() => {
    return bookings.reduce(
      (sum, booking) => sum + booking.remainingAmount,
      0
    );
  }, [bookings]);

  const percentageLeft =
    totalBudget === 0
      ? 0
      : Math.round(
          (remaining / totalBudget) * 100
        );

  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="rounded-2xl bg-emerald-100 p-3">
          <Wallet
            className="text-emerald-600"
            size={22}
          />
        </div>

        <div>
          <h3 className="font-semibold text-gray-900">
            Wedding Budget
          </h3>

          <p className="text-sm text-gray-500">
            Current spending
          </p>
        </div>
      </div>

      <div className="mt-8">
        <p className="text-4xl font-bold text-gray-900">
          ₹{remaining.toLocaleString("en-IN")}
        </p>

        <p className="mt-2 text-sm text-gray-500">
          Remaining Budget
        </p>

        <div className="mt-6 h-3 rounded-full bg-gray-100">
          <div
            className="h-3 rounded-full bg-gradient-to-r from-emerald-500 to-green-500"
            style={{
              width: `${percentageLeft}%`,
            }}
          />
        </div>

        <div className="mt-4 flex justify-between text-sm">
          <span className="text-gray-500">
            {percentageLeft}% Left
          </span>

          <span className="font-semibold text-gray-800">
            ₹{totalBudget.toLocaleString("en-IN")} Total
          </span>
        </div>

        <div className="mt-6 rounded-2xl bg-emerald-50 p-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">
              Advance Paid
            </span>

            <span className="font-semibold text-emerald-600">
              ₹{spent.toLocaleString("en-IN")}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}