import {
  authCard,
  footerCopy,
  footerLink,
  pageContainer,
  sectionHeading,
  sectionSubtitle,
  sectionCopy,
} from "@/components/ui/styles";

export default function DashboardPage() {
  return (
    <div className={pageContainer}>
      <main className={authCard}>
        <div className="space-y-6 text-center">
          <p className={sectionSubtitle}>Welcome</p>
          <h1 className={sectionHeading}>Your BudgetMate dashboard</h1>
          <p className={sectionCopy}>
            You’re signed in. Explore spending insights, manage budgets, and stay on top of your finances.
          </p>
        </div>

        <section className="mt-10 grid gap-4 sm:grid-cols-2">
          <article className="rounded-3xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">Summary</h2>
            <p className="mt-3 text-sm text-slate-600">
              View recent activity, budget progress, and your top spending categories.
            </p>
          </article>
          <article className="rounded-3xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">Next steps</h2>
            <p className="mt-3 text-sm text-slate-600">
              Add a new budget, connect accounts, or review your personalized recommendations.
            </p>
          </article>
        </section>

        <p className={footerCopy}>
          Not your account?{' '}
          <a href="/" className={footerLink}>
            Sign in again
          </a>
        </p>
      </main>
    </div>
  );
}
