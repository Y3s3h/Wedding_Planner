export default function Pagination() {
  return (
    <div className="mt-16 flex justify-center gap-3">

      <button className="rounded-xl border px-4 py-2 hover:bg-gray-100 text-gray-700 transition">
        Previous
      </button>

      <button className="rounded-xl bg-rose-500 px-4 py-2 text-gray-50 transition hover:bg-rose-600">
        1
      </button>

      <button className="rounded-xl border px-4 py-2 hover:bg-gray-100 text-gray-700 transition">
        2
      </button>

      <button className="rounded-xl border px-4 py-2 hover:bg-gray-100 text-gray-700 transition">
        3
      </button>

      <button className="rounded-xl border px-4 py-2 hover:bg-gray-100 text-gray-700 transition">
        Next
      </button>

    </div>
  );
}