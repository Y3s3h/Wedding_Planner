"use client";

import { Star } from "lucide-react";

interface Props {
  name: string;
  comment: string;
}

export default function ReviewCard({
  name,
  comment,
}: Props) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold text-gray-800">
          {name}
        </h3>

        <div className="flex text-yellow-500">
          {[1, 2, 3, 4, 5].map((i) => (
            <Star
              key={i}
              size={16}
              fill="currentColor"
            />
          ))}
        </div>
      </div>

      <p className="mt-4 text-gray-500 leading-relaxed">
        {comment}
      </p>

      <button className="mt-6 rounded-xl bg-orange-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-orange-600">
        Reply
      </button>
    </div>
  );
}