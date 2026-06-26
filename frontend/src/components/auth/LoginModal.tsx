"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  X,
} from "lucide-react";

import { useAuthStore } from "@/store/authStore";

export default function LoginModal() {
  const {
    isLoginOpen,
    closeLogin,
    openRegister,
    openForgot,
    login,
  } = useAuthStore();

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [remember, setRemember] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeLogin();
      }
    };

    window.addEventListener("keydown", handleEsc);

    return () => window.removeEventListener("keydown", handleEsc);
  }, [closeLogin]);

  const handleLogin = () => {
    setLoading(true);

    setTimeout(() => {
      login({
        _id: "1",
        name: "Yash Yadav",
        email,
        phone: "9876543210",
      });

      setLoading(false);
      closeLogin();
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isLoginOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeLogin}
          className="fixed inset-0 z-[300] flex items-center justify-center bg-black/60 backdrop-blur-sm p-5"
        >
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95,
              y: 50,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.95,
              y: 50,
            }}
            transition={{
              duration: 0.35,
            }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-md overflow-hidden rounded-3xl bg-white shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b px-7 py-6">
              <div>
                <h2 className="text-3xl font-bold text-gray-900">
                  Welcome Back
                </h2>

                <p className="mt-2 text-gray-500">
                  Continue planning your dream wedding
                </p>
              </div>

              <button
                onClick={closeLogin}
                className="rounded-full p-2 transition hover:bg-gray-100"
              >
                <X size={22} />
              </button>
            </div>

            {/* Form */}
            <div className="space-y-6 p-7">
              {/* Email */}
              <div>
                <label className="mb-2 block font-medium text-gray-700">
                  Email
                </label>

                <div className="relative">
                  <Mail
                    size={20}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="h-12 w-full rounded-xl border border-gray-300 pl-12 pr-4 text-gray-700 outline-none focus:border-rose-500"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="mb-2 block font-medium text-gray-700">
                  Password
                </label>

                <div className="relative">
                  <Lock
                    size={20}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    className="h-12 w-full rounded-xl border border-gray-300 pl-12 pr-12 text-gray-700 outline-none focus:border-rose-500"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showPassword ? (
                      <EyeOff size={20} />
                    ) : (
                      <Eye size={20} />
                    )}
                  </button>
                </div>
              </div>

              {/* Remember Me + Forgot Password */}
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 text-sm text-gray-700">
                  <input
                    type="checkbox"
                    checked={remember}
                    onChange={(e) => setRemember(e.target.checked)}
                    className="accent-rose-500"
                  />
                  Remember Me
                </label>

                <button
                  type="button"
                  onClick={() => {
                    closeLogin();
                    openForgot();
                  }}
                  className="text-sm font-medium text-rose-500 transition hover:text-rose-600"
                >
                  Forgot Password?
                </button>
              </div>

              {/* Login Button */}
              <button
                type="button"
                onClick={handleLogin}
                disabled={loading}
                className="flex h-12 w-full items-center justify-center rounded-xl bg-gradient-to-r from-rose-500 to-pink-500 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-[1.01] hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-70"
              >
                {loading ? (
                  <div className="flex items-center gap-3">
                    <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    Signing In...
                  </div>
                ) : (
                  "Login"
                )}
              </button>

              {/* Divider */}
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200" />
                </div>

                <div className="relative flex justify-center">
                  <span className="bg-white px-4 text-sm text-gray-500">
                    OR
                  </span>
                </div>
              </div>

              {/* Google Button */}
              <button
                type="button"
                className="flex h-12 w-full items-center justify-center rounded-xl border border-gray-300 bg-white font-medium text-gray-700 transition hover:bg-gray-50"
              >
                Continue with Google
              </button>

              {/* Register */}
              <div className="text-center text-sm text-gray-600">
                Don't have an account?
                <button
                  type="button"
                  onClick={() => {
                    closeLogin();
                    openRegister();
                  }}
                  className="ml-2 font-semibold text-rose-500 hover:text-rose-600"
                >
                  Register
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}