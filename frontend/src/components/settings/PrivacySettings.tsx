"use client";

export default function PrivacySettings() {

  const items = [
    "Public Profile",
    "Activity Status",
    "Share Wedding Progress",
    "Marketing Emails",
  ];

  return (
    <section className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm">

      <h2 className="text-2xl font-bold text-rose-500">
        Privacy
      </h2>

      <div className="mt-8 space-y-5 text-gray-600">

        {items.map((item) => (

          <div
            key={item}
            className="flex items-center justify-between"
          >

            <span className="font-medium">
              {item}
            </span>

            <input
              type="checkbox"
              defaultChecked
              className="h-5 w-5 accent-rose-500"
            />

          </div>

        ))}

      </div>

    </section>
  );
}