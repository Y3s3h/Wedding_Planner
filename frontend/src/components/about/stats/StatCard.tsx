import { LucideIcon } from "lucide-react";

interface StatCardProps {
  icon: LucideIcon;
  number: string;
  title: string;
}

export default function StatCard({
  icon: Icon,
  number,
  title,
}: StatCardProps) {
  return (
    <div
      className="
      group
      relative
      overflow-hidden
      rounded-[32px]
      border
      border-white/10
      bg-white/10
      p-8
      text-center
      backdrop-blur-xl
      transition-all
      duration-500
      hover:-translate-y-2
      hover:bg-white/15
      "
    >
      {/* Glow */}

      <div
        className="
        absolute
        -right-16
        -top-16
        h-40
        w-40
        rounded-full
        bg-rose-500/20
        blur-[90px]
        transition
        group-hover:bg-rose-500/30
        "
      />

      <div
        className="
        mx-auto
        flex
        h-20
        w-20
        items-center
        justify-center
        rounded-full
        bg-gradient-to-br
        from-rose-500
        to-pink-500
        text-white
        shadow-[0_15px_40px_rgba(255,70,120,.35)]
        "
      >
        <Icon size={34} />
      </div>

      <h2 className="mt-8 text-5xl font-bold text-gray-600">
        {number}
      </h2>

      <p className="mt-4 text-lg text-gray-600">
        {title}
      </p>
    </div>
  );
}