import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function FeatureCard({
  icon: Icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <div
      className="
      group
      relative
      overflow-hidden
      rounded-3xl
      border
      border-rose-500/20
      bg-[#2a1617]/80
      p-6
      backdrop-blur-xl
      transition-all
      duration-500
      hover:-translate-y-2
      hover:border-rose-400
      hover:shadow-[0_0_35px_rgba(255,80,120,.35)]
      "
    >
      {/* Glow */}

      <div
        className="
        absolute
        -right-10
        -top-10
        h-32
        w-32
        rounded-full
        bg-rose-500/10
        blur-3xl
        transition
        group-hover:bg-rose-500/20
        "
      />

      {/* Icon */}

      <div
        className="
        flex
       h-14 w-14
        items-center
        justify-center
        rounded-full
        border
        border-rose-500/30
        bg-gradient-to-br
        from-rose-500
        to-pink-600
        shadow-[0_0_30px_rgba(255,70,120,.45)]
        "
      >
        <Icon
          size={24}
          className="text-white"
        />
      </div>

      {/* Title */}

      <h3 className="mt-6 text-xl font-semibold text-white">
        {title}
      </h3>

      {/* Description */}

      <p className="mt-4 leading-6 text-sm text-gray-300">
        {description}
      </p>
    </div>
  );
}