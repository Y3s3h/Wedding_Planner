// "use client";

// import { useState } from "react";
// import { SendHorizonal } from "lucide-react";

// import { useAuthStore } from "@/store/authStore";
// import { useMessageStore } from "@/store/messageStore";

// export default function ChatInput() {
//   const [text, setText] = useState("");

//   const { user } = useAuthStore();

//   const {
//     selectedConversation,
//     sendMessage,
//   } = useMessageStore();

//   const handleSend = () => {
//     if (
//       !user ||
//       !selectedConversation ||
//       !text.trim()
//     ) {
//       return;
//     }

//     sendMessage({
//       id: crypto.randomUUID(),

//       senderId: user._id,

//       senderName: user.name,

//       receiverId: selectedConversation,

//       receiverName: "",

//       message: text,

//      sentAt: new Date().toISOString(),

// status: "sent",
//     });

//     setText("");
//   };

//   return (
//     <div className="flex items-center gap-3 border-t border-slate-200 p-5">

//       <input
//         value={text}
//         onChange={(e) =>
//           setText(e.target.value)
//         }
//         placeholder="Type a message..."
//         className="flex-1 rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-rose-500 text-gray-600"
//       />

//       <button
//         onClick={handleSend}
//         className="rounded-xl bg-rose-500 p-3 text-white transition hover:bg-rose-600"
//       >
//         <SendHorizonal size={20} />
//       </button>

//     </div>
//   );
// }

"use client";

import { useMemo, useState } from "react";
import { SendHorizonal } from "lucide-react";

import { useAuthStore } from "@/store/authStore";
import { useMessageStore } from "@/store/messageStore";

export default function ChatInput() {
  const [text, setText] = useState("");

  const { user } = useAuthStore();

  const {
    selectedConversation,
    messages,
    sendMessage,
  } = useMessageStore();

  const receiverName = useMemo(() => {
    if (!selectedConversation || !user) {
      return "";
    }

    const message = messages.find(
      (msg) =>
        (msg.senderId === selectedConversation &&
          msg.receiverId === user._id) ||
        (msg.receiverId === selectedConversation &&
          msg.senderId === user._id)
    );

    if (!message) {
      return "";
    }

    return message.senderId === user._id
      ? message.receiverName
      : message.senderName;
  }, [messages, selectedConversation, user]);

  const handleSend = () => {
    if (
      !user ||
      !selectedConversation ||
      !text.trim()
    ) {
      return;
    }

    sendMessage({
      id: crypto.randomUUID(),

      senderId: user._id,

      senderName: user.name,

      receiverId: selectedConversation,

      receiverName,

      message: text,

      sentAt: new Date().toISOString(),

      status: "sent",
    });

    setText("");
  };

  return (
    <div className="flex items-center gap-3 border-t border-slate-200 p-5">

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type a message..."
        className="flex-1 rounded-xl border border-slate-300 px-4 py-3 text-gray-700 outline-none focus:border-rose-500"
      />

      <button
        onClick={handleSend}
        className="rounded-xl bg-rose-500 p-3 text-white transition hover:bg-rose-600"
      >
        <SendHorizonal size={20} />
      </button>

    </div>
  );
}