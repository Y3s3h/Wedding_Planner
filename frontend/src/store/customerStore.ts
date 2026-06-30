import { create } from "zustand";

import { PlannerTask } from "@/types/planner";

import {
  customerService,
} from "@/services/customer.service";

interface CustomerStore {
  plannerTasks: PlannerTask[];

  setPlannerTasks: (
    tasks: PlannerTask[]
  ) => void;

  addPlannerTask: (
    task: PlannerTask
  ) => void;

  updatePlannerTask: (
    task: PlannerTask
  ) => void;

  deletePlannerTask: (
    id: string
  ) => void;
}

export const useCustomerStore =
  create<CustomerStore>((set) => ({
    plannerTasks:
      customerService.getPlannerTasks(),

    setPlannerTasks: (tasks) =>
      set({
        plannerTasks: tasks,
      }),

    addPlannerTask: (task) =>
      set((state) => ({
        plannerTasks: [
          ...state.plannerTasks,
          task,
        ],
      })),

    updatePlannerTask: (task) =>
      set((state) => ({
        plannerTasks:
          state.plannerTasks.map((item) =>
            item.id === task.id
              ? task
              : item
          ),
      })),

    deletePlannerTask: (id) =>
      set((state) => ({
        plannerTasks:
          state.plannerTasks.filter(
            (item) => item.id !== id
          ),
      })),
  }));