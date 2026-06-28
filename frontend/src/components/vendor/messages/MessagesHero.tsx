"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function MessagesHero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-[32px] bg-gradient-to-r from-cyan-600 via-sky-700 to-slate-800 p-8 text-white shadow-xl"
    >
      <div>

        <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">

          <MessageCircle size={16} />

          Customer Messages

        </div>

        <h1 className="mt-5 text-5xl font-bold">

          Stay connected
          <br />

          with your clients.

        </h1>

        <p className="mt-5 max-w-xl text-slate-200">

          Discuss bookings, quotations and event details.

        </p>

      </div>

    </motion.section>
  );
}