// "use client";

// interface Props {
//   name: string;
//   lastMessage: string;
//   time: string;
// }

// export default function ConversationCard({
//   name,
//   lastMessage,
//   time,
// }: Props) {
//   return (
//     <div className="cursor-pointer rounded-2xl border border-slate-200 p-4 transition hover:bg-slate-50">

//       <div className="flex items-center justify-between">

//         <h3 className="font-semibold">
//           {name}
//         </h3>

//         <span className="text-xs text-slate-500">
//           {time}
//         </span>

//       </div>

//       <p className="mt-2 text-sm text-slate-500">
//         {lastMessage}
//       </p>

//     </div>
//   );
// }

"use client";

interface Props {
  name: string;
  lastMessage: string;
  time: string;
}

export default function ConversationCard({
  name,
  lastMessage,
  time,
}: Props) {
  return (
    <div className="cursor-pointer rounded-2xl border border-slate-200 p-4 transition hover:bg-slate-50">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-gray-800">
          {name}
        </h3>

        <span className="text-xs text-gray-500">
          {time}
        </span>
      </div>

      <p className="mt-2 text-sm text-gray-500">
        {lastMessage}
      </p>
    </div>
  );
}