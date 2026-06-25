import SearchBar from "@/components/vendors/SearchBar";
import FilterSidebar from "@/components/vendors/FilterSidebar";
import SortDropdown from "@/components/vendors/SortDropdown";
import VendorGrid from "@/components/vendors/VendorGrid";
import Pagination from "@/components/vendors/Pagination";

export default function VendorsPage() {
  return (
    <main className="min-h-screen bg-rose-50 pt-32">

      <section className="mx-auto max-w-7xl px-6">

        <div className="mb-12">

          <h1 className="text-5xl font-bold text-gray-900">
            Wedding Vendors
          </h1>

          <p className="mt-3 text-lg text-gray-600">
            Discover India's best wedding professionals.
          </p>

        </div>

        <SearchBar />

        <div className="mt-10 flex gap-10">

          <FilterSidebar />

          <div className="flex-1">

            <SortDropdown />

            <VendorGrid />

            <Pagination />

          </div>

        </div>

      </section>

    </main>
  );
}