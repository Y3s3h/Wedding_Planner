import { create } from "zustand";

interface UIStore {
  sidebarOpen: boolean;

  mobileMenuOpen: boolean;

  loading: boolean;

  openSidebar: () => void;

  closeSidebar: () => void;

  toggleSidebar: () => void;

  openMobileMenu: () => void;

  closeMobileMenu: () => void;

  toggleMobileMenu: () => void;

  setLoading: (loading: boolean) => void;
}

export const useUIStore = create<UIStore>((set) => ({
  sidebarOpen: true,

  mobileMenuOpen: false,

  loading: false,

  openSidebar: () =>
    set({
      sidebarOpen: true,
    }),

  closeSidebar: () =>
    set({
      sidebarOpen: false,
    }),

  toggleSidebar: () =>
    set((state) => ({
      sidebarOpen: !state.sidebarOpen,
    })),

  openMobileMenu: () =>
    set({
      mobileMenuOpen: true,
    }),

  closeMobileMenu: () =>
    set({
      mobileMenuOpen: false,
    }),

  toggleMobileMenu: () =>
    set((state) => ({
      mobileMenuOpen: !state.mobileMenuOpen,
    })),

  setLoading: (loading) =>
    set({
      loading,
    }),
}));