"use client";

const services = [
  ["Wedding Photography", "₹12.5L"],
  ["Luxury Decoration", "₹9.8L"],
  ["Premium Catering", "₹8.2L"],
  ["DJ Services", "₹4.3L"],
];

export default function TopServices() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
      <h2 className="text-2xl font-bold text-gray-800">
        Top Performing Services
      </h2>

      <div className="mt-8 space-y-5">
        {services.map(([name, revenue]) => (
          <div
            key={name}
            className="flex items-center justify-between rounded-2xl bg-slate-50 p-5 transition hover:bg-slate-100"
          >
            <span className="font-medium text-gray-700">
              {name}
            </span>

            <span className="font-bold text-blue-700">
              {revenue}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}