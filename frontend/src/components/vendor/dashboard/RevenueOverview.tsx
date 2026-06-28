"use client";

export default function RevenueOverview() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">

      <h2 className="text-xl font-bold text-slate-900">
        Revenue Overview
      </h2>

      <div className="mt-8 space-y-5">

        <Row label="Today" value="₹18,500" />

        <Row label="This Week" value="₹1.2L" />

        <Row label="This Month" value="₹4.8L" />

        <Row label="This Year" value="₹38L" />

      </div>

    </section>
  );
}

function Row({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between">

      <span className="text-slate-500">
        {label}
      </span>

      <span className="font-semibold text-slate-900">
        {value}
      </span>

    </div>
  );
}