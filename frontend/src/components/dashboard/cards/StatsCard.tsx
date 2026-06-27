"use client";

import { LucideIcon, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

interface StatsCardProps {
  title: string;
  value: string;
  subtitle: string;
  icon: LucideIcon;
}

export default function StatsCard({
  title,
  value,
  subtitle,
  icon: Icon,
}: StatsCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -6,
      }}
      transition={{
        duration: 0.25,
      }}
      className="
        rounded-3xl
        border
        border-gray-200
        bg-white
        p-6
        shadow-sm
        transition
        hover:shadow-xl
      "
    >
      {/* Top */}

      <div className="flex items-center justify-between">

        <div className="rounded-2xl bg-rose-50 p-4">

          <Icon
            className="text-rose-500"
            size={24}
          />

        </div>

        <TrendingUp
          size={18}
          className="text-green-500"
        />

      </div>

      {/* Content */}

      <div className="mt-8">

        <p className="text-sm text-gray-500">
          {title}
        </p>

        <h2 className="mt-2 text-4xl font-bold text-gray-900">
          {value}
        </h2>

        <p className="mt-3 text-sm font-medium text-rose-500">
          {subtitle}
        </p>

      </div>

    </motion.div>
  );
}