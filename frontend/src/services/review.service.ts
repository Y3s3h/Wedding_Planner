import { Review } from "@/types/review";

const STORAGE_KEY = "reviews";

export function getReviews(): Review[] {
  if (typeof window === "undefined") {
    return [];
  }

  const data = localStorage.getItem(STORAGE_KEY);

  if (!data) {
    return [];
  }

  return JSON.parse(data);
}

export function saveReviews(
  reviews: Review[]
): void {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(reviews)
  );
}

export function createReview(
  review: Review
): void {
  const reviews = getReviews();

  reviews.push(review);

  saveReviews(reviews);
}

export function updateReview(
  updatedReview: Review
): void {
  const reviews = getReviews();

  saveReviews(
    reviews.map((review) =>
      review.id === updatedReview.id
        ? updatedReview
        : review
    )
  );
}

export function deleteReview(
  id: string
): void {
  saveReviews(
    getReviews().filter(
      (review) => review.id !== id
    )
  );
}

export function getVendorReviews(
  vendorId: number
): Review[] {
  return getReviews().filter(
    (review) => review.vendorId === vendorId
  );
}

export function getCustomerReviews(
  customerId: string
): Review[] {
  return getReviews().filter(
    (review) =>
      review.customerId === customerId
  );
}

export function getReviewByBooking(
  bookingId: string
): Review | undefined {
  return getReviews().find(
    (review) =>
      review.bookingId === bookingId
  );
}