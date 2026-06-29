import { Service } from "@/types/service";

export const services: Service[] = [
  {
    id: "SER001",

    vendorId: "VEN001",

    name: "Wedding Photography",

    category: "Photography",

    description:
      "Premium wedding photography package.",

    price: 45000,

    rating: 4.9,

    reviews: 128,

    image: "/images/services/photo.jpg",

    status: "active",

    createdAt: "2026-08-01",

    updatedAt: "2026-08-01",
  },

  {
    id: "SER002",

    vendorId: "VEN002",

    name: "Luxury Decoration",

    category: "Decoration",

    description:
      "Luxury floral decoration for weddings.",

    price: 80000,

    rating: 4.8,

    reviews: 95,

    image: "/images/services/decor.jpg",

    status: "active",

    createdAt: "2026-08-01",

    updatedAt: "2026-08-01",
  },

  {
    id: "SER003",

    vendorId: "VEN003",

    name: "Premium Catering",

    category: "Catering",

    description:
      "Multi-cuisine catering service.",

    price: 150000,

    rating: 5.0,

    reviews: 76,

    image: "/images/services/catering.jpg",

    status: "active",

    createdAt: "2026-08-01",

    updatedAt: "2026-08-01",
  },
];

// All services
export const getServices = () => services;

// Single service
export const getServiceById = (id: string) =>
  services.find((service) => service.id === id);

// Vendor services
export const getVendorServices = (vendorId: string) =>
  services.filter(
    (service) => service.vendorId === vendorId
  );

// Active services
export const getActiveServices = () =>
  services.filter(
    (service) => service.status === "active"
  );

// Category services
export const getServicesByCategory = (
  category: string
) =>
  services.filter(
    (service) => service.category === category
  );