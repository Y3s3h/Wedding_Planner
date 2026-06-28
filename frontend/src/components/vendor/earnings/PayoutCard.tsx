"use client";

export default function PayoutCard() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
      <h2 className="text-2xl font-bold text-gray-800">
        Next Payout
      </h2>

      <p className="mt-8 text-5xl font-bold text-blue-700">
        ₹85,000
      </p>

      <p className="mt-2 text-gray-500">
        Scheduled on 15 August
      </p>

      <button className="mt-8 w-full rounded-2xl bg-blue-700 py-3 font-semibold text-white transition hover:bg-blue-800">
        View Details
      </button>
    </section>
  );
}