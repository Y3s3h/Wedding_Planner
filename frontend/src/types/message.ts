export type MessageStatus =
  | "sent"
  | "delivered"
  | "read";

export interface Message {
  id: string;

  senderId: string;

  receiverId: string;

  senderName: string;

  receiverName: string;

  message: string;

  sentAt: string;

  status: MessageStatus;
}