"use client";

import {
  Building2,
  Camera,
  UtensilsCrossed,
  Flower2,
  Music4,
} from "lucide-react";

const categories = [
  {
    icon: Building2,
    title: "Venue",
    amount: "₹2,50,000",
    progress: 80,
    color: "bg-indigo-500",
  },
  {
    icon: Camera,
    title: "Photography",
    amount: "₹85,000",
    progress: 55,
    color: "bg-blue-500",
  },
  {
    icon: UtensilsCrossed,
    title: "Catering",
    amount: "₹1,20,000",
    progress: 70,
    color: "bg-green-500",
  },
  {
    icon: Flower2,
    title: "Decoration",
    amount: "₹60,000",
    progress: 45,
    color: "bg-pink-500",
  },
  {
    icon: Music4,
    title: "Entertainment",
    amount: "₹35,000",
    progress: 25,
    color: "bg-yellow-500",
  },
];

export default function ExpenseCategories() {
  return (
    <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">

      <h2 className="text-xl font-bold text-gray-900">
        Categories
      </h2>

      <div className="mt-6 space-y-6">

        {categories.map((item) => {

          const Icon = item.icon;

          return (
            <div key={item.title}>

              <div className="mb-2 flex items-center justify-between">

                <div className="flex items-center gap-3">

                  <div className="rounded-xl bg-gray-100 p-2 text-gray-700">

                    <Icon
                      size={18}
                      className="text-gray-700"
                    />

                  </div>

                  <span className="font-medium text-gray-700">
                    {item.title}
                  </span>

                </div>

                <span className="font-semibold text-rose-500">
                  {item.amount}
                </span>

              </div>

              <div className="h-2 rounded-full bg-gray-100">

                <div
                  style={{
                    width: `${item.progress}%`,
                  }}
                  className={`h-2 rounded-full ${item.color}`}
                />

              </div>

            </div>
          );

        })}

      </div>

    </section>
  );
}