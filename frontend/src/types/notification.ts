export interface Notification {
  id: string;

  userId: string;

  title: string;

  message: string;

  type:
    | "booking"
    | "message"
    | "review"
    | "system";

  isRead: boolean;

  createdAt: string;
}