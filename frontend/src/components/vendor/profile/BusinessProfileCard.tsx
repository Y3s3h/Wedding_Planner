"use client";

export default function BusinessProfileCard() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <div className="flex flex-col items-center gap-6 md:flex-row">
        <div className="flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-r from-blue-700 to-indigo-700 text-4xl font-bold text-white">
          W
        </div>

        <div className="flex-1">
          <h2 className="text-3xl font-bold text-gray-800">
            WedPlanner Studio
          </h2>

          <p className="mt-2 text-gray-500">
            Premium Wedding Photography
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
              Verified Vendor
            </span>

            <span className="rounded-full bg-slate-100 px-4 py-2 text-sm text-gray-700">
              Since 2021
            </span>
          </div>
        </div>

        <button className="rounded-2xl bg-blue-700 px-6 py-3 font-semibold text-white transition hover:bg-blue-800">
          Edit Profile
        </button>
      </div>
    </section>
  );
}