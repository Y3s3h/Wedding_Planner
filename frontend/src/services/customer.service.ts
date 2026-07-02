import {
  plannerTasks,
} from "@/data/planner";

const BUDGET_KEY = "weddingBudget";

class CustomerService {
  // Planner
  getPlannerTasks() {
    return plannerTasks;
  }

  // Wedding Budget
  getWeddingBudget(): number {
    if (typeof window === "undefined") {
      return 1000000;
    }

    const budget = localStorage.getItem(BUDGET_KEY);

    if (!budget) {
      return 1000000;
    }

    return Number(budget);
  }

  saveWeddingBudget(
    budget: number
  ): void {
    localStorage.setItem(
      BUDGET_KEY,
      budget.toString()
    );
  }
}

export const customerService =
  new CustomerService();