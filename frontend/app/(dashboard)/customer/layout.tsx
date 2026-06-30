import { ReactNode } from "react";
import DashboardLayout from "@/components/dashboard/layout/DashboardLayout";
import ProtectedRoute from "@/components/auth/ProtectedRoute";

interface CustomerLayoutProps {
  children: ReactNode;
}

export default function CustomerLayout({
  children,
}: CustomerLayoutProps) {
  return (
     <ProtectedRoute role="customer">
    <DashboardLayout>
      {children}
    </DashboardLayout>
    </ProtectedRoute>
  );
}

