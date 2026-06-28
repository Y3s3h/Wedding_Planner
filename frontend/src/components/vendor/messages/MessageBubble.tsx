"use client";

interface Props {
  message: string;
  own?: boolean;
}

export default function MessageBubble({
  message,
  own,
}: Props) {
  return (
    <div
      className={`flex ${
        own ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`max-w-sm rounded-2xl px-4 py-3 ${
          own
            ? "bg-blue-700 text-white"
            : "bg-slate-100 text-slate-800"
        }`}
      >
        {message}
      </div>
    </div>
  );
}