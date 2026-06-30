// export type BookingStatus =
//   | "pending"
//   | "accepted"
//   | "completed"
//   | "cancelled";

// export type PaymentStatus =
//   | "pending"
//   | "partial"
//   | "paid"
//   | "refunded";

// export interface Booking {
//   id: string;

//   customerId: string;
//   vendorId: string;

//   customerName: string;
//   vendorName: string;

//   serviceId: string;
//   serviceName: string;

//   eventType: string;

//   eventDate: string;

//   eventTime: string;

//   venue: string;

//   city: string;

//   guests: number;

//   amount: number;

//   advancePaid: number;

//   remainingAmount: number;

//   paymentStatus: PaymentStatus;

//   bookingStatus: BookingStatus;

//   createdAt: string;

//   updatedAt: string;
// }
export type BookingStatus =
  | "pending"
  | "accepted"
  | "completed"
  | "cancelled";

export type PaymentStatus =
  | "pending"
  | "partial"
  | "paid"
  | "refunded";

export interface Booking {
  id: string;

  bookingNumber: string;

  customerId: string;
  vendorId: number;

  customerName: string;
  customerEmail: string;
  customerPhone: string;

  vendorName: string;

  category: string;

  packageName: string;

  eventType: string;

  eventDate: string;

  eventTime: string;

  venue: string;

  city: string;

  guests: number;

  brideName: string;

  groomName: string;

  specialRequirements: string;

  amount: number;

  advancePaid: number;

  remainingAmount: number;

  paymentStatus: PaymentStatus;

  bookingStatus: BookingStatus;

  createdAt: string;

  updatedAt: string;
}