"use client";

import {
  CalendarClock,
  ArrowRight,
} from "lucide-react";

export interface UpcomingTask {
  id: string;
  title: string;
  dueDate: string;
}

interface UpcomingTasksProps {
  tasks: UpcomingTask[];
}

export default function UpcomingTasks({
  tasks,
}: UpcomingTasksProps) {
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

      {tasks.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-gray-200 py-10 text-center text-gray-500">
          No upcoming tasks.
        </div>
      ) : (
        <div className="space-y-4">
          {tasks.map((task) => (
            <div
              key={task.id}
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
                    {task.title}
                  </h3>

                  <p className="mt-1 text-sm text-gray-500">
                    {new Date(task.dueDate).toLocaleDateString(
                      "en-GB",
                      {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      }
                    )}
                  </p>
                </div>
              </div>

              {/* <button className="rounded-xl bg-rose-500 p-3 text-white transition hover:bg-rose-600">
                <ArrowRight size={18} />
              </button> */}
            </div>
          ))}
        </div>
      )}
    </section>
  );
}