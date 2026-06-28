"use client";

import {
  CircleCheck,
  TriangleAlert,
  TrendingUp,
} from "lucide-react";

export default function BudgetInsights() {
  return (
    <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">

      <h2 className="text-xl font-bold text-gray-900">
        Budget Insights
      </h2>

      <div className="mt-6 space-y-5">

        <div className="rounded-2xl bg-green-50 p-5">

          <div className="flex items-center gap-3">

            <CircleCheck
              className="text-green-600"
              size={22}
            />

            <div>

              <h3 className="font-semibold text-green-700">
                Great Progress
              </h3>

              <p className="text-sm text-green-600">
                You're well within your planned budget.
              </p>

            </div>

          </div>

        </div>

        <div className="rounded-2xl bg-yellow-50 p-5">

          <div className="flex items-center gap-3">

            <TriangleAlert
              className="text-yellow-600"
              size={22}
            />

            <div>

              <h3 className="font-semibold text-yellow-700">
                Decoration Costs Rising
              </h3>

              <p className="text-sm text-yellow-600">
                Keep an eye on decoration expenses.
              </p>

            </div>

          </div>

        </div>

        <div className="rounded-2xl bg-blue-50 p-5">

          <div className="flex items-center gap-3">

            <TrendingUp
              className="text-blue-600"
              size={22}
            />

            <div>

              <h3 className="font-semibold text-blue-700">
                Savings Opportunity
              </h3>

              <p className="text-sm text-blue-600">
                Booking vendors together could reduce costs.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}