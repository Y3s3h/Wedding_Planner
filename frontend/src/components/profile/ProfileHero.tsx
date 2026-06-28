"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  User,
  CalendarDays,
  CheckCircle2,
} from "lucide-react";

export default function ProfileHero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="
        relative
        overflow-hidden
        rounded-[32px]
        bg-gradient-to-br
        from-sky-500
        via-cyan-500
        to-blue-600
        p-8
        text-white
        shadow-xl
      "
    >
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

      <div className="absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

      <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

        <div className="flex items-center gap-6">

          <Image
            src="https://images.unsplash.com/photo-1519741497674-611481863552?w=800"
            alt="Profile"
            width={110}
            height={110}
            className="rounded-full border-4 border-white object-cover"
          />

          <div>

            <h1 className="text-4xl font-bold">
              Yash Yadav
            </h1>

            <p className="mt-2 text-lg text-cyan-100">
              Wedding Planning Member
            </p>

          </div>

        </div>

        <div className="rounded-3xl bg-white/10 p-6 backdrop-blur">

          <div className="space-y-4">

            <div className="flex items-center gap-3">

              <User size={20} />

              <span>Profile Verified</span>

              <CheckCircle2
                size={18}
                className="text-green-300"
              />

            </div>

            <div className="flex items-center gap-3">

              <CalendarDays size={20} />

              <span>Wedding: 12 Feb 2027</span>

            </div>

          </div>

        </div>

      </div>

    </motion.section>
  );
}