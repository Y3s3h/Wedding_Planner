"use client";

export default function RevenueAnalytics() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
      <h2 className="text-2xl font-bold text-gray-800">
        Revenue Growth
      </h2>

      <div className="mt-8 space-y-6">
        <Row label="January" value="₹2.4L" />
        <Row label="February" value="₹3.1L" />
        <Row label="March" value="₹4.8L" />
        <Row label="April" value="₹5.6L" />
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
    <div className="flex items-center justify-between border-b border-slate-100 pb-3">
      <span className="text-gray-500">
        {label}
      </span>

      <span className="font-semibold text-blue-700">
        {value}
      </span>
    </div>
  );
}