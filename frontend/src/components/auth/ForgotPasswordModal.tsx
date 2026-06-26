"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  Mail,
  Lock,
  Eye,
  EyeOff,
  X,
} from "lucide-react";

import { useAuthStore } from "@/store/authStore";

export default function ForgotPasswordModal() {
  const {
    isForgotOpen,
    closeForgot,
    openLogin,
  } = useAuthStore();

  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeForgot();
      }
    };

    window.addEventListener("keydown", handleEsc);

    return () =>
      window.removeEventListener("keydown", handleEsc);
  }, [closeForgot]);

  const sendOtp = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setStep(2);
    }, 1500);
  };

  const verifyOtp = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setStep(3);
    }, 1500);
  };

  const resetPassword = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      closeForgot();
      openLogin();
      setStep(1);
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isForgotOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeForgot}
          className="fixed inset-0 z-[300] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
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
            <div className="flex items-center justify-between border-b px-6 py-5">
              <div className="flex items-center gap-3">
                {step > 1 && (
                  <button
                    onClick={() => setStep(step - 1)}
                    className="rounded-full p-2 hover:bg-gray-100"
                  >
                    <ArrowLeft size={18} />
                  </button>
                )}

                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Forgot Password
                  </h2>

                  <p className="mt-1 text-gray-500">
                    Reset your account password
                  </p>
                </div>
              </div>

              <button
                onClick={closeForgot}
                className="rounded-full p-2 hover:bg-gray-100"
              >
                <X size={20} />
              </button>
            </div>

            <div className="space-y-5 p-6">

                              {/* Step 1 - Email */}
              {step === 1 && (
                <>
                  <div>
                    <label className="mb-2 block font-medium text-gray-700">
                      Email Address
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
                        className="h-11 w-full rounded-xl border border-gray-300 pl-12 pr-4 text-gray-700 outline-none focus:border-rose-500"
                      />
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={sendOtp}
                    disabled={loading}
                    className="flex h-11 w-full items-center justify-center rounded-xl bg-gradient-to-r from-rose-500 to-pink-500 font-semibold text-white transition hover:opacity-90 disabled:opacity-60"
                  >
                    {loading ? "Sending OTP..." : "Send OTP"}
                  </button>
                </>
              )}

              {/* Step 2 - OTP */}
              {step === 2 && (
                <>
                  <div>
                    <label className="mb-2 block font-medium text-gray-700">
                      Enter OTP
                    </label>

                    <input
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      maxLength={6}
                      placeholder="000000"
                      className="h-11 w-full rounded-xl border border-gray-300 px-4 text-center text-xl tracking-[8px] outline-none focus:border-rose-500"
                    />
                  </div>

                  <button
                    type="button"
                    onClick={verifyOtp}
                    disabled={loading}
                    className="flex h-11 w-full items-center justify-center rounded-xl bg-gradient-to-r from-rose-500 to-pink-500 font-semibold text-white transition hover:opacity-90 disabled:opacity-60"
                  >
                    {loading ? "Verifying..." : "Verify OTP"}
                  </button>
                </>
              )}


              
            

                          {/* Step 3 - Reset Password */}
              {step === 3 && (
                <>
                  <div>
                    <label className="mb-2 block font-medium text-gray-700">
                      New Password
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
                        placeholder="New Password"
                        className="h-11 w-full rounded-xl border border-gray-300 pl-12 pr-12 text-gray-700 outline-none focus:border-rose-500"
                      />

                      <button
                        type="button"
                        onClick={() =>
                          setShowPassword(!showPassword)
                        }
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

                  <div>
                    <label className="mb-2 block font-medium text-gray-700">
                      Confirm Password
                    </label>

                    <input
                      type="password"
                      value={confirmPassword}
                      onChange={(e) =>
                        setConfirmPassword(e.target.value)
                      }
                      placeholder="Confirm Password"
                      className="h-11 w-full rounded-xl border border-gray-300 px-4 text-gray-700 outline-none focus:border-rose-500"
                    />
                  </div>

                  <button
                    type="button"
                    onClick={resetPassword}
                    disabled={loading}
                    className="flex h-11 w-full items-center justify-center rounded-xl bg-gradient-to-r from-rose-500 to-pink-500 font-semibold text-white transition hover:opacity-90 disabled:opacity-60"
                  >
                    {loading
                      ? "Resetting..."
                      : "Reset Password"}
                  </button>
                </>
              )}
                       </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}


