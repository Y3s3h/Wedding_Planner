"use client";

import { Bell } from "lucide-react";


export default function Header() {
  return (
    <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-slate-200 bg-white px-8 shadow-sm">


       
      <div>

        <h1 className="text-3xl font-bold text-slate-900">
          Vendor Dashboard
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          Manage your wedding business.
        </p>

      </div>

     

      <button className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-100 transition hover:bg-slate-200">

        <Bell
          size={20}
          className="text-slate-700"
        />

        <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-blue-600" />

      </button>

    </header>
  );
}