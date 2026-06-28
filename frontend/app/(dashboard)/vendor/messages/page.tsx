import MessagesHero from "@/components/vendor/messages/MessagesHero";
import ConversationList from "@/components/vendor/messages/ConversationList";
import ChatWindow from "@/components/vendor/messages/ChatWindow";

export default function VendorMessagesPage() {
  return (
    <div className="space-y-8">

      <MessagesHero />

      <section className="grid gap-6 lg:grid-cols-3">

        <ConversationList />

        <div className="lg:col-span-2">

          <ChatWindow />

        </div>

      </section>

    </div>
  );
}