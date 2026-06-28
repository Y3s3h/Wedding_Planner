import { ReactNode } from "react";
import DashboardLayout from "@/components/vendor/layout/DashboardLayout";

interface VendorLayoutProps {
  children: ReactNode;
}

export default function VendorLayout({
  children,
}: VendorLayoutProps) {
  return (
    <DashboardLayout>
      {children}
    </DashboardLayout>
  );
}