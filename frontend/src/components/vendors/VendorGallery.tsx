"use client";

import Image from "next/image";

interface VendorGalleryProps {
  images: string[];
}

export default function VendorGallery({
  images,
}: VendorGalleryProps) {
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
            alt=""
            fill
            className="object-cover transition duration-500 hover:scale-105"
          />

        </div>

        {/* Right Images */}

        <div className="col-span-4 grid grid-cols-2 gap-4 lg:col-span-2">

          {images.slice(1, 5).map((image, index) => (
            <div
              key={index}
              className="relative h-60 overflow-hidden rounded-3xl"
            >
              <Image
                src={image}
                alt=""
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