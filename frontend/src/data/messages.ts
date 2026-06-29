import { Message } from "@/types/message";

export const messages: Message[] = [
  {
    id: "MSG001",

    senderId: "CUS001",

    receiverId: "VEN001",

    senderName: "Rahul Sharma",

    receiverName: "Royal Photography",

    message: "Hi, is your wedding package available?",

    sentAt: "2026-08-01 10:30 AM",

    status: "read",
  },

  {
    id: "MSG002",

    senderId: "VEN001",

    receiverId: "CUS001",

    senderName: "Royal Photography",

    receiverName: "Rahul Sharma",

    message: "Yes, it's available for your date.",

    sentAt: "2026-08-01 10:35 AM",

    status: "read",
  },

  {
    id: "MSG003",

    senderId: "CUS002",

    receiverId: "VEN001",

    senderName: "Priya Singh",

    receiverName: "Royal Photography",

    message: "Can you share your pricing details?",

    sentAt: "2026-08-02 04:15 PM",

    status: "delivered",
  },
];


// All messages
export const getMessages = () => messages;

// Message by id
export const getMessageById = (id: string) =>
  messages.find((message) => message.id === id);

// Conversation between two users
export const getConversation = (
  senderId: string,
  receiverId: string
) =>
  messages.filter(
    (message) =>
      (message.senderId === senderId &&
        message.receiverId === receiverId) ||
      (message.senderId === receiverId &&
        message.receiverId === senderId)
  );

// Inbox for a user
export const getUserMessages = (userId: string) =>
  messages.filter(
    (message) =>
      message.senderId === userId ||
      message.receiverId === userId
  );