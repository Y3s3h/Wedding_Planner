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