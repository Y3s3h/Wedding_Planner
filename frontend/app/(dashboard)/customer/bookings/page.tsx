import BookingHero from "@/components/bookings/BookingHero";
import BookingSummary from "@/components/bookings/BookingSummary";
import BookingTabs from "@/components/bookings/BookingTabs";
import BookingFilters from "@/components/bookings/BookingFilters";
import BookingCard from "@/components/bookings/BookingCard";

export default function CustomerBookingsPage() {
  return (
    <div className="space-y-8">

      <BookingHero />

      <BookingSummary />

      <BookingTabs />

      <BookingFilters />

      <div className="space-y-6">

        <BookingCard />

        <BookingCard />

        <BookingCard />

      </div>

    </div>
  );
}