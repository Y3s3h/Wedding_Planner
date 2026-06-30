

export type ServiceStatus =
  | "active"
  | "inactive"
  | "draft";

export interface Service {
  id: string;

  vendorId: number;

  name: string;

  category: string;

  description: string;

  duration: string;

  price: number;

  rating: number;

  reviews: number;

  image: string;

  includes: string[];

  status: ServiceStatus;

  createdAt: string;

  updatedAt: string;
}