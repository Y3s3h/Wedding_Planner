"use client";

const bookings = [
  {
    customer: "Rahul & Priya",
    date: "Tomorrow",
  },
  {
    customer: "Aman & Sneha",
    date: "12 Aug",
  },
  {
    customer: "Rohan & Anjali",
    date: "18 Aug",
  },
];

export default function UpcomingBookings() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">

      <h2 className="text-xl font-bold text-slate-900">
        Upcoming Bookings
      </h2>

      <div className="mt-8 space-y-5">

        {bookings.map((booking) => (

          <div
            key={booking.customer}
            className="flex items-center justify-between rounded-2xl bg-slate-50 p-4"
          >

            <div>

              <h3 className="font-semibold text-gray-700">
                {booking.customer}
              </h3>

              <p className="text-sm text-slate-500">
                Wedding Event
              </p>

            </div>

            <span className="font-medium text-blue-700">
              {booking.date}
            </span>

          </div>

        ))}

      </div>

    </section>
  );
}