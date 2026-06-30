"use client";

import { useEffect } from "react";

import BookingHero from "@/components/vendor/bookings/BookingHero";
import BookingStats from "@/components/vendor/bookings/BookingStats";
import BookingFilters from "@/components/vendor/bookings/BookingFilters";
import BookingTable from "@/components/vendor/bookings/BookingTable";
import BookingDetailsCard from "@/components/vendor/bookings/BookingDetailsCard";

import { useAuthStore } from "@/store/authStore";
import { useBookingStore } from "@/store/bookingStore";
import { getVendorByUserId } from "@/services/vendor.service";

export default function VendorBookingsPage() {
 const { user } = useAuthStore();

const { loadVendorBookings } = useBookingStore();

useEffect(() => {
  if (!user) return;

  const vendor = getVendorByUserId(user._id);

  if (!vendor) return;

  loadVendorBookings(vendor.id);
}, [user, loadVendorBookings]);

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