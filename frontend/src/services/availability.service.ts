import { Availability } from "@/types/availability";

const STORAGE_KEY = "availability";

export function getAvailability(): Availability[] {
  if (typeof window === "undefined") {
    return [];
  }

  const data = localStorage.getItem(STORAGE_KEY);

  if (!data) {
    return [];
  }

  return JSON.parse(data);
}

export function saveAvailability(
  availability: Availability[]
): void {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(availability)
  );
}

export function createAvailability(
  item: Availability
): void {
  const availability = getAvailability();

  availability.push(item);

  saveAvailability(availability);
}

export function updateAvailability(
  updatedItem: Availability
): void {
  const availability = getAvailability();

  saveAvailability(
    availability.map((item) =>
      item.id === updatedItem.id
        ? updatedItem
        : item
    )
  );
}

export function deleteAvailability(
  id: string
): void {
  saveAvailability(
    getAvailability().filter(
      (item) => item.id !== id
    )
  );
}

export function getVendorAvailability(
  vendorId: number
): Availability[] {
  return getAvailability().filter(
    (item) => item.vendorId === vendorId
  );
}

export function getAvailabilityByDate(
  vendorId: number,
  date: string
): Availability | undefined {
  return getAvailability().find(
    (item) =>
      item.vendorId === vendorId &&
      item.date === date
  );
}

/* ------------------------------
   Booking Helpers
------------------------------ */

export function isDateBlocked(
  vendorId: number,
  date: string
): boolean {
  return getAvailability().some(
    (item) =>
      item.vendorId === vendorId &&
      item.date === date &&
      item.status === "blocked"
  );
}

export function isDateBooked(
  vendorId: number,
  date: string
): boolean {
  return getAvailability().some(
    (item) =>
      item.vendorId === vendorId &&
      item.date === date &&
      item.status === "booked"
  );
}