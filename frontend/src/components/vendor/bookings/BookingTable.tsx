// "use client";

// const bookings = [
//   {
//     customer: "Rahul Sharma",
//     event: "Wedding",
//     date: "12 Aug 2026",
//     status: "Pending",
//     amount: "₹1,20,000",
//   },
//   {
//     customer: "Aman Verma",
//     event: "Reception",
//     date: "18 Aug 2026",
//     status: "Accepted",
//     amount: "₹80,000",
//   },
//   {
//     customer: "Sneha Gupta",
//     event: "Engagement",
//     date: "24 Aug 2026",
//     status: "Completed",
//     amount: "₹55,000",
//   },
// ];

// function badge(status: string) {
//   switch (status) {
//     case "Pending":
//       return "bg-yellow-100 text-yellow-700";

//     case "Accepted":
//       return "bg-green-100 text-green-700";

//     case "Completed":
//       return "bg-blue-100 text-blue-700";

//     default:
//       return "bg-red-100 text-red-700";
//   }
// }

// export default function BookingTable() {
//   return (
//     <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">

//       <table className="w-full">

//         <thead className="bg-slate-50">

//           <tr>

//             <th className="px-6 py-4 text-left">
//               Customer
//             </th>

//             <th className="text-left">
//               Event
//             </th>

//             <th className="text-left">
//               Date
//             </th>

//             <th className="text-left">
//               Amount
//             </th>

//             <th className="text-left">
//               Status
//             </th>

//             <th className="text-left">
//               Action
//             </th>

//           </tr>

//         </thead>

//         <tbody>

//           {bookings.map((booking) => (

//             <tr
//               key={booking.customer}
//               className="border-t border-slate-100"
//             >

//               <td className="px-6 py-5 font-medium">

//                 {booking.customer}

//               </td>

//               <td>{booking.event}</td>

//               <td>{booking.date}</td>

//               <td>{booking.amount}</td>

//               <td>

//                 <span
//                   className={`rounded-full px-3 py-1 text-xs font-semibold ${badge(
//                     booking.status
//                   )}`}
//                 >
//                   {booking.status}
//                 </span>

//               </td>

//               <td>

//                 <button className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">

//                   View

//                 </button>

//               </td>

//             </tr>

//           ))}

//         </tbody>

//       </table>

//     </section>
//   );
// }


"use client";

const bookings = [
  {
    customer: "Rahul Sharma",
    event: "Wedding",
    date: "12 Aug 2026",
    status: "Pending",
    amount: "₹1,20,000",
  },
  {
    customer: "Aman Verma",
    event: "Reception",
    date: "18 Aug 2026",
    status: "Accepted",
    amount: "₹80,000",
  },
  {
    customer: "Sneha Gupta",
    event: "Engagement",
    date: "24 Aug 2026",
    status: "Completed",
    amount: "₹55,000",
  },
];

function badge(status: string) {
  switch (status) {
    case "Pending":
      return "bg-yellow-100 text-yellow-700";

    case "Accepted":
      return "bg-green-100 text-green-700";

    case "Completed":
      return "bg-blue-100 text-blue-700";

    default:
      return "bg-red-100 text-red-700";
  }
}

export default function BookingTable() {
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
              key={booking.customer}
              className="border-t border-slate-100 hover:bg-slate-50 transition-colors"
            >
              <td className="px-6 py-5 font-medium text-gray-700">
                {booking.customer}
              </td>

              <td className="px-6 py-5 text-gray-700">
                {booking.event}
              </td>

              <td className="px-6 py-5 text-gray-700">
                {booking.date}
              </td>

              <td className="px-6 py-5 text-gray-700">
                {booking.amount}
              </td>

              <td className="px-6 py-5">
                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${badge(
                    booking.status
                  )}`}
                >
                  {booking.status}
                </span>
              </td>

              <td className="px-6 py-5">
                <button className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700">
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}