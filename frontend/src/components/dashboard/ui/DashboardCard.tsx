import { ReactNode } from "react";

interface DashboardCardProps {
  title?: string;
  subtitle?: string;
  action?: ReactNode;
  children: ReactNode;
  className?: string;
}

export default function DashboardCard({
  title,
  subtitle,
  action,
  children,
  className = "",
}: DashboardCardProps) {
  return (
    <div
      className={`
        rounded-3xl
        border
        border-gray-200
        bg-white
        shadow-sm
        transition-all
        duration-300
        hover:shadow-lg
        ${className}
      `}
    >
      {(title || subtitle || action) && (
        <div className="flex items-start justify-between border-b border-gray-100 px-7 py-6">

          <div>

            {title && (
              <h2 className="text-xl font-semibold text-gray-900">
                {title}
              </h2>
            )}

            {subtitle && (
              <p className="mt-1 text-sm text-gray-500">
                {subtitle}
              </p>
            )}

          </div>

          {action}

        </div>
      )}

      <div className="p-7">
        {children}
      </div>

    </div>
  );
}