"use client";

import Image from "next/image";

export default function ConversationCard() {
  return (
    <button
      className="
        flex
        w-full
        items-center
        gap-4
        rounded-2xl
        p-4
        text-left
        transition
        hover:bg-gray-50
      "
    >

      <div className="relative">

        <Image
          src="https://images.unsplash.com/photo-1519741497674-611481863552?w=400"
          alt="Vendor"
          width={60}
          height={60}
          className="rounded-2xl object-cover"
        />

        <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-green-500" />

      </div>

      <div className="min-w-0 flex-1">

        <div className="flex justify-between">

          <h3 className="truncate font-semibold text-gray-900">
            Royal Palace Banquet
          </h3>

          <span className="text-xs text-gray-400">
            10:32
          </span>

        </div>

        <p className="mt-1 truncate text-sm text-gray-500">
          Looking forward to meeting you...
        </p>

      </div>

      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-rose-500 text-xs font-semibold text-white">
        2
      </div>

    </button>
  );
}