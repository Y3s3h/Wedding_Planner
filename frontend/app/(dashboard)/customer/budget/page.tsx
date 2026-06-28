import BudgetHero from "@/components/budget/BudgetHero";
import BudgetSummary from "@/components/budget/BudgetSummary";
import ExpenseChart from "@/components/budget/ExpenseChart";
import ExpenseCategories from "@/components/budget/ExpenseCategories";
import RecentExpenses from "@/components/budget/RecentExpenses";
import BudgetInsights from "@/components/budget/BudgetInsights";

export default function BudgetPage() {
  return (
    <div className="space-y-8">

      <BudgetHero />

      <BudgetSummary />

      <section className="grid gap-6 xl:grid-cols-3">

        <div className="xl:col-span-2">
          <ExpenseChart />
        </div>

        <ExpenseCategories />

      </section>

      <section className="grid gap-6 xl:grid-cols-3">

        <div className="xl:col-span-2">
          <RecentExpenses />
        </div>

        <BudgetInsights />

      </section>

    </div>
  );
}