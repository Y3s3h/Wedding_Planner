import { LucideIcon } from "lucide-react";

interface PlanningCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  number: number;
}

export default function PlanningCard({
  icon: Icon,
  title,
  description,
  number,
}: PlanningCardProps) {
  return (
    <div
      className="
      group
      relative
      overflow-hidden
      rounded-[30px]
      border
      border-gray-200
      bg-white
      p-8
      shadow-md
      transition-all
      duration-500
      hover:-translate-y-2
      hover:border-rose-300
      hover:shadow-2xl
      "
    >
      {/* Step Number */}

      <div className="absolute right-6 top-6 text-6xl font-bold text-rose-100 transition group-hover:text-rose-200">
        {number}
      </div>

      {/* Icon */}

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

      <h3 className="mt-8 text-2xl font-bold text-gray-900">
        {title}
      </h3>

      <p className="mt-4 leading-8 text-gray-600">
        {description}
      </p>
    </div>
  );
}