"use client";

import ConversationCard from "./ConversationCard";

export default function ConversationList() {
  return (
    <aside className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">

      <div className="border-b border-gray-100 p-6">

        <h2 className="text-2xl font-bold text-gray-900">
          Messages
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          Conversations with vendors
        </p>

      </div>

      <div className="space-y-2 p-4">

        <ConversationCard />

        <ConversationCard />

        <ConversationCard />

        <ConversationCard />

      </div>

    </aside>
  );
}