"use client";

export default function ContactInformation() {
  return (
    <section className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm">

      <h2 className="text-2xl font-bold text-rose-500">
        Contact Information
      </h2>

      <div className="mt-8 space-y-6 text-rose-500">

        <Info
          label="Address"
          value="Ghaziabad, Uttar Pradesh"
        />

        <Info
          label="City"
          value="Ghaziabad"
        />

        <Info
          label="State"
          value="Uttar Pradesh"
        />

        <Info
          label="Country"
          value="India"
        />

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