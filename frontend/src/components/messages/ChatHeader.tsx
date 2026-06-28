"use client";

import Image from "next/image";

export default function ChatHeader() {
  return (
    <header className="flex items-center justify-between border-b border-gray-200 p-6">

      <div className="flex items-center gap-4">

        <Image
          src="https://images.unsplash.com/photo-1519741497674-611481863552?w=300"
          alt="Vendor"
          width={56}
          height={56}
          className="rounded-2xl object-cover"
        />

        <div>

          <h2 className="font-bold text-gray-900">
            Royal Palace Banquet
          </h2>

          <p className="text-sm text-green-600">
            Online
          </p>

        </div>

      </div>

    </header>
  );
}