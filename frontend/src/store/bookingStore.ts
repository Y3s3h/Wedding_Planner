import { create } from "zustand";

import { Booking } from "@/types/booking";
import {
  bookings as initialBookings,
} from "@/data/bookings";

interface BookingStore {
  bookings: Booking[];

  selectedBooking: Booking | null;

  setBookings: (bookings: Booking[]) => void;

  setSelectedBooking: (
    booking: Booking | null
  ) => void;

  addBooking: (booking: Booking) => void;

  updateBooking: (booking: Booking) => void;

  deleteBooking: (id: string) => void;
}

export const useBookingStore =
  create<BookingStore>((set) => ({
    bookings: initialBookings,

    selectedBooking: null,

    setBookings: (bookings) =>
      set({ bookings }),

    setSelectedBooking: (booking) =>
      set({
        selectedBooking: booking,
      }),

    addBooking: (booking) =>
      set((state) => ({
        bookings: [
          ...state.bookings,
          booking,
        ],
      })),

    updateBooking: (booking) =>
      set((state) => ({
        bookings: state.bookings.map((item) =>
          item.id === booking.id
            ? booking
            : item
        ),
      })),

    deleteBooking: (id) =>
      set((state) => ({
        bookings: state.bookings.filter(
          (item) => item.id !== id
        ),
      })),
  }));