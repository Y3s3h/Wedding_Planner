export interface Vendor {
  id: number;
  name: string;
  category: string;
  city: string;

  rating: number;
  reviews: number;

  price: number;

  image: string;
  images: string[];

  featured: boolean;

  description: string;

  amenities: string[];

  packages: {
    id: number;
    name: string;
    price: number;
  }[];
}


// export type VendorStatus =
//   | "active"
//   | "inactive"
//   | "pending";

// export interface Vendor {
//   id: string;

//   businessName: string;

//   ownerName: string;

//   email: string;

//   phone: string;

//   category: string;

//   city: string;

//   address: string;

//   description: string;

//   profileImage: string;

//   coverImage: string;

//   rating: number;

//   reviews: number;

//   completedBookings: number;

//   startingPrice: number;

//   verified: boolean;

//   status: VendorStatus;

//   createdAt: string;

//   updatedAt: string;
// }