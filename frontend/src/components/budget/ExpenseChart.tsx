"use client";

import {
  TrendingUp,
  TrendingDown,
} from "lucide-react";

const months = [
  { month: "Jan", amount: 40 },
  { month: "Feb", amount: 75 },
  { month: "Mar", amount: 58 },
  { month: "Apr", amount: 90 },
  { month: "May", amount: 68 },
  { month: "Jun", amount: 82 },
];

export default function ExpenseChart() {
  return (
    <section className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm">

      <div className="flex items-center justify-between">

        <div>

          <h2 className="text-2xl font-bold text-gray-900">
            Expense Analytics
          </h2>

          <p className="mt-1 text-gray-500">
            Monthly wedding spending.
          </p>

        </div>

        <div className="rounded-2xl bg-green-50 px-4 py-2 text-green-600">

          <div className="flex items-center gap-2">

            <TrendingUp size={18} />

            +12%

          </div>

        </div>

      </div>

      {/* Fake Chart */}

      <div className="mt-10 flex h-72 items-end justify-between gap-4">

        {months.map((item) => (

          <div
            key={item.month}
            className="flex flex-1 flex-col items-center"
          >

            <div
              style={{
                height: `${item.amount}%`,
              }}
              className="
                w-full
                rounded-t-2xl
                bg-gradient-to-t
                from-emerald-500
                to-green-300
                transition-all
                duration-500
                hover:scale-105
              "
            />

            <span className="mt-3 text-sm text-gray-500">
              {item.month}
            </span>

          </div>

        ))}

      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">

        <div className="rounded-2xl bg-gray-50 p-4">

          <p className="text-sm text-gray-500">
            Highest Expense
          </p>

          <p className="mt-2 font-bold text-gray-900">
            Venue
          </p>

        </div>

        <div className="rounded-2xl bg-gray-50 p-4">

          <p className="text-sm text-gray-500">
            Lowest Expense
          </p>

          <p className="mt-2 font-bold text-gray-900">
            Invitations
          </p>

        </div>

        <div className="rounded-2xl bg-gray-50 p-4">

          <div className="flex items-center gap-2">

            <TrendingDown
              size={18}
              className="text-orange-500"
            />

            <p className="font-bold text-orange-500">
              Budget Healthy
            </p>

          </div>

          <p className="mt-2 text-sm text-gray-500">
            You're spending within budget.
          </p>

        </div>

      </div>

    </section>
  );
}