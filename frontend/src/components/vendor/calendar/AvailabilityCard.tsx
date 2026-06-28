"use client";

export default function AvailabilityCard() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-xl font-bold text-gray-800">
        Availability
      </h2>

      <div className="mt-6 space-y-5">
        <Row
          label="Available Days"
          value="18"
        />

        <Row
          label="Booked Days"
          value="12"
        />

        <Row
          label="Blocked"
          value="05"
        />
      </div>

      <button className="mt-8 w-full rounded-2xl bg-green-600 py-3 font-semibold text-white transition hover:bg-green-700">
        Block Date
      </button>
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
      <span className="text-gray-500">
        {label}
      </span>

      <span className="font-semibold text-gray-800">
        {value}
      </span>
    </div>
  );
}