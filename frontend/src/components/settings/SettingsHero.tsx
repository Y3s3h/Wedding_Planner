"use client";

import { motion } from "framer-motion";
import {
  Settings,
  ShieldCheck,
  Bell,
} from "lucide-react";

export default function SettingsHero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      className="
        relative
        overflow-hidden
        rounded-[32px]
        bg-gradient-to-br
        from-slate-700
        via-slate-800
        to-slate-900
        p-8
        text-white
        shadow-xl
      "
    >
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

      <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:justify-between">

        <div>

          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">

            <Settings size={16} />

            Account Settings

          </div>

          <h1 className="mt-6 text-5xl font-bold">
            Manage your
            <br />
            account preferences
          </h1>

          <p className="mt-6 max-w-xl text-lg text-slate-300">
            Control notifications, privacy,
            security and your account settings.
          </p>

        </div>

        <div className="rounded-3xl bg-white/10 p-6 backdrop-blur">

          <div className="space-y-5">

            <div className="flex items-center gap-3">

              <ShieldCheck />

              Security Enabled

            </div>

            <div className="flex items-center gap-3">

              <Bell />

              Notifications Active

            </div>

          </div>

        </div>

      </div>

    </motion.section>
  );
}