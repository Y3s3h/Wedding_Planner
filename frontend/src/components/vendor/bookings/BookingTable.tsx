

"use client";

import { useBookingStore } from "@/store/bookingStore";
import { useNotificationStore } from "@/store/notificationStore";

function badge(status: string) {
  switch (status) {
    case "pending":
      return "bg-yellow-100 text-yellow-700";

    case "accepted":
      return "bg-green-100 text-green-700";

    case "completed":
      return "bg-blue-100 text-blue-700";

    default:
      return "bg-red-100 text-red-700";
  }
}

export default function BookingTable() {
  const { bookings, updateStatus } = useBookingStore();

const { addNotification } =
  useNotificationStore();




  const handleStatusChange = (
  booking: typeof bookings[number],
  status: "accepted" | "cancelled"
) => {
  updateStatus(booking.id, status);

  addNotification({
    id: crypto.randomUUID(),

    userId: booking.customerId,

    title:
      status === "accepted"
        ? "Booking Accepted"
        : "Booking Rejected",

    message:
      status === "accepted"
        ? `${booking.vendorName} accepted your booking.`
        : `${booking.vendorName} rejected your booking.`,

    type: "booking",

    link: "/customer/bookings",

    isRead: false,

    createdAt: new Date().toISOString(),
  });
};

  return (
    <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      <table className="w-full text-gray-700">
        <thead className="bg-slate-50">
          <tr>
            <th className="px-6 py-4 text-left font-semibold text-gray-900">
              Customer
            </th>

            <th className="px-6 py-4 text-left font-semibold text-gray-900">
              Event
            </th>

            <th className="px-6 py-4 text-left font-semibold text-gray-900">
              Date
            </th>

            <th className="px-6 py-4 text-left font-semibold text-gray-900">
              Amount
            </th>

            <th className="px-6 py-4 text-left font-semibold text-gray-900">
              Status
            </th>

            <th className="px-6 py-4 text-left font-semibold text-gray-900">
              Action
            </th>
          </tr>
        </thead>

        <tbody>
          {bookings.map((booking) => (
            <tr
              key={booking.id}
              className="border-t border-slate-100 transition-colors hover:bg-slate-50"
            >
              <td className="px-6 py-5 font-medium text-gray-700">
                {booking.customerName}
              </td>

              <td className="px-6 py-5 text-gray-700">
                {booking.eventType}
              </td>

              <td className="px-6 py-5 text-gray-700">
                {booking.eventDate}
              </td>

              <td className="px-6 py-5 text-gray-700">
                ₹{booking.amount.toLocaleString()}
              </td>

              <td className="px-6 py-5">
                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold capitalize ${badge(
                    booking.bookingStatus
                  )}`}
                >
                  {booking.bookingStatus}
                </span>
              </td>

              <td className="px-6 py-5">
                <div className="flex gap-2">
                  {booking.bookingStatus === "pending" && (
                    <>
                      <button
                       onClick={() =>
  handleStatusChange(
    booking,
    "accepted"
  )
}
                        className="rounded-lg bg-green-600 px-3 py-2 text-sm text-white hover:bg-green-700"
                      >
                        Accept
                      </button>

                      <button
                       onClick={() =>
  handleStatusChange(
    booking,
    "cancelled"
  )
}
                        className="rounded-lg bg-red-600 px-3 py-2 text-sm text-white hover:bg-red-700"
                      >
                        Reject
                      </button>
                    </>
                  )}

                  <button className="rounded-lg bg-blue-600 px-3 py-2 text-sm text-white hover:bg-blue-700">
                    View
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}