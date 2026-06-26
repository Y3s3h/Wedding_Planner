import { LucideIcon } from "lucide-react";

interface MissionCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function MissionCard({
  icon: Icon,
  title,
  description,
}: MissionCardProps) {
  return (
    <div
      className="
      group
      relative
      overflow-hidden
      rounded-[32px]
      border
      border-rose-100
      bg-white
      p-10
      shadow-lg
      transition-all
      duration-500
      hover:-translate-y-2
      hover:border-rose-300
      hover:shadow-[0_30px_80px_rgba(255,70,120,.18)]
      "
    >
      {/* Glow */}

      <div
        className="
        absolute
        -right-16
        -top-16
        h-48
        w-48
        rounded-full
        bg-rose-500/10
        blur-[90px]
        transition
        group-hover:bg-rose-500/20
        "
      />

      <div
        className="
        flex
        h-20
        w-20
        items-center
        justify-center
        rounded-3xl
        bg-gradient-to-br
        from-rose-500
        to-pink-500
        text-white
        shadow-lg
        "
      >
        <Icon size={34} />
      </div>

      <h3 className="mt-8 text-3xl font-bold text-gray-900">
        {title}
      </h3>

      <p className="mt-6 leading-9 text-gray-600">
        {description}
      </p>
    </div>
  );
}