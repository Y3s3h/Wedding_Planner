import Link from "next/link";

export default function HeroContent() {
  return (
    <div className="mx-auto flex max-w-5xl flex-col items-center px-6 text-center text-white">

      <p className="mb-4 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm backdrop-blur-md">
        ✨ Trusted by 5000+ Happy Couples
      </p>

      <h1 className="max-w-4xl text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">
        Your Dream Wedding
        <br />
        Begins Here
      </h1>

      <p className="mt-6 max-w-2xl text-lg text-gray-200 md:text-xl">
        Discover trusted venues, photographers, decorators and wedding planners
        to create unforgettable memories.
      </p>

      <div className="mt-10 flex flex-col gap-4 sm:flex-row">

        <Link
          href="/vendors"
          className="rounded-full bg-rose-600 px-8 py-4 text-lg font-semibold transition-all duration-300 hover:bg-rose-700 hover:scale-105"
        >
          Explore Vendors
        </Link>

        <Link
          href="/register"
          className="rounded-full border border-white/40 bg-white/10 px-8 py-4 text-lg font-semibold backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-black"
        >
          Become a Vendor
        </Link>

      </div>
    </div>
  );
}