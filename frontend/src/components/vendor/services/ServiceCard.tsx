// "use client";

// import {
//   Pencil,
//   Trash2,
//   IndianRupee,
//   Star,
// } from "lucide-react";

// interface Props {
//   title: string;
//   category: string;
//   price: string;
//   rating: string;
// }

// export default function ServiceCard({
//   title,
//   category,
//   price,
//   rating,
// }: Props) {
//   return (
//     <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

//       {/* Image */}

//       <div className="h-48 rounded-2xl bg-gradient-to-br from-blue-100 to-slate-200" />

//       <div className="mt-5">

//         <div className="flex items-center justify-between">

//           <h3 className="text-xl font-bold text-slate-900">
//             {title}
//           </h3>

//           <div className="flex items-center gap-1 text-yellow-500">

//             <Star
//               size={16}
//               fill="currentColor"
//             />

//             <span className="text-sm font-semibold">
//               {rating}
//             </span>

//           </div>

//         </div>

//         <p className="mt-2 text-slate-500">
//           {category}
//         </p>

//         <div className="mt-6 flex items-center gap-2 font-bold text-blue-700">

//           <IndianRupee size={18} />

//           {price}

//         </div>

//       </div>

//       <div className="mt-6 flex gap-3">

//         <button className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700">

//           <Pencil size={18} />

//           Edit

//         </button>

//         <button className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50 text-red-600 transition hover:bg-red-100">

//           <Trash2 size={18} />

//         </button>

//       </div>

//     </div>
//   );
// }

"use client";

import Image from "next/image";
import {
  Pencil,
  Trash2,
  IndianRupee,
  Star,
} from "lucide-react";

interface Props {
  title: string;
  category: string;
  price: string;
  rating: number;
  image: string;
}

export default function ServiceCard({
  title,
  category,
  price,
  rating,
  image,
}: Props) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

      {/* Image */}
      <div className="relative h-48 overflow-hidden rounded-2xl">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition duration-300 hover:scale-105"
        />
      </div>

      <div className="mt-5">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-slate-900">
            {title}
          </h3>

          <div className="flex items-center gap-1 text-yellow-500">
            <Star size={16} fill="currentColor" />
            <span className="text-sm font-semibold">
              {rating}
            </span>
          </div>
        </div>

        <p className="mt-2 text-slate-500">
          {category}
        </p>

        <div className="mt-6 flex items-center gap-2 font-bold text-blue-700">
          <IndianRupee size={18} />
          {price}
        </div>
      </div>

      <div className="mt-6 flex gap-3">
        <button className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700">
          <Pencil size={18} />
          Edit
        </button>

        <button className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50 text-red-600 transition hover:bg-red-100">
          <Trash2 size={18} />
        </button>
      </div>
    </div>
  );
}