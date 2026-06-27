// "use client";

// import { Bell, MessageCircle, Search } from "lucide-react";
// import { useAuthStore } from "@/store/authStore";

// export default function Header() {
//   const { user } = useAuthStore();

//   const firstName = user?.name?.split(" ")[0] || "Guest";

//   return (
//     <header
//       className="
//         sticky
//         top-0
//         z-20
//         flex
//         h-20
//         items-center
//         justify-between
//         border-b
//         border-gray-200
//         bg-white/80
//         px-8
//         backdrop-blur-xl
//       "
//     >
//       {/* Left */}
//       <div>
//         <h1 className="text-3xl font-bold text-gray-900">
//           Dashboard
//         </h1>

//         <p className="mt-1 text-sm text-gray-500">
//           Welcome back, {firstName} 👋
//         </p>
//       </div>

//       {/* Right */}
//       <div className="flex items-center gap-4">

//         {/* Search */}
//         <div className="relative hidden lg:block">

//           <Search
//             size={18}
//             className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
//           />

//           <input
//             placeholder="Search vendors..."
//             className="
//               h-11
//               w-80
//               rounded-2xl
//               border
//               border-gray-200
//               bg-gray-50
//               pl-11
//               pr-4
//               text-sm
//               outline-none
//               transition
//               focus:border-rose-500
//               focus:bg-white
//             "
//           />

//         </div>

//         {/* Messages */}
//         <button
//           className="
//             flex
//             h-11
//             w-11
//             items-center
//             justify-center
//             rounded-2xl
//             bg-gray-100
//             transition
//             hover:bg-rose-50
//           "
//         >
//           <MessageCircle
//             size={19}
//             className="text-gray-600"
//           />
//         </button>

//         {/* Notifications */}
//         <button
//           className="
//             relative
//             flex
//             h-11
//             w-11
//             items-center
//             justify-center
//             rounded-2xl
//             bg-gray-100
//             transition
//             hover:bg-rose-50
//           "
//         >
//           <Bell
//             size={19}
//             className="text-gray-600"
//           />

//           <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-rose-500" />
//         </button>

//         {/* Avatar */}
//         <button
//           className="
//             flex
//             h-11
//             w-11
//             items-center
//             justify-center
//             rounded-full
//             bg-gradient-to-r
//             from-rose-500
//             to-pink-500
//             font-semibold
//             text-white
//           "
//         >
//           {firstName.charAt(0)}
//         </button>

//       </div>
//     </header>
//   );
// }



"use client";

import {
  Bell,
  MessageCircle,
  Search,
  ChevronDown,
  Command,
} from "lucide-react";
import { useAuthStore } from "@/store/authStore";

export default function Header() {
  const { user } = useAuthStore();

  const firstName = user?.name?.split(" ")[0] || "Guest";

  const hour = new Date().getHours();

  let greeting = "Good Evening";

  if (hour < 12) greeting = "Good Morning";
  else if (hour < 18) greeting = "Good Afternoon";

  return (
    <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-gray-200 bg-white/80 px-8 backdrop-blur-xl shadow-sm">

      {/* Left */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">
          Dashboard
        </h1>

        <p className="mt-1 text-sm text-gray-500">
          {greeting},{" "}
          <span className="font-semibold text-gray-700">
            {firstName}
          </span>{" "}
          👋
        </p>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">

        {/* Search */}
        {/* <div className="relative hidden xl:block">

          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-700"
          />

          <input
            type="text"
            placeholder="Search vendors, bookings..."
            className="
              h-12
              w-[420px]
              rounded-2xl
              border
              border-gray-200
              bg-gray-50
              pl-11
              pr-16
              text-sm
              outline-none
              transition-all
              duration-300
              text-gray-700
              focus:border-rose-500
              focus:bg-white
              focus:shadow-lg
            "
          />

          <div className="absolute right-3 top-1/2 flex -translate-y-1/2 items-center gap-1 rounded-lg border border-gray-200 bg-white px-2 py-1 text-xs text-gray-500">
            <Command size={12} />
            K
          </div>

        </div> */}

        {/* Messages */}
        {/* <button className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gray-100 transition-all duration-300 hover:-translate-y-1 hover:bg-rose-50 hover:text-rose-500">
          <MessageCircle size={19} />
        </button> */}
        <button
  className="flex h-14 w-10 items-center justify-center rounded-2xl
             bg-gray-300 text-gray-700
             transition-all duration-300
             hover:-translate-y-1
             hover:bg-rose-50
             hover:text-rose-500"
>
  <MessageCircle className="h-7 w-7" />
</button>

        {/* Notifications */}
        {/* <button className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-gray-300 transition-all duration-300 hover:-translate-y-1 hover:bg-rose-50 hover:text-rose-500">

          <Bell size={25}  className="color-gray"/>

          <span className="absolute right-2 top-2 flex h-4 w-4 items-center justify-center rounded-full bg-rose-500 text-[9px] font-bold text-white">
            3
          </span>

        </button> */}

        <button className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-gray-300 transition-all duration-300 hover:-translate-y-1 hover:bg-rose-50 hover:text-rose-500">
  <Bell size={25} className="text-gray-700" />

  <span className="absolute right-2 top-2 flex h-4 w-4 items-center justify-center rounded-full bg-rose-500 text-[9px] font-bold text-white">
    3
  </span>
</button>

        {/* Profile */}
        <button className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-white px-3 py-2 transition-all duration-300 hover:border-rose-200 hover:shadow-md">

          <div className="relative">

            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-r from-rose-500 to-pink-500 font-bold text-white">
              {firstName.charAt(0)}
            </div>

            <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-green-500" />

          </div>

          <div className="hidden text-left lg:block">

            <p className="font-semibold text-gray-800">
              {user?.name}
            </p>

            <p className="text-xs text-gray-500">
              Customer
            </p>

          </div>

          <ChevronDown
            size={18}
            className="hidden text-gray-500 lg:block"
          />

        </button>

      </div>

    </header>
  );
}