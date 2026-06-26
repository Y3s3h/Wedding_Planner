import Image from "next/image";
import { Heart, ArrowRight } from "lucide-react";

interface GalleryCardProps {
  id: number;
  image: string;
  title: string;
  location: string;
}
import Link from "next/link";

export default function GalleryCard({
  id,
  image,
  title,
  location,
}: GalleryCardProps) {
  return (
   <Link
  href={`/stories/${id}`}
      className="
      group
      relative
      overflow-hidden
      rounded-[32px]
      cursor-pointer
      "
    >
      <Image
        src={image}
        alt={title}
        width={700}
        height={900}
        className="
        h-full
        w-full
        object-cover
        transition-all
        duration-700
        group-hover:scale-110
        "
      />

      {/* Overlay */}

      <div
        className="
        absolute
        inset-0
        bg-gradient-to-t
        from-black/80
        via-black/20
        to-transparent
        opacity-0
        transition-all
        duration-500
        group-hover:opacity-100
        "
      />

      {/* Content */}

      <div
        className="
        absolute
        bottom-0
        left-0
        w-full
        translate-y-10
        p-8
        text-white
        transition-all
        duration-500
        group-hover:translate-y-0
        "
      >
        <Heart
          size={26}
          className="mb-5 fill-white"
        />

        <h3 className="text-3xl font-bold">
          {title}
        </h3>

        <p className="mt-2 text-gray-200">
          {location}
        </p>

        <div className="mt-6 flex items-center gap-2 font-medium">

          View Story

          <ArrowRight size={18} />

        </div>

      </div>
    </Link>
  );
}