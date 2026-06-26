import StatCard from "./StatCard";
import { stats } from "./stats-data";

export default function AboutStats() {
  return (
    <section className="relative overflow-hidden py-24">

      {/* Background */}

      <div className="absolute inset-0 bg-gradient-to-br from-[#14090B] via-[#2A0F18] to-[#14090B]" />

      {/* Glow */}

      <div className="absolute left-0 top-0 h-[420px] w-[420px] rounded-full bg-rose-500/20 blur-[150px]" />

      <div className="absolute right-0 bottom-0 h-[420px] w-[420px] rounded-full bg-pink-500/20 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        <div className="mx-auto max-w-3xl text-center">

          <p className="font-semibold uppercase tracking-[0.45em] text-rose-400">
            OUR IMPACT
          </p>

          <h2 className="mt-5 text-4xl font-bold text-rose-500 md:text-5xl">
            Celebrating Thousands
            <span className="block text-rose-400">
              of Beautiful Weddings
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Every number represents unforgettable memories, trusted partnerships,
            and celebrations brought to life through WedPlan.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {stats.map((stat) => (
            <StatCard
              key={stat.id}
              icon={stat.icon}
              number={stat.number}
              title={stat.title}
            />
          ))}

        </div>

      </div>

    </section>
  );
}