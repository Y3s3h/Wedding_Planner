"use client";

import {
  CalendarDays,
  Heart,
  Eye,
  Star,
} from "lucide-react";

const activities = [
  {
    title: "Wedding Venue Booked",
    time: "2 hours ago",
    icon: CalendarDays,
  },
  {
    title: "Added Photographer to Wishlist",
    time: "Yesterday",
    icon: Heart,
  },
  {
    title: "Viewed Royal Palace Jaipur",
    time: "2 days ago",
    icon: Eye,
  },
  {
    title: "Reviewed Bliss Photography",
    time: "Last week",
    icon: Star,
  },
];

export default function RecentActivity() {
  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">

      <h2 className="text-3xl font-bold text-gray-900">
        Recent Activity
      </h2>

      <p className="mt-2 text-gray-500">
        Your latest wedding planning updates.
      </p>

      <div className="mt-8 space-y-5">

        {activities.map((item) => {

          const Icon = item.icon;

          return (

            <div
              key={item.title}
              className="
                flex
                items-center
                gap-5
                rounded-2xl
                border
                border-gray-100
                p-5
                transition
                hover:border-rose-200
                hover:bg-rose-50
              "
            >

              <div className="rounded-2xl bg-rose-50 p-4">

                <Icon
                  size={24}
                  className="text-rose-500"
                />

              </div>

              <div>

                <h3 className="font-semibold text-gray-900">
                  {item.title}
                </h3>

                <p className="text-gray-500">
                  {item.time}
                </p>

              </div>

            </div>

          );

        })}

      </div>

    </div>
  );
}