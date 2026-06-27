import { ArrowRight, Award } from "lucide-react";
import Link from "next/link";
export default function BottomBanner() {
  return (
    <div
      className="
      relative
      mt-12
      overflow-hidden
      rounded-[30px]
      border
      border-rose-500/20
      bg-gradient-to-r
      from-[#6b1d2d]
      via-[#7d2334]
      to-[#5a1525]
      p-6
      shadow-[0_25px_80px_rgba(255,70,120,.20)]
      "
    >
      {/* Glow */}

      <div className="absolute -left-24 top-0 h-64 w-64 rounded-full bg-rose-400/20 blur-[120px]" />

      <div className="absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-pink-500/20 blur-[120px]" />

      <div className="relative flex flex-col items-center justify-between gap-8 lg:flex-row">

        {/* Left */}

        <div className="flex items-center gap-8">

          <div
            className="
            flex
            h-24
            w-24
            flex-col
            items-center
            justify-center
            rounded-full
            border-2
            border-yellow-400/60
            bg-[#742030]
            text-center
            shadow-lg
            "
          >
            <Award
              size={28}
              className="mb-1 text-yellow-300"
            />

            <h3 className="text-3xl font-bold text-white">
              100%
            </h3>

            <p className="text-xs uppercase tracking-widest text-yellow-200">
              Trusted
            </p>

          </div>

          <div>

            <h2 className="text-3xl font-light text-white">

              Your Dream Wedding,

              <br />

              <span className="font-semibold">

                Our Responsibility

              </span>

            </h2>

            <p className="mt-3 uppercase tracking-[0.35em] text-yellow-200">

              PLAN BEAUTIFULLY. CELEBRATE JOYFULLY.

            </p>

          </div>

        </div>

        {/* Button */}
<Link href="/vendors">
        <button
         
          className="
          group
          flex
          items-center
          gap-3
          rounded-full
          border
          border-rose-300
          bg-gradient-to-r
          from-rose-500
          to-pink-500
         px-8 py-4
          text-lg
          font-semibold
          text-white
          transition-all
          duration-500
          hover:scale-105
          hover:shadow-[0_15px_50px_rgba(255,80,120,.45)]
          "
        >
          Start Planning Now

          <ArrowRight
            size={22}
            className="transition group-hover:translate-x-2"
          />
        </button>
</Link>
      </div>

    </div>
  );
}