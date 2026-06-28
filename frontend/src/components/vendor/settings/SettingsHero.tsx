"use client";

import { motion } from "framer-motion";
import { Settings } from "lucide-react";

export default function SettingsHero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-[32px] bg-gradient-to-r from-blue-700 via-indigo-700 to-slate-800 p-8 text-white shadow-xl"
    >
      <div>

        <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">

          <Settings size={16} />

          Vendor Settings

        </div>

        <h1 className="mt-5 text-5xl font-bold">

          Manage your
          <br />

          account settings.

        </h1>

        <p className="mt-5 max-w-xl text-slate-200">

          Configure your business, security and notifications.

        </p>

      </div>

    </motion.section>
  );
}