import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Heart, CheckCircle } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-24">

      {/* Background Image */}

      <div className="absolute inset-0">

        <Image
        //   src="/images/final-cta.jpg"
        src="/images/final-cta1.jpg"
          alt="Wedding Couple"
          fill
          priority
          className="object-cover"
        />

        {/* Dark Overlay */}

        <div className="absolute inset-0 bg-black/65" />

        {/* Rose Gradient */}

        {/* <div className="absolute inset-0 bg-gradient-to-r from-[#5f132f]/70 via-[#a11755]/40 to-[#5f132f]/70" /> */}

      </div>

      {/* Background Glow */}

      {/* <div className="absolute -left-40 top-0 h-[420px] w-[420px] rounded-full bg-rose-500/20 blur-[150px]" />

      <div className="absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-pink-500/20 blur-[150px]" /> */}

      {/* Floating Hearts */}

      <Heart
        className="absolute left-20 top-20 animate-pulse text-white/20"
        size={42}
      />

      <Heart
        className="absolute right-24 bottom-20 animate-pulse text-white/15"
        size={54}
      />

      <div className="relative mx-auto max-w-5xl px-6 text-center">

        <p className="font-semibold uppercase tracking-[0.45em] text-rose-200">
          START YOUR JOURNEY
        </p>

        <h2 className="mt-6 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
          Your Dream Wedding
          <br />
          Begins Here
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-200">
          Discover trusted vendors, compare packages, book with confidence,
          and create unforgettable memories—all in one beautiful platform.
        </p>

        {/* Buttons */}

        <div className="mt-10 flex flex-wrap justify-center gap-5">

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

          <button
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
              hover:shadow-[0_20px_50px_rgba(255,255,255,.15)]
            "
          >
            Start Planning

            <ArrowRight
              size={22}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>

        </div>

        {/* Trust Row */}

        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 rounded-full border border-white/15 bg-white/10 px-8 py-4 backdrop-blur-md">

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