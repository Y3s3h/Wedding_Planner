"use client";

const ratings = [
  { star: "5 Star", value: "82%" },
  { star: "4 Star", value: "12%" },
  { star: "3 Star", value: "4%" },
  { star: "2 Star", value: "1%" },
  { star: "1 Star", value: "1%" },
];

export default function RatingSummary() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-bold text-gray-800">
        Rating Summary
      </h2>

      <div className="mt-8 space-y-5">
        {ratings.map((item) => (
          <div key={item.star}>
            <div className="mb-2 flex justify-between text-gray-700">
              <span>{item.star}</span>
              <span className="font-medium">{item.value}</span>
            </div>

            <div className="h-2 rounded-full bg-slate-100">
              <div
                className="h-2 rounded-full bg-orange-500"
                style={{ width: item.value }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}