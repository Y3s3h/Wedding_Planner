"use client";

import ReviewCard from "./ReviewCard";

const reviews = [
  {
    name: "Rahul Sharma",
    comment: "Amazing experience. Highly professional team.",
  },
  {
    name: "Sneha Verma",
    comment: "Everything was managed perfectly.",
  },
  {
    name: "Aman Gupta",
    comment: "Would definitely recommend this vendor.",
  },
];

export default function ReviewGrid() {
  return (
    <section className="space-y-5">
      {reviews.map((review) => (
        <ReviewCard
          key={review.name}
          name={review.name}
          comment={review.comment}
        />
      ))}
    </section>
  );
}