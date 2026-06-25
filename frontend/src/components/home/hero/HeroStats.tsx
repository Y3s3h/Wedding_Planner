import {
  Building2,
  House,
  Star,
  Users,
} from "lucide-react";
import CountUp from "react-countup";

const stats = [
  {
    icon: Users,
    value: "5000+",
    title: "Happy Couples",
    subtitle: "Trusted by thousands",
  },
  {
    icon: Building2,
    value: "1000+",
    title: "Verified Vendors",
    subtitle: "Top-rated professionals",
  },
  {
    icon: House,
    value: "500+",
    title: "Premium Venues",
    subtitle: "Handpicked locations",
  },
  {
    icon: Star,
    value: "4.8/5",
    title: "Customer Rating",
    subtitle: "From real reviews",
  },
];

export default function HeroStats() {
  return (
    <div className="mt-16 grid w-full max-w-6xl grid-cols-2 gap-10 lg:grid-cols-4">

      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="text-center"
          >
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-white/10 backdrop-blur-md">
              <Icon
                size={28}
                className="text-white"
              />
            </div>

            <h3 className="text-5xl font-bold text-rose-300">
              {item.value.includes("/")
  ? item.value
  : (
    <>
      <CountUp
        end={parseInt(item.value)}
        duration={3}
      />
      +
    </>
  )}
            </h3>

            <p className="mt-3 text-xl font-semibold text-white">
              {item.title}
            </p>

            <p className="text-gray-300">
              {item.subtitle}
            </p>
          </div>
        );
      })}
    </div>
  );
}