// "use client";

// import { ArrowRight, BadgeCheck, Users, CalendarHeart } from "lucide-react";

// export default function VendorRegistrationHero() {
//   return (
//     <section className="bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 text-white">

//       <div className="mx-auto flex max-w-7xl flex-col items-center px-6 py-20 text-center">

//         <span className="rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-medium backdrop-blur">
//           Join India's Trusted Wedding Marketplace
//         </span>

//         <h1 className="mt-8 max-w-4xl text-5xl font-extrabold leading-tight">
//           Grow Your Wedding Business
//           <br />
//           With Thousands of Couples
//         </h1>

//         <p className="mt-6 max-w-2xl text-lg text-blue-100">
//           Showcase your services, receive genuine bookings,
//           manage customers, and grow your business through one
//           powerful platform.
//         </p>

//         <div className="mt-10 flex flex-wrap justify-center gap-8">

//           <div className="flex items-center gap-3">
//             <Users className="h-6 w-6" />
//             <span>10,000+ Couples</span>
//           </div>

//           <div className="flex items-center gap-3">
//             <BadgeCheck className="h-6 w-6" />
//             <span>Verified Vendors</span>
//           </div>

//           <div className="flex items-center gap-3">
//             <CalendarHeart className="h-6 w-6" />
//             <span>Daily Booking Requests</span>
//           </div>

//         </div>

//         <button
//           className="
//             mt-12
//             inline-flex
//             items-center
//             gap-3
//             rounded-2xl
//             bg-white
//             px-8
//             py-4
//             font-semibold
//             text-blue-700
//             transition
//             hover:scale-105
//           "
//         >
//           Start Registration

//           <ArrowRight size={20} />
//         </button>

//       </div>
//     </section>
//   );
// }

"use client";

import {
  ArrowRight,
  BadgeCheck,
  Users,
  CalendarHeart,
} from "lucide-react";

export default function VendorRegistrationHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-700 to-indigo-900 text-white">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Decorative Blur */}
      <div className="absolute -top-32 -left-20 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 py-28 text-center">
        {/* Badge */}
        <span className="rounded-full border border-white/20 bg-white/10 px-6 py-2 text-sm font-medium text-gray-100 backdrop-blur-md">
          Join India's Trusted Wedding Marketplace
        </span>

        {/* Heading */}
        <h1 className="mt-8 max-w-5xl text-5xl font-extrabold leading-tight tracking-tight md:text-6xl">
          Grow Your Wedding Business
          <br />
          With Thousands of Couples
        </h1>

        {/* Description */}
        <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-200 md:text-xl">
          Showcase your services, receive genuine bookings,
          manage customers, and grow your business through one
          powerful platform.
        </p>

        {/* Stats */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-10 text-gray-200">
          <div className="flex items-center gap-3">
            <Users className="h-6 w-6 text-white" />
            <span className="text-lg">10,000+ Couples</span>
          </div>

          <div className="flex items-center gap-3">
            <BadgeCheck className="h-6 w-6 text-white" />
            <span className="text-lg">Verified Vendors</span>
          </div>

          <div className="flex items-center gap-3">
            <CalendarHeart className="h-6 w-6 text-white" />
            <span className="text-lg">Daily Booking Requests</span>
          </div>
        </div>

        {/* CTA Button */}
        <button
          className="
            mt-14
            inline-flex
            items-center
            gap-3
            rounded-2xl
            bg-white
            px-8
            py-4
            text-lg
            font-semibold
            text-blue-700
            shadow-xl
            transition-all
            duration-300
            hover:-translate-y-1
            hover:scale-105
            hover:shadow-2xl
          "
        >
          Start Registration
          <ArrowRight size={22} />
        </button>
      </div>
    </section>
  );
}