// import { create } from "zustand";

// import { Booking, BookingStatus } from "@/types/booking";

// import {
//   getCustomerBookings,
//   getVendorBookings,
//   createBooking,
//   updateBookingStatus,
//   deleteBooking,
// } from "@/services/booking.service";

// interface BookingStore {
//   bookings: Booking[];

//   loadCustomerBookings: (
//     customerId: string
//   ) => void;

//   loadVendorBookings: (
//     vendorId: number
//   ) => void;

//   addBooking: (
//     booking: Booking
//   ) => void;

//   updateStatus: (
//     bookingId: string,
//     status: BookingStatus
//   ) => void;

//   deleteBooking: (
//     bookingId: string
//   ) => void;
// }

// export const useBookingStore =
//   create<BookingStore>((set) => ({
//     bookings: [],

//     loadCustomerBookings: (
//       customerId
//     ) => {
//       set({
//         bookings:
//           getCustomerBookings(customerId),
//       });
//     },

//     loadVendorBookings: (
//       vendorId
//     ) => {
//       set({
//         bookings:
//           getVendorBookings(vendorId),
//       });
//     },

//     addBooking: (booking) => {
//       createBooking(booking);

//       set((state) => ({
//         bookings: [
//           ...state.bookings,
//           booking,
//         ],
//       }));
//     },

//     updateStatus: (
//       bookingId,
//       status
//     ) => {
//       updateBookingStatus(
//         bookingId,
//         status
//       );

//       set((state) => ({
//         bookings: state.bookings.map(
//           (booking) =>
//             booking.id === bookingId
//               ? {
//                   ...booking,
//                   bookingStatus: status,
//                 }
//               : booking
//         ),
//       }));
//     },

//     deleteBooking: (
//       bookingId
//     ) => {
//       deleteBooking(bookingId);

//       set((state) => ({
//         bookings:
//           state.bookings.filter(
//             (booking) =>
//               booking.id !== bookingId
//           ),
//       }));
//     },
//   }));



import { create } from "zustand";

import { Booking, BookingStatus } from "@/types/booking";

import {
  getCustomerBookings,
  getVendorBookings,
  createBooking,
  updateBookingStatus,
  deleteBooking,
} from "@/services/booking.service";

interface BookingStore {
  bookings: Booking[];

  activeTab: string;

  setActiveTab: (
    tab: string
  ) => void;

  loadCustomerBookings: (
    customerId: string
  ) => void;

  loadVendorBookings: (
    vendorId: number
  ) => void;

  addBooking: (
    booking: Booking
  ) => void;

  updateStatus: (
    bookingId: string,
    status: BookingStatus
  ) => void;

  deleteBooking: (
    bookingId: string
  ) => void;
}

export const useBookingStore =
  create<BookingStore>((set) => ({
    bookings: [],

    activeTab: "All",

    setActiveTab: (tab) =>
      set({
        activeTab: tab,
      }),

    loadCustomerBookings: (
      customerId
    ) => {
      set({
        bookings:
          getCustomerBookings(customerId),
      });
    },

    loadVendorBookings: (
      vendorId
    ) => {
      set({
        bookings:
          getVendorBookings(vendorId),
      });
    },

    addBooking: (booking) => {
      createBooking(booking);

      set((state) => ({
        bookings: [
          ...state.bookings,
          booking,
        ],
      }));
    },

    updateStatus: (
      bookingId,
      status
    ) => {
      updateBookingStatus(
        bookingId,
        status
      );

      set((state) => ({
        bookings: state.bookings.map(
          (booking) =>
            booking.id === bookingId
              ? {
                  ...booking,
                  bookingStatus: status,
                }
              : booking
        ),
      }));
    },

    deleteBooking: (
      bookingId
    ) => {
      deleteBooking(bookingId);

      set((state) => ({
        bookings:
          state.bookings.filter(
            (booking) =>
              booking.id !== bookingId
          ),
      }));
    },
  }));