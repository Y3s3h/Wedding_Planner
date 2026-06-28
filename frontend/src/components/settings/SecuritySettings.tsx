"use client";

import {
  Lock,
  ShieldCheck,
  Smartphone,
} from "lucide-react";

export default function SecuritySettings() {
  return (
    <section className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm">

      <h2 className="text-2xl font-bold text-rose-500">
        Security
      </h2>

      <div className="mt-8 space-y-5">

        <Button
          icon={<Lock size={18} />}
          title="Change Password"
        />

        <Button
          icon={<ShieldCheck size={18} />}
          title="Enable Two-Factor Authentication"
        />

        <Button
          icon={<Smartphone size={18} />}
          title="Manage Login Sessions"
        />

      </div>

    </section>
  );
}

function Button({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) {
  return (
    <button className="flex w-full items-center gap-4 rounded-2xl border border-gray-200 p-4 transition hover:bg-gray-50">

      <div className="rounded-xl bg-gray-100 p-3 text-gray-700">
        {icon}
      </div>

      <span className="font-medium text-gray-700">
        {title}
      </span>

    </button>
  );
}