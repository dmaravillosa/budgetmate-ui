export type AuthUser = {
  email: string;
  name: string;
};

export type AuthResponse = {
  success: boolean;
  user?: AuthUser;
  error?: string;
};

export function getGoogleSignInUrl() {
  return "/auth/google";
}
