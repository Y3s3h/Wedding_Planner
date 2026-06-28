"use client";

export default function SecuritySettings() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
      <h2 className="text-2xl font-bold text-gray-800">
        Security
      </h2>

      <div className="mt-8 space-y-4">
        <input
          type="password"
          placeholder="Current Password"
          className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-gray-700 placeholder:text-gray-400 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
        />

        <input
          type="password"
          placeholder="New Password"
          className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-gray-700 placeholder:text-gray-400 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
        />

        <button className="rounded-2xl bg-blue-700 px-6 py-3 font-semibold text-white transition hover:bg-blue-800">
          Change Password
        </button>
      </div>
    </section>
  );
}