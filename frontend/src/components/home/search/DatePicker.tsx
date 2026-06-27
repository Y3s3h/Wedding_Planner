"use client";

import { useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { HiChevronUpDown } from "react-icons/hi2";
import { format } from "date-fns";

import { Calendar } from "@/components/ui/calendar";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface DatePickerProps {
  value?: Date;
  onChange: (date: Date | undefined) => void;
}

export default function DatePicker({
  value,
  onChange,
}: DatePickerProps) {
  const [open, setOpen] = useState(false);

  return (
    <Popover
      open={open}
      onOpenChange={setOpen}
    >
      <PopoverTrigger
        className="
          flex
          w-full
          items-center
          justify-between
          bg-transparent
          text-left
        "
      >
        <div className="flex items-center gap-4">
          <FaCalendarAlt
            size={20}
            className="text-rose-500"
          />

          <div>
            <h4 className="font-semibold text-white">
              Wedding Date
            </h4>

            <p className="text-sm text-gray-300">
              {value
                ? format(value, "dd MMM yyyy")
                : "Select Date"}
            </p>
          </div>
        </div>

        <HiChevronUpDown
          size={20}
          className="text-gray-400"
        />
      </PopoverTrigger>

      <PopoverContent
        align="start"
        className="w-auto p-0"
      >
        <Calendar
          mode="single"
          selected={value}
          onSelect={(date) => {
            onChange(date);
            setOpen(false);
          }}
          disabled={(date) => date < new Date()}
        />
      </PopoverContent>
    </Popover>
  );
}