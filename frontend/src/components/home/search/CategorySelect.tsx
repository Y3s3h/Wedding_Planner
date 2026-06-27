"use client";

import { FaMagic } from "react-icons/fa";

import { categories } from "@/data/categories";
import SearchDropdown from "./SearchDropdown";

interface CategorySelectProps {
  value: string;
  onChange: (value: string) => void;
}

export default function CategorySelect({
  value,
  onChange,
}: CategorySelectProps) {
  return (
    <SearchDropdown
      label="Category"
      placeholder="Select category"
      value={value}
      items={categories}
      icon={<FaMagic />}
      onChange={onChange}
    />
  );
}