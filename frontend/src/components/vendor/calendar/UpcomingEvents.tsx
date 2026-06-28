"use client";

const events = [
  {
    name: "Rahul Wedding",
    date: "12 Aug",
  },
  {
    name: "Priya Reception",
    date: "18 Aug",
  },
  {
    name: "Anjali Engagement",
    date: "24 Aug",
  },
];

export default function UpcomingEvents() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
      <h2 className="text-2xl font-bold text-gray-800">
        Upcoming Events
      </h2>

      <div className="mt-8 space-y-5">
        {events.map((event) => (
          <div
            key={event.name}
            className="flex items-center justify-between rounded-2xl bg-slate-50 p-5 transition hover:bg-slate-100"
          >
            <div>
              <h3 className="font-semibold text-gray-800">
                {event.name}
              </h3>

              <p className="text-sm text-gray-500">
                Wedding Event
              </p>
            </div>

            <span className="font-semibold text-green-700">
              {event.date}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}