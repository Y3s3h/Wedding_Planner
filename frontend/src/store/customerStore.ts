import { create } from "zustand";

import { PlannerTask } from "@/types/planner";
import { WishlistItem } from "@/types/wishlist";

import { plannerTasks as initialPlannerTasks } from "@/data/planner";
import { wishlist as initialWishlist } from "@/data/wishlist";

interface CustomerStore {
  plannerTasks: PlannerTask[];

  wishlist: WishlistItem[];

  setPlannerTasks: (tasks: PlannerTask[]) => void;

  setWishlist: (wishlist: WishlistItem[]) => void;

  addPlannerTask: (task: PlannerTask) => void;

  updatePlannerTask: (task: PlannerTask) => void;

  deletePlannerTask: (id: string) => void;

  addWishlistItem: (item: WishlistItem) => void;

  removeWishlistItem: (id: string) => void;
}

export const useCustomerStore =
  create<CustomerStore>((set) => ({
    plannerTasks: initialPlannerTasks,

    wishlist: initialWishlist,

    setPlannerTasks: (tasks) =>
      set({
        plannerTasks: tasks,
      }),

    setWishlist: (wishlist) =>
      set({
        wishlist,
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

    addWishlistItem: (item) =>
      set((state) => ({
        wishlist: [
          ...state.wishlist,
          item,
        ],
      })),

    removeWishlistItem: (id) =>
      set((state) => ({
        wishlist:
          state.wishlist.filter(
            (item) => item.id !== id
          ),
      })),
  }));