import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import { gallery } from "@/components/home/gallery/gallery-data";

interface StoryPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function StoryPage({
  params,
}: StoryPageProps) {
  const { id } = await params;

  const story = gallery.find(
    (item) => item.id === Number(id)
  );

  if (!story) {
    notFound();
  }

  return (
    <main className="bg-white">
      {/* Hero */}

      <section className="relative h-[70vh]">
        <Image
          src={story.image}
          alt={story.title}
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-7xl px-6 pb-16">
            <p className="uppercase tracking-[0.3em] text-rose-300">
              Real Wedding Story
            </p>

            <h1 className="mt-4 text-5xl font-bold text-white">
              {story.title}
            </h1>

            <p className="mt-4 text-xl text-gray-200">
              📍 {story.location}
            </p>
          </div>
        </div>
      </section>

      {/* Story */}

      <section className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="text-4xl font-bold text-gray-900">
          Their Beautiful Journey
        </h2>

        <p className="mt-8 leading-9 text-gray-600">
          Every wedding has a unique story. This celebration brought together
          timeless traditions, elegant décor, unforgettable moments and
          beautiful memories shared with family and friends.
        </p>

        <p className="mt-6 leading-9 text-gray-600">
          From selecting the perfect venue to capturing every emotion, every
          detail was planned with love. Our trusted vendors transformed the
          couple&apos;s dream into reality.
        </p>
      </section>

      {/* Details */}

      <section className="bg-rose-50 py-20">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-3xl bg-white p-8 shadow">
            <h3 className="font-semibold text-gray-900">Venue</h3>

            <p className="mt-3 text-gray-600">
              Royal Palace Resort
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow">
            <h3 className="font-semibold text-gray-900">
              Photographer
            </h3>

            <p className="mt-3 text-gray-600">
              Bliss Photography
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow">
            <h3 className="font-semibold text-gray-900">
              Decor
            </h3>

            <p className="mt-3 text-gray-600">
              Dream Decor Studio
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow">
            <h3 className="font-semibold text-gray-900">
              Budget
            </h3>

            <p className="mt-3 text-gray-600">
              ₹25 Lakhs
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="py-20 text-center">
        <h2 className="text-4xl font-bold text-gray-900">
          Love This Wedding?
        </h2>

        <p className="mt-4 text-gray-600">
          Explore similar vendors and plan your own dream wedding.
        </p>

        <Link
          href="/vendors"
          className="mt-8 inline-flex rounded-full bg-gradient-to-r from-rose-500 to-pink-500 px-8 py-4 font-semibold text-white transition hover:scale-105"
        >
          View Similar Vendors
        </Link>
      </section>
    </main>
  );
}