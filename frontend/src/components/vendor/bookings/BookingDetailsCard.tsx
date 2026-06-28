"use client";

import {
  CalendarDays,
  MapPin,
  Phone,
  Wallet,
} from "lucide-react";

export default function BookingDetailsCard() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">

      <h2 className="text-2xl font-bold text-slate-900">
        Booking Details
      </h2>

      <div className="mt-8 grid gap-6 md:grid-cols-2">

        <Item
          icon={<CalendarDays size={18} />}
          label="Wedding Date"
          value="12 August 2026"
        />

        <Item
          icon={<MapPin size={18} />}
          label="Venue"
          value="Royal Palace, Delhi"
        />

        <Item
          icon={<Phone size={18} />}
          label="Customer"
          value="+91 9876543210"
        />

        <Item
          icon={<Wallet size={18} />}
          label="Advance Paid"
          value="₹40,000"
        />

      </div>

      <div className="mt-8 flex gap-4">

        <button className="rounded-2xl bg-green-600 px-6 py-3 font-semibold text-white hover:bg-green-700">

          Accept Booking

        </button>

        <button className="rounded-2xl bg-red-600 px-6 py-3 font-semibold text-white hover:bg-red-700">

          Reject

        </button>

      </div>

    </section>
  );
}

function Item({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-4 text-gray-700">

      <div className="rounded-xl bg-blue-100 p-3 text-blue-700">

        {icon}

      </div>

      <div>

        <p className="text-sm text-slate-600">
          {label}
        </p>

        <p className="font-semibold text-slate-700">
          {value}
        </p>

      </div>

    </div>
  );
}