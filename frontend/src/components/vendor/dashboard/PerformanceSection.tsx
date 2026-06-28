"use client";

const metrics = [
  {
    title: "Profile Views",
    value: "2,340",
  },
  {
    title: "Booking Requests",
    value: "86",
  },
  {
    title: "Conversion Rate",
    value: "42%",
  },
  {
    title: "Customer Satisfaction",
    value: "98%",
  },
];

export default function PerformanceSection() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">

      <h2 className="text-2xl font-bold text-slate-900">
        Business Performance
      </h2>

      <p className="mt-2 text-slate-500">
        Your business insights this month.
      </p>

      <div className="mt-8 grid gap-5 md:grid-cols-2">

        {metrics.map((metric) => (

          <div
            key={metric.title}
            className="rounded-2xl bg-slate-50 p-5"
          >

            <p className="text-sm text-slate-500">
              {metric.title}
            </p>

            <p className="mt-2 text-3xl font-bold text-slate-900">
              {metric.value}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}