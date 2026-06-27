interface ProgressBarProps {
  value: number;
}

export default function ProgressBar({
  value,
}: ProgressBarProps) {
  return (
    <div className="h-3 overflow-hidden rounded-full bg-gray-100">
      <div
        style={{ width: `${value}%` }}
        className="h-full rounded-full bg-gradient-to-r from-rose-500 to-pink-500 transition-all duration-700"
      />
    </div>
  );
}