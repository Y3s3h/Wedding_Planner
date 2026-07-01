"use client";

import { useEffect, useRef, useState } from "react";
import { Bell } from "lucide-react";

import { useAuthStore } from "@/store/authStore";
import { useNotificationStore } from "@/store/notificationStore";

export default function NotificationBell() {
  const [open, setOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const { user } = useAuthStore();

  const {
    notifications,
    markAsRead,
  } = useNotificationStore();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(
          event.target as Node
        )
      ) {
        setOpen(false);
      }
    }

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () =>
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
  }, []);

  if (!user) return null;

  const userNotifications = notifications.filter(
    (notification) =>
      notification.userId === user._id
  );

  const unreadCount =
    userNotifications.filter(
      (notification) =>
        !notification.isRead
    ).length;

  return (
    <div
      ref={dropdownRef}
      className="relative"
    >
      {/* Bell */}

      <button
        onClick={() => setOpen(!open)}
        className="
          relative
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-2xl
          transition-all
          duration-300
          hover:text-rose-500
        "
      >
        <Bell
          size={23}
          className="text-gray-700"
        />

        {unreadCount > 0 && (
          <span
            className="
              absolute
              -right-1
              -top-1
              flex
              h-5
              w-5
              items-center
              justify-center
              rounded-full
              bg-rose-500
              text-[10px]
              font-bold
              text-white
            "
          >
            {unreadCount}
          </span>
        )}
      </button>

      {/* Dropdown */}

      {open && (
        <div
          className="
            absolute
            right-0
            mt-4
            w-[380px]
            overflow-hidden
            rounded-3xl
            border
            border-slate-200
            bg-white
            shadow-2xl
            animate-in
            fade-in
            zoom-in-95
            duration-200
            z-50
          "
        >
          {/* Header */}

          <div className="flex items-center justify-between border-b px-6 py-4">

            <h3 className="text-lg font-bold text-slate-900">
              Notifications
            </h3>

            {unreadCount > 0 && (
              <span className="rounded-full bg-rose-100 px-3 py-1 text-xs font-semibold text-rose-600">
                {unreadCount} New
              </span>
            )}

          </div>

          {/* Body */}

          <div className="max-h-[450px] overflow-y-auto">

            {userNotifications.length === 0 ? (
              <div className="py-14 text-center">

                <Bell
                  size={42}
                  className="mx-auto text-slate-300"
                />

                <p className="mt-4 text-slate-500">
                  No notifications yet
                </p>

              </div>
            ) : (
              userNotifications.map(
                (notification) => (
                  <button
                    key={notification.id}
                    onClick={() =>
                      markAsRead(
                        notification.id
                      )
                    }
                    className={`
                      w-full
                      border-b
                      px-6
                      py-4
                      text-left
                      transition-all
                      duration-200
                      hover:bg-slate-50
                      ${
                        !notification.isRead
                          ? "bg-rose-50"
                          : ""
                      }
                    `}
                  >
                    <div className="flex items-start gap-3">

                      {!notification.isRead && (
                        <div className="mt-2 h-2.5 w-2.5 rounded-full bg-rose-500" />
                      )}

                      <div className="flex-1">

                        <h4 className="font-semibold text-slate-900">
                          {notification.title}
                        </h4>

                        <p className="mt-1 text-sm text-slate-600">
                          {notification.message}
                        </p>

                        <span className="mt-2 block text-xs text-slate-400">
                          {new Date(
                            notification.createdAt
                          ).toLocaleString()}
                        </span>

                      </div>

                    </div>
                  </button>
                )
              )
            )}

          </div>
        </div>
      )}
    </div>
  );
}