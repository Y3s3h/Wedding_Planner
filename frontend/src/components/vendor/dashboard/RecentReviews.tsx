"use client";

const reviews = [
  {
    name: "Rahul",
    rating: "★★★★★",
    comment: "Amazing service!",
  },
  {
    name: "Priya",
    rating: "★★★★★",
    comment: "Highly recommended.",
  },
  {
    name: "Anjali",
    rating: "★★★★☆",
    comment: "Very professional.",
  },
];

export default function RecentReviews() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">

      <h2 className="text-xl font-bold text-slate-900">
        Recent Reviews
      </h2>

      <div className="mt-8 space-y-5">

        {reviews.map((review) => (

          <div
            key={review.name}
            className="rounded-2xl bg-slate-50 p-5"
          >

            <div className="flex items-center justify-between">

              <h3 className="font-semibold text-gray-700">
                {review.name}
              </h3>

              <span className="text-yellow-500">
                {review.rating}
              </span>

            </div>

            <p className="mt-3 text-sm text-slate-500">
              {review.comment}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}