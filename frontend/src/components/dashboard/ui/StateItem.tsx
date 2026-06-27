import { LucideIcon } from "lucide-react";

interface StatItemProps {
  icon: LucideIcon;
  label: string;
  value: string;
}

export default function StatItem({
  icon: Icon,
  label,
  value,
}: StatItemProps) {
  return (
    <div className="flex items-center justify-between">

      <div className="flex items-center gap-3">

        <Icon
          size={18}
          className="text-rose-500"
        />

        <span className="text-gray-500">
          {label}
        </span>

      </div>

      <span className="font-semibold text-gray-900">
        {value}
      </span>

    </div>
  );
}