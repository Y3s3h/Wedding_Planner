import { create } from "zustand";

import { Message } from "@/types/message";
import {
  messages as initialMessages,
} from "@/data/messages";

interface MessageStore {
  messages: Message[];

  selectedConversation: string | null;

  setMessages: (
    messages: Message[]
  ) => void;

  setSelectedConversation: (
    id: string | null
  ) => void;

  sendMessage: (
    message: Message
  ) => void;

  clearConversation: () => void;
}

export const useMessageStore =
  create<MessageStore>((set) => ({
    messages: initialMessages,

    selectedConversation: null,

    setMessages: (messages) =>
      set({ messages }),

    setSelectedConversation: (id) =>
      set({
        selectedConversation: id,
      }),

    sendMessage: (message) =>
      set((state) => ({
        messages: [
          ...state.messages,
          message,
        ],
      })),

    clearConversation: () =>
      set({
        selectedConversation: null,
      }),
  }));