"use client";

import {
  Building2,
  CheckCircle2,
} from "lucide-react";

const vendors = [
  "Venue",
  "Photography",
  "Decorator",
  "Catering",
];

export default function VendorStatus() {
  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">

      <div className="mb-6 flex items-center gap-3">

        <div className="rounded-2xl bg-rose-100 p-3">

          <Building2
            className="text-rose-600"
            size={22}
          />

        </div>

        <div>

          <h3 className="font-semibold text-gray-900">
            Vendors
          </h3>

          <p className="text-sm text-gray-500">
            Booking status
          </p>

        </div>

      </div>

      <div className="space-y-4">

        {vendors.map((vendor) => (

          <div
            key={vendor}
            className="flex items-center justify-between"
          >

            <span className="text-gray-700">
              {vendor}
            </span>

            <CheckCircle2
              size={20}
              className="text-green-500"
            />

          </div>

        ))}

      </div>

    </div>
  );
}