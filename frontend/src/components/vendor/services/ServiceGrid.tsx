// "use client";

// import ServiceCard from "./ServiceCard";

// const services = [
//   {
//     title: "Wedding Photography",
//     category: "Photography",
//     price: "₹45,000",
//     rating: "4.9",
//   },
//   {
//     title: "Luxury Decoration",
//     category: "Decoration",
//     price: "₹80,000",
//     rating: "4.8",
//   },
//   {
//     title: "Premium Catering",
//     category: "Catering",
//     price: "₹1,50,000",
//     rating: "5.0",
//   },
//   {
//     title: "DJ & Entertainment",
//     category: "Music",
//     price: "₹30,000",
//     rating: "4.7",
//   },
// ];

// export default function ServiceGrid() {
//   return (
//     <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

//       {services.map((service) => (

//         <ServiceCard
//           key={service.title}
//           title={service.title}
//           category={service.category}
//           price={service.price}
//           rating={service.rating}
//         />

//       ))}

//     </section>
//   );
// }

"use client";

import ServiceCard from "./ServiceCard";

const services = [
  {
    title: "Wedding Photography",
    category: "Photography",
    price: "₹45,000",
    rating: "4.9",
    image: "/vendors/vendor1.jpg",
  },
  {
    title: "Luxury Decoration",
    category: "Decoration",
    price: "₹80,000",
    rating: "4.8",
    image: "/vendors/vendor2.jpg",
  },
  {
    title: "Premium Catering",
    category: "Catering",
    price: "₹1,50,000",
    rating: "5.0",
    image: "/vendors/vendor3.jpg",
  },
  {
    title: "DJ & Entertainment",
    category: "Music",
    price: "₹30,000",
    rating: "4.7",
   image: "/vendors/vendor3.jpg",
  },
];

export default function ServiceGrid() {
  return (
    <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {services.map((service) => (
        <ServiceCard
          key={service.title}
          title={service.title}
          category={service.category}
          price={service.price}
          rating={service.rating}
          image={service.image}
        />
      ))}
    </section>
  );
}