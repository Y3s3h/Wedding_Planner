"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarDays,
  Sparkles,
  Clock3,
} from "lucide-react";
import { useAuthStore } from "@/store/authStore";

export default function WelcomeHero() {
  const { user } = useAuthStore();

  const firstName =
    user?.name?.split(" ")[0] || "Guest";

  const hour = new Date().getHours();

  let greeting = "Good Evening 🌙";

  if (hour < 12) greeting = "Good Morning ☀️";
  else if (hour < 18) greeting = "Good Afternoon 🌤️";

  return (
    <motion.section
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="
      relative
      overflow-hidden
      rounded-[32px]
      bg-gradient-to-br
      from-rose-500
      via-pink-500
      to-rose-600
      p-10
      text-white
      shadow-xl
    "
    >
      {/* Background Glow */}

      <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

      <div className="absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

      <div className="relative z-10 flex flex-col gap-10 lg:flex-row lg:justify-between">

        {/* Left */}

        <div>

          <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 backdrop-blur">

            <Sparkles size={16} />

            <span className="text-sm font-medium">
              {greeting}
            </span>

          </div>

          <h1 className="mt-6 text-5xl font-bold leading-tight">

            Welcome back,

            <br />

            {firstName} 👋

          </h1>

          <p className="mt-6 max-w-2xl text-lg text-rose-100">

            Continue planning your dream wedding with trusted vendors,
            venues and unforgettable memories.

          </p>

          <div className="mt-8 flex flex-wrap gap-4">

            <Link
              href="/vendors"
              className="
              flex
              items-center
              gap-2
              rounded-2xl
              bg-white
              px-7
              py-4
              font-semibold
              text-rose-600
              transition
              hover:-translate-y-1
            "
            >
              Explore Vendors

              <ArrowRight size={18} />

            </Link>

            <Link
              href="/customer/planner"
              className="
              rounded-2xl
              border
              border-white/30
              bg-white/10
              px-7
              py-4
              font-semibold
              backdrop-blur
              transition
              hover:bg-white/20
            "
            >
              Wedding Planner
            </Link>

            <Link
              href="/become-vendor"
              className="
              rounded-2xl
              border
              border-white/30
              bg-white/10
              px-7
              py-4
              font-semibold
              backdrop-blur
              transition
              hover:bg-white/20
            "
            >
              Become Vendor
            </Link>

          </div>

        </div>

        {/* Right */}

        <div className="w-full max-w-sm rounded-3xl bg-white/10 p-6 backdrop-blur">

          <div className="flex items-center gap-3">

            <CalendarDays size={22} />

            <h3 className="text-xl font-semibold">
              Wedding Date
            </h3>

          </div>

          <p className="mt-4 text-4xl font-bold">
            12 Feb 2027
          </p>

          <div className="mt-8 flex items-center gap-3">

            <Clock3 size={20} />

            <span className="text-lg">
              182 Days Remaining
            </span>

          </div>

          <div className="mt-8">

            <div className="mb-2 flex justify-between text-sm">

              <span>Planning Progress</span>

              <span>72%</span>

            </div>

            <div className="h-3 rounded-full bg-white/20">

              <div className="h-3 w-[72%] rounded-full bg-white" />

            </div>

          </div>

        </div>

      </div>

    </motion.section>
  );
}