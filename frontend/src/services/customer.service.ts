import {
  plannerTasks,
} from "@/data/planner";

class CustomerService {
  getPlannerTasks() {
    return plannerTasks;
  }
}

export const customerService =
  new CustomerService();