"use client";

export default function PersonalInformation() {
  return (
    <section className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm">

      <h2 className="text-2xl font-bold text-rose-500">
        Personal Information
      </h2>

      <div className="mt-8 space-y-6 text-rose-400">

        <Info label="Full Name" value="Yash Yadav" />

        <Info label="Email" value="yash@gmail.com" />

        <Info label="Phone" value="+91 9876543210" />

        <Info label="Gender" value="Male" />

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