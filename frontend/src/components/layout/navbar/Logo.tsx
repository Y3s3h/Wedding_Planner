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
        <h1 className="text-3xl font-bold text-pink-500">
  WedPlan
</h1>

<p className="text-xs tracking-[0.25em] uppercase text-white-500">
  Luxury Weddings
</p>
      </div>
    </Link>
  );
}