"use client";

import { useState } from "react";

import ServiceHero from "@/components/vendor/services/ServiceHero";
import ServiceStats from "@/components/vendor/services/ServiceStats";
import ServiceFilters from "@/components/vendor/services/ServiceFilters";
import ServiceGrid from "@/components/vendor/services/ServiceGrid";
import AddServiceCard from "@/components/vendor/services/AddServiceCard";
import AddServiceModal from "@/components/vendor/services/AddServiceModal";

export default function VendorServicesPage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="space-y-8">

      <ServiceHero />

      <ServiceStats />

      <ServiceFilters />

      <ServiceGrid
        onEdit={() => setOpen(true)}
      />

      <AddServiceCard
        onCreate={() => setOpen(true)}
      />

      <AddServiceModal
        open={open}
        onClose={() => setOpen(false)}
      />

    </div>
  );
}