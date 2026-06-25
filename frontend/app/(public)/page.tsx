import Hero from "@/components/home/hero";
import FeaturedVendors from "@/components/home/featured-vendors";
import Categories from "@/components/home/categories";

export default function HomePage() {
  return (
    <>
      <Hero />
       <Categories />
       <FeaturedVendors />
    </>
  );
}