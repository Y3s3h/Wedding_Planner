import { ReactNode } from "react";
import DashboardLayout from "@/components/dashboard/layout/DashboardLayout";

interface CustomerLayoutProps {
  children: ReactNode;
}

export default function CustomerLayout({
  children,
}: CustomerLayoutProps) {
  return (
    <DashboardLayout>
      {children}
    </DashboardLayout>
  );
}

