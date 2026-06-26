"use client";

import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";
import ForgotPasswordModal from "./ForgotPasswordModal";

export default function AuthModal() {
  return (
    <>
      <LoginModal />
       <RegisterModal /> 
      <ForgotPasswordModal /> 
    </>
  );
}