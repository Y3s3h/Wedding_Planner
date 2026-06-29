import { Review } from "@/types/review";

export const reviews: Review[] = [
  {
    id: "REV001",

    customerId: "CUS001",

    vendorId: "VEN001",

    customerName: "Rahul Sharma",

    vendorName: "Royal Photography",

    rating: 5,

    comment:
      "Amazing service! The team captured every special moment beautifully.",

    createdAt: "2026-08-02",
  },

  {
    id: "REV002",

    customerId: "CUS002",

    vendorId: "VEN001",

    customerName: "Priya Singh",

    vendorName: "Royal Photography",

    rating: 4,

    comment:
      "Professional team and timely delivery of photos.",

    createdAt: "2026-08-08",
  },

  {
    id: "REV003",

    customerId: "CUS003",

    vendorId: "VEN002",

    customerName: "Aman Verma",

    vendorName: "Dream Decor",

    rating: 5,

    comment:
      "Decoration was beyond our expectations.",

    createdAt: "2026-08-10",
  },
];

// All reviews
export const getReviews = () => reviews;

// Review by id
export const getReviewById = (id: string) =>
  reviews.find((review) => review.id === id);

// Vendor reviews
export const getVendorReviews = (vendorId: string) =>
  reviews.filter(
    (review) => review.vendorId === vendorId
  );

// Customer reviews
export const getCustomerReviews = (customerId: string) =>
  reviews.filter(
    (review) => review.customerId === customerId
  );