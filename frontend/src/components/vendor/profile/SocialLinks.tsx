"use client";

export default function SocialLinks() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
      <h2 className="text-2xl font-bold text-gray-800">
        Social Links
      </h2>

      <div className="mt-8 space-y-4">
        <input
          type="text"
          placeholder="Website"
          className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-gray-700 placeholder:text-gray-400 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
        />

        <input
          type="text"
          placeholder="Instagram"
          className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-gray-700 placeholder:text-gray-400 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
        />

        <input
          type="text"
          placeholder="Facebook"
          className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-gray-700 placeholder:text-gray-400 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
        />
      </div>
    </section>
  );
}