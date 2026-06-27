"use client";

import {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import { FaCheck } from "react-icons/fa";
import { HiChevronUpDown } from "react-icons/hi2";

interface SearchDropdownProps {
  label: string;
  placeholder: string;
  value: string;
  items: string[];
  icon: React.ReactNode;
  onChange: (value: string) => void;
}

export default function SearchDropdown({
  label,
  placeholder,
  value,
  items,
  icon,
  onChange,
}: SearchDropdownProps) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () =>
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
  }, []);

  const filteredItems = useMemo(() => {
    return items.filter((item) =>
      item.toLowerCase().includes(search.toLowerCase())
    );
  }, [items, search]);

  return (
    <div
      ref={wrapperRef}
     className="relative z-[999] w-full"
    >
      {/* Trigger */}

      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="
          flex
          w-full
          items-center
          justify-between
          bg-transparent
        "
      >
        <div className="flex items-center gap-4">

          <div className="text-rose-500 text-xl">
            {icon}
          </div>

          <div className="text-left">

            <h4 className="font-semibold text-white">
              {label}
            </h4>

            <p className="text-sm text-gray-300">
              {value || placeholder}
            </p>

          </div>

        </div>

        <HiChevronUpDown
          className={`transition duration-300 ${
            open
              ? "rotate-180 text-rose-400"
              : "text-gray-300"
          }`}
          size={20}
        />

      </button>

      {/* Dropdown */}

      {open && (
        <div
         className="
absolute
left-0
top-full
mt-3
z-[99999]
w-[240px]
overflow-hidden
rounded-2xl
border
border-zinc-700
bg-black
shadow-2xl
"
        >
          {/* Search */}

          <div className="border-b p-3">

            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              className="
                w-full
                rounded-xl
                border
                border-gray-300
                px-4
                py-2
                outline-none
                focus:border-rose-500
              "
            />

          </div>

          {/* List */}

        {/* List */}




<div
  style={{ height: "200px" }}
  className="
    hide-scrollbar
    overflow-y-auto
    overscroll-contain
    scroll-smooth
  "
>

            {filteredItems.length === 0 && (
              <p className="p-4 text-sm text-gray-500">
                No results found.
              </p>
            )}

            {filteredItems.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => {
                  onChange(item);
                  setSearch("");
                  setOpen(false);
                }}
                className="
                  flex
                  w-full
                  items-center
                  justify-between
                  px-4
                  py-2
                  text-left
                 text-rose-500
                  transition
                  hover:bg-rose-50
                  hover:text-rose-600
                "
              >
                {item}

                {value === item && (
                  <FaCheck className="text-rose-500" />
                )}
              </button>
            ))}

          </div>


         



        </div>
      )}
    </div>
  );
}