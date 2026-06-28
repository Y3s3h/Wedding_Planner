import ServiceHero from "@/components/vendor/services/ServiceHero";
import ServiceStats from "@/components/vendor/services/ServiceStats";
import ServiceFilters from "@/components/vendor/services/ServiceFilters";
import ServiceGrid from "@/components/vendor/services/ServiceGrid";
import AddServiceCard from "@/components/vendor/services/AddServiceCard";

export default function VendorServicesPage() {
  return (
    <div className="space-y-8">

      <ServiceHero />

      <ServiceStats />

      <ServiceFilters />

      <ServiceGrid />

      <AddServiceCard />

    </div>
  );
}