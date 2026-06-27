"use client";

import { Bell, MessageCircle, Search } from "lucide-react";
import { useAuthStore } from "@/store/authStore";

export default function Header() {
  const { user } = useAuthStore();

  const firstName = user?.name?.split(" ")[0] || "Guest";

  return (
    <header
      className="
        sticky
        top-0
        z-20
        flex
        h-20
        items-center
        justify-between
        border-b
        border-gray-200
        bg-white/80
        px-8
        backdrop-blur-xl
      "
    >
      {/* Left */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">
          Dashboard
        </h1>

        <p className="mt-1 text-sm text-gray-500">
          Welcome back, {firstName} 👋
        </p>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">

        {/* Search */}
        <div className="relative hidden lg:block">

          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            placeholder="Search vendors..."
            className="
              h-11
              w-80
              rounded-2xl
              border
              border-gray-200
              bg-gray-50
              pl-11
              pr-4
              text-sm
              outline-none
              transition
              focus:border-rose-500
              focus:bg-white
            "
          />

        </div>

        {/* Messages */}
        <button
          className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-2xl
            bg-gray-100
            transition
            hover:bg-rose-50
          "
        >
          <MessageCircle
            size={19}
            className="text-gray-600"
          />
        </button>

        {/* Notifications */}
        <button
          className="
            relative
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-2xl
            bg-gray-100
            transition
            hover:bg-rose-50
          "
        >
          <Bell
            size={19}
            className="text-gray-600"
          />

          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-rose-500" />
        </button>

        {/* Avatar */}
        <button
          className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-full
            bg-gradient-to-r
            from-rose-500
            to-pink-500
            font-semibold
            text-white
          "
        >
          {firstName.charAt(0)}
        </button>

      </div>
    </header>
  );
}