"use client";

export default function OwnerInformation() {
  const data = [
    ["Owner", "Rahul Sharma"],
    ["Email", "vendor@email.com"],
    ["Phone", "+91 9876543210"],
    ["Experience", "8 Years"],
  ];

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
      <h2 className="text-2xl font-bold text-gray-800">
        Owner Information
      </h2>

      <div className="mt-8 space-y-5">
        {data.map(([label, value]) => (
          <div
            key={label}
            className="flex items-center justify-between border-b border-slate-100 pb-3"
          >
            <span className="text-gray-500">
              {label}
            </span>

            <span className="font-semibold text-gray-800">
              {value}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}