// import { Vendor } from "@/types/vendor";

// export const vendors: Vendor[] = [
//   {
//     id: "VEN001",

//     businessName: "Royal Photography",

//     ownerName: "Rahul Sharma",

//     email: "royal@gmail.com",

//     phone: "+91 9876543210",

//     category: "Photography",

//     city: "Delhi",

//     address: "Connaught Place",

//     description:
//       "Premium wedding photography services.",

//     profileImage: "/images/vendors/photo.jpg",

//     coverImage: "/images/vendors/cover.jpg",

//     rating: 4.9,

//     reviews: 128,

//     completedBookings: 254,

//     startingPrice: 45000,

//     verified: true,

//     status: "active",

//     createdAt: "2026-08-01",

//     updatedAt: "2026-08-01",
//   },

//   {
//     id: "VEN002",

//     businessName: "Dream Decor",

//     ownerName: "Aman Gupta",

//     email: "dream@gmail.com",

//     phone: "+91 9999999999",

//     category: "Decoration",

//     city: "Noida",

//     address: "Sector 18",

//     description:
//       "Luxury decoration specialists.",

//     profileImage: "/images/vendors/decor.jpg",

//     coverImage: "/images/vendors/cover2.jpg",

//     rating: 4.8,

//     reviews: 96,

//     completedBookings: 176,

//     startingPrice: 80000,

//     verified: true,

//     status: "active",

//     createdAt: "2026-08-01",

//     updatedAt: "2026-08-01",
//   },
// ];

// // All vendors
// export const getVendors = () => vendors;

// // Vendor by id
// export const getVendorById = (id: string) =>
//   vendors.find((vendor) => vendor.id === id);

// // Active vendors
// export const getActiveVendors = () =>
//   vendors.filter(
//     (vendor) => vendor.status === "active"
//   );

// // Category
// export const getVendorsByCategory = (
//   category: string
// ) =>
//   vendors.filter(
//     (vendor) => vendor.category === category
//   );

// // City
// export const getVendorsByCity = (
//   city: string
// ) =>
//   vendors.filter(
//     (vendor) => vendor.city === city
//   );

// // Verified
// export const getVerifiedVendors = () =>
//   vendors.filter(
//     (vendor) => vendor.verified
//   );