import Link from "next/link";
import HeroSearch from "./HeroSearch";
import HeroStats from "./HeroStats";
import ScrollIndicator from "./ScrollIndicator";

export default function HeroContent() {
  return (
    <div className=" relative mx-auto flex max-w-6xl flex-col items-center justify-center px-6 pt-32 text-center text-white lg:pt-36">

      <p className="mb-4 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm backdrop-blur-md">
        ✨ Trusted by 5000+ Happy Couples
      </p>
      <div className="absolute left-1/2 top-1/2 -z-10 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-rose-500/20 blur-[140px]" />
      <h1 className="max-w-4xl text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">
        Your Dream Wedding
        <br />
        <span className="bg-gradient-to-r from-pink-300 via-rose-400 to-red-400 bg-clip-text text-transparent">
  Begins Here
</span>
      </h1>

      <p className="mt-6 max-w-2xl text-lg text-gray-200 md:text-xl">
        Discover trusted venues, photographers, decorators and wedding planners
        to create unforgettable memories.
      </p>

      <div className="mt-10 flex flex-col gap-4 sm:flex-row">

        {/* <Link
          href="/vendors"
          className="rounded-full bg-rose-600 px-8 py-4 text-lg font-semibold transition-all duration-300 hover:bg-rose-700 hover:scale-105"
        >
          Explore Vendors
        </Link> */}

        <Link
  href="/vendors"
  className="group relative overflow-hidden rounded-full bg-gradient-to-r from-rose-500 via-pink-500 to-rose-600 px-8 py-4 text-lg font-semibold text-white shadow-xl shadow-rose-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
>
  {/* Shine Effect */}
  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

  {/* Button Text */}
  <span className="relative z-10 flex items-center gap-2">
    Explore Vendors →
  </span>
</Link>

        <Link
          href="/register"
          className="rounded-full border border-white/40 bg-white/10 px-8 py-4 text-lg font-semibold backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-black"
        >
          Become a Vendor
        </Link>

        

      </div>
      <HeroSearch />

<HeroStats />

<ScrollIndicator />
    </div>
  );
}