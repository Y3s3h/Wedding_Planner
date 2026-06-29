import {
  plannerTasks,
} from "@/data/planner";

import {
  wishlist,
} from "@/data/wishlist";

class CustomerService {

  getPlannerTasks() {
    return plannerTasks;
  }

  getWishlist() {
    return wishlist;
  }

}

export const customerService =
  new CustomerService();