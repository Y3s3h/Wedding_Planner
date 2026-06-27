// "use client";

// import Link from "next/link";
// import { motion } from "framer-motion";
// import {
//   ArrowRight,
//   CalendarDays,
//   Sparkles,
//   Clock3,
// } from "lucide-react";
// import { useAuthStore } from "@/store/authStore";

// export default function WelcomeHero() {
//   const { user } = useAuthStore();

//   const firstName =
//     user?.name?.split(" ")[0] || "Guest";

//   const hour = new Date().getHours();

//   let greeting = "Good Evening 🌙";

//   if (hour < 12) greeting = "Good Morning ☀️";
//   else if (hour < 18) greeting = "Good Afternoon 🌤️";

//   return (
//     <motion.section
//       initial={{ opacity: 0, y: 25 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//       className="
//       relative
//       overflow-hidden
//       rounded-[32px]
//       bg-gradient-to-br
//       from-rose-500
//       via-pink-500
//       to-rose-600
//       p-10
//       text-white
//       shadow-xl
//     "
//     >
//       {/* Background Glow */}

//       <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

//       <div className="absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

//       <div className="relative z-10 flex flex-col gap-10 lg:flex-row lg:justify-between">

//         {/* Left */}

//         <div>

//           <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 backdrop-blur">

//             <Sparkles size={16} />

//             <span className="text-sm font-medium">
//               {greeting}
//             </span>

//           </div>

//           <h1 className="mt-6 text-5xl font-bold leading-tight">

//             Welcome back,

//             <br />

//             {firstName} 👋

//           </h1>

//           <p className="mt-6 max-w-2xl text-lg text-rose-100">

//             Continue planning your dream wedding with trusted vendors,
//             venues and unforgettable memories.

//           </p>

//           <div className="mt-8 flex flex-wrap gap-4">

//             <Link
//               href="/vendors"
//               className="
//               flex
//               items-center
//               gap-2
//               rounded-2xl
//               bg-white
//               px-7
//               py-4
//               font-semibold
//               text-rose-600
//               transition
//               hover:-translate-y-1
//             "
//             >
//               Explore Vendors

//               <ArrowRight size={18} />

//             </Link>

//             <Link
//               href="/customer/planner"
//               className="
//               rounded-2xl
//               border
//               border-white/30
//               bg-white/10
//               px-7
//               py-4
//               font-semibold
//               backdrop-blur
//               transition
//               hover:bg-white/20
//             "
//             >
//               Wedding Planner
//             </Link>

//             <Link
//               href="/become-vendor"
//               className="
//               rounded-2xl
//               border
//               border-white/30
//               bg-white/10
//               px-7
//               py-4
//               font-semibold
//               backdrop-blur
//               transition
//               hover:bg-white/20
//             "
//             >
//               Become Vendor
//             </Link>

//           </div>

//         </div>

//         {/* Right */}

//         <div className="w-full max-w-sm rounded-3xl bg-white/10 p-6 backdrop-blur">

//           <div className="flex items-center gap-3">

//             <CalendarDays size={22} />

//             <h3 className="text-xl font-semibold">
//               Wedding Date
//             </h3>

//           </div>

//           <p className="mt-4 text-4xl font-bold">
//             12 Feb 2027
//           </p>

//           <div className="mt-8 flex items-center gap-3">

//             <Clock3 size={20} />

//             <span className="text-lg">
//               182 Days Remaining
//             </span>

//           </div>

//           <div className="mt-8">

//             <div className="mb-2 flex justify-between text-sm">

//               <span>Planning Progress</span>

//               <span>72%</span>

//             </div>

//             <div className="h-3 rounded-full bg-white/20">

//               <div className="h-3 w-[72%] rounded-full bg-white" />

//             </div>

//           </div>

//         </div>

//       </div>

//     </motion.section>
//   );
// }


"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarDays,
  Sparkles,
  Clock3,
  Wallet,
  Users,
  CheckCircle2,
  Building2,
} from "lucide-react";
import { useAuthStore } from "@/store/authStore";

export default function WelcomeHero() {
  const { user } = useAuthStore();

  const firstName = user?.name?.split(" ")[0] || "Guest";

  const hour = new Date().getHours();

  let greeting = "Good Evening 🌙";

  if (hour < 12) greeting = "Good Morning ☀️";
  else if (hour < 18) greeting = "Good Afternoon 🌤️";

  return (
    <motion.section
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-rose-500 via-pink-500 to-rose-600 px-8 py-8 text-white shadow-xl"
    >
      {/* Background Glow */}
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

      <div className="relative z-10 flex flex-col gap-8 xl:flex-row xl:items-start xl:justify-between">
        {/* Left */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 backdrop-blur-md">
            <Sparkles size={16} />

            <span className="text-sm font-medium">
              {greeting}
            </span>
          </div>

          <h1 className="mt-5 text-4xl font-bold leading-tight xl:text-5xl">
            Welcome back,
            <br />
            {firstName} 👋
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-rose-100">
            Continue planning your dream wedding with trusted vendors,
            premium venues and unforgettable experiences.
          </p>

          {/* Buttons */}
          <div className="mt-7 flex flex-wrap gap-4">
            <Link
              href="/vendors"
              className="flex items-center gap-2 rounded-2xl bg-white px-6 py-3 font-semibold text-rose-600 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              Explore Vendors
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/customer/planner"
              className="rounded-2xl border border-white/30 bg-white/10 px-6 py-3 font-semibold backdrop-blur-md transition hover:bg-white/20"
            >
              Wedding Planner
            </Link>

            <Link
              href="/customer/bookings"
              className="rounded-2xl border border-white/30 bg-white/10 px-6 py-3 font-semibold backdrop-blur-md transition hover:bg-white/20"
            >
              My Bookings
            </Link>
          </div>

          {/* Bottom Stats */}
          <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
            <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-md">
              <Building2 className="mb-3" size={22} />

              <p className="text-3xl font-bold">
                12
              </p>

              <p className="mt-1 text-sm text-rose-100">
                Vendors Booked
              </p>
            </div>

            <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-md">
              <Users className="mb-3" size={22} />

              <p className="text-3xl font-bold">
                420
              </p>

              <p className="mt-1 text-sm text-rose-100">
                Guests
              </p>
            </div>

            <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-md">
              <Wallet className="mb-3" size={22} />

              <p className="text-3xl font-bold">
                ₹6.2L
              </p>

              <p className="mt-1 text-sm text-rose-100">
                Budget Used
              </p>
            </div>

            <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-md">
              <CheckCircle2 className="mb-3" size={22} />

              <p className="text-3xl font-bold">
                72%
              </p>

              <p className="mt-1 text-sm text-rose-100">
                Completed
              </p>
            </div>
          </div>
        </div>

        {/* Right Card */}
        <div className="w-full max-w-sm rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <CalendarDays size={22} />

            <h3 className="text-xl font-semibold">
              Wedding Countdown
            </h3>
          </div>

          <p className="mt-5 text-4xl font-bold">
            12 Feb 2027
          </p>

          <div className="mt-5 flex items-center gap-2 text-lg">
            <Clock3 size={18} />

            <span>182 Days Remaining</span>
          </div>

          <div className="mt-8">
            <div className="mb-3 flex justify-between text-sm">
              <span>Planning Progress</span>

              <span className="font-semibold">
                72%
              </span>
            </div>

            <div className="h-3 rounded-full bg-white/20">
              <div className="h-3 w-[72%] rounded-full bg-white" />
            </div>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="rounded-2xl bg-white/10 p-4">
              <p className="text-2xl font-bold">
                ₹6.2L
              </p>

              <p className="mt-1 text-sm text-rose-100">
                Budget Used
              </p>
            </div>

            <div className="rounded-2xl bg-white/10 p-4">
              <p className="text-2xl font-bold">
                18
              </p>

              <p className="mt-1 text-sm text-rose-100">
                Tasks Done
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}