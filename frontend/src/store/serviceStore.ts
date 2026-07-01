import { create } from "zustand";

import { Service } from "@/types/service";

import {
  getServices,
  createService,
  updateService,
  deleteService,
  getVendorServices,
} from "@/services/service.service";

interface ServiceStore {
  services: Service[];

  selectedService: Service | null;

  loadServices: () => void;

  loadVendorServices: (
    vendorId: number
  ) => void;

  setSelectedService: (
    service: Service | null
  ) => void;

  addService: (
    service: Service
  ) => void;

  updateExistingService: (
    service: Service
  ) => void;

  deleteExistingService: (
    id: string
  ) => void;
}

export const useServiceStore =
  create<ServiceStore>((set) => ({
    services: [],

    selectedService: null,

    loadServices: () => {
      set({
        services: getServices(),
      });
    },

    loadVendorServices: (
      vendorId
    ) => {
      set({
        services:
          getVendorServices(vendorId),
      });
    },

    setSelectedService: (
      service
    ) => {
      set({
        selectedService: service,
      });
    },

    addService: (service) => {
      createService(service);

      set({
        services: getServices(),
      });
    },

    updateExistingService: (
      service
    ) => {
      updateService(service);

      set({
        services: getServices(),
      });
    },

    deleteExistingService: (
      id
    ) => {
      deleteService(id);

      set({
        services: getServices(),
      });
    },
  }));