import { Notification } from "@/types/notification";

const STORAGE_KEY = "notifications";

export function getNotifications(): Notification[] {
  if (typeof window === "undefined") {
    return [];
  }

  const data = localStorage.getItem(STORAGE_KEY);

  if (!data) {
    return [];
  }

  return JSON.parse(data);
}

export function saveNotifications(
  notifications: Notification[]
): void {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(notifications)
  );
}

export function createNotification(
  notification: Notification
): void {
  const notifications = getNotifications();

  notifications.unshift(notification);

  saveNotifications(notifications);
}

export function getUserNotifications(
  userId: string
): Notification[] {
  return getNotifications().filter(
    (notification) =>
      notification.userId === userId
  );
}

export function markNotificationAsRead(
  id: string
): void {
  const notifications = getNotifications();

  saveNotifications(
    notifications.map((notification) =>
      notification.id === id
        ? {
            ...notification,
            isRead: true,
          }
        : notification
    )
  );
}

export function markAllNotificationsAsRead(
  userId: string
): void {
  const notifications = getNotifications();

  saveNotifications(
    notifications.map((notification) =>
      notification.userId === userId
        ? {
            ...notification,
            isRead: true,
          }
        : notification
    )
  );
}

export function deleteNotification(
  id: string
): void {
  saveNotifications(
    getNotifications().filter(
      (notification) =>
        notification.id !== id
    )
  );
}

export function clearUserNotifications(
  userId: string
): void {
  saveNotifications(
    getNotifications().filter(
      (notification) =>
        notification.userId !== userId
    )
  );
}