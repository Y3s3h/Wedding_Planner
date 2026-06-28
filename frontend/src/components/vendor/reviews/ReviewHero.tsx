"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function ReviewHero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-[32px] bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 p-8 text-white shadow-xl"
    >
      <div>

        <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">

          <Star size={16} />

          Customer Reviews

        </div>

        <h1 className="mt-5 text-5xl font-bold">

          Build trust with
          <br />

          happy customers.

        </h1>

        <p className="mt-5 max-w-xl text-orange-100">

          View ratings, reply to reviews and improve your business reputation.

        </p>

      </div>
    </motion.section>
  );
}