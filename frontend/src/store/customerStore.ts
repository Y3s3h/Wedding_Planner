import { create } from "zustand";

import { PlannerTask } from "@/types/planner";

import {
  customerService,
} from "@/services/customer.service";

interface CustomerStore {
  // Budget
  weddingBudget: number;

  setWeddingBudget: (
    amount: number
  ) => void;

  reset: () => void;

  // Planner
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
    // Budget
    weddingBudget:
      customerService.getWeddingBudget(),

    setWeddingBudget: (amount) => {
      customerService.saveWeddingBudget(
        amount
      );

      set({
        weddingBudget: amount,
      });
    },

    reset: () => {
      customerService.saveWeddingBudget(0);

      set({
        weddingBudget: 0,
        plannerTasks: [],
      });
    },

    // Planner
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