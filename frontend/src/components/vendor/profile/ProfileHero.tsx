"use client";

import { motion } from "framer-motion";
import { UserCircle2 } from "lucide-react";

export default function ProfileHero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-[32px] bg-gradient-to-r from-blue-700 via-indigo-700 to-slate-800 p-8 text-white shadow-xl"
    >
      <div>

        <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">

          <UserCircle2 size={16} />

          Vendor Profile

        </div>

        <h1 className="mt-5 text-5xl font-bold">

          Manage your
          <br />

          business profile.

        </h1>

        <p className="mt-5 max-w-xl text-slate-200">

          Keep your business information updated for customers.

        </p>

      </div>

    </motion.section>
  );
}