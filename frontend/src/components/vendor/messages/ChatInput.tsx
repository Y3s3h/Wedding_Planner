"use client";

import { Send } from "lucide-react";

export default function ChatInput() {
  return (
    <div className="mt-6 flex gap-3">

      <input
        placeholder="Type your message..."
        className="flex-1 rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-600"
      />

      <button className="rounded-2xl bg-blue-700 px-5 text-white hover:bg-blue-800">

        <Send size={20} />

      </button>

    </div>
  );
}