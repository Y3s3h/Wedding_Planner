"use client";

import ServiceCard from "./ServiceCard";
import { services } from "@/data/services";

export default function ServiceGrid() {
  return (
    <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {services.map((service) => (
        <ServiceCard
          key={service.id}
          title={service.name}
          category={service.category}
          price={`₹${service.price.toLocaleString()}`}
          rating={service.rating}
          image={service.image}
        />
      ))}
    </section>
  );
}