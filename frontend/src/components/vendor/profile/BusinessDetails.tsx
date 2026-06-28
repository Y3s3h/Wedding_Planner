"use client";

export default function BusinessDetails() {
  const details = [
    ["Category", "Photography"],
    ["Location", "Delhi"],
    ["Bookings", "248"],
    ["Rating", "4.9 ⭐"],
  ];

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
      <h2 className="text-2xl font-bold text-gray-800">
        Business Details
      </h2>

      <div className="mt-8 space-y-5">
        {details.map(([label, value]) => (
          <div
            key={label}
            className="flex items-center justify-between border-b border-slate-100 pb-3"
          >
            <span className="text-gray-500">
              {label}
            </span>

            <span className="font-semibold text-gray-800">
              {value}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}