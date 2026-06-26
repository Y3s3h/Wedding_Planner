// import Image from "next/image";
// import {
//   FaPhoneAlt,
//   FaEnvelope,
//   FaLocationDot,
//   FaChevronDown,
// } from "react-icons/fa6";

// export default function ContactHero() {
//   return (
//     <section className="relative min-h-screen overflow-hidden">
//       {/* Background */}
//       <div className="absolute inset-0">
//         <Image
//           src="/images/contact-hero.jpg"
//           alt="Contact WedPlan"
//           fill
//           priority
//           sizes="100vw"
//           className="object-cover object-center"
//         />

//         {/* Overlay */}
//         <div className="absolute inset-0 bg-black/65" />
//         <div className="absolute inset-0 bg-gradient-to-r from-[#23060f]/85 via-[#5b1632]/40 to-[#23060f]/70" />
//       </div>

//       {/* Decorative Glow */}
//       <div className="absolute -left-40 top-0 h-[450px] w-[450px] rounded-full bg-rose-500/20 blur-[170px]" />
//       <div className="absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-pink-500/20 blur-[170px]" />

//       {/* Content */}
//       <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 pt-28 lg:px-10 lg:pt-32">
//         <div className="max-w-3xl">
//           <p className="font-semibold uppercase tracking-[0.45em] text-rose-300">
//             CONTACT US
//           </p>

//           <h1 className="mt-6 text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
//             Let's Start Planning
//             <span className="block text-rose-400">
//               Your Dream Wedding
//             </span>
//           </h1>

//           <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-200">
//             Have questions, need guidance, or looking for the perfect
//             wedding vendors? Our team is here to help you every step
//             of the way.
//           </p>

//           {/* Contact Cards */}
//           <div className="mt-12 flex flex-wrap gap-5">
//             <div className="flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-6 py-3 backdrop-blur-md">
//               <FaPhoneAlt className="text-lg text-rose-300" />
//               <span className="text-white">+91 98765 43210</span>
//             </div>

//             <div className="flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-6 py-3 backdrop-blur-md">
//               <FaEnvelope className="text-lg text-rose-300" />
//               <span className="text-white">hello@wedplan.com</span>
//             </div>

//             <div className="flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-6 py-3 backdrop-blur-md">
//               <FaLocationDot className="text-lg text-rose-300" />
//               <span className="text-white">New Delhi, India</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Scroll Indicator */}
//       <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
//         <div className="flex flex-col items-center text-white">
//           <span className="mb-2 text-xs tracking-[0.35em]">
//             SCROLL
//           </span>
//           <FaChevronDown className="animate-bounce text-rose-300 text-lg" />
//         </div>
//       </div>
//     </section>
//   );
// }
import Image from "next/image";
import {
  FaPhone,
  FaEnvelope,
  FaLocationDot,
  FaChevronDown,
} from "react-icons/fa6";

export default function ContactHero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/contact-hero.jpg"
          alt="Contact WedPlan"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#23060f]/85 via-[#5b1632]/40 to-[#23060f]/70" />
      </div>

      {/* Glow */}
      <div className="absolute -left-40 top-0 h-[450px] w-[450px] rounded-full bg-rose-500/20 blur-[170px]" />
      <div className="absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-pink-500/20 blur-[170px]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 pt-28 lg:px-10 lg:pt-32">
        <div className="max-w-3xl">
          <p className="font-semibold uppercase tracking-[0.45em] text-rose-300">
            CONTACT US
          </p>

          <h1 className="mt-6 text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
            Let's Start Planning
            <span className="block text-rose-400">
              Your Dream Wedding
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-200">
            Have questions, need guidance, or looking for the perfect
            wedding vendors? Our team is here to help you every step
            of the way.
          </p>

          {/* Contact Info */}
          <div className="mt-12 flex flex-wrap gap-5">
            <div className="flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-6 py-3 backdrop-blur-md">
              <FaPhone className="text-lg text-rose-300" />
              <span className="text-white">
                +91 98765 43210
              </span>
            </div>

            <div className="flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-6 py-3 backdrop-blur-md">
              <FaEnvelope className="text-lg text-rose-300" />
              <span className="text-white">
                hello@wedplan.com
              </span>
            </div>

            <div className="flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-6 py-3 backdrop-blur-md">
              <FaLocationDot className="text-lg text-rose-300" />
              <span className="text-white">
                New Delhi, India
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <div className="flex flex-col items-center text-white">
          <span className="mb-2 text-xs tracking-[0.35em]">
            SCROLL
          </span>

          <FaChevronDown className="animate-bounce text-lg text-rose-300" />
        </div>
      </div>
    </section>
  );
}