"use client";

import VendorHero from "@/components/vendor/hero/VendorHero";
import StatsCard from "@/components/vendor/cards/StatsCard";
import QuickActionCard from "@/components/vendor/cards/QuickActionCard";

import PerformanceSection from "@/components/vendor/dashboard/PerformanceSection";
import RevenueOverview from "@/components/vendor/dashboard/RevenueOverview";
import UpcomingBookings from "@/components/vendor/dashboard/UpcomingBookings";
import RecentReviews from "@/components/vendor/dashboard/RecentReviews";

import {
  CalendarCheck2,
  Wallet,
  Star,
  Users,
  BriefcaseBusiness,
  Images,
  CalendarDays,
  MessageCircle,
} from "lucide-react";

export default function VendorDashboardPage() {
  return (
    <div className="space-y-8">

      <VendorHero />

      <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

        <StatsCard
          title="Bookings"
          value="18"
          subtitle="This Month"
          icon={CalendarCheck2}
        />

        <StatsCard
          title="Revenue"
          value="₹4.8L"
          subtitle="Monthly Earnings"
          icon={Wallet}
        />

        <StatsCard
          title="Rating"
          value="4.9"
          subtitle="Customer Reviews"
          icon={Star}
        />

        <StatsCard
          title="Customers"
          value="120"
          subtitle="Total Clients"
          icon={Users}
        />

      </section>

      <section>

        <div className="mb-6">

          <h2 className="text-2xl font-bold text-slate-900">
            Quick Actions
          </h2>

          <p className="mt-1 text-slate-500">
            Manage your business efficiently.
          </p>

        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          <QuickActionCard
            title="Services"
            description="Manage your wedding services."
            href="/vendor/services"
            icon={BriefcaseBusiness}
          />

          <QuickActionCard
            title="Portfolio"
            description="Upload photos and videos."
            href="/vendor/portfolio"
            icon={Images}
          />

          <QuickActionCard
            title="Calendar"
            description="Check your availability."
            href="/vendor/calendar"
            icon={CalendarDays}
          />

          <QuickActionCard
            title="Messages"
            description="Talk with customers."
            href="/vendor/messages"
            icon={MessageCircle}
          />

        </div>

      </section>

      <PerformanceSection />

      <section className="grid gap-6 xl:grid-cols-2">

        <UpcomingBookings />

        <RevenueOverview />

      </section>

      <RecentReviews />

    </div>
  );
}