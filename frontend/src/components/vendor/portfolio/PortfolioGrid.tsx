"use client";

import { useEffect } from "react";

import PortfolioCard from "./PortfolioCard";

import { useAuthStore } from "@/store/authStore";
import { usePortfolioStore } from "@/store/portfolioStore";

import { getVendorByUserId } from "@/services/vendor.service";

interface PortfolioGridProps {
  onEdit: () => void;
}

export default function PortfolioGrid({
  onEdit,
}: PortfolioGridProps) {
  const { user } = useAuthStore();

  const {
    portfolio,
    loadVendorPortfolio,
    setSelectedPortfolio,
    deletePortfolio,
  } = usePortfolioStore();

  useEffect(() => {
    if (!user) return;

    const vendor = getVendorByUserId(user._id);

    if (!vendor) return;

    loadVendorPortfolio(vendor.id);
  }, [user, loadVendorPortfolio]);

  if (portfolio.length === 0) {
    return (
      <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-12 text-center">

        <h3 className="text-2xl font-bold text-slate-900">
          No Portfolio Yet
        </h3>

        <p className="mt-3 text-slate-500">
          Upload your first portfolio image.
        </p>

      </div>
    );
  }

  return (
    <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

      {portfolio.map((item) => (
        <PortfolioCard
          key={item.id}
          title={item.title}
          image={item.image}
          category={item.category}
          onEdit={() => {
            setSelectedPortfolio(item);
            onEdit();
          }}
          onDelete={() =>
            deletePortfolio(item.id)
          }
        />
      ))}

    </section>
  );
}