"use client";

import {
  CalendarDays,
  IndianRupee,
} from "lucide-react";

const expenses = [
  {
    title: "Royal Palace Venue",
    date: "10 July 2026",
    amount: "₹2,50,000",
  },
  {
    title: "Photography Advance",
    date: "14 July 2026",
    amount: "₹40,000",
  },
  {
    title: "Decoration Booking",
    date: "20 July 2026",
    amount: "₹25,000",
  },
  {
    title: "Invitation Cards",
    date: "24 July 2026",
    amount: "₹15,000",
  },
];

export default function RecentExpenses() {
  return (
    <section className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm">

      <h2 className="text-2xl font-bold text-gray-900">
        Recent Expenses
      </h2>

      <div className="mt-8 space-y-5">

        {expenses.map((expense) => (

          <div
            key={expense.title}
            className="flex items-center justify-between rounded-2xl border border-gray-100 p-4 hover:bg-gray-50"
          >

            <div className="flex items-center gap-4">

              <div className="rounded-2xl bg-green-100 p-3">

                <IndianRupee
                  className="text-green-600"
                  size={20}
                />

              </div>

              <div>

                <h3 className="font-semibold text-rose-500">
                  {expense.title}
                </h3>

                <div className="mt-1 flex items-center gap-2 text-sm text-gray-500">

                  <CalendarDays size={14} />

                  {expense.date}

                </div>

              </div>

            </div>

            <span className="font-bold text-gray-900">
              {expense.amount}
            </span>

          </div>

        ))}

      </div>

    </section>
  );
}