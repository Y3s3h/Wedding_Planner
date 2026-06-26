import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function ServicesCTA() {
  return (
    <section className="relative overflow-hidden py-24">

      {/* Background Image */}

      <div className="absolute inset-0">

        <Image
        //   src="/images/services-cta.jpg"
         src="/images/services-cta.jpg"

          alt="Wedding Services"
          fill
          className="object-cover"
          priority
        />

        {/* Overlay */}

        <div className="absolute inset-0 bg-black/70" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#5f132f]/80 via-[#a11755]/40 to-[#5f132f]/80" />

      </div>

      {/* Glow */}

      <div className="absolute -left-32 top-0 h-[420px] w-[420px] rounded-full bg-rose-500/20 blur-[150px]" />

      <div className="absolute -right-32 bottom-0 h-[420px] w-[420px] rounded-full bg-pink-500/20 blur-[150px]" />

      <div className="relative mx-auto max-w-6xl px-6 text-center">

        <p className="font-semibold uppercase tracking-[0.45em] text-rose-200">
          LET'S MAKE IT HAPPEN
        </p>

        <h2 className="mt-6 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">

          Find Your Perfect

          <br />

          Wedding Team Today

        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-200">

          From breathtaking venues to talented photographers,
          decorators, caterers and planners —
          discover everything you need for your perfect celebration.

        </p>

        {/* Buttons */}

        <div className="mt-12 flex flex-wrap justify-center gap-5">

          <Link
            href="/vendors"
            className="
              rounded-full
              bg-white
              px-12
              py-4
              text-lg
              font-semibold
              text-rose-600
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-[0_20px_50px_rgba(255,255,255,.35)]
            "
          >
            Explore Vendors
          </Link>

          <Link
            href="/contact"
            className="
              group
              flex
              items-center
              gap-3
              rounded-full
              border
              border-white/40
              bg-white/10
              px-12
              py-4
              text-lg
              font-semibold
              text-white
              backdrop-blur-md
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-white/20
            "
          >
            Contact Our Experts

            <ArrowRight
              size={20}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>

        </div>

        {/* Trust Indicators */}

        <div className="mt-14 flex flex-wrap items-center justify-center gap-8 rounded-full border border-white/15 bg-white/10 px-8 py-5 backdrop-blur-md">

          <div className="flex items-center gap-2 text-white">
            <CheckCircle
              size={18}
              className="text-rose-300"
            />

            <span>800+ Verified Vendors</span>
          </div>

          <div className="flex items-center gap-2 text-white">
            <CheckCircle
              size={18}
              className="text-rose-300"
            />

            <span>15,000+ Happy Couples</span>
          </div>

          <div className="flex items-center gap-2 text-white">
            <CheckCircle
              size={18}
              className="text-rose-300"
            />

            <span>Available Across India</span>
          </div>

        </div>

      </div>

    </section>
  );
}