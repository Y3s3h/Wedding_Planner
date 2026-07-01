import { create } from "zustand";

import { Availability } from "@/types/availability";

import {
  getAvailability,
  createAvailability,
  updateAvailability,
  deleteAvailability,
  getVendorAvailability,
} from "@/services/availability.service";

interface AvailabilityStore {
  availability: Availability[];

  selectedAvailability: Availability | null;

  loadAvailability: () => void;

  loadVendorAvailability: (
    vendorId: number
  ) => void;

  setSelectedAvailability: (
    item: Availability | null
  ) => void;

  addAvailability: (
    item: Availability
  ) => void;

  updateExistingAvailability: (
    item: Availability
  ) => void;

  deleteExistingAvailability: (
    id: string
  ) => void;
}

export const useAvailabilityStore =
  create<AvailabilityStore>((set) => ({
    availability: [],

    selectedAvailability: null,

    loadAvailability: () => {
      set({
        availability: getAvailability(),
      });
    },

    loadVendorAvailability: (
      vendorId
    ) => {
      set({
        availability:
          getVendorAvailability(vendorId),
      });
    },

    setSelectedAvailability: (
      item
    ) => {
      set({
        selectedAvailability: item,
      });
    },

    addAvailability: (item) => {
      createAvailability(item);

      set({
        availability: getAvailability(),
      });
    },

    updateExistingAvailability: (
      item
    ) => {
      updateAvailability(item);

      set({
        availability: getAvailability(),
      });
    },

    deleteExistingAvailability: (
      id
    ) => {
      deleteAvailability(id);

      set({
        availability: getAvailability(),
      });
    },
  }));