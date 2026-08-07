"use client";

import { useGoogleSignIn } from "@/hooks/useGoogleSignIn";
import { altButton } from "@/components/ui/styles";

export default function LoginForm() {
  const { error, loading, signInWithGoogle } = useGoogleSignIn();

  return (
    <div className="space-y-5">
      <div className="relative my-8">
        <div className="absolute inset-x-0 top-1/2 h-px bg-slate-200" />
        <p className="relative mx-auto w-fit bg-white px-3 text-sm text-slate-500">
          Sign in with Google
        </p>
      </div>

      <button
        type="button"
        className={altButton}
        onClick={signInWithGoogle}
        disabled={loading}
      >
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M22.5 12.21c0-.72-.06-1.41-.18-2.08H12v3.94h5.92c-.26 1.42-1.08 2.63-2.3 3.44v2.88h3.72c2.18-2.01 3.44-4.96 3.44-8.18Z" fill="#4285F4" />
          <path d="M12 23c2.97 0 5.47-.98 7.29-2.66l-3.72-2.88c-1.04.7-2.36 1.12-3.57 1.12-2.74 0-5.06-1.85-5.89-4.35H2.86v2.73C4.66 20.99 8.06 23 12 23Z" fill="#34A853" />
          <path d="M6.11 14.16c-.24-.72-.38-1.49-.38-2.28 0-.79.13-1.56.36-2.28V6.87H2.86A9.97 9.97 0 0 0 2 11.88c0 1.68.4 3.28 1.09 4.69l3.02-2.41Z" fill="#FBBC05" />
          <path d="M12 4.5c1.62 0 3.08.56 4.23 1.66l3.16-3.16C17.47 1.16 14.97 0 12 0 8.06 0 4.66 2.01 2.86 5.87l3.25 2.73C6.94 6.35 9.26 4.5 12 4.5Z" fill="#EA4335" />
        </svg>
        {loading ? "Signing in..." : "Continue with Gmail"}
      </button>

      {error ? <p className="text-sm text-red-600">{error}</p> : null}
    </div>
  );
}
