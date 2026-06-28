import CalendarHero from "@/components/vendor/calendar/CalendarHero";
import CalendarStats from "@/components/vendor/calendar/CalendarStats";
import CalendarView from "@/components/vendor/calendar/CalendarView";
import UpcomingEvents from "@/components/vendor/calendar/UpcomingEvents";
import AvailabilityCard from "@/components/vendor/calendar/AvailabilityCard";

export default function VendorCalendarPage() {
  return (
    <div className="space-y-8">

      <CalendarHero />

      <CalendarStats />

      <section className="grid gap-6 xl:grid-cols-3">

        <div className="xl:col-span-2">

          <CalendarView />

        </div>

        <AvailabilityCard />

      </section>

      <UpcomingEvents />

    </div>
  );
}