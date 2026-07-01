import { Review } from "@/types/review";

export const reviews: Review[] = [
  {
    id: "REV001",

    bookingId: "BOOK001",

    customerId: "CUS001",

    vendorId: 1,

    customerName: "Rahul Sharma",

    customerImage: "",

    vendorName: "Royal Photography",

    rating: 5,

    comment:
      "Amazing service! The team captured every special moment beautifully.",

    createdAt: "2026-08-02T10:00:00.000Z",

    updatedAt: "2026-08-02T10:00:00.000Z",
  },

  {
    id: "REV002",

    bookingId: "BOOK002",

    customerId: "CUS002",

    vendorId: 1,

    customerName: "Priya Singh",

    customerImage: "",

    vendorName: "Royal Photography",

    rating: 4,

    comment:
      "Professional team and timely delivery of photos.",

    createdAt: "2026-08-08T14:30:00.000Z",

    updatedAt: "2026-08-08T14:30:00.000Z",
  },

  {
    id: "REV003",

    bookingId: "BOOK003",

    customerId: "CUS003",

    vendorId: 2,

    customerName: "Aman Verma",

    customerImage: "",

    vendorName: "Dream Decor",

    rating: 5,

    comment:
      "Decoration was beyond our expectations.",

    createdAt: "2026-08-10T18:15:00.000Z",

    updatedAt: "2026-08-10T18:15:00.000Z",
  },
];

// All reviews
export const getReviews = () => reviews;

// Review by ID
export const getReviewById = (id: string) =>
  reviews.find((review) => review.id === id);

// Vendor reviews
export const getVendorReviews = (vendorId: number) =>
  reviews.filter(
    (review) => review.vendorId === vendorId
  );

// Customer reviews
export const getCustomerReviews = (
  customerId: string
) =>
  reviews.filter(
    (review) =>
      review.customerId === customerId
  );