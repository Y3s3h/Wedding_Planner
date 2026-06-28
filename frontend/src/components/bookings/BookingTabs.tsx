"use client";

import { useState } from "react";

const tabs = [
  "All",
  "Upcoming",
  "Pending",
  "Completed",
  "Cancelled",
];

export default function BookingTabs() {
  const [activeTab, setActiveTab] = useState("All");

  return (
    <div className="overflow-x-auto">
      <div className="inline-flex rounded-2xl border border-gray-200 bg-white p-2 shadow-sm">

        {tabs.map((tab) => (

          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`
              rounded-xl
              px-6
              py-3
              text-sm
              font-semibold
              transition-all
              duration-300

              ${
                activeTab === tab
                  ? "bg-gradient-to-r from-indigo-500 to-violet-500 text-white shadow-md"
                  : "text-gray-600 hover:bg-gray-100"
              }
            `}
          >
            {tab}
          </button>

        ))}

      </div>
    </div>
  );
}