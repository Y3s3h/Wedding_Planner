"use client";

import { Check } from "lucide-react";

interface VendorStepperProps {
  currentStep: number;
}

const steps = [
  "Account",
  "Business",
  "Gallery",
  "Review",
];

export default function VendorStepper({
  currentStep,
}: VendorStepperProps) {
  return (
    <div className="flex items-center justify-between">

      {steps.map((step, index) => {

        const stepNumber = index + 1;

        const completed =
          stepNumber < currentStep;

        const active =
          stepNumber === currentStep;

        return (
          <div
            key={step}
            className="flex flex-1 items-center"
          >

            <div className="flex flex-col items-center">

              <div
                className={`
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  border-2
                  font-bold
                  transition-all

                  ${
                    completed
                      ? "border-green-500 bg-green-500 text-white"
                      : active
                      ? "border-blue-600 bg-blue-600 text-white"
                      : "border-slate-300 bg-white text-slate-500"
                  }
                `}
              >
                {completed ? (
                  <Check size={20} />
                ) : (
                  stepNumber
                )}
              </div>

              <p
                className={`
                  mt-3
                  text-sm
                  font-semibold

                  ${
                    active
                      ? "text-blue-700"
                      : completed
                      ? "text-green-600"
                      : "text-slate-500"
                  }
                `}
              >
                {step}
              </p>

            </div>

            {index !== steps.length - 1 && (
              <div
                className={`
                  mx-4
                  h-1
                  flex-1
                  rounded-full

                  ${
                    completed
                      ? "bg-green-500"
                      : "bg-slate-200"
                  }
                `}
              />
            )}

          </div>
        );

      })}
    </div>
  );
}