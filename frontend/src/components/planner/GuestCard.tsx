"use client";

import { Users } from "lucide-react";

export default function GuestCard() {
  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="flex items-center gap-3">

        <div className="rounded-2xl bg-blue-100 p-3">

          <Users
            size={22}
            className="text-blue-600"
          />

        </div>

        <div>

          <h3 className="font-semibold text-gray-900">
            Guests
          </h3>

          <p className="text-sm text-gray-500">
            Invitation status
          </p>

        </div>

      </div>

      <div className="mt-8">

        <p className="text-4xl font-bold text-gray-900">
          324
        </p>

        <p className="mt-2 text-sm text-gray-500">
          Total Guests
        </p>

        <div className="mt-6 flex justify-between">

          <div>

            <p className="text-xl font-semibold text-green-600">
              210
            </p>

            <p className="text-xs text-gray-500">
              Confirmed
            </p>

          </div>

          <div>

            <p className="text-xl font-semibold text-yellow-600">
              74
            </p>

            <p className="text-xs text-gray-500">
              Pending
            </p>

          </div>

          <div>

            <p className="text-xl font-semibold text-red-500">
              40
            </p>

            <p className="text-xs text-gray-500">
              Declined
            </p>

          </div>

        </div>

      </div>
    </div>
  );
}