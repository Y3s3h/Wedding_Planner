import VendorImage from "./VendorImage";
import VendorInfo from "./VendorInfo";

interface VendorCardProps {
  vendor: {
    id: number;
    name: string;
    category: string;
    city: string;
    rating: number;
    reviews: number;
    price: number;
    image: string;
    featured: boolean;
  };
}

export default function VendorCard({
  vendor,
}: VendorCardProps) {
  return (
    <article
      className="
      group
      overflow-hidden
      rounded-3xl
      bg-white
      shadow-md
      transition-all
      duration-500
      hover:-translate-y-3
      hover:shadow-2xl
      "
    >
      <VendorImage
        image={vendor.image}
        name={vendor.name}
        rating={vendor.rating}
        reviews={vendor.reviews}
        featured={vendor.featured}
      />

      <VendorInfo
        id={vendor.id}
        name={vendor.name}
        category={vendor.category}
        city={vendor.city}
        price={vendor.price}
      />
    </article>
  );
}