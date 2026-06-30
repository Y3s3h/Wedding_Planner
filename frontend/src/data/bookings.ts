// import { Booking } from "@/types/booking";

// export const bookings: Booking[] = [
//   {
//     id: "BK001",

//     customerId: "CUS001",
//     vendorId: "VEN001",

//     customerName: "Rahul Sharma",
//     vendorName: "Royal Photography",

//     serviceId: "SER001",
//     serviceName: "Wedding Photography",

//     eventType: "Wedding",

//     eventDate: "2027-02-12",

//     eventTime: "11:00 AM",

//     venue: "Royal Palace",

//     city: "Delhi",

//     guests: 350,

//     amount: 120000,

//     advancePaid: 50000,

//     remainingAmount: 70000,

//     paymentStatus: "partial",

//     bookingStatus: "accepted",

//     createdAt: "2026-08-01",

//     updatedAt: "2026-08-03",
//   },

//   {
//     id: "BK002",

//     customerId: "CUS002",
//     vendorId: "VEN001",

//     customerName: "Priya Singh",
//     vendorName: "Royal Photography",

//     serviceId: "SER001",
//     serviceName: "Wedding Photography",

//     eventType: "Reception",

//     eventDate: "2027-03-04",

//     eventTime: "07:00 PM",

//     venue: "Grand Ballroom",

//     city: "Noida",

//     guests: 250,

//     amount: 80000,

//     advancePaid: 80000,

//     remainingAmount: 0,

//     paymentStatus: "paid",

//     bookingStatus: "completed",

//     createdAt: "2026-08-08",

//     updatedAt: "2026-08-10",
//   },

//   {
//     id: "BK003",

//     customerId: "CUS003",
//     vendorId: "VEN002",

//     customerName: "Aman Verma",
//     vendorName: "Dream Decor",

//     serviceId: "SER002",
//     serviceName: "Decoration",

//     eventType: "Engagement",

//     eventDate: "2027-01-18",

//     eventTime: "06:00 PM",

//     venue: "City Banquet",

//     city: "Lucknow",

//     guests: 180,

//     amount: 60000,

//     advancePaid: 15000,

//     remainingAmount: 45000,

//     paymentStatus: "partial",

//     bookingStatus: "pending",

//     createdAt: "2026-08-11",

//     updatedAt: "2026-08-11",
//   },
// ];


// // Get every booking
// export const getBookings = () => bookings;

// // Get booking by id
// export const getBookingById = (id: string) =>
//   bookings.find((booking) => booking.id === id);

// // Customer bookings
// export const getCustomerBookings = (customerId: string) =>
//   bookings.filter(
//     (booking) => booking.customerId === customerId
//   );

// // Vendor bookings
// export const getVendorBookings = (vendorId: string) =>
//   bookings.filter(
//     (booking) => booking.vendorId === vendorId
//   );

// // Pending bookings
// export const getPendingBookings = () =>
//   bookings.filter(
//     (booking) => booking.bookingStatus === "pending"
//   );

// // Completed bookings
// export const getCompletedBookings = () =>
//   bookings.filter(
//     (booking) => booking.bookingStatus === "completed"
//   );