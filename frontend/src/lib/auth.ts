import { UserRole } from "@/types/auth";

export function getDashboardRoute(
  role: UserRole
) {
  switch (role) {
    case "customer":
      return "/customer";

    case "vendor":
      return "/vendor";

    case "admin":
      return "/admin";

    default:
      return "/";
  }
}