// import { notFound } from "next/navigation";
// import { vendors } from "@/components/home/featured-vendors/vendor-data";

// interface PageProps {
//   params: Promise<{
//     id: string;
//   }>;
// }

// export default async function VendorDetailsPage({ params }: PageProps) {
//   const { id } = await params;

//   const vendor = vendors.find(
//     (vendor) => vendor.id.toString() === id
//   );

//   if (!vendor) {
//     notFound();
//   }

//   return (
//     <div className="min-h-screen bg-rose-50 pt-32">
//       <div className="mx-auto max-w-7xl px-6">

//         <h1 className="text-5xl font-bold">
//           {vendor.name}
//         </h1>

//         <p className="mt-3 text-gray-600">
//           {vendor.category}
//         </p>

//         <p className="mt-2 text-xl font-semibold text-rose-600">
//           ₹{vendor.price.toLocaleString()}
//         </p>

//       </div>
//     </div>
//   );
// }

import { notFound } from "next/navigation";
import { vendors } from "@/components/home/featured-vendors/vendor-data";
import VendorHero from "@/components/vendors/VendorHero";
import VendorAbout from "@/components/vendors/VendorAbout";
import VendorGallery from "@/components/vendors/VendorGallery";
import VendorBookingCard from "@/components/vendors/VendorBookingCard";
import VendorReviews from "@/components/vendors/VendorReviews";
import SimilarVendors from "@/components/vendors/SimilarVendors";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function VendorDetailsPage({
  params,
}: PageProps) {
  const { id } = await params;

  const vendor = vendors.find(
    (vendor) => vendor.id.toString() === id
  );

  if (!vendor) {
    notFound();
  }

  return (
   <main className="bg-rose-50 pb-20 pt-32">

  <div className="mx-auto max-w-7xl px-6">

    <VendorHero vendor={vendor} />

    <div className="mt-12 grid gap-10 lg:grid-cols-3">

      {/* Left */}

      <div className="space-y-10 lg:col-span-2">

        <VendorGallery images={vendor.images} />

        <VendorAbout
          description={vendor.description}
          amenities={vendor.amenities}
        />

      </div>

      {/* Right */}

      <div>

  <VendorBookingCard
    packages={vendor.packages}
  />

</div> 




    </div>




    <div className="space-y-10 lg:col-span-2">

  <VendorGallery images={vendor.images} />

  <VendorAbout
    description={vendor.description}
    amenities={vendor.amenities}
  />

  <VendorReviews />

</div>

<SimilarVendors
  currentVendorId={vendor.id}
  category={vendor.category}
/>

  </div>

</main>
  );
}