"use client";

interface Props {
  own?: boolean;
  text: string;
}

export default function MessageBubble({
  own = false,
  text,
}: Props) {
  return (
    <div
      className={`flex ${
        own
          ? "justify-end"
          : "justify-start"
      }`}
    >
      <div
        className={`
          max-w-md
          rounded-3xl
          px-5
          py-3

          ${
            own
              ? "bg-rose-500 text-white"
              : "bg-gray-100 text-gray-800"
          }
        `}
      >
        {text}
      </div>
    </div>
  );
}