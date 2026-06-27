import { LucideIcon } from "lucide-react";
import clsx from "clsx";

interface IconBadgeProps {
  icon: LucideIcon;
  className?: string;
}

export default function IconBadge({
  icon: Icon,
  className,
}: IconBadgeProps) {
  return (
    <div
      className={clsx(
        "flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-100 to-pink-100",
        className
      )}
    >
      <Icon
        size={24}
        className="text-rose-600"
      />
    </div>
  );
}