import PortfolioHero from "@/components/vendor/portfolio/PortfolioHero";
import PortfolioStats from "@/components/vendor/portfolio/PortfolioStats";
import PortfolioFilters from "@/components/vendor/portfolio/PortfolioFilters";
import PortfolioGrid from "@/components/vendor/portfolio/PortfolioGrid";
import UploadPortfolioCard from "@/components/vendor/portfolio/UploadPortfolioCard";

export default function VendorPortfolioPage() {
  return (
    <div className="space-y-8">

      <PortfolioHero />

      <PortfolioStats />

      <PortfolioFilters />

      <PortfolioGrid />

      <UploadPortfolioCard />

    </div>
  );
}