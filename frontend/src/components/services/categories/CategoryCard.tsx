import Link from "next/link";
import { ArrowRight, LucideIcon } from "lucide-react";

interface CategoryCardProps {
  title: string;
  vendors: string;
  href: string;
  icon: LucideIcon;
}

export default function CategoryCard({
  title,
  vendors,
  href,
  icon: Icon,
}: CategoryCardProps) {
  return (
    <Link
      href={href}
      className="
        group
        rounded-3xl
        border
        border-rose-100
        bg-white
        p-7
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-rose-300
        hover:shadow-xl
      "
    >
      <div
        className="
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-2xl
          bg-gradient-to-br
          from-rose-500
          to-pink-500
          text-white
          shadow-lg
        "
      >
        <Icon size={30} />
      </div>

      <h3 className="mt-6 text-xl font-bold text-gray-900">
        {title}
      </h3>

      <p className="mt-2 text-gray-500">
        {vendors}
      </p>

      <div className="mt-6 flex items-center gap-2 font-semibold text-rose-500">

        Explore

        <ArrowRight
          size={18}
          className="transition-transform group-hover:translate-x-1"
        />

      </div>
    </Link>
  );
}