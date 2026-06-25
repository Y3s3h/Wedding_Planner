const filters = [
  "All",
  "Venue",
  "Photographer",
  "Makeup",
  "Decorator",
  "Planner",
];

export default function VendorFilters() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4">

      {filters.map((item, index) => (

        <button
          key={item}
          className={`rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300
          ${
            index === 0
              ? "bg-rose-500 text-white shadow-lg"
              : "bg-white text-gray-700 hover:bg-rose-500 hover:text-white"
          }`}
        >
          {item}
        </button>

      ))}

    </div>
  );
}