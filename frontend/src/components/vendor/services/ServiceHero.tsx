"use client";

import { motion } from "framer-motion";
import { BriefcaseBusiness, Plus } from "lucide-react";

export default function ServiceHero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-[32px] bg-gradient-to-r from-indigo-700 via-blue-700 to-slate-800 p-8 text-white shadow-xl"
    >
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

        <div>

          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">

            <BriefcaseBusiness size={16} />

            Services

          </div>

          <h1 className="mt-5 text-5xl font-bold">
            Manage your
            <br />
            wedding services.
          </h1>

          <p className="mt-5 max-w-xl text-slate-200">
            Add, update and organize every service your business offers.
          </p>

        </div>

        <button className="flex items-center gap-2 rounded-2xl bg-white px-6 py-4 font-semibold text-slate-900">

          <Plus size={18} />

          Add Service

        </button>

      </div>
    </motion.section>
  );
}