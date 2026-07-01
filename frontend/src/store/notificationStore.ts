import { create } from "zustand";

import { Notification } from "@/types/notification";

import {
  getNotifications,
  createNotification,
  markNotificationAsRead,
  markAllNotificationsAsRead,
  deleteNotification,
} from "@/services/notification.service";

interface NotificationStore {
  notifications: Notification[];

  setNotifications: (
    notifications: Notification[]
  ) => void;

  refreshNotifications: () => void;

  addNotification: (
    notification: Notification
  ) => void;

  markAsRead: (
    id: string
  ) => void;

  markAllAsRead: (
    userId: string
  ) => void;

  removeNotification: (
    id: string
  ) => void;
}

export const useNotificationStore =
  create<NotificationStore>((set) => ({

    notifications: getNotifications(),

    setNotifications: (notifications) =>
      set({
        notifications,
      }),

    refreshNotifications: () =>
      set({
        notifications: getNotifications(),
      }),

    addNotification: (notification) => {
      createNotification(notification);

      set({
        notifications: getNotifications(),
      });
    },

    markAsRead: (id) => {
      markNotificationAsRead(id);

      set({
        notifications: getNotifications(),
      });
    },

    markAllAsRead: (userId) => {
      markAllNotificationsAsRead(userId);

      set({
        notifications: getNotifications(),
      });
    },

    removeNotification: (id) => {
      deleteNotification(id);

      set({
        notifications: getNotifications(),
      });
    },
  }));