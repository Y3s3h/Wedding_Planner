import ProfileHero from "@/components/profile/ProfileHero";
import ProfileOverview from "@/components/profile/ProfileOverview";
import PersonalInformation from "@/components/profile/PersonalInformation";
import PartnerInformation from "@/components/profile/PartnerInformation";
import WeddingInformation from "@/components/profile/WeddingInformation";
import ContactInformation from "@/components/profile/ContactInformation";

export default function ProfilePage() {
  return (
    <div className="space-y-8">

      <ProfileHero />

      <ProfileOverview />

      <section className="grid gap-6 xl:grid-cols-2">

        <PersonalInformation />

        <PartnerInformation />

      </section>

      <section className="grid gap-6 xl:grid-cols-2">

        <WeddingInformation />

        <ContactInformation />

      </section>

    </div>
  );
}