import { Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Priya Sharma",
    rating: 5,
    date: "12 May 2026",
    review:
      "Everything was perfectly managed. The venue looked magical and the staff was extremely professional.",
  },
  {
    id: 2,
    name: "Rahul Verma",
    rating: 5,
    date: "28 April 2026",
    review:
      "One of the best wedding venues we visited. Highly recommended for destination weddings.",
  },
  {
    id: 3,
    name: "Sneha Kapoor",
    rating: 4,
    date: "15 March 2026",
    review:
      "Beautiful property with amazing decoration and food. Worth every penny.",
  },
];

export default function VendorReviews() {
  return (
    <section className="rounded-3xl bg-white p-8 shadow-sm">

      <div className="flex items-center justify-between">

        <div>

          <h2 className="text-3xl font-bold text-gray-900">
            Customer Reviews
          </h2>

          <p className="mt-2 text-gray-500">
            Hear what couples say about this vendor.
          </p>

        </div>

        <button className="rounded-xl bg-rose-500 px-5 py-3 font-semibold text-white transition hover:bg-rose-600">
          Write Review
        </button>

      </div>

      {/* Rating Summary */}

      <div className="mt-10 flex flex-col gap-6 rounded-2xl bg-rose-50 p-6 md:flex-row md:items-center md:justify-between">

        <div>

          <h3 className="text-5xl font-bold text-gray-900">
            4.9
          </h3>

          <div className="mt-2 flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={22}
                fill="currentColor"
              />
            ))}
          </div>

          <p className="mt-2 text-gray-500">
            Based on 250 Reviews
          </p>

        </div>

        <div className="space-y-3">

          {[5, 4, 3, 2, 1].map((star) => (
            <div
              key={star}
              className="flex items-center gap-4"
            >
              <span className="w-8 text-sm font-medium">
                {star}★
              </span>

              <div className="h-2 w-48 overflow-hidden rounded-full bg-gray-200">
                <div
                  className="h-full rounded-full bg-yellow-400"
                  style={{
                    width:
                      star === 5
                        ? "85%"
                        : star === 4
                        ? "10%"
                        : star === 3
                        ? "3%"
                        : "1%",
                  }}
                />
              </div>

            </div>
          ))}

        </div>

      </div>

      {/* Reviews */}

      <div className="mt-10 space-y-6">

        {reviews.map((review) => (
          <div
            key={review.id}
            className="rounded-2xl border border-gray-200 p-6"
          >
            <div className="flex items-center justify-between">

              <div>

                <h4 className="font-semibold text-gray-900">
                  {review.name}
                </h4>

                <p className="text-sm text-gray-500">
                  {review.date}
                </p>

              </div>

              <div className="flex text-yellow-400">

                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    fill="currentColor"
                  />
                ))}

              </div>

            </div>

            <p className="mt-4 leading-7 text-gray-600">
              {review.review}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
}