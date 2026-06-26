

// import { LucideIcon } from "lucide-react";

// interface StatCardProps {
//   value: string;
//   title: string;
//   subtitle: string;
//   icon: LucideIcon;
// }

// export default function StatCard({
//   value,
//   title,
//   subtitle,
//   icon: Icon,
// }: StatCardProps) {
//   return (
//     <div
//       className="
//       group
//       relative
//       mt-12
//       overflow-visible
//       rounded-[34px]
//       border
//       border-rose-200/70
//       bg-white/90
//       p-8
//       pt-20
//       backdrop-blur-xl
//       shadow-[0_20px_70px_rgba(236,72,153,.08)]
//       transition-all
//       duration-500
//       hover:-translate-y-4
//       hover:shadow-[0_35px_90px_rgba(236,72,153,.18)]
//       "
//     >
//       {/* Floating Icon */}

//       <div
//         className="
//         absolute
//         -top-12
//         left-1/2
//         flex
//         h-24
//         w-24
//         -translate-x-1/2
//         items-center
//         justify-center
//         rounded-full
//         border
//         border-rose-200
//         bg-gradient-to-br
//         from-rose-50
//         to-white
//         shadow-xl
//         transition-all
//         duration-500
//         group-hover:scale-110
//         "
//       >
//         <div
//           className="
//           flex
//           h-16
//           w-16
//           items-center
//           justify-center
//           rounded-full
//           bg-gradient-to-r
//           from-rose-500
//           to-pink-500
//           text-white
//           shadow-lg
//           "
//         >
//           <Icon size={30} />
//         </div>
//       </div>

//       {/* Value */}

//       <h2 className="text-center text-6xl font-black tracking-tight text-rose-500">
//         {value}
//       </h2>

//       <h3 className="mt-5 text-center text-2xl font-bold text-gray-900">
//         {title}
//       </h3>

//       <p className="mt-4 text-center leading-7 text-gray-600">
//         {subtitle}
//       </p>

//       {/* Glow */}

//       <div
//         className="
//         absolute
//         bottom-0
//         left-1/2
//         h-28
//         w-28
//         -translate-x-1/2
//         rounded-full
//         bg-rose-300/20
//         blur-3xl
//         opacity-0
//         transition
//         duration-500
//         group-hover:opacity-100
//         "
//       />
//     </div>
//   );
// }



import { LucideIcon } from "lucide-react";

interface StatCardProps {
  value: string;
  title: string;
  subtitle: string;
  icon: LucideIcon;
}

export default function StatCard({
  value,
  title,
  subtitle,
  icon: Icon,
}: StatCardProps) {
  return (
    <div
      className="
      group
      relative
      mt-10
      rounded-[28px]
      border
      border-rose-200/60
      bg-white/95
      px-6
      pt-16
      pb-8
      text-center
      shadow-[0_15px_40px_rgba(236,72,153,.08)]
      transition-all
      duration-500
      hover:-translate-y-2
      hover:shadow-[0_25px_60px_rgba(236,72,153,.16)]
      "
    >
      <div
        className="
        absolute
        -top-10
        left-1/2
        flex
        h-20
        w-20
        -translate-x-1/2
        items-center
        justify-center
        rounded-full
        border-2
        border-rose-100
        bg-gradient-to-b
        from-white
        to-rose-50
        shadow-xl
        transition-all
        duration-500
        group-hover:scale-110
        "
      >
        <div
          className="
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-full
          bg-gradient-to-r
          from-rose-500
          to-pink-500
          text-white
          "
        >
          <Icon size={26} strokeWidth={2.2} />
        </div>
      </div>

      <h2 className="text-5xl font-black text-rose-500">
        {value}
      </h2>

      <h3 className="mt-3 text-xl font-bold text-gray-900">
        {title}
      </h3>

      <p className="mx-auto mt-3 max-w-[220px] text-sm leading-6 text-gray-500">
        {subtitle}
      </p>

      <div className="absolute bottom-0 left-1/2 h-20 w-20 -translate-x-1/2 rounded-full bg-rose-200/20 blur-3xl opacity-0 transition group-hover:opacity-100" />
    </div>
  );
}