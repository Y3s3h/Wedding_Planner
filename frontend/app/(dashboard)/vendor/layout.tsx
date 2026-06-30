import { ReactNode } from "react";
import DashboardLayout from "@/components/vendor/layout/DashboardLayout";
import ProtectedRoute from "@/components/auth/ProtectedRoute";

interface VendorLayoutProps {
  children: ReactNode;
}

export default function VendorLayout({
  children,
}: VendorLayoutProps) {
  return (
       <ProtectedRoute role="vendor">
    <DashboardLayout>
      {children}
    </DashboardLayout>
    </ProtectedRoute>
  );
}