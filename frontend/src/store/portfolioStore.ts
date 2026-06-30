import { create } from "zustand";

import { Portfolio } from "@/types/portfolio";

import {
  getPortfolio,
  createPortfolio,
  updatePortfolio,
  deletePortfolio,
  getVendorPortfolio,
} from "@/services/portfolio.service";

interface PortfolioStore {
  portfolio: Portfolio[];

  selectedPortfolio: Portfolio | null;

  loadPortfolio: () => void;

  loadVendorPortfolio: (
    vendorId: number
  ) => void;

  setSelectedPortfolio: (
    item: Portfolio | null
  ) => void;

  addPortfolio: (
    item: Portfolio
  ) => void;

  updateExistingPortfolio: (
    item: Portfolio
  ) => void;

  deletePortfolio: (
    id: string
  ) => void;
}

export const usePortfolioStore =
  create<PortfolioStore>((set) => ({
    portfolio: [],

    selectedPortfolio: null,

    loadPortfolio: () => {
      set({
        portfolio: getPortfolio(),
      });
    },

    loadVendorPortfolio: (
      vendorId
    ) => {
      set({
        portfolio:
          getVendorPortfolio(vendorId),
      });
    },

    setSelectedPortfolio: (
      item
    ) => {
      set({
        selectedPortfolio: item,
      });
    },

    addPortfolio: (item) => {
      createPortfolio(item);

      set({
        portfolio: getPortfolio(),
      });
    },

    updateExistingPortfolio: (
      item
    ) => {
      updatePortfolio(item);

      set({
        portfolio: getPortfolio(),
      });
    },

    deletePortfolio: (
      id
    ) => {
      deletePortfolio(id);

      set({
        portfolio: getPortfolio(),
      });
    },
  }));