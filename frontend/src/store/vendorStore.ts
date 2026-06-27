import { create } from "zustand";

interface VendorStore {
  // Homepage Search
  search: string;
  city: string;
  category: string;
  date: string;

  // Sidebar Filters
  cities: string[];
  categories: string[];

  rating: number;
  budget: number;
  sort: string;

  // Actions
  setSearch: (value: string) => void;
  setCity: (city: string) => void;
  setCategory: (category: string) => void;
  setDate: (date: string) => void;

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
  category: "",
  date: "",

  // Sidebar Filters
  cities: [],
  categories: [],

  rating: 0,
  budget: 500000,
  sort: "Popularity",

  // Homepage Search Actions
  setSearch: (search) => set({ search }),

  setCity: (city) => set({ city }),

  setCategory: (category) => set({ category }),

  setDate: (date) => set({ date }),

  // Sidebar Filter Actions
  toggleCity: (city) =>
    set((state) => ({
      cities: state.cities.includes(city)
        ? state.cities.filter((c) => c !== city)
        : [...state.cities, city],
    })),

  toggleCategory: (category) =>
    set((state) => ({
      categories: state.categories.includes(category)
        ? state.categories.filter((c) => c !== category)
        : [...state.categories, category],
    })),

  setRating: (rating) => set({ rating }),

  setBudget: (budget) => set({ budget }),

  setSort: (sort) => set({ sort }),

  // Reset Everything
  resetFilters: () =>
    set({
      search: "",
      city: "",
      category: "",
      date: "",
      cities: [],
      categories: [],
      rating: 0,
      budget: 500000,
      sort: "Popularity",
    }),
}));