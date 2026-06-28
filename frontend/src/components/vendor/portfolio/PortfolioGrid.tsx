"use client";

import PortfolioCard from "./PortfolioCard";

const galleries = [
  {
    title: "Royal Wedding",
    image: "/vendors/vendor1.jpg",
  },
  {
    title: "Beach Wedding",
    image: "/vendors/vendor2.jpg",
  },
  {
    title: "Traditional Ceremony",
    image: "/vendors/vendor3.jpg",
  },
  {
    title: "Engagement Shoot",
    image: "/vendors/vendor1.jpg",
  },
  {
    title: "Luxury Reception",
    image: "/vendors/vendor2.jpg",
  },
  {
    title: "Pre Wedding Shoot",
    image: "/vendors/vendor3.jpg",
  },
];

export default function PortfolioGrid() {
  return (
    <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {galleries.map((gallery) => (
        <PortfolioCard
          key={gallery.title}
          title={gallery.title}
          image={gallery.image}
        />
      ))}
    </section>
  );
}