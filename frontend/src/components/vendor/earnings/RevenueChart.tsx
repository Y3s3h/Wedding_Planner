"use client";

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
];

const heights = [
  "40%",
  "60%",
  "80%",
  "55%",
  "90%",
  "70%",
];

export default function RevenueChart() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
      <h2 className="text-2xl font-bold text-gray-800">
        Revenue Overview
      </h2>

      <div className="mt-10 flex h-72 items-end justify-between">
        {months.map((month, index) => (
          <div
            key={month}
            className="flex flex-col items-center gap-3"
          >
            <div
              className="w-12 rounded-t-xl bg-gradient-to-t from-blue-700 to-indigo-500 transition-all duration-300 hover:opacity-90"
              style={{
                height: heights[index],
              }}
            />

            <span className="text-sm font-medium text-gray-500">
              {month}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}