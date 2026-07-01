"use client";

import { useMemo } from "react";

import { useReviewStore } from "@/store/reviewStore";

export default function RatingSummary() {
  const { reviews } = useReviewStore();

  const ratingData = useMemo(() => {
    const total = reviews.length;

    return [5, 4, 3, 2, 1].map((star) => {
      const count = reviews.filter(
        (review) => review.rating === star
      ).length;

      const percentage =
        total === 0
          ? 0
          : Math.round((count / total) * 100);

      return {
        star,
        count,
        percentage,
      };
    });
  }, [reviews]);

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-bold text-gray-800">
        Rating Summary
      </h2>

      <div className="mt-8 space-y-6">
        {ratingData.map((item) => (
          <div key={item.star}>
            <div className="mb-2 flex items-center justify-between">
              <span className="font-medium text-gray-700">
                {item.star} Star
              </span>

              <span className="text-sm font-semibold text-gray-600">
                {item.count} Reviews
              </span>
            </div>

            <div className="h-2 overflow-hidden rounded-full bg-slate-200">
              <div
                className="h-full rounded-full bg-orange-500 transition-all duration-500"
                style={{
                  width: `${item.percentage}%`,
                }}
              />
            </div>

            <p className="mt-1 text-right text-xs text-gray-500">
              {item.percentage}%
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}