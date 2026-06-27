// import GalleryCard from "./GalleryCard";
// import { gallery } from "./gallery-data";

// export default function GallerySection() {
//   return (
//     <section className="relative overflow-hidden bg-white py-24">
//       {/* Background Glow */}
//       <div className="absolute inset-0">
//         <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-rose-100 blur-[120px]" />
//         <div className="absolute right-0 bottom-10 h-72 w-72 rounded-full bg-pink-100 blur-[120px]" />
//       </div>

//       <div className="relative mx-auto max-w-7xl px-6">
//         {/* Heading */}

//         <div className="mb-16 text-center">
//           <p className="font-semibold uppercase tracking-[0.4em] text-rose-500">
//             WEDDING INSPIRATION
//           </p>

//           <h2 className="mt-6 text-4xl font-bold text-gray-900 lg:text-6xl">
//             Real Wedding
//             <span className="text-rose-500"> Stories</span>
//           </h2>

//           <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
//             Discover breathtaking weddings, beautiful venues and unforgettable
//             celebrations from couples across India.
//           </p>
//         </div>

//         {/* Gallery */}

//         <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
//           {gallery.map((item, index) => (
//             <div
//               key={item.id}
//               className={`
//                 overflow-hidden
//                 rounded-[32px]
//                 ${
//                   index === 1 || index === 4
//                     ? "lg:mt-16"
//                     : ""
//                 }
//               `}
//             >
//               <div
//                 className={`
//                   ${
//                     index % 3 === 0
//                       ? "h-[500px]"
//                       : index % 3 === 1
//                       ? "h-[360px]"
//                       : "h-[430px]"
//                   }
//                 `}
//               >
//                 <GalleryCard
//   id={item.id}
//   image={item.image}
//   title={item.title}
//   location={item.location}
// />
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Button */}

//         <div className="mt-16 text-center">
//           <button
//             className="
//               rounded-full
//               bg-gradient-to-r
//               from-rose-500
//               to-pink-500
//               px-10
//               py-4
//               text-lg
//               font-semibold
//               text-white
//               shadow-lg
//               transition-all
//               duration-300
//               hover:scale-105
//               hover:shadow-xl
//             "
//           >
//             View More Stories
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }

import GalleryCard from "./GalleryCard";
import { gallery } from "./gallery-data";
import Link from "next/link";

export default function GallerySection() {
  return (
    <section className="relative overflow-hidden bg-white py-24">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-rose-100 blur-[120px]" />
        <div className="absolute right-0 bottom-10 h-72 w-72 rounded-full bg-pink-100 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-16 text-center">
          <p className="font-semibold uppercase tracking-[0.4em] text-rose-500">
            WEDDING INSPIRATION
          </p>

          <h2 className="mt-6 text-4xl font-bold text-gray-900 lg:text-6xl">
            Real Wedding
            <span className="text-rose-500"> Stories</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            Discover breathtaking weddings, beautiful venues and unforgettable
            celebrations from couples across India.
          </p>
        </div>

        {/* Masonry Gallery */}
        <div className="columns-1 gap-6 sm:columns-2 lg:columns-3">
          {gallery.map((item) => (
            <div
              key={item.id}
              className="mb-6 break-inside-avoid"
            >
              <GalleryCard
                id={item.id}
                image={item.image}
                title={item.title}
                location={item.location}
              />
            </div>
          ))}
        </div>

        {/* Button */}
        {/* <div className="mt-16 text-center">
          <Link
  href="/stories"
  className="
    inline-flex
    rounded-full
    bg-gradient-to-r
    from-rose-500
    to-pink-500
    px-10
    py-4
    text-lg
    font-semibold
    text-white
    shadow-lg
    transition-all
    duration-300
    hover:scale-105
    hover:shadow-xl
  "
>
  View More Stories
</Link>
        </div> */}
      </div>
    </section>
  );
}