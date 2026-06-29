"use client";

import {
  CalendarClock,
  ArrowRight,
} from "lucide-react";

import { useCustomerStore } from "@/store";
export default function UpcomingTasks() {

  const plannerTasks = useCustomerStore(
  (state) => state.plannerTasks
);
  return (
    <section className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm">

      <div className="mb-6 flex items-center justify-between">

        <div>

          <h2 className="text-2xl font-bold text-gray-900">
            Upcoming Tasks
          </h2>

          <p className="mt-1 text-gray-500">
            Your next wedding activities.
          </p>

        </div>

      </div>

      <div className="space-y-4">

       {plannerTasks.map((task) => (

          <div
            key={task.title}
            className="
              flex
              items-center
              justify-between
              rounded-2xl
              border
              border-gray-100
              p-5
              transition
              hover:border-rose-200
              hover:bg-rose-50/30
            "
          >

            <div className="flex items-center gap-4">

              <div className="rounded-2xl bg-rose-100 p-3">

                <CalendarClock
                  size={22}
                  className="text-rose-500"
                />

              </div>

              <div>

                <h3 className="font-semibold text-gray-900">
                  {task.id}
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  {task.dueDate}
                </p>

              </div>

            </div>

            <button className="rounded-xl bg-rose-500 p-3 text-white transition hover:bg-rose-600">

              <ArrowRight size={18} />

            </button>

          </div>

        ))}

      </div>

    </section>
  );
}