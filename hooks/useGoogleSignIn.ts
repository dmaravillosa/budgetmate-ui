"use client";

import { useCallback, useState } from "react";
import { getGoogleSignInUrl } from "@/lib/api/auth";

export function useGoogleSignIn() {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const signInWithGoogle = useCallback(() => {
    setError(null);
    setLoading(true);

    try {
      const url = getGoogleSignInUrl();
      if (!url) {
        throw new Error("Google sign-in URL is unavailable.");
      }
      window.location.href = url;
    } catch (err) {
      setError((err as Error).message || "Something went wrong.");
      setLoading(false);
    }
  }, []);

  return {
    error,
    loading,
    signInWithGoogle,
  };
}
