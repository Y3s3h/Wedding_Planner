"use client";

export default function WeddingInformation() {
  return (
    <section className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm">

      <h2 className="text-2xl font-bold text-rose-500">
        Wedding Information
      </h2>

      <div className="mt-8 space-y-6 text-rose-500">

        <Info label="Wedding Date" value="12 February 2027" />

        <Info label="Venue" value="Royal Palace Banquet" />

        <Info label="Guests" value="324" />

        <Info label="Theme" value="Royal Traditional" />

      </div>

    </section>
  );
}

function Info({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div>

      <p className="text-sm text-gray-500">
        {label}
      </p>

      <p className="mt-1 font-semibold">
        {value}
      </p>

    </div>
  );
}