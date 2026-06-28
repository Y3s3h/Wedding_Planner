"use client";

import Image from "next/image";
import { Heart, Eye, Pencil } from "lucide-react";

interface Props {
  title: string;
  image: string;
}

export default function PortfolioCard({ title, image }: Props) {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      {/* Portfolio Image */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition duration-300 hover:scale-105"
        />
      </div>

      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-800">
          {title}
        </h3>

        <div className="mt-4 flex items-center justify-between text-gray-500">
          <div className="flex gap-4">
            <div className="flex items-center gap-1">
              <Eye size={16} />
              <span>842</span>
            </div>

            <div className="flex items-center gap-1">
              <Heart size={16} />
              <span>218</span>
            </div>
          </div>

          <button className="rounded-lg p-2 transition hover:bg-slate-100 hover:text-violet-600">
            <Pencil size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}