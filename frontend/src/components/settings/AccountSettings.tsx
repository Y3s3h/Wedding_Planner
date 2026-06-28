"use client";

import { User, Mail, Phone, Pencil } from "lucide-react";

export default function AccountSettings() {
  return (
    <section className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm">

      <div className="mb-6 flex items-center justify-between">

        <h2 className="text-2xl font-bold text-rose-500">
          Account
        </h2>

        <button className="flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2 text-white transition hover:bg-slate-800">
          <Pencil size={16} />
          Edit
        </button>

      </div>

      <div className="space-y-6 text-gray-500">

        <Item icon={<User size={18} />} label="Full Name" value="Yash Yadav" />

        <Item icon={<Mail size={18} />} label="Email" value="yash@gmail.com" />

        <Item icon={<Phone size={18} />} label="Phone" value="+91 9876543210" />

      </div>

    </section>
  );
}

function Item({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-4">

      <div className="rounded-xl bg-gray-100 p-3">
        {icon}
      </div>

      <div>

        <p className="text-sm text-gray-500">
          {label}
        </p>

        <p className="font-semibold">
          {value}
        </p>

      </div>

    </div>
  );
}