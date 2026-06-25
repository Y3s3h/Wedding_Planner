// "use client";

// import Logo from "./Logo";
// import DesktopNavigation from "./DesktopNavigation";
// import MobileNavigation from "./MobileNavigation";
// import CTAButton from "./CTAButton";

// export default function Navbar() {
//   return (
//     <header className="fixed inset-x-0 top-6 z-50 px-4">
//       <div className="mx-auto flex h-20 max-w-7xl items-center justify-between rounded-2xl border border-white/30 bg-white/80 px-6 backdrop-blur-xl shadow-lg shadow-black/5">

//         <Logo />

//         <div className="hidden lg:flex">
//           <DesktopNavigation />
//         </div>

//         <div className="hidden lg:flex items-center gap-4">
//           <button className="text-sm font-medium text-gray-700 hover:text-rose-600 transition">
//             Login
//           </button>

//           <CTAButton />
//         </div>

//         <div className="lg:hidden">
//           <MobileNavigation />
//         </div>

//       </div>
//     </header>
//   );
// }


"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";
import DesktopNavigation from "./DesktopNavigation";
import MobileNavigation from "./MobileNavigation";
import CTAButton from "./CTAButton";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-5 z-50 px-5 transition-all duration-500 ${
        scrolled
          ? "top-3"
          : "top-5"
      }`}
    >
      <div
        className={`mx-auto flex h-20 max-w-7xl items-center justify-between rounded-3xl border transition-all duration-500 ${
          scrolled
    ? "bg-black/20 backdrop-blur-xl border-white/20"
    : "bg-black/20 backdrop-blur-xl border-white/10"
        } px-8`}
      >
        <Logo />

        <div className="hidden lg:flex">
          <DesktopNavigation />
        </div>

        <div className="hidden lg:flex items-center gap-5">
          <button className="text-white hover:text-rose-300 transition">
            Login
          </button>

          <CTAButton />
        </div>

        <div className="lg:hidden">
          <MobileNavigation />
        </div>
      </div>
    </header>
  );
}