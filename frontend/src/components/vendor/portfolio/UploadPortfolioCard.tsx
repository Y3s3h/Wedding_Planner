"use client";

import { UploadCloud } from "lucide-react";

export default function UploadPortfolioCard() {
  return (
    <section className="rounded-3xl border-2 border-dashed border-violet-300 bg-violet-50 p-12 text-center">
      <UploadCloud
        size={48}
        className="mx-auto text-violet-700"
      />

      <h2 className="mt-6 text-3xl font-bold text-gray-800">
        Upload New Work
      </h2>

      <p className="mx-auto mt-4 max-w-xl text-gray-500">
        Showcase your latest wedding projects with high-quality photos and
        videos.
      </p>

      <button className="mt-8 rounded-2xl bg-violet-700 px-8 py-4 font-semibold text-white transition hover:bg-violet-800">
        Upload Portfolio
      </button>
    </section>
  );
}