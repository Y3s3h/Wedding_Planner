import BookingHero from "@/components/vendor/bookings/BookingHero";
import BookingStats from "@/components/vendor/bookings/BookingStats";
import BookingFilters from "@/components/vendor/bookings/BookingFilters";
import BookingTable from "@/components/vendor/bookings/BookingTable";
import BookingDetailsCard from "@/components/vendor/bookings/BookingDetailsCard";

export default function VendorBookingsPage() {
  return (
    <div className="space-y-8">

      <BookingHero />

      <BookingStats />

      <BookingFilters />

      <BookingTable />

      <BookingDetailsCard />

    </div>
  );
}