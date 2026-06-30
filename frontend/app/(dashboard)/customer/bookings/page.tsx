// import BookingHero from "@/components/bookings/BookingHero";
// import BookingSummary from "@/components/bookings/BookingSummary";
// import BookingTabs from "@/components/bookings/BookingTabs";
// import BookingFilters from "@/components/bookings/BookingFilters";
// import BookingCard from "@/components/bookings/BookingCard";

// export default function CustomerBookingsPage() {
//   return (
//     <div className="space-y-8">

//       <BookingHero />

//       <BookingSummary />

//       <BookingTabs />

//       <BookingFilters />

//       <div className="space-y-6">

//         <BookingCard />

//         <BookingCard />

//         <BookingCard />

//       </div>

//     </div>
//   );
// }

"use client";

import { useEffect } from "react";

import BookingHero from "@/components/bookings/BookingHero";
import BookingSummary from "@/components/bookings/BookingSummary";
import BookingTabs from "@/components/bookings/BookingTabs";
import BookingFilters from "@/components/bookings/BookingFilters";
import BookingCard from "@/components/bookings/BookingCard";

import { useAuthStore } from "@/store/authStore";
import { useBookingStore } from "@/store/bookingStore";

export default function CustomerBookingsPage() {
  const { user } = useAuthStore();

  const {
    bookings,
    loadCustomerBookings,
  } = useBookingStore();

  useEffect(() => {
    if (user) {
      loadCustomerBookings(user._id);
    }
  }, [user, loadCustomerBookings]);

  return (
    <div className="space-y-8">
      <BookingHero />

      <BookingSummary />

      <BookingTabs />

      <BookingFilters />

      <div className="space-y-6">
        {bookings.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-gray-300 bg-white py-20 text-center">
            <h2 className="text-2xl font-bold text-gray-700">
              No Bookings Yet
            </h2>

            <p className="mt-3 text-gray-500">
              Book your first wedding vendor to see it here.
            </p>
          </div>
        ) : (
          bookings.map((booking) => (
            <BookingCard
              key={booking.id}
              booking={booking}
            />
          ))
        )}
      </div>
    </div>
  );
}