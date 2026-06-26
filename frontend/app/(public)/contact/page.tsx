import ContactHero from "@/components/contact/hero/ContactHero";
import ContactForm from "@/components/contact/form/ContactForm";

import ContactFAQ from "@/components/contact/faq/ContactFAQ";
import ContactCTA from "@/components/contact/cta/ContactCTA";

export default function ContactPage() {
  return (
    <main className="bg-white">

      <ContactHero />

      <ContactForm />

      

      <ContactFAQ />

      <ContactCTA />

    </main>
  );
}