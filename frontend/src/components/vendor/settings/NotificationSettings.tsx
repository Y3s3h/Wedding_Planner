"use client";

const items = [
  "New Booking Notifications",
  "Payment Alerts",
  "Customer Messages",
  "Marketing Emails",
];

export default function NotificationSettings() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
      <h2 className="text-2xl font-bold text-gray-800">
        Notifications
      </h2>

      <div className="mt-8 space-y-5">
        {items.map((item) => (
          <label
            key={item}
            className="flex items-center justify-between"
          >
            <span className="text-gray-700">
              {item}
            </span>

            <input
              type="checkbox"
              defaultChecked
              className="h-5 w-5 rounded border-slate-300 text-blue-600 focus:ring-2 focus:ring-blue-100"
            />
          </label>
        ))}
      </div>
    </section>
  );
}