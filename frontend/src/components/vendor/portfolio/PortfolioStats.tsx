// "use client";

// import {
//   Images,
//   Eye,
//   Heart,
//   Star,
// } from "lucide-react";

// const stats = [
//   {
//     title: "Photos",
//     value: "248",
//     icon: Images,
//   },
//   {
//     title: "Views",
//     value: "12.4K",
//     icon: Eye,
//   },
//   {
//     title: "Likes",
//     value: "4.8K",
//     icon: Heart,
//   },
//   {
//     title: "Featured",
//     value: "18",
//     icon: Star,
//   },
// ];

// export default function PortfolioStats() {
//   return (
//     <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

//       {stats.map((item) => {

//         const Icon = item.icon;

//         return (

//           <div
//             key={item.title}
//             className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
//           >

//             <div className="w-fit rounded-2xl bg-violet-100 p-3">

//               <Icon
//                 size={22}
//                 className="text-violet-700"
//               />

//             </div>

//             <p className="mt-5 text-sm text-slate-500">
//               {item.title}
//             </p>

//             <h3 className="mt-2 text-4xl font-bold">
//               {item.value}
//             </h3>

//           </div>

//         );

//       })}

//     </section>
//   );
// }

"use client";

import {
  Images,
  Eye,
  Heart,
  Star,
} from "lucide-react";

const stats = [
  {
    title: "Photos",
    value: "248",
    icon: Images,
  },
  {
    title: "Views",
    value: "12.4K",
    icon: Eye,
  },
  {
    title: "Likes",
    value: "4.8K",
    icon: Heart,
  },
  {
    title: "Featured",
    value: "18",
    icon: Star,
  },
];

export default function PortfolioStats() {
  return (
    <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
          >
            <div className="w-fit rounded-2xl bg-violet-100 p-3">
              <Icon
                size={22}
                className="text-violet-700"
              />
            </div>

            <p className="mt-5 text-sm font-medium text-gray-500">
              {item.title}
            </p>

            <h3 className="mt-2 text-4xl font-bold text-gray-800">
              {item.value}
            </h3>
          </div>
        );
      })}
    </section>
  );
}