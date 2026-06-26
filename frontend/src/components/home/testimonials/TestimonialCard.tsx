import Image from "next/image";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  city: string;
  image: string;
  review: string;
  rating: number;
}

export default function TestimonialCard({
  name,
  city,
  image,
  review,
  rating,
}: TestimonialCardProps) {
  return (
    <div
      className="
      group
      rounded-[30px]
      border
      border-gray-200
      bg-white
      p-8
      shadow-lg
      transition-all
      duration-500
      hover:-translate-y-3
      hover:shadow-2xl
      "
    >
      {/* Stars */}

      <div className="mb-6 flex gap-1">
        {Array.from({ length: rating }).map((_, index) => (
          <Star
            key={index}
            size={18}
            className="fill-yellow-400 text-yellow-400"
          />
        ))}
      </div>

      {/* Review */}

      <p className="leading-8 text-gray-600">
        "{review}"
      </p>

      {/* User */}

      <div className="mt-8 flex items-center gap-4">
        <Image
          src={image}
          alt={name}
          width={70}
          height={70}
          className="rounded-full object-cover"
        />

        <div>
          <h3 className="text-xl font-semibold text-gray-900">
            {name}
          </h3>

          <p className="text-gray-500">
            {city}
          </p>
        </div>
      </div>
    </div>
  );
}