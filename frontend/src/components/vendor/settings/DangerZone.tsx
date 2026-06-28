"use client";

export default function DangerZone() {
  return (
    <section className="rounded-3xl border border-red-200 bg-red-50 p-8">
      <h2 className="text-2xl font-bold text-red-600">
        Danger Zone
      </h2>

      <p className="mt-4 text-gray-600">
        These actions are permanent and cannot be undone.
      </p>

      <div className="mt-8 flex flex-wrap gap-4">
        <button className="rounded-2xl bg-red-600 px-6 py-3 font-semibold text-white transition hover:bg-red-700">
          Delete Account
        </button>

        <button className="rounded-2xl border border-red-300 px-6 py-3 font-semibold text-red-600 transition hover:bg-red-100">
          Deactivate Business
        </button>
      </div>
    </section>
  );
}