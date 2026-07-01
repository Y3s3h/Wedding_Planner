"use client";

import Image from "next/image";
import { getVendorPortfolio } from "@/services/portfolio.service";

interface VendorGalleryProps {
  vendorId: number;
}

export default function VendorGallery({
  vendorId,
}: VendorGalleryProps) {
  const portfolio = getVendorPortfolio(vendorId);

  const images = portfolio.map((item) => item.image);

  if (images.length === 0) {
    return (
      <section className="mt-10 rounded-3xl border border-dashed border-slate-300 bg-white p-12 text-center">
        <h2 className="text-3xl font-bold text-slate-900">
          Gallery
        </h2>

        <p className="mt-4 text-slate-500">
          This vendor hasn't uploaded any portfolio yet.
        </p>
      </section>
    );
  }

  return (
    <section className="mt-10">

      <div className="mb-6">

        <h2 className="text-3xl font-bold text-gray-900">
          Gallery
        </h2>

        <p className="mt-2 text-gray-500">
          Explore our beautiful wedding moments.
        </p>

      </div>

      <div className="grid grid-cols-4 gap-4">

        {/* Main Image */}

        <div className="relative col-span-4 h-[500px] overflow-hidden rounded-3xl lg:col-span-2">

          <Image
            src={images[0]}
            alt="Portfolio"
            fill
            className="object-cover transition duration-500 hover:scale-105"
          />

        </div>

        {/* Remaining Images */}

        <div className="col-span-4 grid grid-cols-2 gap-4 lg:col-span-2">

          {images.slice(1, 5).map((image, index) => (
            <div
              key={index}
              className="relative h-60 overflow-hidden rounded-3xl"
            >
              <Image
                src={image}
                alt="Portfolio"
                fill
                className="object-cover transition duration-500 hover:scale-105"
              />
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}