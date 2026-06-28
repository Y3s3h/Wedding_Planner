"use client";

export default function BookingAnalytics() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
      <h2 className="text-2xl font-bold text-gray-800">
        Booking Trend
      </h2>

      <div className="mt-8 flex h-64 items-end justify-between">
        {[40, 60, 50, 80, 70, 90, 65].map((height, index) => (
          <div
            key={index}
            className="w-10 rounded-t-xl bg-gradient-to-t from-blue-700 to-indigo-500 transition-all duration-300 hover:opacity-90"
            style={{ height: `${height}%` }}
          />
        ))}
      </div>
    </section>
  );
}