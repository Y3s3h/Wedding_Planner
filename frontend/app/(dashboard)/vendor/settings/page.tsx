import SettingsHero from "@/components/vendor/settings/SettingsHero";
import AccountSettings from "@/components/vendor/settings/AccountSettings";
import NotificationSettings from "@/components/vendor/settings/NotificationSettings";
import SecuritySettings from "@/components/vendor/settings/SecuritySettings";
import BusinessSettings from "@/components/vendor/settings/BusinessSettings";
import DangerZone from "@/components/vendor/settings/DangerZone";

export default function VendorSettingsPage() {
  return (
    <div className="space-y-8">

      <SettingsHero />

      <section className="grid gap-6 xl:grid-cols-2">

        <AccountSettings />

        <NotificationSettings />

      </section>

      <section className="grid gap-6 xl:grid-cols-2">

        <SecuritySettings />

        <BusinessSettings />

      </section>

      <DangerZone />

    </div>
  );
}