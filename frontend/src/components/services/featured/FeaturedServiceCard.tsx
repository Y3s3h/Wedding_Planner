import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface FeaturedServiceCardProps {
  title: string;
  description: string;
  image: string;
  vendors: string;
}

export default function FeaturedServiceCard({
  title,
  description,
  image,
  vendors,
}: FeaturedServiceCardProps) {
  return (
    <div
      className="
        group
        overflow-hidden
        rounded-[32px]
        bg-white
        shadow-lg
        transition-all
        duration-500
        hover:-translate-y-2
        hover:shadow-2xl
      "
    >
      <div className="relative h-72 overflow-hidden">

        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

        <div className="absolute bottom-6 left-6">

          <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md">
            {vendors}
          </span>

        </div>

      </div>

      <div className="p-8">

        <h3 className="text-2xl font-bold text-gray-900">
          {title}
        </h3>

        <p className="mt-4 leading-8 text-gray-600">
          {description}
        </p>

        <Link
          href="/vendors"
          className="mt-6 inline-flex items-center gap-2 font-semibold text-rose-500"
        >
          Explore Vendors

          <ArrowRight
            size={18}
            className="transition group-hover:translate-x-1"
          />

        </Link>

      </div>

    </div>
  );
}