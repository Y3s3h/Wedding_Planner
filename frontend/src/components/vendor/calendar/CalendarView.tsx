// "use client";

// import { useEffect, useState } from "react";
// import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";

// import { useAuthStore } from "@/store/authStore";
// import { useAvailabilityStore } from "@/store/availabilityStore";

// import { getVendorByUserId } from "@/services/vendor.service";

// type Value = Date | null;

// export default function CalendarView() {
//   const { user } = useAuthStore();

//   const availability = useAvailabilityStore(
//     (state) => state.availability
//   );

//   const loadVendorAvailability = useAvailabilityStore(
//     (state) => state.loadVendorAvailability
//   );

//   const addAvailability = useAvailabilityStore(
//     (state) => state.addAvailability
//   );

//   const deleteExistingAvailability = useAvailabilityStore(
//     (state) => state.deleteExistingAvailability
//   );

//   const [value, setValue] = useState<Value>(new Date());

//   const vendor = user
//     ? getVendorByUserId(user._id)
//     : null;

//   const vendorId = vendor?.id;

//   useEffect(() => {
//     if (vendorId) {
//       loadVendorAvailability(vendorId);
//     }
//   }, [vendorId, loadVendorAvailability]);

//   const formatDate = (date: Date) => {
//   const year = date.getFullYear();
//   const month = String(
//     date.getMonth() + 1
//   ).padStart(2, "0");
//   const day = String(
//     date.getDate()
//   ).padStart(2, "0");

//   return `${year}-${month}-${day}`;
// };

//   const handleDateClick = (date: Date) => {
//     if (!vendor) return;

//     const formattedDate = formatDate(date);

//     const existing = availability.find(
//       (item) => item.date === formattedDate
//     );

//     if (existing) {
//       deleteExistingAvailability(existing.id);
//       return;
//     }

//     addAvailability({
//       id: crypto.randomUUID(),
//       vendorId: vendor.id,
//       date: formattedDate,
//       status: "blocked",
//       createdAt: new Date().toISOString(),
//       updatedAt: new Date().toISOString(),
//     });
//   };

//   return (
//     <section className="rounded-3xl border border-slate-200 bg-white p-7 text-gray-600 shadow-sm">
//       <h2 className="mb-6 text-2xl font-bold text-gray-700">
//         Vendor Availability
//       </h2>

//       <Calendar
//         value={value}
//         onChange={(date) => setValue(date as Date)}
//         onClickDay={handleDateClick}
//         className="border-none text-gray-600"
//         tileClassName={({ date }) => {
//           const item = availability.find(
//             (a) => a.date === formatDate(date)
//           );

//           if (!item) return "";

//         if (item.status === "blocked") {
//   return "calendar-blocked";
// }

// if (item.status === "booked") {
//   return "calendar-booked";
// }

// return "";
//         }}
//       />

//       <div className="mt-6 flex gap-6 text-sm text-gray-600">
//         <div className="flex items-center gap-2">
//           <div className="h-4 w-4 rounded bg-red-500" />
//           <span>Blocked</span>
//         </div>

//         <div className="flex items-center gap-2">
//           <div className="h-4 w-4 rounded bg-rose-600" />
//           <span>Booked</span>
//         </div>
//       </div>
//     </section>
//   );
// }

















"use client";

import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import { useAuthStore } from "@/store/authStore";
import { getVendorByUserId } from "@/services/vendor.service";
import { Availability } from "@/types/availability";

type Value = Date | null;

export default function CalendarView() {
  const [selectedDate, setSelectedDate] =
    useState<Value>(new Date());

  const [blockedDates, setBlockedDates] =
    useState<Availability[]>([]);

  const { user } = useAuthStore();

  const vendor = user
    ? getVendorByUserId(user._id)
    : null;

  useEffect(() => {
    const data =
      localStorage.getItem("availability");

    if (data) {
      setBlockedDates(JSON.parse(data));
    }
  }, []);

  if (!vendor) {
    return null;
  }

  const formatDate = (date: Date) => {
    const year = date.getFullYear();
    const month = String(
      date.getMonth() + 1
    ).padStart(2, "0");
    const day = String(
      date.getDate()
    ).padStart(2, "0");

    return `${year}-${month}-${day}`;
  };

  const handleClick = (date: Date) => {
    setSelectedDate(date);

    const formatted = formatDate(date);

    const exists = blockedDates.find(
      (item) =>
        item.vendorId === vendor.id &&
        item.date === formatted
    );

    let updated: Availability[];

    if (exists) {
      updated = blockedDates.filter(
        (item) =>
          !(
            item.vendorId === vendor.id &&
            item.date === formatted
          )
      );
    } else {
      updated = [
        ...blockedDates,
        {
          id: crypto.randomUUID(),

          vendorId: vendor.id,

          date: formatted,

          status: "blocked",

          createdAt:
            new Date().toISOString(),

          updatedAt:
            new Date().toISOString(),
        },
      ];
    }

    setBlockedDates(updated);

    localStorage.setItem(
      "availability",
      JSON.stringify(updated)
    );
  };

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
      <h2 className="mb-6 text-2xl font-bold text-gray-800">
        Vendor Calendar
      </h2>

      <Calendar
        value={selectedDate}
        onChange={(value) =>
          setSelectedDate(value as Date)
        }
        onClickDay={handleClick}
        tileClassName={({ date }) => {
          const formatted =
            formatDate(date);

          const blocked =
            blockedDates.some(
              (item) =>
                item.vendorId ===
                  vendor.id &&
                item.date ===
                  formatted &&
                item.status ===
                  "blocked"
            );

          if (blocked) {
            return "calendar-blocked";
          }

          return "";
        }}
      />

      <div className="mt-6 rounded-xl bg-slate-100 p-4">
        <p className="text-sm text-slate-500">
          Selected Date
        </p>

        <p className="mt-1 text-lg font-semibold text-slate-800">
          {selectedDate
            ? selectedDate.toDateString()
            : "None"}
        </p>
      </div>
    </section>
  );
}