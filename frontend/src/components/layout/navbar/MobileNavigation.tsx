"use client";

import { Menu } from "lucide-react";

export default function MobileNavigation() {
  return (
    <button
      className="rounded-xl border border-gray-200 p-2 transition hover:bg-gray-100"
      aria-label="Open Menu"
    >
      <Menu size={24} />
    </button>
  );
}