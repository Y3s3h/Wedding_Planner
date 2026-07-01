"use client";

import { useEffect } from "react";

import ServiceCard from "./ServiceCard";

import { useAuthStore } from "@/store/authStore";
import { useServiceStore } from "@/store/serviceStore";

import { getVendorByUserId } from "@/services/vendor.service";

interface ServiceGridProps {
  onEdit: () => void;
}

export default function ServiceGrid({
  onEdit,
}: ServiceGridProps) {
  const { user } = useAuthStore();

  const {
    services,
    loadVendorServices,
  } = useServiceStore();

  useEffect(() => {
    if (!user) return;

    const vendor = getVendorByUserId(user._id);

    if (!vendor) return;

    loadVendorServices(vendor.id);
  }, [user, loadVendorServices]);

  if (services.length === 0) {
    return (
      <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-12 text-center">

        <h3 className="text-2xl font-bold text-slate-900">
          No Services Yet
        </h3>

        <p className="mt-3 text-slate-500">
          Start by adding your first wedding service.
        </p>

      </div>
    );
  }

  return (
    <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

      {services.map((service) => (
        <ServiceCard
          key={service.id}
          service={service}
          onEdit={onEdit}
        />
      ))}

    </section>
  );
}