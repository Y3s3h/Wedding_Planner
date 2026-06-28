"use client";

const days = [
  "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"
];

export default function CalendarView() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
      <h2 className="text-2xl font-bold text-gray-800">
        August 2026
      </h2>

      <div className="mt-8 grid grid-cols-7 gap-4">
        {days.map((day) => (
          <div
            key={day}
            className="text-center font-semibold text-gray-500"
          >
            {day}
          </div>
        ))}

        {Array.from({ length: 35 }).map((_, i) => (
          <div
            key={i}
            className={`flex h-20 items-center justify-center rounded-2xl border font-medium text-gray-700
              ${
                i === 10
                  ? "border-green-300 bg-green-100"
                  : i === 18
                  ? "border-red-300 bg-red-100"
                  : "border-slate-100 bg-white"
              }`}
          >
            {i + 1}
          </div>
        ))}
      </div>
    </section>
  );
}