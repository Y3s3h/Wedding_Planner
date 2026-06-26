import Hero from "@/components/home/hero";
import FeaturedVendors from "@/components/home/featured-vendors";
import Categories from "@/components/home/categories";
import StatsSection from "@/components/home/stats/StatsSection";
import WhyChooseUs from "@/components/home/why-choose-us/WhyChooseUs";
import HowItWorks from "@/components/home/how-it-works/HowItWorks";
import GallerySection from "@/components/home/gallery/GallerySection";

export default function HomePage() {
  return (
    <>
      <Hero />
       <Categories />
       <FeaturedVendors />
       <StatsSection />
       <WhyChooseUs/>
       <HowItWorks />
       <GallerySection />

    </>
  );
}