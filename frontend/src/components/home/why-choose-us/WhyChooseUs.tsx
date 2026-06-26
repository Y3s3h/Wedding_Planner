import Image from "next/image";
import FeatureCard from "./FeatureCard";
import { features } from "./feature-data";
import BottomBanner from "./BottomBanner";

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0f0708] via-[#1d0d0f] to-[#241012] py-20">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute left-[-180px] top-20 h-[450px] w-[450px] rounded-full bg-rose-600/10 blur-[140px]" />
        <div className="absolute right-[-150px] bottom-10 h-[450px] w-[450px] rounded-full bg-orange-400/10 blur-[150px]" />

        {/* Floating Particles */}
        <div className="absolute left-20 top-40 h-3 w-3 animate-pulse rounded-full bg-rose-400/50 blur-sm" />
        <div className="absolute right-40 top-60 h-2 w-2 animate-pulse rounded-full bg-pink-300/60 blur-sm" />
        <div className="absolute bottom-32 left-1/2 h-4 w-4 animate-pulse rounded-full bg-rose-300/40 blur-md" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* LEFT */}
          <div>
            <p className="font-semibold uppercase tracking-[0.45em] text-rose-400">
              WHY CHOOSE US
            </p>

            <div className="mt-4 flex items-center gap-4">
              <div className="h-px w-20 bg-gradient-to-r from-transparent to-rose-500" />
              <span className="text-xl text-rose-500">♡</span>
              <div className="h-px w-20 bg-gradient-to-l from-transparent to-rose-500" />
            </div>

            <h2 className="mt-8 text-4xl font-light leading-tight text-white xl:text-6xl">
              Everything You Need
              <br />
              for Your
              <br />
              <span className="font-semibold text-rose-400">
                Dream Wedding
              </span>
            </h2>

            <p className="mt-8 max-w-xl text-base leading-8 text-gray-300">
              We connect you with trusted professionals, transparent pricing,
              and seamless planning to make your wedding journey stress-free
              and unforgettable.
            </p>

            {/* Feature Cards */}
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {features.map((feature) => (
                <FeatureCard
                  key={feature.id}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative">
            {/* Glow */}
            <div className="absolute inset-0 rounded-[40px] bg-gradient-to-b from-rose-500/10 to-transparent blur-2xl" />

            <div className="relative overflow-hidden rounded-[40px] border border-rose-400/20 shadow-[0_40px_100px_rgba(255,90,120,.15)]">
              <Image
                src="/images/why-choose-us.jpg"
                alt="Wedding Couple"
                width={900}
                height={1200}
                priority
                className="h-[960px] w-full object-cover transition-transform duration-700 hover:scale-105"
              />

              {/* Overlays */}
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#140b0c]/50" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/10" />
            </div>
          </div>
        </div>

        <BottomBanner />
      </div>
    </section>
  );
}