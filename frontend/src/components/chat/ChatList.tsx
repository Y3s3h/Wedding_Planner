"use client";

import { useMemo } from "react";
import { Search } from "lucide-react";

import { useMessageStore } from "@/store/messageStore";
import { useAuthStore } from "@/store/authStore";

import ConversationCard from "./ConversationCard";

export default function ChatList() {
  const { user } = useAuthStore();

  const {
    messages,
    selectedConversation,
    setSelectedConversation,
  } = useMessageStore();

  const conversations = useMemo(() => {
    if (!user) {
      return [];
    }

    const map = new Map<
      string,
      {
        id: string;
        name: string;
        lastMessage: string;
        sentAt: string;
      }
    >();

    messages.forEach((message) => {
      if (
        message.senderId !== user._id &&
        message.receiverId !== user._id
      ) {
        return;
      }

      const otherUserId =
        message.senderId === user._id
          ? message.receiverId
          : message.senderId;

     const otherUserName =
  message.senderId === user._id
    ? message.receiverName || "Unknown User"
    : message.senderName || "Unknown User";

      const existing = map.get(otherUserId);

      if (
        !existing ||
        new Date(message.sentAt) >
          new Date(existing.sentAt)
      ) {
        map.set(otherUserId, {
          id: otherUserId,
          name: otherUserName,
          lastMessage: message.message,
          sentAt: message.sentAt,
        });
      }
    });

    return Array.from(map.values()).sort(
      (a, b) =>
        new Date(b.sentAt).getTime() -
        new Date(a.sentAt).getTime()
    );
  }, [messages, user]);

  return (
    <div className="flex h-full flex-col">

      {/* Header */}

      <div className="border-b border-slate-200 p-5">

        <div className="relative">

          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="text"
            placeholder="Search conversations..."
            className="
              h-12
              w-full
              rounded-2xl
              border
              border-slate-200
              bg-slate-50
              pl-12
              pr-4
              text-sm
              text-slate-700
              outline-none
              transition
              placeholder:text-slate-400
              focus:border-rose-400
              focus:bg-white
            "
          />

        </div>

      </div>

      {/* Conversation List */}

      <div className="hide-scrollbar flex-1 space-y-3 overflow-y-auto p-4">

        {conversations.length === 0 ? (
          <div className="flex h-full items-center justify-center">

            <p className="text-sm text-slate-400">
              No conversations yet
            </p>

          </div>
        ) : (
          conversations.map((conversation) => (
            <ConversationCard
              key={conversation.id}
              name={conversation.name}
              lastMessage={conversation.lastMessage}
              time={conversation.sentAt}
              active={
                selectedConversation ===
                conversation.id
              }
              onClick={() =>
                setSelectedConversation(
                  conversation.id
                )
              }
            />
          ))
        )}

      </div>

    </div>
  );
}