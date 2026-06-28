"use client";

import MessageBubble from "./MessageBubble";
import ChatInput from "./ChatInput";

export default function ChatWindow() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

      <h2 className="text-xl font-bold text-gray-700">
        Rahul Sharma
      </h2>

      <div className="mt-6 space-y-4">

        <MessageBubble message="Hi, I want to confirm the booking." />

        <MessageBubble
          own
          message="Sure! Your booking has been confirmed."
        />

        <MessageBubble message="Thank you!" />

      </div>

      <ChatInput />

    </section>
  );
}