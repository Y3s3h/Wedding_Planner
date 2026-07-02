"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  Circle,
} from "lucide-react";

export interface ChecklistTask {
  id: string;
  title: string;
  completed: boolean;
}

interface ChecklistProps {
  tasks: ChecklistTask[];
}

export default function Checklist({
  tasks,
}: ChecklistProps) {
  const completedTasks = tasks.filter(
    (task) => task.completed
  ).length;

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="
        rounded-3xl
        border
        border-gray-200
        bg-white
        p-7
        shadow-sm
      "
    >
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            Wedding Checklist
          </h2>

          <p className="mt-1 text-gray-500">
            Stay on top of every important task.
          </p>
        </div>

        <span className="rounded-full bg-rose-50 px-4 py-2 text-sm font-semibold text-rose-600">
          {completedTasks} / {tasks.length} Completed
        </span>
      </div>

      {tasks.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-gray-200 py-10 text-center text-gray-500">
          No planner tasks yet.
        </div>
      ) : (
        <div className="space-y-4">
          {tasks.map((task, index) => (
            <motion.div
              key={task.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: index * 0.05,
              }}
              className="
                flex
                items-center
                justify-between
                rounded-2xl
                border
                border-gray-100
                p-4
                transition
                hover:border-rose-200
                hover:bg-rose-50/40
              "
            >
              <div className="flex items-center gap-4">
                {task.completed ? (
                  <CheckCircle2
                    size={24}
                    className="text-green-500"
                  />
                ) : (
                  <Circle
                    size={22}
                    className="text-gray-300"
                  />
                )}

                <span
                  className={
                    task.completed
                      ? "font-medium text-gray-900"
                      : "font-medium text-gray-600"
                  }
                >
                  {task.title}
                </span>
              </div>

              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold ${
                  task.completed
                    ? "bg-green-100 text-green-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {task.completed
                  ? "Completed"
                  : "Pending"}
              </span>
            </motion.div>
          ))}
        </div>
      )}
    </motion.section>
  );
}