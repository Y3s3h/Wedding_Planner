"use client";

import { FaMapMarkerAlt } from "react-icons/fa";

import { cities } from "@/data/cities";
import SearchDropdown from "./SearchDropdown";

interface LocationSelectProps {
  value: string;
  onChange: (value: string) => void;
}

export default function LocationSelect({
  value,
  onChange,
}: LocationSelectProps) {
  return (
    <SearchDropdown
      label="Location"
      placeholder="Select your city"
      value={value}
      items={cities}
      icon={<FaMapMarkerAlt />}
      onChange={onChange}
    />
  );
}