

import { LucideIcon } from "lucide-react";

interface StepCardProps {
  step: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export default function StepCard({
  step,
  title,
  description,
  icon: Icon,
}: StepCardProps) {
  return (
    <div
      className="
      relative
      group
      text-center
      "
    >
      {/* Circle */}

      <div
        className="
        mx-auto
        flex
        h-24
        w-24
        items-center
        justify-center
        rounded-full
        bg-gradient-to-br
        from-rose-500
        to-pink-600
        text-white
        shadow-[0_20px_50px_rgba(255,70,120,.35)]
        transition-all
        duration-500
        group-hover:scale-110
        "
      >
        <Icon size={34} />
      </div>

      {/* Step */}

      <div
        className="
        absolute
        -top-3
        left-1/2
        flex
        h-9
        w-9
        -translate-x-1/2
        items-center
        justify-center
        rounded-full
        border-4
        border-white
        bg-rose-500
        text-sm
        font-bold
        text-white
        shadow-lg
        "
      >
        {step}
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