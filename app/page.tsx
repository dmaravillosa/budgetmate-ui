import LoginForm from "@/components/auth/LoginForm";
import {
  authCard,
  brandBadge,
  footerCopy,
  footerLink,
  pageContainer,
  sectionCopy,
  sectionHeading,
  sectionSubtitle,
  sectionTextCenter,
} from "@/components/ui/styles";

export default function LoginPage() {
  return (
    <div className={pageContainer}>
      <main className={authCard}>
        <div className={sectionTextCenter}>
          <div className={brandBadge}>
            <span className="text-2xl font-semibold">BM</span>
          </div>
          <div>
            <p className={sectionSubtitle}>Welcome back</p>
            <h1 className={sectionHeading}>Sign in to BudgetMate</h1>
            <p className={sectionCopy}>
              Securely access your budget dashboard and spend insights.
            </p>
          </div>
        </div>

        <LoginForm />
      </main>
    </div>
  );
}
