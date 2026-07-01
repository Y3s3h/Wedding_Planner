import { Message } from "@/types/message";

const STORAGE_KEY = "messages";

class MessageService {
  getMessages(): Message[] {
    if (typeof window === "undefined") {
      return [];
    }

    const data = localStorage.getItem(STORAGE_KEY);

    if (!data) {
      return [];
    }

    return JSON.parse(data);
  }

  saveMessages(messages: Message[]) {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(messages)
    );
  }

  sendMessage(message: Message) {
    const messages = this.getMessages();

    messages.push(message);

    this.saveMessages(messages);
  }

  clearMessages() {
    localStorage.removeItem(STORAGE_KEY);
  }
}

export const messageService =
  new MessageService();