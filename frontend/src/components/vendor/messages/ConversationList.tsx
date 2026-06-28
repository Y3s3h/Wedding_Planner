"use client";

import ConversationCard from "./ConversationCard";

const chats = [
  {
    name: "Rahul Sharma",
    lastMessage: "Can we discuss the venue timing?",
    time: "2m",
  },
  {
    name: "Priya Singh",
    lastMessage: "Thank you for the quotation.",
    time: "18m",
  },
  {
    name: "Aman Verma",
    lastMessage: "Please share more photos.",
    time: "1h",
  },
];

export default function ConversationList() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-xl font-bold text-gray-800">
        Conversations
      </h2>

      <div className="mt-6 space-y-4">
        {chats.map((chat) => (
          <ConversationCard
            key={chat.name}
            {...chat}
          />
        ))}
      </div>
    </section>
  );
}