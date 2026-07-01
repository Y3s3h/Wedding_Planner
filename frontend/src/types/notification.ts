export type NotificationType =
  | "booking"
  | "message"
  | "review"
  | "system";

export interface Notification {
  id: string;

  userId: string;

  title: string;

  message: string;

  type: NotificationType;

  link?: string;

  isRead: boolean;

  createdAt: string;
}