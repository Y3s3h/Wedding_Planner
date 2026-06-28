"use client";

import { motion } from "framer-motion";
import { Images, Upload } from "lucide-react";

export default function PortfolioHero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-[32px] bg-gradient-to-r from-violet-700 via-indigo-700 to-slate-800 p-8 text-white shadow-xl"
    >
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

        <div>

          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">

            <Images size={16} />

            Portfolio

          </div>

          <h1 className="mt-5 text-5xl font-bold">

            Showcase your
            <br />

            best work.

          </h1>

          <p className="mt-5 max-w-xl text-slate-200">

            Upload photos and videos to attract more customers.

          </p>

        </div>

        <button className="flex items-center gap-2 rounded-2xl bg-white px-6 py-4 font-semibold text-slate-900">

          <Upload size={18} />

          Upload Media

        </button>

      </div>

    </motion.section>
  );
}