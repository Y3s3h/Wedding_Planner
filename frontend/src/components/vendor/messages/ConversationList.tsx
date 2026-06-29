"use client";

import ConversationCard from "./ConversationCard";
import { useMessageStore } from "@/store";

export default function ConversationList() {
  const messages = useMessageStore(
  (state) => state.messages
);
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-xl font-bold text-gray-800">
        Conversations
      </h2>

      <div className="mt-6 space-y-4">
        {messages.map((message) => (
          <ConversationCard
            key={message.id}
            name={message.senderName}
            lastMessage={message.message}
            time={message.sentAt}
          />
        ))}
      </div>
    </section>
  );
}