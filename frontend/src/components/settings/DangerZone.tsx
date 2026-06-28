"use client";

import {
  LogOut,
  Trash2,
} from "lucide-react";

export default function DangerZone() {
  return (
    <section className="rounded-3xl border border-red-200 bg-red-50 p-7">

      <h2 className="text-2xl font-bold text-red-600">
        Danger Zone
      </h2>

      <p className="mt-2 text-red-500">
        These actions are irreversible.
      </p>

      <div className="mt-8 flex flex-wrap gap-4">

        <button className="flex items-center gap-3 rounded-2xl border border-gray-300 bg-white px-6 py-4 transition hover:bg-gray-100 text-green-600">

          <LogOut size={18} />

          Logout

        </button>

        <button className="flex items-center gap-3 rounded-2xl bg-red-600 px-6 py-4 text-white transition hover:bg-red-700">

          <Trash2 size={18} />

          Delete Account

        </button>

      </div>

    </section>
  );
}