"use client";

import MessageBubble from "./MessageBubble";

export default function ChatMessages() {
  return (
    <div className="flex-1 space-y-5 overflow-y-auto p-6">

      <MessageBubble
        text="Hello! Thank you for booking with us."
      />

      <MessageBubble
        own
        text="Looking forward to our meeting."
      />

      <MessageBubble
        text="Sure! We'll discuss all decoration ideas."
      />

      <MessageBubble
        own
        text="Sounds great!"
      />

    </div>
  );
}