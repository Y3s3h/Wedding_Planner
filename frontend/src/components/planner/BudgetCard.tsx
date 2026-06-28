"use client";

import { Wallet } from "lucide-react";

export default function BudgetCard() {
  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="rounded-2xl bg-emerald-100 p-3">
          <Wallet className="text-emerald-600" size={22} />
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
          ₹4.8L
        </p>

        <p className="mt-2 text-sm text-gray-500">
          Remaining Budget
        </p>

        <div className="mt-6 h-3 rounded-full bg-gray-100">
          <div className="h-3 w-[68%] rounded-full bg-gradient-to-r from-emerald-500 to-green-500" />
        </div>

        <div className="mt-4 flex justify-between text-sm">
          <span className="text-gray-500">68% Left</span>

          <span className="font-semibold text-gray-800">
            ₹10L Total
          </span>
        </div>
      </div>
    </div>
  );
}