"use client";

import { useState } from "react";

import PortfolioHero from "@/components/vendor/portfolio/PortfolioHero";
import PortfolioStats from "@/components/vendor/portfolio/PortfolioStats";
import PortfolioFilters from "@/components/vendor/portfolio/PortfolioFilters";
import PortfolioGrid from "@/components/vendor/portfolio/PortfolioGrid";
import UploadPortfolioCard from "@/components/vendor/portfolio/UploadPortfolioCard";
import AddPortfolioModal from "@/components/vendor/portfolio/AddPortfolioModal";

export default function VendorPortfolioPage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="space-y-8">

      <PortfolioHero />

      <PortfolioStats />

      <PortfolioFilters />

      <PortfolioGrid
        onEdit={() => setOpen(true)}
      />

      <UploadPortfolioCard
        onCreate={() => setOpen(true)}
      />

      <AddPortfolioModal
        open={open}
        onClose={() => setOpen(false)}
      />

    </div>
  );
}