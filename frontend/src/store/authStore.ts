// import { create } from "zustand";
// import { persist } from "zustand/middleware";
// import { User } from "@/types/auth";

// interface AuthStore {

//   user: User | null;

//   isAuthenticated: boolean;

//   isLoading: boolean;

//   isLoginOpen: boolean;

//   isRegisterOpen: boolean;

//   isForgotOpen: boolean;

//   openLogin: () => void;

//   closeLogin: () => void;

//   openRegister: () => void;

//   closeRegister: () => void;

//   openForgot: () => void;

//   closeForgot: () => void;

//   login: (user: User) => void;

//   logout: () => void;
// }

// export const useAuthStore = create<AuthStore>((set) => ({

//   user: null,

//   isAuthenticated: false,

//   isLoading: false,

//   isLoginOpen: false,

//   isRegisterOpen: false,

//   isForgotOpen: false,

//   openLogin: () =>
//     set({ isLoginOpen: true }),

//   closeLogin: () =>
//     set({ isLoginOpen: false }),

//   openRegister: () =>
//     set({
//       isLoginOpen: false,
//       isRegisterOpen: true,
//     }),

//   closeRegister: () =>
//     set({ isRegisterOpen: false }),

//   openForgot: () =>
//     set({
//       isLoginOpen: false,
//       isForgotOpen: true,
//     }),

//   closeForgot: () =>
//     set({ isForgotOpen: false }),

//   login: (user) =>
//     set({
//       user,
//       isAuthenticated: true,
//       isLoginOpen: false,
//     }),

//   logout: () =>
//     set({
//       user: null,
//       isAuthenticated: false,
//     }),
// }));



import { create } from "zustand";
import { persist } from "zustand/middleware";
import { User } from "@/types/auth";

interface AuthStore {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  isLoginOpen: boolean;
  isRegisterOpen: boolean;
  isForgotOpen: boolean;

  openLogin: () => void;
  closeLogin: () => void;
  openRegister: () => void;
  closeRegister: () => void;
  openForgot: () => void;
  closeForgot: () => void;

  login: (user: User) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      isLoading: false,

      isLoginOpen: false,
      isRegisterOpen: false,
      isForgotOpen: false,

      openLogin: () =>
        set({ isLoginOpen: true }),

      closeLogin: () =>
        set({ isLoginOpen: false }),

      openRegister: () =>
        set({
          isLoginOpen: false,
          isRegisterOpen: true,
        }),

      closeRegister: () =>
        set({ isRegisterOpen: false }),

      openForgot: () =>
        set({
          isLoginOpen: false,
          isForgotOpen: true,
        }),

      closeForgot: () =>
        set({ isForgotOpen: false }),

      login: (user) =>
        set({
          user,
          isAuthenticated: true,
          isLoginOpen: false,
        }),

      logout: () =>
        set({
          user: null,
          isAuthenticated: false,
        }),
    }),
    {
      name: "auth-storage",
    }
  )
);