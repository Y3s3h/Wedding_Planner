"use client";

import { Paperclip, Send } from "lucide-react";

export default function ChatInput() {
  return (
    <div className="border-t border-gray-200 p-5">

      <div className="flex items-center gap-4">

        <button className="rounded-2xl bg-gray-100 p-3 transition hover:bg-gray-200">

          <Paperclip size={20} />

        </button>

        <input
          placeholder="Type a message..."
          className="
            h-12
            flex-1
            rounded-2xl
            border
            border-gray-200
            px-5
            outline-none
            focus:border-rose-500
          "
        />

        <button className="rounded-2xl bg-rose-500 p-3 text-white transition hover:bg-rose-600">

          <Send size={20} />

        </button>

      </div>

    </div>
  );
}