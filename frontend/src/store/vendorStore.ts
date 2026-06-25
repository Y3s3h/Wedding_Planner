


// import { create } from "zustand";

// interface VendorStore {
//   search: string;
//   city: string;
//   categories: string[];
//   rating: number;
//   budget: number;
//   sort: string;

//   setSearch: (value: string) => void;
//   setCity: (value: string) => void;

//   toggleCategory: (category: string) => void;

//   setRating: (value: number) => void;
//   setBudget: (value: number) => void;
//   setSort: (value: string) => void;

//   resetFilters: () => void;
// }

// export const useVendorStore = create<VendorStore>((set) => ({
//   search: "",
//   city: "",
//   categories: [],
//   rating: 0,
//   budget: 0,
//   sort: "Popularity",

//   setSearch: (search) => set({ search }),
//   setCity: (city) => set({ city }),

//   toggleCategory: (category) =>
//     set((state) => ({
//       categories: state.categories.includes(category)
//         ? state.categories.filter((c) => c !== category)
//         : [...state.categories, category],
//     })),

//   setRating: (rating) => set({ rating }),
//   setBudget: (budget) => set({ budget }),
//   setSort: (sort) => set({ sort }),

//   resetFilters: () =>
//     set({
//       search: "",
//       city: "",
//       categories: [],
//       rating: 0,
//       budget: 0,
//       sort: "Popularity",
//     }),
// }));

// import { create } from "zustand";

// interface VendorStore {
//   search: string;
//   cities: string[];
//   categories: string[];

//   rating: number;
//   budget: number;
//   sort: string;
  

//   setSearch: (value: string) => void;

//   toggleCity: (city: string) => void;
//   toggleCategory: (category: string) => void;

//   setRating: (rating: number) => void;
//   setBudget: (budget: number) => void;
//   setSort: (sort: string) => void;

//   resetFilters: () => void;
// }

// export const useVendorStore = create<VendorStore>((set) => ({
//   // Initial State
//   search: "",
//   cities: [],
//   categories: [],
//   rating: 0,
//   budget: 500000,
//   sort: "Popularity",

//   // Actions
//   setSearch: (search) => set({ search }),

//   toggleCity: (city) =>
//     set((state) => ({
//       cities: state.cities.includes(city)
//         ? state.cities.filter((c) => c !== city)
//         : [...state.cities, city],
//     })),

//   toggleCategory: (category) =>
//     set((state) => ({
//       categories: state.categories.includes(category)
//         ? state.categories.filter((c) => c !== category)
//         : [...state.categories, category],
//     })),

//   setRating: (rating) => set({ rating }),
//   setBudget: (budget) => set({ budget }),
//   setSort: (sort) => set({ sort }),

//   resetFilters: () =>
//     set({
//       search: "",
//       cities: [],
//       categories: [],
//       rating: 0,
//       budget: 500000,
//       sort: "Popularity",
//     }),
// }));


import { create } from "zustand";

interface VendorStore {
  // Search
  search: string;

  // Search Bar Location (Single Select)
  city: string;

  // Sidebar Filters
  cities: string[];
  categories: string[];

  rating: number;
  budget: number;
  sort: string;

  // Actions
  setSearch: (value: string) => void;
  setCity: (city: string) => void;

  toggleCity: (city: string) => void;
  toggleCategory: (category: string) => void;

  setRating: (rating: number) => void;
  setBudget: (budget: number) => void;
  setSort: (sort: string) => void;

  resetFilters: () => void;
}

export const useVendorStore = create<VendorStore>((set) => ({
  // Initial State
  search: "",

  city: "",

  cities: [],
  categories: [],

  rating: 0,
  budget: 500000,

  sort: "Popularity",

  // Search
  setSearch: (search) => set({ search }),

  // Search Bar City
  setCity: (city) => set({ city }),

  // Sidebar Cities
  toggleCity: (city) =>
    set((state) => ({
      cities: state.cities.includes(city)
        ? state.cities.filter((c) => c !== city)
        : [...state.cities, city],
    })),

  // Sidebar Categories
  toggleCategory: (category) =>
    set((state) => ({
      categories: state.categories.includes(category)
        ? state.categories.filter((c) => c !== category)
        : [...state.categories, category],
    })),

  // Other Filters
  setRating: (rating) => set({ rating }),

  setBudget: (budget) => set({ budget }),

  setSort: (sort) => set({ sort }),

  // Reset Everything
  resetFilters: () =>
    set({
      search: "",
      city: "",
      cities: [],
      categories: [],
      rating: 0,
      budget: 500000,
      sort: "Popularity",
    }),
}));