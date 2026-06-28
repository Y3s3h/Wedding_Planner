"use client";

export default function VerificationCard() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
      <h2 className="text-2xl font-bold text-gray-800">
        Verification
      </h2>

      <div className="mt-8 space-y-4">
        <Row
          label="Business Verified"
          value="Yes"
        />

        <Row
          label="GST Verified"
          value="Pending"
        />

        <Row
          label="Bank Account"
          value="Verified"
        />
      </div>

      <button className="mt-8 w-full rounded-2xl bg-blue-700 py-3 font-semibold text-white transition hover:bg-blue-800">
        Upload Documents
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