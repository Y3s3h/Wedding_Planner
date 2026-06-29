"use client";

import ReviewCard from "./ReviewCard";

import { reviews } from "@/data/reviews";

export default function ReviewGrid() {
  return (
    <section className="space-y-5">
      {reviews.map((review) => (
        <ReviewCard
         key={review.id}
        name={review.customerName}
          comment={review.comment}
        />
      ))}
    </section>
  );
}