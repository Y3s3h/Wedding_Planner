"use client";

import {
  CreditCard,
  CheckCircle2,
  IndianRupee,
  Receipt,
} from "lucide-react";

export default function PaymentInformation() {
  return (
    <section className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm">

      <div className="mb-6">

        <h2 className="text-2xl font-bold text-gray-900">
          Payment Details
        </h2>

        <p className="mt-1 text-gray-500">
          Booking payment summary.
        </p>

      </div>

      <div className="space-y-5">

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-3">

            <IndianRupee
              size={20}
              className="text-indigo-600"
            />

            <span className="text-gray-600">
              Total Amount
            </span>

          </div>

          <span className="font-semibold text-gray-900">
            ₹5,00,000
          </span>

        </div>

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-3">

            <CreditCard
              size={20}
              className="text-green-600"
            />

            <span className="text-gray-600">
              Advance Paid
            </span>

          </div>

          <span className="font-semibold text-green-600">
            ₹2,50,000
          </span>

        </div>

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-3">

            <Receipt
              size={20}
              className="text-orange-500"
            />

            <span className="text-gray-600">
              Remaining
            </span>

          </div>

          <span className="font-semibold text-orange-600">
            ₹2,50,000
          </span>

        </div>

      </div>

      <div className="mt-8 rounded-2xl bg-green-50 p-4">

        <div className="flex items-center gap-3">

          <CheckCircle2
            size={22}
            className="text-green-600"
          />

          <div>

            <h4 className="font-semibold text-green-700">
              Payment Successful
            </h4>

            <p className="text-sm text-green-600">
              Advance payment received.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}