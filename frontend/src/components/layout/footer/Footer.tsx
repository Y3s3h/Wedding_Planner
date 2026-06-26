"use client";

import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";

export default function Footer() {
  return (
   <footer className="bg-[#F9F5F1] border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-8 py-16">

        {/* Top */}
        <div className="grid lg:grid-cols-5 gap-12">

          {/* Logo & About */}
          <div className="lg:col-span-2">

            <h2 className="text-3xl font-bold tracking-wide text-[#FF2E73]">
  WedPlan
</h2>

            <p className="mt-5 text-gray-600 leading-7">
              Discover trusted venues, photographers, decorators and planners
              to create unforgettable wedding memories.
            </p>

            <div className="mt-8 space-y-3 text-gray-700">

              <div className="flex items-center gap-3">
                <FaEnvelope />
                support@wedplan.com
              </div>

              <div className="flex items-center gap-3">
                <FaPhoneAlt />
                +91 98765 43210
              </div>

              <div className="flex items-center gap-3">
                <IoLocationOutline />
                India
              </div>

            </div>
          </div>

          {/* For Couples */}

          <div>
  <h3 className="text-xl font-bold text-[#2D2D2D] mb-6">
    For Couples
  </h3>

  <ul className="space-y-4 text-gray-600">
    <li>
      <Link
        href="#"
        className="hover:text-[#FF2E73] transition-colors duration-300"
      >
        Explore Marketplace
      </Link>
    </li>

    <li>
      <Link
        href="#"
        className="hover:text-[#FF2E73] transition-colors duration-300"
      >
        Budget Planner
      </Link>
    </li>

    <li>
      <Link
        href="#"
        className="hover:text-[#FF2E73] transition-colors duration-300"
      >
        Guest List Manager
      </Link>
    </li>

    <li>
      <Link
        href="#"
        className="hover:text-[#FF2E73] transition-colors duration-300"
      >
        Wedding Website
      </Link>
    </li>
  </ul>
</div>

          {/* Vendors */}

          <div>

            <h3 className="text-xl font-bold text-[#2D2D2D] mb-6">
              For Vendors
            </h3>

            <ul className="space-y-3 text-gray-600">

              <li>
  <Link href="#" className="hover:text-[#FF2E73] transition-colors duration-300">
    Become a Vendor
  </Link>
</li>

<li>
  <Link href="#" className="hover:text-[#FF2E73] transition-colors duration-300">
    Vendor Dashboard
  </Link>
</li>

<li>
  <Link href="#" className="hover:text-[#FF2E73] transition-colors duration-300">
    Vendor Registration
  </Link>
</li>

<li>
  <Link href="#" className="hover:text-[#FF2E73] transition-colors duration-300">
    Help & Support
  </Link>
</li>
            </ul>

          </div>

          {/* Company */}

         <div>
  <h3 className="text-xl font-bold text-[#2D2D2D] mb-6">
    Company
  </h3>

  <ul className="space-y-4 text-gray-600">
    <li>
      <Link
        href="#"
        className="hover:text-[#FF2E73] transition-colors duration-300"
      >
        About Us
      </Link>
    </li>

    <li>
      <Link
        href="#"
        className="hover:text-[#FF2E73] transition-colors duration-300"
      >
        Contact Us
      </Link>
    </li>

    <li>
      <Link
        href="#"
        className="hover:text-[#FF2E73] transition-colors duration-300"
      >
        Terms & Conditions
      </Link>
    </li>

    <li>
      <Link
        href="#"
        className="hover:text-[#FF2E73] transition-colors duration-300"
      >
        Privacy Policy
      </Link>
    </li>
  </ul>
</div>
      
      
        </div>
        {/* <div>
  <h3 className="text-xl font-bold text-[#2D2D2D] mb-6">
    Download App
  </h3>

  <ul className="space-y-4 text-gray-600">
    <li>📱 iOS App</li>
    <li>🤖 Android App</li>
    <li className="pt-3 font-semibold text-[#FF2E73]">
      ⭐ 4.9 / 5 Rating
    </li>
  </ul>
</div> */}
        

        {/* Divider */}

        <div className="border-t border-gray-300 my-10"></div>

        {/* Bottom */}

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-300">
          <div className="text-gray-600 text-sm">
            © {new Date().getFullYear()} WedPlan. All Rights Reserved.
          </div>

          <div className="flex gap-5 text-xl text-gray-500">

            <Link
  href="#"
  className="text-gray-500 hover:text-[#FF2E73] transition-all duration-300 hover:scale-110"
>
              <FaFacebookF />
            </Link>

            <Link
  href="#"
  className="text-gray-500 hover:text-[#FF2E73] transition-all duration-300 hover:scale-110"
>
              <FaInstagram />
            </Link>

            <Link
  href="#"
  className="text-gray-500 hover:text-[#FF2E73] transition-all duration-300 hover:scale-110"
>
              <FaTwitter />
            </Link>

          </div>

        </div>

      </div>
    </footer>
  );
}