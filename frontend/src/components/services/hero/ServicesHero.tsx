// import Image from "next/image";
// import {
//   Search,
//   MapPin,
//   Camera,
//   Building2,
//   Sparkles,
// } from "lucide-react";

// export default function ServicesHero() {
//   return (
//     <section className="relative overflow-hidden">

//       {/* Background Image */}

//       <div className="absolute inset-0">

//         <Image
//           src="/images/services-hero.jpg"
//           alt="Wedding Services"
//           fill
//           priority
//           className="object-cover"
//         />

//         <div className="absolute inset-0 bg-black/65" />

//         <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-black/60" />

//       </div>

//       <div className="relative mx-auto flex min-h-[90vh] max-w-7xl items-center px-6 ">

//         <div className="max-w-3xl">

//           <p className="font-semibold uppercase tracking-[0.45em] text-rose-300">
//             PREMIUM WEDDING SERVICES
//           </p>

//           <h1 className="mt-6 text-5xl font-bold leading-tight text-white lg:text-7xl">

//             Everything You Need

//             <br />

//             For Your

//             <span className="block text-rose-400">
//               Dream Wedding
//             </span>

//           </h1>

//           <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-200">

//             Browse India's most trusted wedding professionals,
//             compare packages, discover inspiration,
//             and book everything from one platform.

//           </p>

//           {/* Search */}

//           {/* <div className="mt-12 rounded-3xl bg-white p-3 shadow-2xl">

//             <div className="flex flex-col gap-3 lg:flex-row">

//               <div className="flex flex-1 items-center gap-3 rounded-2xl px-4">

//                 <Search className="text-rose-500" />

//                 <input
//                   placeholder="Search Photographer, Venue..."
//                   className="h-14 w-full outline-none"
//                 />

//               </div>

//               <div className="flex flex-1 items-center gap-3 rounded-2xl border border-gray-200 px-4">

//                 <MapPin className="text-rose-500" />

//                 <input
//                   placeholder="Select City"
//                   className="h-14 w-full outline-none"
//                 />

//               </div>

//               <button
//                 className="
//                 rounded-2xl
//                 bg-gradient-to-r
//                 from-rose-500
//                 to-pink-500
//                 px-10
//                 font-semibold
//                 text-white
//                 transition
//                 hover:scale-105
//                 "
//               >
//                 Search
//               </button>

//             </div>

//           </div> */}

//           {/* Quick Categories */}

//           {/* <div className="mt-10 flex flex-wrap gap-4">

//             {[
//               {
//                 icon: Building2,
//                 name: "Venues",
//               },
//               {
//                 icon: Camera,
//                 name: "Photography",
//               },
//               {
//                 icon: Sparkles,
//                 name: "Decoration",
//               },
//             ].map((item) => {
//               const Icon = item.icon;

//               return (
//                 <button
//                   key={item.name}
//                   className="
//                   flex
//                   items-center
//                   gap-2
//                   rounded-full
//                   border
//                   border-white/20
//                   bg-white/10
//                   px-5
//                   py-3
//                   text-white
//                   backdrop-blur-md
//                   transition-all
//                   hover:bg-rose-500
//                   "
//                 >
//                   <Icon size={18} />

//                   {item.name}

//                 </button>
//               );
//             })}

//           </div> */}

//         </div>

//       </div>

//       {/* Scroll Indicator */}

//       <div className="absolute bottom-8 left-1/2 -translate-x-1/2">

//         <div className="flex flex-col items-center text-white">

//           <span className="mb-2 text-sm tracking-[0.3em]">
//             SCROLL
//           </span>

//           <div className="h-12 w-[2px] bg-white/60" />

//         </div>

//       </div>

//     </section>
//   );
// }


import Image from "next/image";
import {
  Search,
  MapPin,
  Camera,
  Building2,
  Sparkles,
} from "lucide-react";

export default function ServicesHero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/services-hero1.jpg"
          alt="Wedding Services"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-black/60" />
      </div>

      {/* Hero Content */}
      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 pt-32 pb-16 lg:pt-40">
        <div className="max-w-3xl">
          <p className="font-semibold uppercase tracking-[0.45em] text-rose-300">
            PREMIUM WEDDING SERVICES
          </p>

          <h1 className="mt-6 text-5xl font-bold leading-tight text-white lg:text-7xl">
            Everything You Need
            <br />
            For Your
            <span className="block text-rose-400">
              Dream Wedding
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-200">
            Browse India's most trusted wedding professionals, compare
            packages, discover inspiration, and book everything from one
            platform.
          </p>

          {/* Search Section */}

          {/* Quick Categories */}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center text-white">
          <span className="mb-2 text-sm tracking-[0.3em]">
            SCROLL
          </span>
          <div className="h-12 w-[2px] bg-white/60" />
        </div>
      </div>
    </section>
  );
}