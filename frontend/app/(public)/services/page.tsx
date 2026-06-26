import ServicesHero from "@/components/services/hero/ServicesHero";
import ServiceCategories from "@/components/services/categories/ServiceCategories";
import FeaturedServices from "@/components/services/featured/FeaturedServices";
import PlanningProcess from "@/components/services/process/PlanningProcess";
import ServicesCTA from "@/components/services/cta/ServicesCTA";

export default function ServicesPage() {
  return (
    <main className="bg-white">

      <ServicesHero />

      <ServiceCategories />

      <FeaturedServices />

      <PlanningProcess />

      <ServicesCTA />

    </main>
  );
}