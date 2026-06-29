import { messages } from "@/data/messages";

class MessageService {
  getMessages() {
    return messages;
  }
}

export const messageService = new MessageService();