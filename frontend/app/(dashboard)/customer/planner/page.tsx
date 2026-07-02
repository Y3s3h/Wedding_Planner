import PlannerHero from "@/components/planner/PlannerHero";
import ProgressOverview from "@/components/planner/ProgressOverview";
import Checklist from "@/components/planner/Checklist";
import Timeline from "@/components/planner/Timeline";
import BudgetCard from "@/components/planner/BudgetCard";
import GuestCard from "@/components/planner/GuestCard";
import VendorStatus from "@/components/planner/VendorStatus";
import UpcomingTasks from "@/components/planner/UpcomingTasks";

export default function PlannerPage() {
  return (
    <div className="space-y-8">

      <PlannerHero />

      <ProgressOverview
  totalTasks={24}
  completedTasks={8}
  pendingTasks={16}
/>

      <section className="grid gap-6 xl:grid-cols-2">
        <Checklist
  tasks={[
    {
      id: "1",
      title: "Book Wedding Venue",
      completed: true,
    },
    {
      id: "2",
      title: "Hire Photographer",
      completed: true,
    },
    {
      id: "3",
      title: "Book Decorator",
      completed: false,
    },
    {
      id: "4",
      title: "Finalize Catering",
      completed: false,
    },
    {
      id: "5",
      title: "Book Makeup Artist",
      completed: false,
    },
    {
      id: "6",
      title: "Send Wedding Invitations",
      completed: false,
    },
  ]}
/>
        <Timeline />
      </section>

      <section className="grid gap-6 lg:grid-cols-3">
        <BudgetCard />


        <GuestCard
  totalGuests={324}
  confirmedGuests={210}
  pendingGuests={74}
  declinedGuests={40}
/>
        <VendorStatus />
      </section>

      <UpcomingTasks
  tasks={[
    {
      id: "1",
      title: "Book Decorator",
      dueDate: "2026-08-20",
    },
    {
      id: "2",
      title: "Finalize Catering",
      dueDate: "2026-08-25",
    },
    {
      id: "3",
      title: "Book Makeup Artist",
      dueDate: "2026-09-01",
    },
  ]}
/>

    </div>
  );
}