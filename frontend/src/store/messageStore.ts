import { create } from "zustand";

import { Message } from "@/types/message";
import { messageService } from "@/services/message.service";

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
  messages: messageService.getMessages(),

    selectedConversation: null,

    setMessages: (messages) =>
      set({ messages }),

    setSelectedConversation: (id) =>
      set({
        selectedConversation: id,
      }),

    sendMessage: (message) =>
  set((state) => {
    messageService.sendMessage(message);

    return {
      messages:
        messageService.getMessages(),
    };
  }),

    clearConversation: () =>
      set({
        selectedConversation: null,
      }),
  }));