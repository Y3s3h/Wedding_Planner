import Link from "next/link";
import VendorCard from "@/components/home/featured-vendors/VendorCard";
import { vendors } from "@/components/home/featured-vendors/vendor-data";

interface SimilarVendorsProps {
  currentVendorId: number;
  category: string;
}

export default function SimilarVendors({
  currentVendorId,
  category,
}: SimilarVendorsProps) {
  const similarVendors = vendors
    .filter(
      (vendor) =>
        vendor.id !== currentVendorId &&
        vendor.category === category
    )
    .slice(0, 4);

  // If not enough vendors of same category,
  // fill remaining slots with other vendors
  const finalVendors =
    similarVendors.length >= 4
      ? similarVendors
      : [
          ...similarVendors,
          ...vendors
            .filter(
              (vendor) =>
                vendor.id !== currentVendorId &&
                !similarVendors.some((v) => v.id === vendor.id)
            )
            .slice(0, 4 - similarVendors.length),
        ];

  return (
    <section className="mt-20">

      <div className="mb-10 flex items-center justify-between">

        <div>

          <h2 className="text-3xl font-bold text-gray-900">
            Similar Vendors
          </h2>

          <p className="mt-2 text-gray-500">
            Explore more amazing wedding professionals.
          </p>

        </div>

        <Link
          href="/vendors"
          className="font-semibold text-rose-500 hover:text-rose-600"
        >
          View All →
        </Link>

      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">

        {finalVendors.map((vendor) => (
          <VendorCard
            key={vendor.id}
            vendor={vendor}
          />
        ))}

      </div>

    </section>
  );
}