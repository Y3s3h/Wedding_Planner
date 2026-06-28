import ConversationList from "@/components/messages/ConversationList";
import ChatHeader from "@/components/messages/ChatHeader";
import ChatMessages from "@/components/messages/ChatMessages";
import ChatInput from "@/components/messages/ChatInput";

export default function MessagesPage() {
  return (
    <div className="grid h-[calc(100vh-180px)] gap-6 xl:grid-cols-[380px_1fr]">

      <ConversationList />

      <div className="flex flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">

        <ChatHeader />

        <ChatMessages />

        <ChatInput />

      </div>

    </div>
  );
}