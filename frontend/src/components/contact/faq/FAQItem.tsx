"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
}

export default function FAQItem({
  question,
  answer,
}: FAQItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="
      rounded-3xl
      border
      border-gray-200
      bg-white
      transition-all
      duration-300
      hover:border-rose-300
      "
    >
      <button
        onClick={() => setOpen(!open)}
        className="
        flex
        w-full
        items-center
        justify-between
        p-7
        text-left
        "
      >
        <h3 className="text-lg font-semibold text-gray-900">
          {question}
        </h3>

        <ChevronDown
          size={22}
          className={`transition-transform duration-300 ${
            open ? "rotate-180 text-rose-500" : ""
          }`}
        />
      </button>

      <div
        className={`grid transition-all duration-300 ${
          open
            ? "grid-rows-[1fr]"
            : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-7 pb-7 leading-8 text-gray-600">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}