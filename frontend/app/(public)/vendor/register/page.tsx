"use client";

import VendorRegistrationHero from "@/components/vendorRegistration/VendorRegistrationHero";
import VendorStepper from "@/components/vendorRegistration/VendorStepper";
import AccountStep from "@/components/vendorRegistration/AccountStep";
import BusinessStep from "@/components/vendorRegistration/BusinessStep";
import GalleryStep from "@/components/vendorRegistration/GalleryStep";

import { useVendorRegistrationStore } from "@/store/vendorRegistrationStore";
import ReviewStep from "@/components/vendorRegistration/ReviewStep";
import SuccessStep from "@/components/vendorRegistration/SuccessStep";

export default function VendorRegistrationPage() {
  const currentStep = useVendorRegistrationStore(
    (state) => state.currentStep
  );

  return (
    <main className="min-h-screen bg-slate-50">
      <VendorRegistrationHero />

      <section className="mx-auto max-w-6xl px-6 py-12">
        <VendorStepper currentStep={currentStep} />

        <div className="mt-10 rounded-3xl bg-white p-8 shadow-xl">
          {currentStep === 1 && <AccountStep />}

          {currentStep === 2 && <BusinessStep />}
          {currentStep === 3 && <GalleryStep />}
          {currentStep === 4 && <ReviewStep />}

          {currentStep === 5 && (
    <SuccessStep />
)}
        </div>
      </section>
    </main>
  );
}