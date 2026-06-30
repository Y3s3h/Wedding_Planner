// import { WishlistItem } from "@/types/wishlist";

// export const wishlist: WishlistItem[] = [
//   {
//     id: "WL001",

//     customerId: "CUS001",

//     vendorId: "VEN001",

//     vendorName: "Royal Photography",

//     category: "Photography",

//     city: "Delhi",

//     image: "/images/vendors/photo.jpg",

//     rating: 4.9,

//     startingPrice: 45000,

//     addedAt: "2026-08-01",
//   },

//   {
//     id: "WL002",

//     customerId: "CUS001",

//     vendorId: "VEN002",

//     vendorName: "Dream Decor",

//     category: "Decoration",

//     city: "Noida",

//     image: "/images/vendors/decor.jpg",

//     rating: 4.8,

//     startingPrice: 80000,

//     addedAt: "2026-08-05",
//   },
// ];



// // All wishlist items
// export const getWishlist = () => wishlist;

// // Customer wishlist
// export const getCustomerWishlist = (customerId: string) =>
//   wishlist.filter(
//     (item) => item.customerId === customerId
//   );

// // Vendor in wishlist
// export const getWishlistItem = (vendorId: string) =>
//   wishlist.find(
//     (item) => item.vendorId === vendorId
//   );