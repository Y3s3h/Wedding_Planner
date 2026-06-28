import BookingDetailsHero from "@/components/bookings/details/BookingDetailsHero";
import VendorInformation from "@/components/bookings/details/VendorInformation";
import BookingTimeline from "@/components/bookings/details/BookingTimeline";
import PaymentInformation from "@/components/bookings/details/PaymentInformation";
import BookingActions from "@/components/bookings/details/BookingActions";

export default function BookingDetailsPage() {
  return (
    <div className="space-y-8">

      <BookingDetailsHero />

      <section className="grid gap-6 xl:grid-cols-3">

        <div className="space-y-6 xl:col-span-2">

          <VendorInformation />

          <BookingTimeline />

        </div>

        <div className="space-y-6">

          <PaymentInformation />

          <BookingActions />

        </div>

      </section>

    </div>
  );
}