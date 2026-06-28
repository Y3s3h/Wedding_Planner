"use client";

export default function NotificationSettings() {
  const settings = [
    "Email Notifications",
    "Booking Updates",
    "Vendor Messages",
    "Offers & Promotions",
  ];

  return (
    <section className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm">

      <h2 className="text-2xl font-bold text-rose-500">
        Notifications
      </h2>

      <div className="mt-8 space-y-5">

        {settings.map((item) => (

          <div
            key={item}
            className="flex items-center justify-between text-gray-700"
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