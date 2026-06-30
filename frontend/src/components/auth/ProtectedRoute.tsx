"use client";

import { ReactNode, useEffect } from "react";
import { useRouter } from "next/navigation";

import { useAuthStore } from "@/store/authStore";
import { UserRole } from "@/types/auth";

interface ProtectedRouteProps {
  children: ReactNode;
  role: UserRole;
}

export default function ProtectedRoute({
  children,
  role,
}: ProtectedRouteProps) {
  const router = useRouter();

  const {
    user,
    isAuthenticated,
    hasHydrated,
  } = useAuthStore();

  useEffect(() => {
    if (!hasHydrated) {
      return;
    }

    if (!isAuthenticated) {
      router.replace("/");
      return;
    }

    if (user?.role !== role) {
      router.replace("/");
    }
  }, [
    hasHydrated,
    isAuthenticated,
    user,
    role,
    router,
  ]);

  // Wait until Zustand Persist finishes loading
  if (!hasHydrated) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-blue-600 border-t-transparent" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  if (user?.role !== role) {
    return null;
  }

  return <>{children}</>;
}