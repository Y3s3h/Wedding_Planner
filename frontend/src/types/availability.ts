export type AvailabilityStatus =
  | "available"
  | "blocked"
  | "booked";

export interface Availability {
  id: string;

  vendorId: number;

  date: string;

  status: AvailabilityStatus;

  reason?: string;

  createdAt: string;

  updatedAt: string;
}