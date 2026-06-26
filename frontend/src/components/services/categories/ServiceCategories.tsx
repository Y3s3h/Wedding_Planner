import CategoryCard from "./CategoryCard";
import { serviceCategories } from "./category-data";

export default function ServiceCategories() {
  return (
    <section className="bg-gradient-to-b from-white to-rose-50 py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto max-w-3xl text-center">

          <p className="font-semibold uppercase tracking-[0.35em] text-rose-500">
            OUR SERVICES
          </p>

          <h2 className="mt-5 text-4xl font-bold text-gray-900 md:text-5xl">
            Find Every Wedding Service
            <span className="block text-rose-500">
              Under One Roof
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Explore verified professionals across every category and build your perfect wedding team.
          </p>

        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

          {serviceCategories.map((category) => (
            <CategoryCard
              key={category.id}
              {...category}
            />
          ))}

        </div>

      </div>

    </section>
  );
}