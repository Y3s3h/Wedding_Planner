import { TrendingDown, TrendingUp } from "lucide-react";
import clsx from "clsx";

interface TrendBadgeProps {
  value: string;
  positive?: boolean;
}

export default function TrendBadge({
  value,
  positive = true,
}: TrendBadgeProps) {
  return (
    <div
      className={clsx(
        "inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold",
        positive
          ? "bg-green-100 text-green-700"
          : "bg-red-100 text-red-600"
      )}
    >
      {positive ? (
        <TrendingUp size={13} />
      ) : (
        <TrendingDown size={13} />
      )}

      {value}
    </div>
  );
}