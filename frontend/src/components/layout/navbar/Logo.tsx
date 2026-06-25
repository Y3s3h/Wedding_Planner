import Link from "next/link";
import { Gem } from "lucide-react";

export default function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-2"
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-rose-100 text-rose-600 shadow-sm">
        <Gem size={20} />
      </div>

      <div>
        <h1 className="text-xl font-bold tracking-wide text-gray-900">
          WedPlan
        </h1>

        <p className="text-xs tracking-[0.25em] uppercase text-gray-500">
          Luxury Weddings
        </p>
      </div>
    </Link>
  );
}