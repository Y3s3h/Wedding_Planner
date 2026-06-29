import { create } from "zustand";

import { Booking } from "@/types/booking";
import {
  bookings,
  getBookingById,
} from "@/data/bookings";

class BookingService {
  getBookings() {
    return bookings;
  }

  getBooking(id: string) {
    return getBookingById(id);
  }
}

export const bookingService =
  new BookingService();
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
   bookings: bookingService.getBookings(),

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