"use client";

import Link from "next/link";
import { LucideIcon, ArrowRight } from "lucide-react";

interface Props {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
}

export default function QuickActionCard({
  title,
  description,
  href,
  icon: Icon,
}: Props) {
  return (
    <Link
      href={href}
      className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="flex items-center justify-between">

        <div className="rounded-2xl bg-blue-100 p-3">

          <Icon
            size={24}
            className="text-blue-700"
          />

        </div>

        <ArrowRight
          size={20}
          className="transition group-hover:translate-x-1"
        />

      </div>

      <h3 className="mt-6 text-xl font-semibold text-slate-900">
        {title}
      </h3>

      <p className="mt-2 text-sm text-slate-500">
        {description}
      </p>

    </Link>
  );
}