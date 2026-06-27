import Image from "next/image";
import { Heart } from "lucide-react";

export default function AboutHero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
        //   src="/images/about-hero.jpg"
        // src="/images/about-hero.jpg"
        src="/images/about-hero3.jpg"
          alt="About WedPlan"
          fill
          priority
          className="object-cover object-[65%_center]"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Gradient Overlay */}
        {/* <div className="absolute inset-0 bg-gradient-to-r from-[#23060f]/85 via-[#5b1632]/40 to-[#23060f]/70" /> */}
      </div>

      {/* Decorative Glow */}
      <div className="absolute -left-40 top-0 h-[450px] w-[450px] rounded-full bg-rose-500/20 blur-[170px]" />
      <div className="absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-pink-500/20 blur-[170px]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 pt-28 lg:px-10 lg:pt-32">
        <div className="max-w-3xl">
          <p className="font-semibold uppercase tracking-[0.45em] text-rose-300">
            ABOUT WEDPLAN
          </p>

          <h1 className="mt-6 text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
            Creating
            <span className="block text-rose-400">
              Dream Weddings
            </span>
            One Celebration
            <br />
            At A Time
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-200">
            WedPlan is India's premium wedding planning platform,
            connecting couples with trusted vendors, beautiful venues,
            and unforgettable experiences—making every wedding journey
            effortless and memorable.
          </p>

          {/* Stats */}
          <div className="mt-14 flex flex-wrap gap-10">
            <div>
              <h2 className="text-4xl font-bold text-white">15K+</h2>
              <p className="mt-2 text-gray-300">Happy Couples</p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-white">800+</h2>
              <p className="mt-2 text-gray-300">Verified Vendors</p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-white">50+</h2>
              <p className="mt-2 text-gray-300">Cities Covered</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <div className="flex flex-col items-center text-white">
          <Heart
            size={20}
            className="mb-2 animate-pulse text-rose-300"
          />
          <div className="h-12 w-[2px] bg-white/60" />
        </div>
      </div>
    </section>
  );
}