export type ServiceStatus =
  | "active"
  | "inactive"
  | "draft";

export interface Service {
  id: string;

  vendorId: string;

  name: string;

  category: string;

  description: string;

  price: number;

  rating: number;

  reviews: number;

  image: string;

  status: ServiceStatus;

  createdAt: string;

  updatedAt: string;
}