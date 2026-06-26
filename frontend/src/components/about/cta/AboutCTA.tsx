import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  Heart,
} from "lucide-react";

export default function AboutCTA() {
  return (
    <section className="relative overflow-hidden py-24">

      {/* Background */}

      <div className="absolute inset-0">

        <Image
          src="/images/about-cta.jpg"
          alt="Wedding Couple"
          fill
          priority
          className="object-cover"
        />

        {/* Dark Overlay */}

        <div className="absolute inset-0 bg-black/70" />

        {/* Rose Gradient */}

        <div className="absolute inset-0 bg-gradient-to-r from-[#5a122e]/80 via-[#9d1d52]/40 to-[#5a122e]/80" />

      </div>

      {/* Background Glow */}

      <div className="absolute -left-40 top-0 h-[450px] w-[450px] rounded-full bg-rose-500/20 blur-[150px]" />

      <div className="absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-pink-500/20 blur-[150px]" />

      {/* Floating Heart */}

      <Heart
        size={40}
        className="absolute left-16 top-20 animate-pulse text-white/20"
      />

      <Heart
        size={54}
        className="absolute right-24 bottom-20 animate-pulse text-white/15"
      />

      <div className="relative mx-auto max-w-6xl px-6 text-center">

        <p className="font-semibold uppercase tracking-[0.45em] text-rose-200">
          LET'S BUILD YOUR STORY
        </p>

        <h2 className="mt-6 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">

          Your Dream Wedding

          <br />

          Starts With One Click

        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-200">

          Discover trusted vendors, compare services,
          plan every detail effortlessly,
          and create unforgettable memories with WedPlan.

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
              border-white/30
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
            Contact Us

            <ArrowRight
              size={20}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />

          </Link>

        </div>

        {/* Trust Bar */}

        <div
          className="
          mt-14
          flex
          flex-wrap
          items-center
          justify-center
          gap-8
          rounded-full
          border
          border-white/15
          bg-white/10
          px-8
          py-5
          backdrop-blur-xl
          "
        >

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

            <span>50+ Cities Across India</span>

          </div>

        </div>

      </div>

    </section>
  );
}